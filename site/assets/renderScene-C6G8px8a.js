var X0=Object.defineProperty;var q0=(i,e,t)=>e in i?X0(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Qe=(i,e,t)=>q0(i,typeof e!="symbol"?e+"":e,t);import{aO as qi,aP as Ch,aQ as Jt,aR as xi,aS as br,aT as ji,aU as Tr,aV as _r,aW as Ph,aX as K0,aY as Y0,aZ as un,a_ as $0,a$ as nc,b0 as ti,b1 as ic,b2 as sc,b3 as J0,b4 as j0,b5 as zr,b6 as Fu,b7 as Uu,b8 as os,b9 as Ou,ba as Bu,bb as Z0,bc as Q0,bd as eb,be as Lh,bf as tb,bg as nb,bh as gm,bi as ku,bj as zu,bk as ib,bl as sb,bm,bn as rb,bo as ab,bp as ob,bq as _m,br as cb,bs as lb,bt as hb,bu as jt,bv as ub,bw as fb,bx as db,by as xm,bz as pb,bA as mb,bB as vm,bC as Mm,bD as gb,bE as bb,bF as Sm,bG as _b,bH as xb,bI as vb,bJ as cs,bK as js,bL as la,bM as ha,bN as ym,bO as Em,bP as Ih,bQ as Mb,bR as Sb,bS as yb,bT as Eb,bU as wb,bV as wm,bW as Tb,bX as Ab,bY as Rb,bZ as Gu,b_ as Cb,b$ as ls,c0 as rc,c1 as ac,c2 as oc,c3 as Hu,c4 as pl,c5 as Vu,c6 as Pb,c7 as Lb,c8 as Ib,c9 as ua,ca as vo,cb as Gr,cc as Wu,cd as Db,ce as Nb,cf as ml,cg as Xu,ch as cc,ci as gl,cj as Tm,ck as qu,cl as Fb,cm as fa,cn as lc,co as Ub,cp as Ku,cq as bl,cr as Ji,cs as _l,ct as Ob,cu as Yu,cv as Bb,cw as $u,cx as Ju,cy as ju,cz as Zu,cA as Qu,cB as kb,cC as zb,cD as Gb,cE as Zs,cF as ef,cG as tf,cH as Hb,cI as Vb,cJ as Qs,cK as Wb,cL as nf,cM as Xb,cN as sf,cO as xl,cP as Mo,cQ as vl,cR as qb,cS as Kb,cT as Yb,cU as $b,cV as rf,cW as Jb,cX as jb,cY as Zb,cZ as Qb,c_ as Ki,c$ as e_,d0 as t_,d1 as n_,d2 as hc,d3 as i_,d4 as s_,d5 as uc,d6 as r_,aB as a_,d7 as o_,d8 as c_,d9 as l_,da as h_,db as u_,dc as f_,dd as d_,de as af,df as p_,dg as Ml,dh as m_,di as g_,dj as b_,dk as Am,dl as Rm,dm as __,dn as x_,dp as v_,dq as M_,dr as Sl,ah as S_,al as y_,ag as E_,ds as w_,ai as T_,aj as A_,ak as R_,am as C_,dt as P_,du as L_,dv as I_,as as fc,ar as D_}from"./index-D3LN4Pu2.js";import{v as Wo,t as N_,f as F_,h as U_,u as So,g as Ar,s as Cm,w as Pm,x as Lm,y as Im,z as Dm,A as O_}from"./settings-DkG9j6Cu.js";import{probeGpu as B_,applyFirstGuess as of,probeAdapter as k_,createQualityGovernor as z_}from"./auto-BMQ70l8e.js";import{f as yo,c as G_,h as H_,a as V_}from"./tilt-BRUldKGS.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="186",W_=0,cf=1,X_=2,ao=1,q_=2,Us=3,vi=0,Xt=1,nn=2,bi=0,Rr=1,lf=2,hf=3,uf=4,K_=5,Is=100,Y_=101,$_=102,J_=103,j_=104,Z_=200,Q_=201,ex=202,tx=203,Nm=204,Fm=205,nx=206,ix=207,sx=208,rx=209,ax=210,ox=211,cx=212,lx=213,hx=214,yl=0,El=1,wl=2,Hr=3,Tl=4,Al=5,Rl=6,Cl=7,Nh=0,ux=1,fx=2,$n=0,Um=1,Om=2,Bm=3,Fh=4,km=5,zm=6,Gm=7,ff="attached",dx="detached",Hm=300,Zi=301,Vs=302,Cr=303,dc=304,Xo=306,Sn=1e3,bn=1001,Eo=1002,Bt=1003,Vm=1004,xr=1005,Lt=1006,oo=1007,hn=1008,ln=1009,Wm=1010,Xm=1011,Vr=1012,Uh=1013,Jn=1014,sn=1015,rn=1016,Oh=1017,Bh=1018,Wr=1020,qm=35902,Km=35899,Ym=1021,$m=1022,_n=1023,Mi=1026,Yi=1027,kh=1028,zh=1029,Qi=1030,Gh=1031,Hh=1033,co=33776,lo=33777,ho=33778,uo=33779,Pl=35840,Ll=35841,Il=35842,Dl=35843,Nl=36196,Fl=37492,Ul=37496,Ol=37488,Bl=37489,wo=37490,kl=37491,zl=37808,Gl=37809,Hl=37810,Vl=37811,Wl=37812,Xl=37813,ql=37814,Kl=37815,Yl=37816,$l=37817,Jl=37818,jl=37819,Zl=37820,Ql=37821,eh=36492,th=36494,nh=36495,ih=36283,sh=36284,To=36285,rh=36286,Xr=2300,qr=2301,pc=2302,df=2303,pf=2400,mf=2401,gf=2402,px=2500,mx=0,Jm=1,ah=2,gx=3200,Ao=0,bx=1,ui="",Mt="srgb",tn="srgb-linear",Ro="linear",bt="srgb",mc=7680,_x=519,xx=512,vx=513,Mx=514,Vh=515,Sx=516,yx=517,Wh=518,Ex=519,jm=35044,gc=35048,bf="300 es",qn=2e3,Kr=2001;function wx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Tx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ax(){const i=Yr("canvas");return i.style.display="block",i}const _f={};function Co(...i){const e="THREE."+i.shift();console.log(e,...i)}function Zm(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=Zm(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Zm(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Bs(...i){const e=i.join(" ");e in _f||(_f[e]=!0,ze(...i))}function Rx(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Cx={[yl]:El,[wl]:Rl,[Tl]:Cl,[Hr]:Al,[El]:yl,[Rl]:wl,[Cl]:Tl,[Al]:Hr};class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xf=1234567;const Pr=Math.PI/180,Ws=180/Math.PI;function xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Xh(i,e){return(i%e+e)%e}function Px(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Lx(i,e,t){return i!==e?(t-i)/(e-i):0}function Lr(i,e,t){return(1-t)*i+t*e}function Ix(i,e,t,n){return Lr(i,e,1-Math.exp(-t*n))}function Dx(i,e=1){return e-Math.abs(Xh(i,e*2)-e)}function Nx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ux(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ox(i,e){return i+Math.random()*(e-i)}function Bx(i){return i*(.5-Math.random())}function kx(i){i!==void 0&&(xf=i);let e=xf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zx(i){return i*Pr}function Gx(i){return i*Ws}function Hx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Vx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xx(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*h,o*l);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const qx={DEG2RAD:Pr,RAD2DEG:Ws,generateUUID:xn,clamp:st,euclideanModulo:Xh,mapLinear:Px,inverseLerp:Lx,lerp:Lr,damp:Ix,pingpong:Dx,smoothstep:Nx,smootherstep:Fx,randInt:Ux,randFloat:Ox,randFloatSpread:Bx,seededRandom:kx,degToRad:zx,radToDeg:Gx,isPowerOfTwo:Hx,ceilPowerOfTwo:Vx,floorPowerOfTwo:Wx,setQuaternionFromProperEuler:Xx,normalize:_t,denormalize:Cn},vu=class vu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vu.prototype.isVector2=!0;let ue=vu;class an{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(u!==_||c!==f||l!==d||h!==g){let p=c*f+l*d+h*g+u*_;p<0&&(f=-f,d=-d,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const x=Math.acos(p),E=Math.sin(x);m=Math.sin(m*x)/E,o=Math.sin(o*x)/E,c=c*m+f*o,l=l*m+d*o,h=h*m+g*o,u=u*m+_*o}else{c=c*m+f*o,l=l*m+d*o,h=h*m+g*o,u=u*m+_*o;const x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Mu=class Mu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mu.prototype.isVector3=!0;let N=Mu;const bc=new N,vf=new an,Su=class Su{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],p=s[3],m=s[6],x=s[1],E=s[4],v=s[7],S=s[2],y=s[5],R=s[8];return r[0]=a*_+o*x+c*S,r[3]=a*p+o*E+c*y,r[6]=a*m+o*v+c*R,r[1]=l*_+h*x+u*S,r[4]=l*p+h*E+u*y,r[7]=l*m+h*v+u*R,r[2]=f*_+d*x+g*S,r[5]=f*p+d*E+g*y,r[8]=f*m+d*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_c.makeScale(e,t)),this}rotate(e){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_c.makeRotation(-e)),this}translate(e,t){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Su.prototype.isMatrix3=!0;let et=Su;const _c=new et,Mf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sf=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kx(){const i={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===bt&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?Ro:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tn]:{primaries:e,whitePoint:n,transfer:Ro,toXYZ:Mf,fromXYZ:Sf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Mf,fromXYZ:Sf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}const lt=Kx();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hs;class Yx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=Yr("canvas")),hs.width=e.width,hs.height=e.height;const s=hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $x=0;class qh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xc(s[a].image)):r.push(xc(s[a]))}else r=xc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function xc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let Jx=0;const vc=new N;class zt extends ns{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=bn,s=bn,r=Lt,a=hn,o=_n,c=ln,l=zt.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=xn(),this.name="",this.source=new qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Hm;zt.DEFAULT_ANISOTROPY=1;const yu=class yu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,v=(d+1)/2,S=(m+1)/2,y=(h+f)/4,R=(u+_)/4,b=(g+p)/4;return E>v&&E>S?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=y/n,r=R/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=y/s,r=b/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=b/r),this.set(n,s,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yu.prototype.isVector4=!0;let St=yu;class jx extends ns{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new zt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new qh(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends jx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qm extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zx extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Vo=class Vo{constructor(e,t,n,s,r,a,o,c,l,h,u,f,d,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,f,d,g,_,p)}set(e,t,n,s,r,a,o,c,l,h,u,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vo().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/us.setFromMatrixColumn(e,0).length(),r=1/us.setFromMatrixColumn(e,1).length(),a=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qx,e,ev)}lookAt(e,t,n){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),Ai.crossVectors(n,on),Ai.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ai.crossVectors(n,on)),Ai.normalize(),da.crossVectors(on,Ai),s[0]=Ai.x,s[4]=da.x,s[8]=on.x,s[1]=Ai.y,s[5]=da.y,s[9]=on.y,s[2]=Ai.z,s[6]=da.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],E=n[7],v=n[11],S=n[15],y=s[0],R=s[4],b=s[8],w=s[12],A=s[1],C=s[5],U=s[9],I=s[13],P=s[2],F=s[6],G=s[10],z=s[14],X=s[3],O=s[7],B=s[11],k=s[15];return r[0]=a*y+o*A+c*P+l*X,r[4]=a*R+o*C+c*F+l*O,r[8]=a*b+o*U+c*G+l*B,r[12]=a*w+o*I+c*z+l*k,r[1]=h*y+u*A+f*P+d*X,r[5]=h*R+u*C+f*F+d*O,r[9]=h*b+u*U+f*G+d*B,r[13]=h*w+u*I+f*z+d*k,r[2]=g*y+_*A+p*P+m*X,r[6]=g*R+_*C+p*F+m*O,r[10]=g*b+_*U+p*G+m*B,r[14]=g*w+_*I+p*z+m*k,r[3]=x*y+E*A+v*P+S*X,r[7]=x*R+E*C+v*F+S*O,r[11]=x*b+E*U+v*G+S*B,r[15]=x*w+E*I+v*z+S*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15],x=c*d-l*f,E=o*d-l*u,v=o*f-c*u,S=a*d-l*h,y=a*f-c*h,R=a*u-o*h;return t*(_*x-p*E+m*v)-n*(g*x-p*S+m*y)+s*(g*E-_*S+m*R)-r*(g*v-_*y+p*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=t*o-n*a,E=t*c-s*a,v=t*l-r*a,S=n*c-s*o,y=n*l-r*o,R=s*l-r*c,b=h*_-u*g,w=h*p-f*g,A=h*m-d*g,C=u*p-f*_,U=u*m-d*_,I=f*m-d*p,P=x*I-E*U+v*C+S*A-y*w+R*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/P;return e[0]=(o*I-c*U+l*C)*F,e[1]=(s*U-n*I-r*C)*F,e[2]=(_*R-p*y+m*S)*F,e[3]=(f*y-u*R-d*S)*F,e[4]=(c*A-a*I-l*w)*F,e[5]=(t*I-s*A+r*w)*F,e[6]=(p*v-g*R-m*E)*F,e[7]=(h*R-f*v+d*E)*F,e[8]=(a*U-o*A+l*b)*F,e[9]=(n*A-t*U-r*b)*F,e[10]=(g*y-_*v+m*x)*F,e[11]=(u*v-h*y-d*x)*F,e[12]=(o*w-a*C-c*b)*F,e[13]=(t*C-n*w+s*b)*F,e[14]=(_*E-g*S-p*x)*F,e[15]=(h*S-u*E+f*x)*F,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,_=a*h,p=a*u,m=o*u,x=c*l,E=c*h,v=c*u,S=n.x,y=n.y,R=n.z;return s[0]=(1-(_+m))*S,s[1]=(d+v)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(d-v)*y,s[5]=(1-(f+m))*y,s[6]=(p+x)*y,s[7]=0,s[8]=(g+E)*R,s[9]=(p-x)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=us.set(s[0],s[1],s[2]).length();const o=us.set(s[4],s[5],s[6]).length(),c=us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),wn.copy(this);const l=1/a,h=1/o,u=1/c;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,t.setFromRotationMatrix(wn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=qn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===qn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Kr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=qn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===qn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Kr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Vo.prototype.isMatrix4=!0;let $e=Vo;const us=new N,wn=new $e,Qx=new N(0,0,0),ev=new N(1,1,1),Ai=new N,da=new N,on=new N,yf=new $e,Ef=new an;class Dn{constructor(e=0,t=0,n=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class eg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tv=0;const wf=new N,fs=new an,ni=new $e,pa=new N,er=new N,nv=new N,iv=new an,Tf=new N(1,0,0),Af=new N(0,1,0),Rf=new N(0,0,1),Cf={type:"added"},sv={type:"removed"},ds={type:"childadded",child:null},Mc={type:"childremoved",child:null};class wt extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new N,t=new Dn,n=new an,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new et}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Tf,e)}rotateY(e){return this.rotateOnAxis(Af,e)}rotateZ(e){return this.rotateOnAxis(Rf,e)}translateOnAxis(e,t){return wf.copy(e).applyQuaternion(this.quaternion),this.position.add(wf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tf,e)}translateY(e){return this.translateOnAxis(Af,e)}translateZ(e){return this.translateOnAxis(Rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pa.copy(e):pa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(er,pa,this.up):ni.lookAt(pa,er,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(ni),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cf),ds.child=e,this.dispatchEvent(ds),ds.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sv),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cf),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,nv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,iv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}wt.DEFAULT_UP=new N(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ze extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rv={type:"move"};class Sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},ma={h:0,s:0,l:0};function yc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Xh(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yc(a,r,e+1/3),this.g=yc(a,r,e),this.b=yc(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=tg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return lt.workingToColorSpace(Yt.copy(this),e),Math.round(st(Yt.r*255,0,255))*65536+Math.round(st(Yt.g*255,0,255))*256+Math.round(st(Yt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Mt){lt.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,s=Yt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(ma);const n=Lr(Ri.h,ma.h,t),s=Lr(Ri.s,ma.s,t),r=Lr(Ri.l,ma.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new qe;qe.NAMES=tg;class Po extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Tn=new N,ii=new N,Ec=new N,si=new N,ps=new N,ms=new N,Pf=new N,wc=new N,Tc=new N,Ac=new N,Rc=new St,Cc=new St,Pc=new St;class Pn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),ii.subVectors(n,t),Ec.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(ii),c=Tn.dot(Ec),l=ii.dot(ii),h=ii.dot(Ec),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(e,t),Cc.fromBufferAttribute(e,n),Pc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Rc,r.x),a.addScaledVector(Cc,r.y),a.addScaledVector(Pc,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),ii.subVectors(e,t),Tn.cross(ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Tn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ps.subVectors(s,n),ms.subVectors(r,n),wc.subVectors(e,n);const c=ps.dot(wc),l=ms.dot(wc);if(c<=0&&l<=0)return t.copy(n);Tc.subVectors(e,s);const h=ps.dot(Tc),u=ms.dot(Tc);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ps,a);Ac.subVectors(e,r);const d=ps.dot(Ac),g=ms.dot(Ac);if(g>=0&&d<=g)return t.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ms,o);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Pf.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Pf,o);const m=1/(p+_+f);return a=_*m,o=f*m,t.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),ba.subVectors(this.max,tr),gs.subVectors(e.a,tr),bs.subVectors(e.b,tr),_s.subVectors(e.c,tr),Ci.subVectors(bs,gs),Pi.subVectors(_s,bs),ki.subVectors(gs,_s);let t=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-ki.z,ki.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,ki.z,0,-ki.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-ki.y,ki.x,0];return!Lc(t,gs,bs,_s,ba)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,gs,bs,_s,ba))?!1:(_a.crossVectors(Ci,Pi),t=[_a.x,_a.y,_a.z],Lc(t,gs,bs,_s,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new N,new N,new N,new N,new N,new N,new N,new N],An=new N,ga=new fn,gs=new N,bs=new N,_s=new N,Ci=new N,Pi=new N,ki=new N,tr=new N,ba=new N,_a=new N,zi=new N;function Lc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zi.fromArray(i,r);const o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=e.dot(zi),l=t.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const fi=av();function av(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function ov(i){Math.abs(i)>65504&&ze("DataUtils.toHalfFloat(): Value out of range."),i=st(i,-65504,65504),fi.floatView[0]=i;const e=fi.uint32View[0],t=e>>23&511;return fi.baseTable[t]+((e&8388607)>>fi.shiftTable[t])}function cv(i){const e=i>>10;return fi.uint32View[0]=fi.mantissaTable[fi.offsetTable[e]+(i&1023)]+fi.exponentTable[e],fi.floatView[0]}class xa{static toHalfFloat(e){return ov(e)}static fromHalfFloat(e){return cv(e)}}const Ot=new N,va=new ue;let lv=0;class Rt extends ns{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jm,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ng extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ig extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const hv=new fn,nr=new N,Ic=new N;class Fn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(Ic)),this.expandByPoint(nr.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let uv=0;const mn=new $e,Dc=new wt,xs=new N,cn=new fn,ir=new fn,Vt=new N;class Ct extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wx(e)?ig:ng)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(cn.min,ir.min),cn.expandByPoint(Vt),Vt.addVectors(cn.max,ir.max),cn.expandByPoint(Vt)):(cn.expandByPoint(ir.min),cn.expandByPoint(ir.max))}cn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Vt.fromBufferAttribute(o,l),c&&(xs.fromBufferAttribute(e,l),Vt.add(xs)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Rt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let b=0;b<n.count;b++)o[b]=new N,c[b]=new N;const l=new N,h=new N,u=new N,f=new ue,d=new ue,g=new ue,_=new N,p=new N;function m(b,w,A){l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,A),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,A),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),o[b].add(_),o[w].add(_),o[A].add(_),c[b].add(p),c[w].add(p),c[A].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let b=0,w=x.length;b<w;++b){const A=x[b],C=A.start,U=A.count;for(let I=C,P=C+U;I<P;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const E=new N,v=new N,S=new N,y=new N;function R(b){S.fromBufferAttribute(s,b),y.copy(S);const w=o[b];E.copy(w),E.sub(S.multiplyScalar(S.dot(w))).normalize(),v.crossVectors(y,w);const C=v.dot(c[b])<0?-1:1;a.setXYZW(b,E.x,E.y,E.z,C)}for(let b=0,w=x.length;b<w;++b){const A=x[b],C=A.start,U=A.count;for(let I=C,P=C+U;I<P;I+=3)R(e.getX(I+0)),R(e.getX(I+1)),R(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new Rt(f,h,u)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jm,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Qt=new N;class Kh{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Nc=new N,dv=new N,pv=new et;class Di{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Nc.subVectors(n,t).cross(dv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Nc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pv.getNormalMatrix(e),s=this.coplanarPoint(Nc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let mv=0;class In extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=Rr,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nm,this.blendDst=Fm,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_x,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mc,this.stencilZFail=mc,this.stencilZPass=mc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Di().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ai=new N,Fc=new N,Ma=new N,Sa=new N;class qo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fc.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Sa.copy(this.origin).sub(Fc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ma),o=Sa.dot(this.direction),c=-Sa.dot(Ma),l=Sa.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fc).addScaledVector(Ma,f),d}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,g=t.x-a.x,_=t.y-a.y,p=t.z-a.z,m=n.x-a.x,x=n.y-a.y,E=n.z-a.z,v=Math.abs(c),S=Math.abs(l),y=Math.abs(h);let R,b,w,A,C,U,I,P,F,G,z,X;if(v>=S&&v>=y?(w=c,U=u,F=g,X=m,c>=0?(R=l,b=h,A=f,C=d,I=_,P=p,G=x,z=E):(R=h,b=l,A=d,C=f,I=p,P=_,G=E,z=x)):S>=y?(w=l,U=f,F=_,X=x,l>=0?(R=h,b=c,A=d,C=u,I=p,P=g,G=E,z=m):(R=c,b=h,A=u,C=d,I=g,P=p,G=m,z=E)):(w=h,U=d,F=p,X=E,h>=0?(R=c,b=l,A=u,C=f,I=g,P=_,G=m,z=x):(R=l,b=c,A=f,C=u,I=_,P=g,G=x,z=m)),w===0)return null;const O=R/w,B=b/w,k=1/w,q=A-O*U,j=C-B*U,de=I-O*F,xe=P-B*F,Ne=G-O*X,J=z-B*X,Z=Ne*xe-J*de,fe=q*J-j*Ne,Ce=de*j-xe*q;if(s){if(Z<0||fe<0||Ce<0)return null}else if((Z<0||fe<0||Ce<0)&&(Z>0||fe>0||Ce>0))return null;const be=Z+fe+Ce;if(be===0)return null;const Pe=k*(Z*U+fe*F+Ce*X);return(be>0?Pe<0:Pe>0)?null:this.at(Pe/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kn extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lf=new $e,Gi=new qo,ya=new Fn,If=new N,Ea=new N,wa=new N,Ta=new N,Uc=new N,Aa=new N,Df=new N,Ra=new N;class oe extends wt{constructor(e=new Ct,t=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Aa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Uc.fromBufferAttribute(u,e),a?Aa.addScaledVector(Uc,h):Aa.addScaledVector(Uc.sub(t),h))}t.add(Aa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(ya.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ya,If)===null||Gi.origin.distanceToSquared(If)>(e.far-e.near)**2))&&(Lf.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Lf),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],x=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,S=E;v<S;v+=3){const y=o.getX(v),R=o.getX(v+1),b=o.getX(v+2);s=Ca(this,m,e,n,l,h,u,y,R,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=o.getX(p),E=o.getX(p+1),v=o.getX(p+2);s=Ca(this,a,e,n,l,h,u,x,E,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],x=Math.max(p.start,d.start),E=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,S=E;v<S;v+=3){const y=v,R=v+1,b=v+2;s=Ca(this,m,e,n,l,h,u,y,R,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=p,E=p+1,v=p+2;s=Ca(this,a,e,n,l,h,u,x,E,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function gv(i,e,t,n,s,r,a,o){let c;if(e.side===Xt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===vi,o),c===null)return null;Ra.copy(o),Ra.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ra);return l<t.near||l>t.far?null:{distance:l,point:Ra.clone(),object:i}}function Ca(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ea),i.getVertexPosition(c,wa),i.getVertexPosition(l,Ta);const h=gv(i,e,t,n,Ea,wa,Ta,Df);if(h){const u=new N;Pn.getBarycoord(Df,Ea,wa,Ta,u),s&&(h.uv=Pn.getInterpolatedAttribute(s,o,c,l,u,new ue)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,o,c,l,u,new ue)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new N,materialIndex:0};Pn.getNormal(Ea,wa,Ta,f.normal),h.face=f,h.barycoord=u}return h}const sr=new St,Nf=new St,Ff=new St,bv=new St,Uf=new $e,Pa=new N,Oc=new Fn,Of=new $e,Bc=new qo;class _v extends oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ff,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingBox.expandByPoint(Pa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingSphere.expandByPoint(Pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oc.copy(this.boundingSphere),Oc.applyMatrix4(s),e.ray.intersectsSphere(Oc)!==!1&&(Of.copy(s).invert(),Bc.copy(e.ray).applyMatrix4(Of),!(this.boundingBox!==null&&Bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ff?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dx?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Nf.fromBufferAttribute(s.attributes.skinIndex,e),Ff.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(sr.copy(t),t.set(0,0,0,0)):(sr.set(...t,1),t.set(0,0,0)),sr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Ff.getComponent(r);if(a!==0){const o=Nf.getComponent(r);Uf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(bv.copy(sr).applyMatrix4(Uf),a)}}return t.isVector4&&(t.w=sr.w),t.applyMatrix4(this.bindMatrixInverse)}}class sg extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $r extends zt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Bt,h=Bt,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bf=new $e,xv=new $e;class Yh{constructor(e=[],t=[]){this.uuid=xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:xv;Bf.multiplyMatrices(o,t[r]),Bf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Yh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $r(t,e,e,_n,sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(ze("Skeleton: No bone found with UUID:",r),a=new sg),this.bones.push(a),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Lo extends Rt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vs=new $e,kf=new $e,La=[],zf=new fn,vv=new $e,rr=new oe,ar=new Fn;class zs extends oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),zf.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(zf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),ar.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),e.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),kf.multiplyMatrices(n,vs),rr.matrixWorld=kf,rr.raycast(e,La);for(let a=0,o=La.length;a<o;a++){const c=La[a];c.instanceId=r,c.object=this,t.push(c)}La.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $r(new Float32Array(s*this.count),s,this.count,kh,sn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Hi=new Fn,Mv=new ue(.5,.5),Ia=new N;class $h{constructor(e=new Di,t=new Di,n=new Di,s=new Di,r=new Di,a=new Di){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],p=r[10],m=r[11],x=r[12],E=r[13],v=r[14],S=r[15];if(s[0].setComponents(l-a,d-h,m-g,S-x).normalize(),s[1].setComponents(l+a,d+h,m+g,S+x).normalize(),s[2].setComponents(l+o,d+u,m+_,S+E).normalize(),s[3].setComponents(l-o,d-u,m-_,S-E).normalize(),n)s[4].setComponents(c,f,p,v).normalize(),s[5].setComponents(l-c,d-f,m-p,S-v).normalize();else if(s[4].setComponents(l-c,d-f,m-p,S-v).normalize(),t===qn)s[5].setComponents(l+c,d+f,m+p,S+v).normalize();else if(t===Kr)s[5].setComponents(c,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);const t=Mv.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ia.x=s.normal.x>0?e.max.x:e.min.x,Ia.y=s.normal.y>0?e.max.y:e.min.y,Ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jh extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Io=new N,Do=new N,Gf=new $e,or=new qo,Da=new Fn,kc=new N,Hf=new N;class Ko extends wt{constructor(e=new Ct,t=new Jh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Io.fromBufferAttribute(t,s-1),Do.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Io.distanceTo(Do);e.setAttribute("lineDistance",new dt(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;Gf.copy(s).invert(),or.copy(e.ray).applyMatrix4(Gf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=l){const m=h.getX(_),x=h.getX(_+1),E=Na(this,e,or,c,m,x,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(d),m=Na(this,e,or,c,_,p,g-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=l){const m=Na(this,e,or,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Na(this,e,or,c,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Na(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Io.fromBufferAttribute(o,s),Do.fromBufferAttribute(o,r),t.distanceSqToSegment(Io,Do,kc,Hf)>n)return;kc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(kc);if(!(l<e.near||l>e.far))return{distance:l,point:Hf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Vf=new N,Wf=new N;class rg extends Ko{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Vf.fromBufferAttribute(t,s),Wf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vf.distanceTo(Wf);e.setAttribute("lineDistance",new dt(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sv extends Ko{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ag extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xf=new $e,oh=new qo,Fa=new Fn,Ua=new N;class yv extends wt{constructor(e=new Ct,t=new ag){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;Xf.copy(s).invert(),oh.copy(e.ray).applyMatrix4(Xf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const p=l.getX(g);Ua.fromBufferAttribute(u,p),qf(Ua,p,c,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Ua.fromBufferAttribute(u,g),qf(Ua,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qf(i,e,t,n,s,r,a){const o=oh.distanceSqToPoint(i);if(o<t){const c=new N;oh.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class og extends zt{constructor(e=[],t=Zi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nn extends zt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jr extends zt{constructor(e,t,n=Jn,s,r,a,o=Bt,c=Bt,l,h=Mi,u=1){if(h!==Mi&&h!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ev extends Jr{constructor(e,t=Jn,n=Zi,s,r,a=Bt,o=Bt,c,l=Mi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cg extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gt extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function g(_,p,m,x,E,v,S,y,R,b,w){const A=v/R,C=S/b,U=v/2,I=S/2,P=y/2,F=R+1,G=b+1;let z=0,X=0;const O=new N;for(let B=0;B<G;B++){const k=B*C-I;for(let q=0;q<F;q++){const j=q*A-U;O[_]=j*x,O[p]=k*E,O[m]=P,l.push(O.x,O.y,O.z),O[_]=0,O[p]=0,O[m]=y>0?1:-1,h.push(O.x,O.y,O.z),u.push(q/R),u.push(1-B/b),z+=1}}for(let B=0;B<b;B++)for(let k=0;k<R;k++){const q=f+k+F*B,j=f+k+F*(B+1),de=f+(k+1)+F*(B+1),xe=f+(k+1)+F*B;c.push(q,j,xe),c.push(j,de,xe),X+=6}o.addGroup(d,X,w),d+=X,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ra extends Ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new N,h=new ue;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ft extends Ct{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],p=n/2;let m=0;x(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(d,2));function x(){const v=new N,S=new N;let y=0;const R=(t-e)/n;for(let b=0;b<=r;b++){const w=[],A=b/r,C=A*(t-e)+e;for(let U=0;U<=s;U++){const I=U/s,P=I*c+o,F=Math.sin(P),G=Math.cos(P);S.x=C*F,S.y=-A*n+p,S.z=C*G,u.push(S.x,S.y,S.z),v.set(F,R,G).normalize(),f.push(v.x,v.y,v.z),d.push(I,1-A),w.push(g++)}_.push(w)}for(let b=0;b<s;b++)for(let w=0;w<r;w++){const A=_[w][b],C=_[w+1][b],U=_[w+1][b+1],I=_[w][b+1];(e>0||w!==0)&&(h.push(A,C,I),y+=3),(t>0||w!==r-1)&&(h.push(C,U,I),y+=3)}l.addGroup(m,y,0),m+=y}function E(v){const S=g,y=new ue,R=new N;let b=0;const w=v===!0?e:t,A=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,p*A,0),f.push(0,A,0),d.push(.5,.5),g++;const C=g;for(let U=0;U<=s;U++){const P=U/s*c+o,F=Math.cos(P),G=Math.sin(P);R.x=w*G,R.y=p*A,R.z=w*F,u.push(R.x,R.y,R.z),f.push(0,A,0),y.x=F*.5+.5,y.y=G*.5*A+.5,d.push(y.x,y.y),g++}for(let U=0;U<s;U++){const I=S+U,P=C+U;v===!0?h.push(P,P+1,I):h.push(P+1,P,I),b+=3}l.addGroup(m,b,v===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ue:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,s=[],r=[],a=[],o=new N,c=new $e;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(st(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(st(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jh extends ei{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ue){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wv extends jh{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Zh(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Kf=new N,Yf=new N,zc=new Zh,Gc=new Zh,Hc=new Zh;class Tv extends ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Yf.subVectors(s[0],s[1]).add(s[0]),l=Yf);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Kf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Kf),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),zc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,p),Gc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,p),Hc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(zc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Gc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Hc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(zc.calc(c),Gc.calc(c),Hc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $f(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Av(i,e){const t=1-i;return t*t*e}function Rv(i,e){return 2*(1-i)*i*e}function Cv(i,e){return i*i*e}function Ir(i,e,t,n){return Av(i,e)+Rv(i,t)+Cv(i,n)}function Pv(i,e){const t=1-i;return t*t*t*e}function Lv(i,e){const t=1-i;return 3*t*t*i*e}function Iv(i,e){return 3*(1-i)*i*i*e}function Dv(i,e){return i*i*i*e}function Dr(i,e,t,n,s){return Pv(i,e)+Lv(i,t)+Iv(i,n)+Dv(i,s)}class lg extends ei{constructor(e=new ue,t=new ue,n=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ue){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Dr(e,s.x,r.x,a.x,o.x),Dr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nv extends ei{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Dr(e,s.x,r.x,a.x,o.x),Dr(e,s.y,r.y,a.y,o.y),Dr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hg extends ei{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fv extends ei{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ug extends ei{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(e,s.x,r.x,a.x),Ir(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uv extends ei{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(e,s.x,r.x,a.x),Ir(e,s.y,r.y,a.y),Ir(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fg extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set($f(o,c.x,l.x,h.x,u.x),$f(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ue().fromArray(s))}return this}}var ch=Object.freeze({__proto__:null,ArcCurve:wv,CatmullRomCurve3:Tv,CubicBezierCurve:lg,CubicBezierCurve3:Nv,EllipseCurve:jh,LineCurve:hg,LineCurve3:Fv,QuadraticBezierCurve:ug,QuadraticBezierCurve3:Uv,SplineCurve:fg});class Ov extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ch[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new ch[s.type]().fromJSON(s))}return this}}class Si extends Ov{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new hg(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new ug(this.currentPoint.clone(),new ue(e,t),new ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new lg(this.currentPoint.clone(),new ue(e,t),new ue(n,s),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new fg(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new jh(e,t,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class dn extends Si{constructor(e){super(e),this.uuid=xn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Si().fromJSON(s))}return this}}function Bv(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=dg(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Vv(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let f=t;f<s;f+=t){const d=i[f],g=i[f+1];d<o&&(o=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return jr(r,a,t,o,c,l,0),a}function dg(i,e,t,n,s){let r;if(s===eM(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Jf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Jf(a/n|0,i[a],i[a+1],r);return r&&Xs(r,r.next)&&(Qr(r),r=r.next),r}function es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xs(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function jr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Yv(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?zv(i,n,s,r):kv(i)){e.push(c.i,i.i,l.i),Qr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Gv(es(i),e),jr(i,e,t,n,s,r,2)):a===2&&Hv(i,e,t,n,s,r):jr(es(i),e,t,n,s,r,1);break}}}function kv(i){const e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),f=Math.max(s,r,a),d=Math.max(o,c,l);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&vr(s,o,r,c,a,l,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zv(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,c,l),g=Math.min(h,u,f),_=Math.max(o,c,l),p=Math.max(h,u,f),m=lh(d,g,e,t,n),x=lh(_,p,e,t,n);let E=i.prevZ,v=i.nextZ;for(;E&&E.z>=m&&v&&v.z<=x;){if(E.x>=d&&E.x<=_&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&vr(o,h,c,u,l,f,E.x,E.y)&&Dt(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&vr(o,h,c,u,l,f,v.x,v.y)&&Dt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=m;){if(E.x>=d&&E.x<=_&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&vr(o,h,c,u,l,f,E.x,E.y)&&Dt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&vr(o,h,c,u,l,f,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Gv(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Xs(n,s)&&mg(n,t,t.next,s)&&Zr(n,s)&&Zr(s,n)&&(e.push(n.i,t.i,s.i),Qr(t),Qr(t.next),t=i=s),t=t.next}while(t!==i);return es(t)}function Hv(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&jv(a,o)){let c=gg(a,o);a=es(a,a.next),c=es(c,c.next),jr(a,e,t,n,s,r,0),jr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Vv(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=dg(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Jv(l))}s.sort(Wv);for(let r=0;r<s.length;r++)t=Xv(s[r],t);return t}function Wv(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Xv(i,e){const t=qv(i,e);if(!t)return e;const n=gg(t,i);return es(n,n.next),es(t,t.next)}function qv(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Xs(i,t))return t;do{if(Xs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&pg(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Zr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Kv(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Kv(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function Yv(i,e,t,n){let s=i;do s.z===0&&(s.z=lh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$v(s)}function $v(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function lh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Jv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pg(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function vr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&pg(i,e,t,n,s,r,a,o)}function jv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Zv(i,e)&&(Zr(i,e)&&Zr(e,i)&&Qv(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||Xs(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xs(i,e){return i.x===e.x&&i.y===e.y}function mg(i,e,t,n){const s=Ba(Dt(i,e,t)),r=Ba(Dt(i,e,n)),a=Ba(Dt(t,n,i)),o=Ba(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&Oa(i,t,e)||r===0&&Oa(i,n,e)||a===0&&Oa(t,i,n)||o===0&&Oa(t,e,n))}function Oa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ba(i){return i>0?1:i<0?-1:0}function Zv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&mg(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Zr(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function Qv(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function gg(i,e){const t=hh(i.i,i.x,i.y),n=hh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jf(i,e,t,n){const s=hh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function eM(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class tM{static triangulate(e,t,n=2){return Bv(e,t,n)}}class di{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return di.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];jf(e),Zf(n,e);let a=e.length;t.forEach(jf);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Zf(n,t[c]);const o=tM.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function jf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class yn extends Ct{constructor(e=new dn([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:nM;let E,v=!1,S,y,R,b;if(m){E=m.getSpacedPoints(h),v=!0,f=!1;const te=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,te),y=new N,R=new N,b=new N}f||(p=0,d=0,g=0,_=0);const w=o.extractPoints(l);let A=w.shape;const C=w.holes;if(!di.isClockWise(A)){A=A.reverse();for(let te=0,ae=C.length;te<ae;te++){const ce=C[te];di.isClockWise(ce)&&(C[te]=ce.reverse())}}function I(te){const ce=10000000000000001e-36;let he=te[0];for(let pe=1;pe<=te.length;pe++){const Le=pe%te.length,Fe=te[Le],ie=Fe.x-he.x,me=Fe.y-he.y,D=ie*ie+me*me,Ge=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(he.x),Math.abs(he.y)),Je=ce*Ge*Ge;if(D<=Je){te.splice(Le,1),pe--;continue}he=Fe}}I(A),C.forEach(I);const P=C.length,F=A;for(let te=0;te<P;te++){const ae=C[te];A=A.concat(ae)}function G(te,ae,ce){return ae||je("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(ae,ce)}const z=A.length;function X(te,ae,ce){let he,pe,Le;const Fe=te.x-ae.x,ie=te.y-ae.y,me=ce.x-te.x,D=ce.y-te.y,Ge=Fe*Fe+ie*ie,Je=Fe*D-ie*me;if(Math.abs(Je)>Number.EPSILON){const L=Math.sqrt(Ge),M=Math.sqrt(me*me+D*D),W=ae.x-ie/L,$=ae.y+Fe/L,ee=ce.x-D/M,ge=ce.y+me/M,_e=((ee-W)*D-(ge-$)*me)/(Fe*D-ie*me);he=W+Fe*_e-te.x,pe=$+ie*_e-te.y;const ne=he*he+pe*pe;if(ne<=2)return new ue(he,pe);Le=Math.sqrt(ne/2)}else{let L=!1;Fe>Number.EPSILON?me>Number.EPSILON&&(L=!0):Fe<-Number.EPSILON?me<-Number.EPSILON&&(L=!0):Math.sign(ie)===Math.sign(D)&&(L=!0),L?(he=-ie,pe=Fe,Le=Math.sqrt(Ge)):(he=Fe,pe=ie,Le=Math.sqrt(Ge/2))}return new ue(he/Le,pe/Le)}const O=[];for(let te=0,ae=F.length,ce=ae-1,he=te+1;te<ae;te++,ce++,he++)ce===ae&&(ce=0),he===ae&&(he=0),O[te]=X(F[te],F[ce],F[he]);const B=[];let k,q=O.concat();for(let te=0,ae=P;te<ae;te++){const ce=C[te];k=[];for(let he=0,pe=ce.length,Le=pe-1,Fe=he+1;he<pe;he++,Le++,Fe++)Le===pe&&(Le=0),Fe===pe&&(Fe=0),k[he]=X(ce[he],ce[Le],ce[Fe]);B.push(k),q=q.concat(k)}let j;if(p===0)j=di.triangulateShape(F,C);else{const te=[],ae=[];for(let ce=0;ce<p;ce++){const he=ce/p,pe=d*Math.cos(he*Math.PI/2),Le=g*Math.sin(he*Math.PI/2)+_;for(let Fe=0,ie=F.length;Fe<ie;Fe++){const me=G(F[Fe],O[Fe],Le);fe(me.x,me.y,-pe),he===0&&te.push(me)}for(let Fe=0,ie=P;Fe<ie;Fe++){const me=C[Fe];k=B[Fe];const D=[];for(let Ge=0,Je=me.length;Ge<Je;Ge++){const L=G(me[Ge],k[Ge],Le);fe(L.x,L.y,-pe),he===0&&D.push(L)}he===0&&ae.push(D)}}j=di.triangulateShape(te,ae)}const de=j.length,xe=g+_;for(let te=0;te<z;te++){const ae=f?G(A[te],q[te],xe):A[te];v?(R.copy(S.normals[0]).multiplyScalar(ae.x),y.copy(S.binormals[0]).multiplyScalar(ae.y),b.copy(E[0]).add(R).add(y),fe(b.x,b.y,b.z)):fe(ae.x,ae.y,0)}for(let te=1;te<=h;te++)for(let ae=0;ae<z;ae++){const ce=f?G(A[ae],q[ae],xe):A[ae];v?(R.copy(S.normals[te]).multiplyScalar(ce.x),y.copy(S.binormals[te]).multiplyScalar(ce.y),b.copy(E[te]).add(R).add(y),fe(b.x,b.y,b.z)):fe(ce.x,ce.y,u/h*te)}for(let te=p-1;te>=0;te--){const ae=te/p,ce=d*Math.cos(ae*Math.PI/2),he=g*Math.sin(ae*Math.PI/2)+_;for(let pe=0,Le=F.length;pe<Le;pe++){const Fe=G(F[pe],O[pe],he);fe(Fe.x,Fe.y,u+ce)}for(let pe=0,Le=C.length;pe<Le;pe++){const Fe=C[pe];k=B[pe];for(let ie=0,me=Fe.length;ie<me;ie++){const D=G(Fe[ie],k[ie],he);v?fe(D.x,D.y+E[h-1].y,E[h-1].x+ce):fe(D.x,D.y,u+ce)}}}Ne(),J();function Ne(){const te=s.length/3;if(f){let ae=0,ce=z*ae;for(let he=0;he<de;he++){const pe=j[he];Ce(pe[2]+ce,pe[1]+ce,pe[0]+ce)}ae=h+p*2,ce=z*ae;for(let he=0;he<de;he++){const pe=j[he];Ce(pe[0]+ce,pe[1]+ce,pe[2]+ce)}}else{for(let ae=0;ae<de;ae++){const ce=j[ae];Ce(ce[2],ce[1],ce[0])}for(let ae=0;ae<de;ae++){const ce=j[ae];Ce(ce[0]+z*h,ce[1]+z*h,ce[2]+z*h)}}n.addGroup(te,s.length/3-te,0)}function J(){const te=s.length/3;let ae=0;Z(F,ae),ae+=F.length;for(let ce=0,he=C.length;ce<he;ce++){const pe=C[ce];Z(pe,ae),ae+=pe.length}n.addGroup(te,s.length/3-te,1)}function Z(te,ae){let ce=te.length;for(;--ce>=0;){const he=ce;let pe=ce-1;pe<0&&(pe=te.length-1);for(let Le=0,Fe=h+p*2;Le<Fe;Le++){const ie=z*Le,me=z*(Le+1),D=ae+he+ie,Ge=ae+pe+ie,Je=ae+pe+me,L=ae+he+me;be(D,Ge,Je,L)}}}function fe(te,ae,ce){c.push(te),c.push(ae),c.push(ce)}function Ce(te,ae,ce){Pe(te),Pe(ae),Pe(ce);const he=s.length/3,pe=x.generateTopUV(n,s,he-3,he-2,he-1);Ke(pe[0]),Ke(pe[1]),Ke(pe[2])}function be(te,ae,ce,he){Pe(te),Pe(ae),Pe(he),Pe(ae),Pe(ce),Pe(he);const pe=s.length/3,Le=x.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);Ke(Le[0]),Ke(Le[1]),Ke(Le[3]),Ke(Le[1]),Ke(Le[2]),Ke(Le[3])}function Pe(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function Ke(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return iM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ch[s.type]().fromJSON(s)),new yn(n,e.options)}}const nM={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ue(r,a),new ue(o,c),new ue(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ue(a,1-c),new ue(l,1-u),new ue(f,1-g),new ue(_,1-m)]:[new ue(o,1-c),new ue(h,1-u),new ue(d,1-g),new ue(p,1-m)]}};function iM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class aa extends Ct{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=st(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new N,f=new ue,d=new N,g=new N,_=new N;let p=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:p=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,d.x=m*1,d.y=-p,d.z=m*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:p=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let x=0;x<=t;x++){const E=n+x*h*s,v=Math.sin(E),S=Math.cos(E);for(let y=0;y<=e.length-1;y++){u.x=e[y].x*v,u.y=e[y].y,u.z=e[y].x*S,a.push(u.x,u.y,u.z),f.x=x/t,f.y=y/(e.length-1),o.push(f.x,f.y);const R=c[3*y+0]*v,b=c[3*y+1],w=c[3*y+0]*S;l.push(R,b,w)}}for(let x=0;x<t;x++)for(let E=0;E<e.length-1;E++){const v=E+x*e.length,S=v,y=v+e.length,R=v+e.length+1,b=v+1;r.push(S,y,b),r.push(R,b,y)}this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.points,e.segments,e.phiStart,e.phiLength)}}class Mn extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const x=m*f-a;for(let E=0;E<l;E++){const v=E*u-r;g.push(v,-x,0),_.push(0,0,1),p.push(E/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){const E=x+l*m,v=x+l*(m+1),S=x+1+l*(m+1),y=x+1+l*m;d.push(E,v,y),d.push(v,S,y)}this.setIndex(d),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qh extends Ct{constructor(e=new dn([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(r,3)),this.setAttribute("uv",new dt(a,2));function l(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;di.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const x=g[p];di.isClockWise(x)===!0&&(g[p]=x.reverse())}const _=di.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const x=g[p];d=d.concat(x)}for(let p=0,m=d.length;p<m;p++){const x=d[p];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let p=0,m=_.length;p<m;p++){const x=_[p],E=x[0]+u,v=x[1]+u,S=x[2]+u;n.push(E,v,S),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return sM(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new Qh(n,e.curveSegments)}}function sM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class ea extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new N,f=new N,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const x=[],E=m/n,v=a+E*o,S=e*Math.cos(v),y=Math.sqrt(e*e-S*S);let R=0;m===0&&a===0?R=.5/t:m===n&&c===Math.PI&&(R=-.5/t);for(let b=0;b<=t;b++){const w=b/t,A=s+w*r;u.x=-y*Math.cos(A),u.y=S,u.z=y*Math.sin(A),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(w+R,1-E),x.push(l++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const E=h[m][x+1],v=h[m][x],S=h[m+1][x],y=h[m+1][x+1];(m!==0||a>0)&&d.push(E,v,y),(m!==n-1||c<Math.PI)&&d.push(v,S,y)}this.setIndex(d),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class No extends Ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],u=[],f=new N,d=new N,g=new N;for(let _=0;_<=n;_++){const p=a+_/n*o;for(let m=0;m<=s;m++){const x=m/s*r;d.x=(e+t*Math.cos(p))*Math.cos(x),d.y=(e+t*Math.cos(p))*Math.sin(x),d.z=t*Math.sin(p),l.push(d.x,d.y,d.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){const m=(s+1)*_+p-1,x=(s+1)*(_-1)+p-1,E=(s+1)*(_-1)+p,v=(s+1)*_+p;c.push(m,x,v),c.push(x,E,v)}this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function qs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Qf(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Qf(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=qs(i[t]);for(const s in n)e[s]=n[s]}return e}function Qf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function rM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bg(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const aM={clone:qs,merge:en};var oM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new ue().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new et().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class lM extends jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Et extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Un extends Et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hM extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Nh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uM extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fM extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _g extends Jh{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ni(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function dM(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ed(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function pM(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Ks{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class mM extends Ks{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pf,endingEnd:pf}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case mf:r=e,o=2*t-n;break;case gf:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case mf:a=e,c=2*n-t;break;case gf:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,x=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,E=(-1-d)*p+(1.5+d)*_+.5*g,v=d*p-d*_;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+x*a[l+S]+E*a[c+S]+v*a[u+S];return r}}class gM extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}}class bM extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class _M extends Ks{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){const g=(n-t)/(s-t),_=1-g;for(let p=0;p!==o;++p)r[p]=a[l+p]*_+a[c+p]*g;return r}const f=o*2,d=e-1;for(let g=0;g!==o;++g){const _=a[l+g],p=a[c+g],m=d*f+g*2,x=u[m],E=u[m+1],v=e*f+g*2,S=h[v],y=h[v+1],R=vM(n,t,x,S,s);r[g]=xg(R,_,E,y,p)}return r}}function xg(i,e,t,n,s){const r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function xM(i,e,t,n,s){const r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function vM(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){const o=xg(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;const c=xM(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}class On{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ni(t,this.TimeBufferType),this.values=Ni(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ni(e.times,Array),values:Ni(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),fo(e.settings)&&(n.settings={inTangents:Ni(e.settings.inTangents,Array),outTangents:Ni(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new _M(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case qr:t=this.InterpolantFactoryMethodLinear;break;case pc:t=this.InterpolantFactoryMethodSmooth;break;case df:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return pc;case this.InterpolantFactoryMethodBezier:return df}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;fo(this.settings)&&(td(this.settings.inTangents,e),td(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){je("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){je("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Tx(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pc,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{const u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,fo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}}function td(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=qr;class Ys extends On{constructor(e,t,n){super(e,t,n)}}Ys.prototype.ValueTypeName="bool";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=Xr;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class vg extends On{constructor(e,t,n,s){super(e,t,n,s)}}vg.prototype.ValueTypeName="color";class ta extends On{constructor(e,t,n,s){super(e,t,n,s)}}ta.prototype.ValueTypeName="number";class MM extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let h=l+o;l!==h;l+=4)an.slerpFlat(r,0,a,l-o,a,l,c);return r}}class na extends On{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new MM(this.times,this.values,this.getValueSize(),e)}}na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends On{constructor(e,t,n){super(e,t,n)}}$s.prototype.ValueTypeName="string";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Xr;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class Fo extends On{constructor(e,t,n,s){super(e,t,n,s)}}Fo.prototype.ValueTypeName="vector";class SM{constructor(e="",t=-1,n=[],s=px){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=xn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(EM(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=dM(c);c=ed(c,1,h),l=ed(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ta(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function yM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ta;case"vector":case"vector2":case"vector3":case"vector4":return Fo;case"color":return vg;case"quaternion":return na;case"bool":case"boolean":return Ys;case"string":return $s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function EM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=yM(i.type);if(i.times===void 0){const n=[],s=[];pM(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),fo(i.settings)&&(t.settings={inTangents:Ni(i.settings.inTangents,Float32Array),outTangents:Ni(i.settings.outTangents,Float32Array)}),t}const pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(nd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!nd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function nd(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class wM{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const TM=new wM;class is{constructor(e){this.manager=e!==void 0?e:TM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}is.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class AM extends Error{constructor(e,t){super(e),this.response=t}}class eu extends is{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=pi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:n,onError:s});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=oi[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){x();function x(){u.read().then(({done:E,value:v})=>{if(E)m.close();else{_+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let y=0,R=h.length;y<R;y++){const b=h[y];b.onProgress&&b.onProgress(S)}m.enqueue(v),x()}},E=>{m.error(E)})}}});return new Response(p)}else throw new AM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{pi.add(`file:${e}`,l);const h=oi[e];delete oi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=oi[e];if(h===void 0)throw this.manager.itemError(e),l;delete oi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ms=new WeakMap;class RM extends is{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=pi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ms.get(a);u===void 0&&(u=[],Ms.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=Yr("img");function c(){h(),t&&t(this);const u=Ms.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Ms.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),pi.remove(`image:${e}`);const f=Ms.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(u)}Ms.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),pi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class CM extends is{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new $r,o=new eu(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){s!==void 0?s(h):je(h);return}r._applyTexData(a,l),t&&t(a,l)},n,s),a}createDataTexture(e){const t=new $r;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:bn,e.wrapT=t.wrapT!==void 0?t.wrapT:bn,e.magFilter=t.magFilter!==void 0?t.magFilter:Lt,e.minFilter=t.minFilter!==void 0?t.minFilter:Lt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=hn),t.mipmapCount===1&&(e.minFilter=Lt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class PM extends is{constructor(e){super(e)}load(e,t,n,s){const r=new zt,a=new RM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Yo extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class LM extends Yo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Vc=new $e,id=new N,sd=new N;class tu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $h,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;id.setFromMatrixPosition(e.matrixWorld),t.position.copy(id),sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vc,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Kr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ka=new N,za=new an,zn=new N;class Mg extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ka,za,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,za,zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ka,za,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,za,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Li=new N,rd=new ue,ad=new ue;class kt extends Mg{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,rd,ad),t.subVectors(ad,rd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class IM extends tu{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ws*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class DM extends Yo{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new IM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class NM extends tu{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}}class Sg extends Yo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new NM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ts extends Mg{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class FM extends tu{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yg extends Yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new FM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Nr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Wc=new WeakMap;class UM extends is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=pi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Wc.has(a)===!0?(s&&s(Wc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return pi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Wc.set(c,l),pi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});pi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ss=-90,ys=1;class OM extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kt(Ss,ys,e,t);s.layers=this.layers,this.add(s);const r=new kt(Ss,ys,e,t);r.layers=this.layers,this.add(r);const a=new kt(Ss,ys,e,t);a.layers=this.layers,this.add(a);const o=new kt(Ss,ys,e,t);o.layers=this.layers,this.add(o);const c=new kt(Ss,ys,e,t);c.layers=this.layers,this.add(c);const l=new kt(Ss,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class BM extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nu="\\[\\]\\.:\\/",kM=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",zM="[^"+nu.replace("\\.","")+"]",GM=/((?:WC+[\/:])*)/.source.replace("WC",iu),HM=/(WCOD+)?/.source.replace("WCOD",zM),VM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),WM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),XM=new RegExp("^"+GM+HM+VM+WM+"$"),qM=["material","materials","bones","map"];class KM{constructor(e,t,n){const s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kM,"")}static parseTrackName(e){const t=XM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);qM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;je("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=KM;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Eu=class Eu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Eu.prototype.isMatrix2=!0;let od=Eu;function cd(i,e,t,n){const s=YM(n);switch(t){case Ym:return i*e;case kh:return i*e/s.components*s.byteLength;case zh:return i*e/s.components*s.byteLength;case Qi:return i*e*2/s.components*s.byteLength;case Gh:return i*e*2/s.components*s.byteLength;case $m:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case Hh:return i*e*4/s.components*s.byteLength;case co:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Dl:return Math.max(i,16)*Math.max(e,8)/4;case Pl:case Il:return Math.max(i,8)*Math.max(e,8)/2;case Nl:case Fl:case Ol:case Bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ul:case wo:case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eh:case th:case nh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ih:case sh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case To:case rh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function YM(i){switch(i){case ln:case Wm:return{byteLength:1,components:1};case Vr:case Xm:case rn:return{byteLength:2,components:1};case Oh:case Bh:return{byteLength:2,components:4};case Jn:case Uh:case sn:return{byteLength:4,components:1};case qm:case Km:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Eg(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $M(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var JM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_S=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,SS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ES=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TS="gl_FragColor = linearToOutputTexel( gl_FragColor );",AS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,US=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,HS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,VS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$S=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,QS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ry=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ay=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ly=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,my=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,My=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Py=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,By=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ky=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ME=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:JM,alphahash_pars_fragment:jM,alphamap_fragment:ZM,alphamap_pars_fragment:QM,alphatest_fragment:eS,alphatest_pars_fragment:tS,aomap_fragment:nS,aomap_pars_fragment:iS,batching_pars_vertex:sS,batching_vertex:rS,begin_vertex:aS,beginnormal_vertex:oS,bsdfs:cS,iridescence_fragment:lS,bumpmap_pars_fragment:hS,clipping_planes_fragment:uS,clipping_planes_pars_fragment:fS,clipping_planes_pars_vertex:dS,clipping_planes_vertex:pS,color_fragment:mS,color_pars_fragment:gS,color_pars_vertex:bS,color_vertex:_S,common:xS,cube_uv_reflection_fragment:vS,defaultnormal_vertex:MS,displacementmap_pars_vertex:SS,displacementmap_vertex:yS,emissivemap_fragment:ES,emissivemap_pars_fragment:wS,colorspace_fragment:TS,colorspace_pars_fragment:AS,envmap_fragment:RS,envmap_common_pars_fragment:CS,envmap_pars_fragment:PS,envmap_pars_vertex:LS,envmap_physical_pars_fragment:HS,envmap_vertex:IS,fog_vertex:DS,fog_pars_vertex:NS,fog_fragment:FS,fog_pars_fragment:US,gradientmap_pars_fragment:OS,lightmap_pars_fragment:BS,lights_lambert_fragment:kS,lights_lambert_pars_fragment:zS,lights_pars_begin:GS,lights_toon_fragment:VS,lights_toon_pars_fragment:WS,lights_phong_fragment:XS,lights_phong_pars_fragment:qS,lights_physical_fragment:KS,lights_physical_pars_fragment:YS,lights_fragment_begin:$S,lights_fragment_maps:JS,lights_fragment_end:jS,lightprobes_pars_fragment:ZS,logdepthbuf_fragment:QS,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:sy,map_particle_fragment:ry,map_particle_pars_fragment:ay,metalnessmap_fragment:oy,metalnessmap_pars_fragment:cy,morphinstance_vertex:ly,morphcolor_vertex:hy,morphnormal_vertex:uy,morphtarget_pars_vertex:fy,morphtarget_vertex:dy,normal_fragment_begin:py,normal_fragment_maps:my,normal_pars_fragment:gy,normal_pars_vertex:by,normal_vertex:_y,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:vy,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:Sy,iridescence_pars_fragment:yy,opaque_fragment:Ey,packing:wy,premultiplied_alpha_fragment:Ty,project_vertex:Ay,dithering_fragment:Ry,dithering_pars_fragment:Cy,roughnessmap_fragment:Py,roughnessmap_pars_fragment:Ly,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Dy,shadowmap_vertex:Ny,shadowmask_pars_fragment:Fy,skinbase_vertex:Uy,skinning_pars_vertex:Oy,skinning_vertex:By,skinnormal_vertex:ky,specularmap_fragment:zy,specularmap_pars_fragment:Gy,tonemapping_fragment:Hy,tonemapping_pars_fragment:Vy,transmission_fragment:Wy,transmission_pars_fragment:Xy,uv_pars_fragment:qy,uv_pars_vertex:Ky,uv_vertex:Yy,worldpos_vertex:$y,background_vert:Jy,background_frag:jy,backgroundCube_vert:Zy,backgroundCube_frag:Qy,cube_vert:eE,cube_frag:tE,depth_vert:nE,depth_frag:iE,distance_vert:sE,distance_frag:rE,equirect_vert:aE,equirect_frag:oE,linedashed_vert:cE,linedashed_frag:lE,meshbasic_vert:hE,meshbasic_frag:uE,meshlambert_vert:fE,meshlambert_frag:dE,meshmatcap_vert:pE,meshmatcap_frag:mE,meshnormal_vert:gE,meshnormal_frag:bE,meshphong_vert:_E,meshphong_frag:xE,meshphysical_vert:vE,meshphysical_frag:ME,meshtoon_vert:SE,meshtoon_frag:yE,points_vert:EE,points_frag:wE,shadow_vert:TE,shadow_frag:AE,sprite_vert:RE,sprite_frag:CE},we={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Wn={basic:{uniforms:en([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:en([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:en([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:en([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:en([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new qe(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:en([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:en([we.points,we.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:en([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:en([we.common,we.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:en([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:en([we.sprite,we.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:en([we.common,we.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:en([we.lights,we.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Wn.physical={uniforms:en([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Ga={r:0,b:0,g:0},PE=new $e,wg=new et;wg.set(-1,0,0,0,1,0,0,0,1);function LE(i,e,t,n,s,r){const a=new qe(0);let o=s===!0?0:1,c,l,h=null,u=0,f=null;function d(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const v=x.backgroundBlurriness>0;E=e.get(E,v)}return E}function g(x){let E=!1;const v=d(x);v===null?p(a,o):v&&v.isColor&&(p(v,1),E=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,E){const v=d(E);v&&(v.isCubeTexture||v.mapping===Xo)?(l===void 0&&(l=new oe(new gt(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:qs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(PE.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(wg),l.material.toneMapped=lt.getTransfer(v.colorSpace)!==bt,(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new oe(new Mn(2,2),new jn({name:"BackgroundMaterial",uniforms:qs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=lt.getTransfer(v.colorSpace)!==bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,E){x.getRGB(Ga,bg(i)),t.buffers.color.setClear(Ga.r,Ga.g,Ga.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:g,addToRenderList:_,dispose:m}}function IE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(C,U,I,P,F){let G=!1;const z=u(C,P,I,U);r!==z&&(r=z,l(r.object)),G=d(C,P,I,F),G&&g(C,P,I,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(C,U,I,P),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,U,I,P){const F=P.wireframe===!0;let G=n[U.id];G===void 0&&(G={},n[U.id]=G);const z=C.isInstancedMesh===!0?C.id:0;let X=G[z];X===void 0&&(X={},G[z]=X);let O=X[I.id];O===void 0&&(O={},X[I.id]=O);let B=O[F];return B===void 0&&(B=f(c()),O[F]=B),B}function f(C){const U=[],I=[],P=[];for(let F=0;F<t;F++)U[F]=0,I[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:P,object:C,attributes:{},index:null}}function d(C,U,I,P){const F=r.attributes,G=U.attributes;let z=0;const X=I.getAttributes();for(const O in X)if(X[O].location>=0){const k=F[O];let q=G[O];if(q===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(q=C.instanceColor)),k===void 0||k.attribute!==q||q&&k.data!==q.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function g(C,U,I,P){const F={},G=U.attributes;let z=0;const X=I.getAttributes();for(const O in X)if(X[O].location>=0){let k=G[O];k===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(k=C.instanceColor));const q={};q.attribute=k,k&&k.data&&(q.data=k.data),F[O]=q,z++}r.attributes=F,r.attributesNum=z,r.index=P}function _(){const C=r.newAttributes;for(let U=0,I=C.length;U<I;U++)C[U]=0}function p(C){m(C,0)}function m(C,U){const I=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;I[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),F[C]!==U&&(i.vertexAttribDivisor(C,U),F[C]=U)}function x(){const C=r.newAttributes,U=r.enabledAttributes;for(let I=0,P=U.length;I<P;I++)U[I]!==C[I]&&(i.disableVertexAttribArray(I),U[I]=0)}function E(C,U,I,P,F,G,z){z===!0?i.vertexAttribIPointer(C,U,I,F,G):i.vertexAttribPointer(C,U,I,P,F,G)}function v(C,U,I,P){_();const F=P.attributes,G=I.getAttributes(),z=U.defaultAttributeValues;for(const X in G){const O=G[X];if(O.location>=0){let B=F[X];if(B===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(B=C.instanceColor)),B!==void 0){const k=B.normalized,q=B.itemSize,j=e.get(B);if(j===void 0)continue;const de=j.buffer,xe=j.type,Ne=j.bytesPerElement,J=xe===i.INT||xe===i.UNSIGNED_INT||B.gpuType===Uh;if(B.isInterleavedBufferAttribute){const Z=B.data,fe=Z.stride,Ce=B.offset;if(Z.isInstancedInterleavedBuffer){for(let be=0;be<O.locationSize;be++)m(O.location+be,Z.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let be=0;be<O.locationSize;be++)p(O.location+be);i.bindBuffer(i.ARRAY_BUFFER,de);for(let be=0;be<O.locationSize;be++)E(O.location+be,q/O.locationSize,xe,k,fe*Ne,(Ce+q/O.locationSize*be)*Ne,J)}else{if(B.isInstancedBufferAttribute){for(let Z=0;Z<O.locationSize;Z++)m(O.location+Z,B.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Z=0;Z<O.locationSize;Z++)p(O.location+Z);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Z=0;Z<O.locationSize;Z++)E(O.location+Z,q/O.locationSize,xe,k,q*Ne,q/O.locationSize*Z*Ne,J)}}else if(z!==void 0){const k=z[X];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(O.location,k);break;case 3:i.vertexAttrib3fv(O.location,k);break;case 4:i.vertexAttrib4fv(O.location,k);break;default:i.vertexAttrib1fv(O.location,k)}}}}x()}function S(){w();for(const C in n){const U=n[C];for(const I in U){const P=U[I];for(const F in P){const G=P[F];for(const z in G)h(G[z].object),delete G[z];delete P[F]}}delete n[C]}}function y(C){if(n[C.id]===void 0)return;const U=n[C.id];for(const I in U){const P=U[I];for(const F in P){const G=P[F];for(const z in G)h(G[z].object),delete G[z];delete P[F]}}delete n[C.id]}function R(C){for(const U in n){const I=n[U];for(const P in I){const F=I[P];if(F[C.id]===void 0)continue;const G=F[C.id];for(const z in G)h(G[z].object),delete G[z];delete F[C.id]}}}function b(C){for(const U in n){const I=n[U],P=C.isInstancedMesh===!0?C.id:0,F=I[P];if(F!==void 0){for(const G in F){const z=F[G];for(const X in z)h(z[X].object),delete z[X];delete F[G]}delete I[P],Object.keys(I).length===0&&delete n[U]}}}function w(){A(),a=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfObject:b,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function DE(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function NE(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==_n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const b=R===rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ln&&R!==sn&&!b&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(ze("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:v,maxSamples:S,samples:y}}function FE(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Di,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const x=r?0:n,E=x*4;let v=m.clippingState||null;c.value=v,v=h(g,f,E,d);for(let S=0;S!==E;++S)v[S]=t[S];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=d+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,v=d;E!==_;++E,v+=4)a.copy(u[E]).applyMatrix4(x,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const Os=4,UE=6,OE=20,BE=256,cr=new ts,ld=new qe;let Xc=null,qc=0,Kc=0,Yc=!1;const kE=new N,Vi=new N;class uh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=kE}=r;Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xc,qc,Kc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:rn,format:_n,colorSpace:tn,depthBuffer:!1},s=hd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=zE(r)),this._blurMaterial=HE(r,e,t),this._ggxMaterial=GE(r,e,t)}return s}_compileMaterial(e){const t=new oe(new Ct,e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,n,s,r){const c=new kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ld),u.toneMapping=$n,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new gt,new Kn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,m=!0):(p.color.copy(ld),m=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const S=this._cubeSize;Es(s,v*S,E>2?S:0,S,S),u.setRenderTarget(s),m&&u.render(_,c),u.render(e,c)}u.toneMapping=d,u.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Zi||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Es(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=l*1.25,d=u*f,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Os?n-g+Os:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,Es(r,p,m,3*_,2*_),s.setRenderTarget(r),s.render(o,cr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Es(e,p,m,3*_,2*_),s.setRenderTarget(e),s.render(o,cr)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],u=3*h*(s>this._lodMax-Os?s-this._lodMax+Os:0),f=4*(this._cubeSize-h);Es(t,u,f,3*h,2*h),a.setRenderTarget(t),a.render(c,cr)}}function zE(i){const e=[],t=[];let n=i;const s=i-Os+1+UE;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,d=3,g=new Float32Array(d*f*u),_=new Float32Array(d*f*u);for(let m=0;m<u;m++){const x=m%3*2/3-1,E=m>2?0:-1,v=[x,E,0,x+2/3,E,0,x+2/3,E+1,0,x,E,0,x+2/3,E+1,0,x,E+1,0];g.set(v,d*f*m);for(let S=0;S<f;S++){const y=h[S*2]*2-1,R=h[S*2+1]*2-1;m===0?Vi.set(1,R,y):m===1?Vi.set(-y,1,-R):m===2?Vi.set(-y,R,1):m===3?Vi.set(-1,R,-y):m===4?Vi.set(-y,-1,R):Vi.set(y,R,-1),Vi.toArray(_,(m*f+S)*d)}}const p=new Ct;p.setAttribute("position",new Rt(g,d)),p.setAttribute("outputDirection",new Rt(_,d)),t.push(new oe(p,null)),n>Os&&n--}return{lodMeshes:t,sizeLods:e}}function hd(i,e,t){const n=new vn(i,e,t);return n.texture.mapping=Xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function GE(i,e,t){return new jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$o(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function HE(i,e,t){return new jn({name:"SphericalGaussianBlur",defines:{SAMPLES:OE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$o(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ud(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fd(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function $o(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Tg extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new og(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gt(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:bi});r.uniforms.tEquirect.value=t;const a=new oe(s,r),o=t.minFilter;return t.minFilter===hn&&(t.minFilter=Lt),new OM(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function VE(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Cr||d===dc)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new Tg(g.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",l),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,g=d===Cr||d===dc,_=d===Zi||d===Vs;if(g||_){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new uh(i)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return g&&x&&x.height>0||_&&x&&c(x)?(n===null&&(n=new uh(i)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,d){return d===Cr?f.mapping=Zi:d===dc&&(f.mapping=Vs),f}function c(f){let d=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&d++;return d===g}function l(f){const d=f.target;d.removeEventListener("dispose",l);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function WE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Bs("WebGLRenderer: "+n+" extension not supported."),s}}}function XE(i,e,t,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(g===void 0)return;if(d!==null){const x=d.array;_=d.version;for(let E=0,v=x.length;E<v;E+=3){const S=x[E+0],y=x[E+1],R=x[E+2];f.push(S,y,y,R,R,S)}}else{const x=g.array;_=g.version;for(let E=0,v=x.length/3-1;E<v;E+=3){const S=E+0,y=E+1,R=E+2;f.push(S,y,y,R,R,S)}}const p=new(g.count>=65535?ig:ng)(f,1);p.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function qE(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function l(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*a,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function KE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function YE(i,e,t){const n=new WeakMap,s=new St;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let E=0;d===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let v=o.attributes.position.count*E,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const y=new Float32Array(v*S*4*u),R=new Qm(y,v,S,u);R.type=sn,R.needsUpdate=!0;const b=E*4;for(let A=0;A<u;A++){const C=p[A],U=m[A],I=x[A],P=v*S*4*A;for(let F=0;F<C.count;F++){const G=F*b;d===!0&&(s.fromBufferAttribute(C,F),y[P+G+0]=s.x,y[P+G+1]=s.y,y[P+G+2]=s.z,y[P+G+3]=0),g===!0&&(s.fromBufferAttribute(U,F),y[P+G+4]=s.x,y[P+G+5]=s.y,y[P+G+6]=s.z,y[P+G+7]=0),_===!0&&(s.fromBufferAttribute(I,F),y[P+G+8]=s.x,y[P+G+9]=s.y,y[P+G+10]=s.z,y[P+G+11]=I.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new ue(v,S)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function $E(i,e,t,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const JE={[Um]:"LINEAR_TONE_MAPPING",[Om]:"REINHARD_TONE_MAPPING",[Bm]:"CINEON_TONE_MAPPING",[Fh]:"ACES_FILMIC_TONE_MAPPING",[zm]:"AGX_TONE_MAPPING",[Gm]:"NEUTRAL_TONE_MAPPING",[km]:"CUSTOM_TONE_MAPPING"};function jE(i,e,t,n,s,r){const a=new vn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Ct;l.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new dt([0,2,0,0,2,0],2));const h=new lM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new oe(l,h),f=new ts(-1,1,1,-1,0,1);let d=null,g=null,_=!1,p,m=null,x=[],E=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),c!==null&&c.setSize(v,S);for(let y=0;y<x.length;y++){const R=x[y];R.setSize&&R.setSize(v,S)}},this.setEffects=function(v){x=v,E=x.length>0&&x[0].isRenderPass===!0;const S=a.width,y=a.height;x.length>0&&o===null&&(o=new vn(S,y,{type:rn,depthBuffer:!1,stencilBuffer:!1}),c=new vn(S,y,{type:rn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<x.length;R++){const b=x[R];b.setSize&&b.setSize(S,y)}},this.begin=function(v,S){if(_||v.toneMapping===$n&&x.length===0)return!1;if(m=S,S!==null){const y=S.width,R=S.height;(a.width!==y||a.height!==R)&&this.setSize(y,R)}return E===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=$n,!0},this.hasRenderPass=function(){return E},this.end=function(v,S){v.toneMapping=p,_=!0;let y=a,R=o;for(let b=0;b<x.length;b++){const w=x[b];w.enabled!==!1&&(w.render(v,R,y,S),w.needsSwap!==!1&&(y=R,R=R===o?c:o))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,h.defines={},lt.getTransfer(d)===bt&&(h.defines.SRGB_TRANSFER="");const b=JE[g];b&&(h.defines[b]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(m),v.render(u,f),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Ag=new zt,fh=new Jr(1,1),Rg=new Qm,Cg=new Zx,Pg=new og,dd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),bd=new Float32Array(4);function Js(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=dd[s];if(r===void 0&&(r=new Float32Array(s),dd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jo(i,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ZE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function QE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function ew(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function tw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function nw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;bd.set(n),i.uniformMatrix2fv(this.addr,!1,bd),Ht(t,n)}}function iw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;gd.set(n),i.uniformMatrix3fv(this.addr,!1,gd),Ht(t,n)}}function sw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;md.set(n),i.uniformMatrix4fv(this.addr,!1,md),Ht(t,n)}}function rw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function aw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function ow(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function cw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function lw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function uw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function fw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function dw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fh.compareFunction=t.isReversedDepthBuffer()?Wh:Vh,r=fh):r=Ag,t.setTexture2D(e||r,s)}function pw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cg,s)}function mw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pg,s)}function gw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rg,s)}function bw(i){switch(i){case 5126:return ZE;case 35664:return QE;case 35665:return ew;case 35666:return tw;case 35674:return nw;case 35675:return iw;case 35676:return sw;case 5124:case 35670:return rw;case 35667:case 35671:return aw;case 35668:case 35672:return ow;case 35669:case 35673:return cw;case 5125:return lw;case 36294:return hw;case 36295:return uw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return dw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return gw}}function _w(i,e){i.uniform1fv(this.addr,e)}function xw(i,e){const t=Js(e,this.size,2);i.uniform2fv(this.addr,t)}function vw(i,e){const t=Js(e,this.size,3);i.uniform3fv(this.addr,t)}function Mw(i,e){const t=Js(e,this.size,4);i.uniform4fv(this.addr,t)}function Sw(i,e){const t=Js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yw(i,e){const t=Js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ew(i,e){const t=Js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ww(i,e){i.uniform1iv(this.addr,e)}function Tw(i,e){i.uniform2iv(this.addr,e)}function Aw(i,e){i.uniform3iv(this.addr,e)}function Rw(i,e){i.uniform4iv(this.addr,e)}function Cw(i,e){i.uniform1uiv(this.addr,e)}function Pw(i,e){i.uniform2uiv(this.addr,e)}function Lw(i,e){i.uniform3uiv(this.addr,e)}function Iw(i,e){i.uniform4uiv(this.addr,e)}function Dw(i,e,t){const n=this.cache,s=e.length,r=Jo(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=fh:a=Ag;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Nw(i,e,t){const n=this.cache,s=e.length,r=Jo(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cg,r[a])}function Fw(i,e,t){const n=this.cache,s=e.length,r=Jo(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pg,r[a])}function Uw(i,e,t){const n=this.cache,s=e.length,r=Jo(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rg,r[a])}function Ow(i){switch(i){case 5126:return _w;case 35664:return xw;case 35665:return vw;case 35666:return Mw;case 35674:return Sw;case 35675:return yw;case 35676:return Ew;case 5124:case 35670:return ww;case 35667:case 35671:return Tw;case 35668:case 35672:return Aw;case 35669:case 35673:return Rw;case 5125:return Cw;case 36294:return Pw;case 36295:return Lw;case 36296:return Iw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Uw}}class Bw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bw(t.type)}}class kw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ow(t.type)}}class zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function _d(i,e){i.seq.push(e),i.map[e.id]=e}function Gw(i,e,t){const n=i.name,s=n.length;for($c.lastIndex=0;;){const r=$c.exec(n),a=$c.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){_d(t,l===void 0?new Bw(o,i,e):new kw(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new zw(o),_d(t,u)),t=u}}}class po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Gw(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function xd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Hw=37297;let Vw=0;function Ww(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const vd=new et;function Xw(i){lt._getMatrix(vd,lt.workingColorSpace,i);const e=`mat3( ${vd.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Ro:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Md(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ww(i.getShaderSource(e),o)}else return r}function qw(i,e){const t=Xw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Kw={[Um]:"Linear",[Om]:"Reinhard",[Bm]:"Cineon",[Fh]:"ACESFilmic",[zm]:"AgX",[Gm]:"Neutral",[km]:"Custom"};function Yw(i,e){const t=Kw[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ha=new N;function $w(){lt.getLuminanceCoefficients(Ha);const i=Ha.x.toFixed(4),e=Ha.y.toFixed(4),t=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function jw(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zw(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Mr(i){return i!==""}function Sd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(i){return i.replace(Qw,tT)}const eT=new Map;function tT(i,e){let t=at[e];if(t===void 0){const n=eT.get(e);if(n!==void 0)t=at[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return dh(t)}const nT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(i){return i.replace(nT,iT)}function iT(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sT={[ao]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function rT(i){return sT[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aT={[Zi]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE",[Xo]:"ENVMAP_TYPE_CUBE_UV"};function oT(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":aT[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const cT={[Vs]:"ENVMAP_MODE_REFRACTION"};function lT(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":cT[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hT={[Nh]:"ENVMAP_BLENDING_MULTIPLY",[ux]:"ENVMAP_BLENDING_MIX",[fx]:"ENVMAP_BLENDING_ADD"};function uT(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hT[i.combine]||"ENVMAP_BLENDING_NONE"}function fT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dT(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=rT(t),l=oT(t),h=lT(t),u=uT(t),f=fT(t),d=Jw(t),g=jw(r),_=s.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`)):(p=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),m=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?at.tonemapping_pars_fragment:"",t.toneMapping!==$n?Yw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,qw("linearToOutputTexel",t.outputColorSpace),$w(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),a=dh(a),a=Sd(a,t),a=yd(a,t),o=dh(o),o=Sd(o,t),o=yd(o,t),a=Ed(a),o=Ed(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=x+p+a,v=x+m+o,S=xd(s,s.VERTEX_SHADER,E),y=xd(s,s.FRAGMENT_SHADER,v);s.attachShader(_,S),s.attachShader(_,y),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",I=s.getShaderInfoLog(S)||"",P=s.getShaderInfoLog(y)||"",F=U.trim(),G=I.trim(),z=P.trim();let X=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,y);else{const B=Md(s,S,"vertex"),k=Md(s,y,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+B+`
`+k)}else F!==""?ze("WebGLProgram: Program Info Log:",F):(G===""||z==="")&&(O=!1);O&&(C.diagnostics={runnable:X,programLog:F,vertexShader:{log:G,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(S),s.deleteShader(y),b=new po(s,_),w=Zw(s,_)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,Hw)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=y,this}let pT=0;class mT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gT(e),t.set(e,n)),n}}class gT{constructor(e){this.id=pT++,this.code=e,this.usedTimes=0}}function bT(i){return i===Qi||i===wo||i===To}function _T(i,e,t,n,s,r){const a=new eg,o=new mT,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,w,A,C,U,I){const P=C.fog,F=U.geometry,G=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?C.environment:null,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,X=e.get(b.envMap||G,z),O=X&&X.mapping===Xo?X.image.height:null,B=d[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&ze("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const k=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,q=k!==void 0?k.length:0;let j=0;F.morphAttributes.position!==void 0&&(j=1),F.morphAttributes.normal!==void 0&&(j=2),F.morphAttributes.color!==void 0&&(j=3);let de,xe,Ne,J;if(B){const Tt=Wn[B];de=Tt.vertexShader,xe=Tt.fragmentShader}else{de=b.vertexShader,xe=b.fragmentShader;const Tt=o.getVertexShaderStage(b),pt=o.getFragmentShaderStage(b);o.update(b,Tt,pt),Ne=Tt.id,J=pt.id}const Z=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Ce=U.isInstancedMesh===!0,be=U.isBatchedMesh===!0,Pe=!!b.map,Ke=!!b.matcap,te=!!X,ae=!!b.aoMap,ce=!!b.lightMap,he=!!b.bumpMap&&b.wireframe===!1,pe=!!b.normalMap,Le=!!b.displacementMap,Fe=!!b.emissiveMap,ie=!!b.metalnessMap,me=!!b.roughnessMap,D=b.anisotropy>0,Ge=b.clearcoat>0,Je=b.dispersion>0,L=b.retroreflectivity>0,M=b.iridescence>0,W=b.sheen>0,$=b.transmission>0,ee=D&&!!b.anisotropyMap,ge=Ge&&!!b.clearcoatMap,_e=Ge&&!!b.clearcoatNormalMap,ne=Ge&&!!b.clearcoatRoughnessMap,re=M&&!!b.iridescenceMap,ve=M&&!!b.iridescenceThicknessMap,He=W&&!!b.sheenColorMap,Ee=W&&!!b.sheenRoughnessMap,Me=!!b.specularMap,Ve=!!b.specularColorMap,Ye=!!b.specularIntensityMap,it=$&&!!b.transmissionMap,V=$&&!!b.thicknessMap,Se=!!b.gradientMap,se=!!b.alphaMap,ye=b.alphaTest>0,Re=!!b.alphaHash,le=!!b.extensions;let We=$n;b.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(We=i.toneMapping);const Be={shaderID:B,shaderType:b.type,shaderName:b.name,vertexShader:de,fragmentShader:xe,defines:b.defines,customVertexShaderID:Ne,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:be,batchingColor:be&&U._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&U.instanceColor!==null,instancingMorph:Ce&&U.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Pe,matcap:Ke,envMap:te,envMapMode:te&&X.mapping,envMapCubeUVHeight:O,aoMap:ae,lightMap:ce,bumpMap:he,normalMap:pe,displacementMap:Le,emissiveMap:Fe,normalMapObjectSpace:pe&&b.normalMapType===bx,normalMapTangentSpace:pe&&b.normalMapType===Ao,packedNormalMap:pe&&b.normalMapType===Ao&&bT(b.normalMap.format),metalnessMap:ie,roughnessMap:me,anisotropy:D,anisotropyMap:ee,clearcoat:Ge,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ne,dispersion:Je,retroreflection:L,iridescence:M,iridescenceMap:re,iridescenceThicknessMap:ve,sheen:W,sheenColorMap:He,sheenRoughnessMap:Ee,specularMap:Me,specularColorMap:Ve,specularIntensityMap:Ye,transmission:$,transmissionMap:it,thicknessMap:V,gradientMap:Se,opaque:b.transparent===!1&&b.blending===Rr&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:ye,alphaHash:Re,combine:b.combine,mapUv:Pe&&g(b.map.channel),aoMapUv:ae&&g(b.aoMap.channel),lightMapUv:ce&&g(b.lightMap.channel),bumpMapUv:he&&g(b.bumpMap.channel),normalMapUv:pe&&g(b.normalMap.channel),displacementMapUv:Le&&g(b.displacementMap.channel),emissiveMapUv:Fe&&g(b.emissiveMap.channel),metalnessMapUv:ie&&g(b.metalnessMap.channel),roughnessMapUv:me&&g(b.roughnessMap.channel),anisotropyMapUv:ee&&g(b.anisotropyMap.channel),clearcoatMapUv:ge&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(b.sheenRoughnessMap.channel),specularMapUv:Me&&g(b.specularMap.channel),specularColorMapUv:Ve&&g(b.specularColorMap.channel),specularIntensityMapUv:Ye&&g(b.specularIntensityMap.channel),transmissionMapUv:it&&g(b.transmissionMap.channel),thicknessMapUv:V&&g(b.thicknessMap.channel),alphaMapUv:se&&g(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pe||D),vertexNormals:!!F.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(Pe||se),fog:!!P,useFog:b.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||F.attributes.normal===void 0&&pe===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:j,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===bt,decodeVideoTextureEmissive:Fe&&b.emissiveMap.isVideoTexture===!0&&lt.getTransfer(b.emissiveMap.colorSpace)===bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===nn,flipSided:b.side===Xt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:le&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&b.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const A in b.defines)w.push(A),w.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(m(w,b),x(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function m(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numSunLights),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numSunLightShadows),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function x(b,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function E(b){const w=d[b.type];let A;if(w){const C=Wn[w];A=aM.clone(C.uniforms)}else A=b.uniforms;return A}function v(b,w){let A=h.get(w);return A!==void 0?++A.usedTimes:(A=new dT(i,w,b,s),l.push(A),h.set(w,A)),A}function S(b){if(--b.usedTimes===0){const w=l.indexOf(b);l[w]=l[l.length-1],l.pop(),h.delete(b.cacheKey),b.destroy()}}function y(b){o.remove(b)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:E,acquireProgram:v,releaseProgram:S,releaseShaderCache:y,programs:l,dispose:R}}function xT(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function vT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Td(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ad(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,_,p,m){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},i[e]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=g,x.materialVariant=a(f),x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=p,x.group=m),e++,x}function c(f,d,g,_,p,m,x){x.reversedDepth===!0&&(p=-p);const E=o(f,d,g,_,p,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function l(f,d,g,_,p,m){const x=o(f,d,g,_,p,m);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function h(f,d){t.length>1&&t.sort(f||vT),n.length>1&&n.sort(d||Td),s.length>1&&s.sort(d||Td)}function u(){for(let f=e,d=i.length;f<d;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function MT(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ad,i.set(n,[a])):s>=r.length?(a=new Ad,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ST(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new qe};break;case"SpotLight":t={position:new N,direction:new N,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function yT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ET=0;function wT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function TT(i){const e=new ST,t=yT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new $e,a=new $e;function o(l){let h=0,u=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,x=0,E=0,v=0,S=0,y=0,R=0,b=0,w=0,A=0;l.sort(wT);for(let U=0,I=l.length;U<I;U++){const P=l[U],F=P.color,G=P.intensity,z=P.distance;let X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Qi?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*G,u+=F.g*G,f+=F.b*G;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],G);A++}else if(P.isSunLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,k=t.get(P);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[g]=k,n.sunShadowMap[g]=X;const q=B.getViewportCount();for(let j=0;j<q;j++)n.sunShadowMatrix[_+j]=B.getMatrix(j),n.sunShadowCascade[_+j]=B._cascadeData[j];_+=q,g++}n.sun[d]=O,d++}else if(P.isDirectionalLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,k=t.get(P);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=O,p++}else if(P.isSpotLight){const O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(F).multiplyScalar(G),O.distance=z,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[x]=O;const B=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,B.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[x]=B.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=X,R++}x++}else if(P.isRectAreaLight){const O=e.get(P);O.color.copy(F).multiplyScalar(G),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[E]=O,E++}else if(P.isPointLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const B=P.shadow,k=t.get(P);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=O,m++}else if(P.isHemisphereLight){const O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(G),O.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[v]=O,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.sunLength!==d||C.directionalLength!==p||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==E||C.hemiLength!==v||C.numSunShadows!==g||C.numDirectionalShadows!==S||C.numPointShadows!==y||C.numSpotShadows!==R||C.numSpotMaps!==b||C.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=p,n.spot.length=x,n.rectArea.length=E,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.sunLength=d,C.directionalLength=p,C.pointLength=m,C.spotLength=x,C.rectAreaLength=E,C.hemiLength=v,C.numSunShadows=g,C.numDirectionalShadows=S,C.numPointShadows=y,C.numSpotShadows=R,C.numSpotMaps=b,C.numLightProbes=A,n.version=ET++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let x=0,E=l.length;x<E;x++){const v=l[x];if(v.isSunLight){const S=n.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),u++}else if(v.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const S=n.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function Rd(i){const e=new TT(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){s.push(f)}function l(){e.setup(t)}function h(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function AT(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Rd(i),e.set(s,[o])):r>=a.length?(o=new Rd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const RT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,PT=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],LT=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Cd=new $e,lr=new N,Jc=new N;function IT(i,e,t){let n=new $h;const s=new ue,r=new ue,a=new St,o=new uM,c=new fM,l={},h=t.maxTextureSize,u={[vi]:Xt,[Xt]:vi,[nn]:nn},f=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:RT,fragmentShader:CT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ct;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new oe(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let m=this.type;this.render=function(y,R,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===q_&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ao);const w=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(bi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=m!==this.type;I&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=y.length;P<F;P++){const G=y[P],z=G.shadow;if(z===void 0){ze("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const X=z.getFrameExtents();s.multiply(X),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,z.mapSize.y=r.y));const O=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=O,z.map===null||I===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Us){if(G.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new vn(s.x,s.y,{format:Qi,type:rn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new Jr(s.x,s.y,sn),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=Mi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Bt,z.map.depthTexture.magFilter=Bt}else G.isPointLight?(z.map=new Tg(s.x),z.map.depthTexture=new Ev(s.x,Jn)):(z.map=new vn(s.x,s.y),z.map.depthTexture=new Jr(s.x,s.y,Jn)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=Mi,this.type===ao?(z.map.depthTexture.compareFunction=O?Wh:Vh,z.map.depthTexture.minFilter=Lt,z.map.depthTexture.magFilter=Lt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Bt,z.map.depthTexture.magFilter=Bt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const B=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();G.isPointLight!==!0&&z.updateMatrices(G,b);for(let k=0;k<B;k++){const q=z.getCamera(k);if(G.isPointLight){const j=z.camera,de=z.matrix,xe=G.distance||j.far;xe!==j.far&&(j.far=xe,j.updateProjectionMatrix()),lr.setFromMatrixPosition(G.matrixWorld),j.position.copy(lr),Jc.copy(j.position),Jc.add(PT[k]),j.up.copy(LT[k]),j.lookAt(Jc),j.updateMatrixWorld(),de.makeTranslation(-lr.x,-lr.y,-lr.z),Cd.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Cd,j.coordinateSystem,j.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,k),i.clear();else{k===0&&(i.setRenderTarget(z.map),i.clear());const j=z.getViewport(k);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),U.viewport(a)}n=z.getFrustum(k),v(R,b,q,G,this.type)}z.isPointLightShadow!==!0&&this.type===Us&&x(z,b),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,A,C)};function x(y,R){const b=e.update(_);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new vn(s.x,s.y,{format:Qi,type:rn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),f.uniforms.shadow_pass.value=y.map.depthTexture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(R,null,b,f,_,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(R,null,b,d,_,null)}function E(y,R,b,w){let A=null;const C=b.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)A=C;else if(A=b.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=A.uuid,I=R.uuid;let P=l[U];P===void 0&&(P={},l[U]=P);let F=P[I];F===void 0&&(F=A.clone(),P[I]=F,R.addEventListener("dispose",S)),A=F}if(A.visible=R.visible,A.wireframe=R.wireframe,w===Us?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:u[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const U=i.properties.get(A);U.light=b}return A}function v(y,R,b,w,A){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&A===Us)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,y.matrixWorld);const I=e.update(y),P=y.material;if(Array.isArray(P)){const F=I.groups;for(let G=0,z=F.length;G<z;G++){const X=F[G],O=P[X.materialIndex];if(O&&O.visible){const B=E(y,O,w,A);y.onBeforeShadow(i,y,R,b,I,B,X),i.renderBufferDirect(b,null,I,B,y,X),y.onAfterShadow(i,y,R,b,I,B,X)}}}else if(P.visible){const F=E(y,P,w,A);y.onBeforeShadow(i,y,R,b,I,F,null),i.renderBufferDirect(b,null,I,F,y,null),y.onAfterShadow(i,y,R,b,I,F,null)}}const U=y.children;for(let I=0,P=U.length;I<P;I++)v(U[I],R,b,w,A)}function S(y){y.target.removeEventListener("dispose",S);for(const b in l){const w=l[b],A=y.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function DT(i,e){function t(){let V=!1;const Se=new St;let se=null;const ye=new St(0,0,0,0);return{setMask:function(Re){se!==Re&&!V&&(i.colorMask(Re,Re,Re,Re),se=Re)},setLocked:function(Re){V=Re},setClear:function(Re,le,We,Be,Tt){Tt===!0&&(Re*=Be,le*=Be,We*=Be),Se.set(Re,le,We,Be),ye.equals(Se)===!1&&(i.clearColor(Re,le,We,Be),ye.copy(Se))},reset:function(){V=!1,se=null,ye.set(-1,0,0,0)}}}function n(){let V=!1,Se=!1,se=null,ye=null,Re=null;return{setReversed:function(le){if(Se!==le){const We=e.get("EXT_clip_control");le?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Se=le;const Be=Re;Re=null,this.setClear(Be)}},getReversed:function(){return Se},setTest:function(le){le?Z(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(le){se!==le&&!V&&(i.depthMask(le),se=le)},setFunc:function(le){if(Se&&(le=Cx[le]),ye!==le){switch(le){case yl:i.depthFunc(i.NEVER);break;case El:i.depthFunc(i.ALWAYS);break;case wl:i.depthFunc(i.LESS);break;case Hr:i.depthFunc(i.LEQUAL);break;case Tl:i.depthFunc(i.EQUAL);break;case Al:i.depthFunc(i.GEQUAL);break;case Rl:i.depthFunc(i.GREATER);break;case Cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=le}},setLocked:function(le){V=le},setClear:function(le){Re!==le&&(Re=le,Se&&(le=1-le),i.clearDepth(le))},reset:function(){V=!1,se=null,ye=null,Re=null,Se=!1}}}function s(){let V=!1,Se=null,se=null,ye=null,Re=null,le=null,We=null,Be=null,Tt=null;return{setTest:function(pt){V||(pt?Z(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(pt){Se!==pt&&!V&&(i.stencilMask(pt),Se=pt)},setFunc:function(pt,En,Bn){(se!==pt||ye!==En||Re!==Bn)&&(i.stencilFunc(pt,En,Bn),se=pt,ye=En,Re=Bn)},setOp:function(pt,En,Bn){(le!==pt||We!==En||Be!==Bn)&&(i.stencilOp(pt,En,Bn),le=pt,We=En,Be=Bn)},setLocked:function(pt){V=pt},setClear:function(pt){Tt!==pt&&(i.clearStencil(pt),Tt=pt)},reset:function(){V=!1,Se=null,se=null,ye=null,Re=null,le=null,We=null,Be=null,Tt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f={},d=new WeakMap,g=[],_=null,p=!1,m=null,x=null,E=null,v=null,S=null,y=null,R=null,b=new qe(0,0,0),w=0,A=!1,C=null,U=null,I=null,P=null,F=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,X=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),z=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),z=X>=2);let B=null,k={};const q=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),de=new St().fromArray(q),xe=new St().fromArray(j);function Ne(V,Se,se,ye){const Re=new Uint8Array(4),le=i.createTexture();i.bindTexture(V,le),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<se;We++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Se+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return le}const J={};J[i.TEXTURE_2D]=Ne(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Hr),he(!1),pe(cf),Z(i.CULL_FACE),ae(bi);function Z(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function fe(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function Ce(V,Se){return f[V]!==Se?(i.bindFramebuffer(V,Se),f[V]=Se,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Se),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function be(V,Se){let se=g,ye=!1;if(V){se=d.get(Se),se===void 0&&(se=[],d.set(Se,se));const Re=V.textures;if(se.length!==Re.length||se[0]!==i.COLOR_ATTACHMENT0){for(let le=0,We=Re.length;le<We;le++)se[le]=i.COLOR_ATTACHMENT0+le;se.length=Re.length,ye=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,ye=!0);ye&&i.drawBuffers(se)}function Pe(V){return _!==V?(i.useProgram(V),_=V,!0):!1}const Ke={[Is]:i.FUNC_ADD,[Y_]:i.FUNC_SUBTRACT,[$_]:i.FUNC_REVERSE_SUBTRACT};Ke[J_]=i.MIN,Ke[j_]=i.MAX;const te={[Z_]:i.ZERO,[Q_]:i.ONE,[ex]:i.SRC_COLOR,[Nm]:i.SRC_ALPHA,[ax]:i.SRC_ALPHA_SATURATE,[sx]:i.DST_COLOR,[nx]:i.DST_ALPHA,[tx]:i.ONE_MINUS_SRC_COLOR,[Fm]:i.ONE_MINUS_SRC_ALPHA,[rx]:i.ONE_MINUS_DST_COLOR,[ix]:i.ONE_MINUS_DST_ALPHA,[ox]:i.CONSTANT_COLOR,[cx]:i.ONE_MINUS_CONSTANT_COLOR,[lx]:i.CONSTANT_ALPHA,[hx]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(V,Se,se,ye,Re,le,We,Be,Tt,pt){if(V===bi){p===!0&&(fe(i.BLEND),p=!1);return}if(p===!1&&(Z(i.BLEND),p=!0),V!==K_){if(V!==m||pt!==A){if((x!==Is||S!==Is)&&(i.blendEquation(i.FUNC_ADD),x=Is,S=Is),pt)switch(V){case Rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lf:i.blendFunc(i.ONE,i.ONE);break;case hf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",V);break}else switch(V){case Rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hf:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uf:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",V);break}E=null,v=null,y=null,R=null,b.set(0,0,0),w=0,m=V,A=pt}return}Re=Re||Se,le=le||se,We=We||ye,(Se!==x||Re!==S)&&(i.blendEquationSeparate(Ke[Se],Ke[Re]),x=Se,S=Re),(se!==E||ye!==v||le!==y||We!==R)&&(i.blendFuncSeparate(te[se],te[ye],te[le],te[We]),E=se,v=ye,y=le,R=We),(Be.equals(b)===!1||Tt!==w)&&(i.blendColor(Be.r,Be.g,Be.b,Tt),b.copy(Be),w=Tt),m=V,A=!1}function ce(V,Se){V.side===nn?fe(i.CULL_FACE):Z(i.CULL_FACE);let se=V.side===Xt;Se&&(se=!se),he(se),V.blending===Rr&&V.transparent===!1?ae(bi):ae(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const ye=V.stencilWrite;o.setTest(ye),ye&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Fe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(V){C!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),C=V)}function pe(V){V!==W_?(Z(i.CULL_FACE),V!==U&&(V===cf?i.cullFace(i.BACK):V===X_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),U=V}function Le(V){V!==I&&(z&&i.lineWidth(V),I=V)}function Fe(V,Se,se){V?(Z(i.POLYGON_OFFSET_FILL),(P!==Se||F!==se)&&(P=Se,F=se,a.getReversed()&&(Se=-Se),i.polygonOffset(Se,se))):fe(i.POLYGON_OFFSET_FILL)}function ie(V){V?Z(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function me(V){V===void 0&&(V=i.TEXTURE0+G-1),B!==V&&(i.activeTexture(V),B=V)}function D(V,Se,se){se===void 0&&(B===null?se=i.TEXTURE0+G-1:se=B);let ye=k[se];ye===void 0&&(ye={type:void 0,texture:void 0},k[se]=ye),(ye.type!==V||ye.texture!==Se)&&(B!==se&&(i.activeTexture(se),B=se),i.bindTexture(V,Se||J[V]),ye.type=V,ye.texture=Se)}function Ge(){const V=k[B];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Je(){try{i.compressedTexImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function M(){try{i.texSubImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function W(){try{i.texSubImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function ge(){try{i.texStorage2D(...arguments)}catch(V){je("WebGLState:",V)}}function _e(){try{i.texStorage3D(...arguments)}catch(V){je("WebGLState:",V)}}function ne(){try{i.texImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function re(){try{i.texImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function ve(V){return u[V]!==void 0?u[V]:i.getParameter(V)}function He(V,Se){u[V]!==Se&&(i.pixelStorei(V,Se),u[V]=Se)}function Ee(V){de.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),de.copy(V))}function Me(V){xe.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),xe.copy(V))}function Ve(V,Se){let se=l.get(Se);se===void 0&&(se=new WeakMap,l.set(Se,se));let ye=se.get(V);ye===void 0&&(ye=i.getUniformBlockIndex(Se,V.name),se.set(V,ye))}function Ye(V,Se){const ye=l.get(Se).get(V);c.get(Se)!==ye&&(i.uniformBlockBinding(Se,ye,V.__bindingPointIndex),c.set(Se,ye))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},B=null,k={},f={},d=new WeakMap,g=[],_=null,p=!1,m=null,x=null,E=null,v=null,S=null,y=null,R=null,b=new qe(0,0,0),w=0,A=!1,C=null,U=null,I=null,P=null,F=null,de.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:fe,bindFramebuffer:Ce,drawBuffers:be,useProgram:Pe,setBlending:ae,setMaterial:ce,setFlipSided:he,setCullFace:pe,setLineWidth:Le,setPolygonOffset:Fe,setScissorTest:ie,activeTexture:me,bindTexture:D,unbindTexture:Ge,compressedTexImage2D:Je,compressedTexImage3D:L,texImage2D:ne,texImage3D:re,pixelStorei:He,getParameter:ve,updateUBOMapping:Ve,uniformBlockBinding:Ye,texStorage2D:ge,texStorage3D:_e,texSubImage2D:M,texSubImage3D:W,compressedTexSubImage2D:$,compressedTexSubImage3D:ee,scissor:Ee,viewport:Me,reset:it}}function NT(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,h=new WeakMap,u=new Set;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,M){return g?new OffscreenCanvas(L,M):Yr("canvas")}function p(L,M,W){let $=1;const ee=Je(L);if((ee.width>W||ee.height>W)&&($=W/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ge=Math.floor($*ee.width),_e=Math.floor($*ee.height);f===void 0&&(f=_(ge,_e));const ne=M?_(ge,_e):f;return ne.width=ge,ne.height=_e,ne.getContext("2d").drawImage(L,0,0,ge,_e),ze("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ge+"x"+_e+")."),ne}else return"data"in L&&ze("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),L;return L}function m(L){return L.generateMipmaps}function x(L){i.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(L,M,W,$,ee,ge=!1){if(L!==null){if(i[L]!==void 0)return i[L];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _e;$&&(_e=e.get("EXT_texture_norm16"),_e||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=M;if(M===i.RED&&(W===i.FLOAT&&(ne=i.R32F),W===i.HALF_FLOAT&&(ne=i.R16F),W===i.UNSIGNED_BYTE&&(ne=i.R8),W===i.UNSIGNED_SHORT&&_e&&(ne=_e.R16_EXT),W===i.SHORT&&_e&&(ne=_e.R16_SNORM_EXT)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.R8UI),W===i.UNSIGNED_SHORT&&(ne=i.R16UI),W===i.UNSIGNED_INT&&(ne=i.R32UI),W===i.BYTE&&(ne=i.R8I),W===i.SHORT&&(ne=i.R16I),W===i.INT&&(ne=i.R32I)),M===i.RG&&(W===i.FLOAT&&(ne=i.RG32F),W===i.HALF_FLOAT&&(ne=i.RG16F),W===i.UNSIGNED_BYTE&&(ne=i.RG8),W===i.UNSIGNED_SHORT&&_e&&(ne=_e.RG16_EXT),W===i.SHORT&&_e&&(ne=_e.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RG8UI),W===i.UNSIGNED_SHORT&&(ne=i.RG16UI),W===i.UNSIGNED_INT&&(ne=i.RG32UI),W===i.BYTE&&(ne=i.RG8I),W===i.SHORT&&(ne=i.RG16I),W===i.INT&&(ne=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),W===i.UNSIGNED_INT&&(ne=i.RGB32UI),W===i.BYTE&&(ne=i.RGB8I),W===i.SHORT&&(ne=i.RGB16I),W===i.INT&&(ne=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),W===i.UNSIGNED_INT&&(ne=i.RGBA32UI),W===i.BYTE&&(ne=i.RGBA8I),W===i.SHORT&&(ne=i.RGBA16I),W===i.INT&&(ne=i.RGBA32I)),M===i.RGB&&(W===i.UNSIGNED_SHORT&&_e&&(ne=_e.RGB16_EXT),W===i.SHORT&&_e&&(ne=_e.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),M===i.RGBA){const re=ge?Ro:lt.getTransfer(ee);W===i.FLOAT&&(ne=i.RGBA32F),W===i.HALF_FLOAT&&(ne=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ne=re===bt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&_e&&(ne=_e.RGBA16_EXT),W===i.SHORT&&_e&&(ne=_e.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(L,M){let W;return L?M===null||M===Jn||M===Wr?W=i.DEPTH24_STENCIL8:M===sn?W=i.DEPTH32F_STENCIL8:M===Vr&&(W=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jn||M===Wr?W=i.DEPTH_COMPONENT24:M===sn?W=i.DEPTH_COMPONENT32F:M===Vr&&(W=i.DEPTH_COMPONENT16),W}function y(L,M){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Bt&&L.minFilter!==Lt?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function R(L){const M=L.target;M.removeEventListener("dispose",R),w(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function b(L){const M=L.target;M.removeEventListener("dispose",b),C(M)}function w(L){const M=n.get(L);if(M.__webglInit===void 0)return;const W=L.source,$=d.get(W);if($){const ee=$[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(L),Object.keys($).length===0&&d.delete(W)}n.remove(L)}function A(L){const M=n.get(L);i.deleteTexture(M.__webglTexture);const W=L.source,$=d.get(W);delete $[M.__cacheKey],a.memory.textures--}function C(L){const M=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let ee=0;ee<M.__webglFramebuffer[$].length;ee++)i.deleteFramebuffer(M.__webglFramebuffer[$][ee]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=L.textures;for(let $=0,ee=W.length;$<ee;$++){const ge=n.get(W[$]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(W[$])}n.remove(L)}let U=0;function I(){U=0}function P(){return U}function F(L){U=L}function G(){const L=U;return L>=s.maxTextures&&ze("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,L}function z(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function X(L,M){const W=n.get(L);if(L.isVideoTexture&&D(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const $=L.image;if($===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(W,L,M);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function O(L,M){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){fe(W,L,M);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function B(L,M){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){fe(W,L,M);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function k(L,M){const W=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){Ce(W,L,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}const q={[Sn]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Eo]:i.MIRRORED_REPEAT},j={[Bt]:i.NEAREST,[Vm]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[hn]:i.LINEAR_MIPMAP_LINEAR},de={[xx]:i.NEVER,[Ex]:i.ALWAYS,[vx]:i.LESS,[Vh]:i.LEQUAL,[Mx]:i.EQUAL,[Wh]:i.GEQUAL,[Sx]:i.GREATER,[yx]:i.NOTEQUAL};function xe(L,M){if(M.type===sn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Lt||M.magFilter===oo||M.magFilter===xr||M.magFilter===hn||M.minFilter===Lt||M.minFilter===oo||M.minFilter===xr||M.minFilter===hn)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,q[M.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,q[M.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,q[M.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,j[M.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,j[M.minFilter]),M.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,de[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bt||M.minFilter!==xr&&M.minFilter!==hn||M.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ne(L,M){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",R));const $=M.source;let ee=d.get($);ee===void 0&&(ee={},d.set($,ee));const ge=z(M);if(ge!==L.__cacheKey){ee[ge]===void 0&&(ee[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ee[ge].usedTimes++;const _e=ee[L.__cacheKey];_e!==void 0&&(ee[L.__cacheKey].usedTimes--,_e.usedTimes===0&&A(M)),L.__cacheKey=ge,L.__webglTexture=ee[ge].texture}return W}function J(L,M,W){return Math.floor(Math.floor(L/W)/M)}function Z(L,M,W,$){const ge=L.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,W,$,M.data);else{ge.sort((He,Ee)=>He.start-Ee.start);let _e=0;for(let He=1;He<ge.length;He++){const Ee=ge[_e],Me=ge[He],Ve=Ee.start+Ee.count,Ye=J(Me.start,M.width,4),it=J(Ee.start,M.width,4);Me.start<=Ve+1&&Ye===it&&J(Me.start+Me.count-1,M.width,4)===Ye?Ee.count=Math.max(Ee.count,Me.start+Me.count-Ee.start):(++_e,ge[_e]=Me)}ge.length=_e+1;const ne=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let He=0,Ee=ge.length;He<Ee;He++){const Me=ge[He],Ve=Math.floor(Me.start/4),Ye=Math.ceil(Me.count/4),it=Ve%M.width,V=Math.floor(Ve/M.width),Se=Ye,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,it),t.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,it,V,Se,se,W,$,M.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function fe(L,M,W){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);const ee=Ne(L,M),ge=M.source;t.bindTexture($,L.__webglTexture,i.TEXTURE0+W);const _e=n.get(ge);if(ge.version!==_e.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const se=lt.getPrimaries(lt.workingColorSpace),ye=M.colorSpace===ui?null:lt.getPrimaries(M.colorSpace),Re=M.colorSpace===ui||se===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let re=p(M.image,!1,s.maxTextureSize);re=Ge(M,re);const ve=r.convert(M.format,M.colorSpace),He=r.convert(M.type);let Ee=v(M.internalFormat,ve,He,M.normalized,M.colorSpace,M.isVideoTexture);xe($,M);let Me;const Ve=M.mipmaps,Ye=M.isVideoTexture!==!0,it=_e.__version===void 0||ee===!0,V=ge.dataReady,Se=y(M,re);if(M.isDepthTexture)Ee=S(M.format===Yi,M.type),it&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Ee,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ee,re.width,re.height,0,ve,He,null));else if(M.isDataTexture)if(Ve.length>0){Ye&&it&&t.texStorage2D(i.TEXTURE_2D,Se,Ee,Ve[0].width,Ve[0].height);for(let se=0,ye=Ve.length;se<ye;se++)Me=Ve[se],Ye?V&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Me.width,Me.height,ve,He,Me.data):t.texImage2D(i.TEXTURE_2D,se,Ee,Me.width,Me.height,0,ve,He,Me.data);M.generateMipmaps=!1}else Ye?(it&&t.texStorage2D(i.TEXTURE_2D,Se,Ee,re.width,re.height),V&&Z(M,re,ve,He)):t.texImage2D(i.TEXTURE_2D,0,Ee,re.width,re.height,0,ve,He,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ee,Ve[0].width,Ve[0].height,re.depth);for(let se=0,ye=Ve.length;se<ye;se++)if(Me=Ve[se],M.format!==_n)if(ve!==null)if(Ye){if(V)if(M.layerUpdates.size>0){const Re=cd(Me.width,Me.height,M.format,M.type);for(const le of M.layerUpdates){const We=Me.data.subarray(le*Re/Me.data.BYTES_PER_ELEMENT,(le+1)*Re/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,le,Me.width,Me.height,1,ve,We)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,re.depth,ve,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Ee,Me.width,Me.height,re.depth,0,Me.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,re.depth,ve,He,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Ee,Me.width,Me.height,re.depth,0,ve,He,Me.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ye&&it&&t.texStorage2D(i.TEXTURE_2D,Se,Ee,Ve[0].width,Ve[0].height);for(let se=0,ye=Ve.length;se<ye;se++)Me=Ve[se],M.format!==_n?ve!==null?Ye?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Ee,Me.width,Me.height,0,Me.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?V&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Me.width,Me.height,ve,He,Me.data):t.texImage2D(i.TEXTURE_2D,se,Ee,Me.width,Me.height,0,ve,He,Me.data)}else if(M.isDataArrayTexture)if(Ye){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ee,re.width,re.height,re.depth),V)if(M.layerUpdates.size>0){const se=cd(re.width,re.height,M.format,M.type);for(const ye of M.layerUpdates){const Re=re.data.subarray(ye*se/re.data.BYTES_PER_ELEMENT,(ye+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,re.width,re.height,1,ve,He,Re)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,He,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,re.width,re.height,re.depth,0,ve,He,re.data);else if(M.isData3DTexture)Ye?(it&&t.texStorage3D(i.TEXTURE_3D,Se,Ee,re.width,re.height,re.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,He,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,re.width,re.height,re.depth,0,ve,He,re.data);else if(M.isFramebufferTexture){if(it)if(Ye)t.texStorage2D(i.TEXTURE_2D,Se,Ee,re.width,re.height);else{let se=re.width,ye=re.height;for(let Re=0;Re<Se;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ee,se,ye,0,ve,He,null),se>>=1,ye>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),re.parentNode!==se){se.appendChild(re),u.add(M),se.onpaint=ye=>{const Re=ye.changedElements;for(const le of u)Re.includes(le.image)&&(le.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{const Re=i.RGBA,le=i.RGBA,We=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,le,We,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Ye&&it){const se=Je(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Se,Ee,se.width,se.height)}for(let se=0,ye=Ve.length;se<ye;se++)Me=Ve[se],Ye?V&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ve,He,Me):t.texImage2D(i.TEXTURE_2D,se,Ee,ve,He,Me);M.generateMipmaps=!1}else if(Ye){if(it){const se=Je(re);t.texStorage2D(i.TEXTURE_2D,Se,Ee,se.width,se.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,He,re)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ve,He,re);m(M)&&x($),_e.__version=ge.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Ce(L,M,W){if(M.image.length!==6)return;const $=Ne(L,M),ee=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);const ge=n.get(ee);if(ee.version!==ge.__version||$===!0){t.activeTexture(i.TEXTURE0+W);const _e=lt.getPrimaries(lt.workingColorSpace),ne=M.colorSpace===ui?null:lt.getPrimaries(M.colorSpace),re=M.colorSpace===ui||_e===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const ve=M.isCompressedTexture||M.image[0].isCompressedTexture,He=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let le=0;le<6;le++)!ve&&!He?Ee[le]=p(M.image[le],!0,s.maxCubemapSize):Ee[le]=He?M.image[le].image:M.image[le],Ee[le]=Ge(M,Ee[le]);const Me=Ee[0],Ve=r.convert(M.format,M.colorSpace),Ye=r.convert(M.type),it=v(M.internalFormat,Ve,Ye,M.normalized,M.colorSpace),V=M.isVideoTexture!==!0,Se=ge.__version===void 0||$===!0,se=ee.dataReady;let ye=y(M,Me);xe(i.TEXTURE_CUBE_MAP,M);let Re;if(ve){V&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,it,Me.width,Me.height);for(let le=0;le<6;le++){Re=Ee[le].mipmaps;for(let We=0;We<Re.length;We++){const Be=Re[We];M.format!==_n?Ve!==null?V?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,0,0,Be.width,Be.height,Ve,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,it,Be.width,Be.height,0,Be.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,0,0,Be.width,Be.height,Ve,Ye,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,it,Be.width,Be.height,0,Ve,Ye,Be.data)}}}else{if(Re=M.mipmaps,V&&Se){Re.length>0&&ye++;const le=Je(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,it,le.width,le.height)}for(let le=0;le<6;le++)if(He){V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ee[le].width,Ee[le].height,Ve,Ye,Ee[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,it,Ee[le].width,Ee[le].height,0,Ve,Ye,Ee[le].data);for(let We=0;We<Re.length;We++){const Tt=Re[We].image[le].image;V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,0,0,Tt.width,Tt.height,Ve,Ye,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,it,Tt.width,Tt.height,0,Ve,Ye,Tt.data)}}else{V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ve,Ye,Ee[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,it,Ve,Ye,Ee[le]);for(let We=0;We<Re.length;We++){const Be=Re[We];V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,0,0,Ve,Ye,Be.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,it,Ve,Ye,Be.image[le])}}}m(M)&&x(i.TEXTURE_CUBE_MAP),ge.__version=ee.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function be(L,M,W,$,ee,ge){const _e=r.convert(W.format,W.colorSpace),ne=r.convert(W.type),re=v(W.internalFormat,_e,ne,W.normalized,W.colorSpace),ve=n.get(M),He=n.get(W);if(He.__renderTarget=M,!ve.__hasExternalTextures){const Ee=Math.max(1,M.width>>ge),Me=Math.max(1,M.height>>ge);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ge,re,Ee,Me,M.depth,0,_e,ne,null):t.texImage2D(ee,ge,re,Ee,Me,0,_e,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ee,He.__webglTexture,0,ie(M)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ee,He.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(L,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),M.depthBuffer){const $=M.depthTexture,ee=$&&$.isDepthTexture?$.type:null,ge=S(M.stencilBuffer,ee),_e=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(M),ge,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(M),ge,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ge,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,L)}else{const $=M.textures;for(let ee=0;ee<$.length;ee++){const ge=$[ee],_e=r.convert(ge.format,ge.colorSpace),ne=r.convert(ge.type),re=v(ge.internalFormat,_e,ne,ge.normalized,ge.colorSpace);me(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(M),re,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(M),re,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,re,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(L,M,W){const $=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=n.get(M.depthTexture);if(ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),xe(i.TEXTURE_CUBE_MAP,M.depthTexture);const ve=r.convert(M.depthTexture.format),He=r.convert(M.depthTexture.type);let Ee;M.depthTexture.format===Mi?Ee=i.DEPTH_COMPONENT24:M.depthTexture.format===Yi&&(Ee=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Ee,M.width,M.height,0,ve,He,null)}}else X(M.depthTexture,0);const ge=ee.__webglTexture,_e=ie(M),ne=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,re=M.depthTexture.format===Yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Mi)me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ne,ge,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,re,ne,ge,0);else if(M.depthTexture.format===Yi)me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ne,ge,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,re,ne,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(L){const M=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=$}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let $=0;$<6;$++)Ke(M.__webglFramebuffer[$],L,$);else{const $=L.texture.mipmaps;$&&$.length>0?Ke(M.__webglFramebuffer[0],L,0):Ke(M.__webglFramebuffer,L,0)}else if(W){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),Pe(M.__webglDepthbuffer[$],L,!1);else{const ee=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ge)}}else{const $=L.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Pe(M.__webglDepthbuffer,L,!1);else{const ee=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ge)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(L,M,W){const $=n.get(L);M!==void 0&&be($.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&te(L)}function ce(L){const M=L.texture,W=n.get(L),$=n.get(M);L.addEventListener("dispose",b);const ee=L.textures,ge=L.isWebGLCubeRenderTarget===!0,_e=ee.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,a.memory.textures++),ge){W.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[ne]=[];for(let re=0;re<M.mipmaps.length;re++)W.__webglFramebuffer[ne][re]=i.createFramebuffer()}else W.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)W.__webglFramebuffer[ne]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(_e)for(let ne=0,re=ee.length;ne<re;ne++){const ve=n.get(ee[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&me(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ne=0;ne<ee.length;ne++){const re=ee[ne];W.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ne]);const ve=r.convert(re.format,re.colorSpace),He=r.convert(re.type),Ee=v(re.internalFormat,ve,He,re.normalized,re.colorSpace,L.isXRRenderTarget===!0),Me=ie(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,Ee,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,W.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),xe(i.TEXTURE_CUBE_MAP,M);for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)be(W.__webglFramebuffer[ne][re],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,re);else be(W.__webglFramebuffer[ne],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(M)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ne=0,re=ee.length;ne<re;ne++){const ve=ee[ne],He=n.get(ve);let Ee=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,He.__webglTexture),xe(Ee,ve),be(W.__webglFramebuffer,L,ve,i.COLOR_ATTACHMENT0+ne,Ee,0),m(ve)&&x(Ee)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ne=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,$.__webglTexture),xe(ne,M),M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)be(W.__webglFramebuffer[re],L,M,i.COLOR_ATTACHMENT0,ne,re);else be(W.__webglFramebuffer,L,M,i.COLOR_ATTACHMENT0,ne,0);m(M)&&x(ne),t.unbindTexture()}L.depthBuffer&&te(L)}function he(L){const M=L.textures;for(let W=0,$=M.length;W<$;W++){const ee=M[W];if(m(ee)){const ge=E(L),_e=n.get(ee).__webglTexture;t.bindTexture(ge,_e),x(ge),t.unbindTexture()}}}const pe=[],Le=[];function Fe(L){if(L.samples>0){if(me(L)===!1){const M=L.textures,W=L.width,$=L.height;let ee=i.COLOR_BUFFER_BIT;const ge=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(L),ne=M.length>1;if(ne)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const re=L.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ve]);const He=n.get(M[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,W,$,0,0,W,$,ee,i.NEAREST),c===!0&&(pe.length=0,Le.length=0,pe.push(i.COLOR_ATTACHMENT0+ve),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(pe.push(ge),Le.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ve]);const He=n.get(M[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){const M=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ie(L){return Math.min(s.maxSamples,L.samples)}function me(L){const M=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function D(L){const M=a.render.frame;h.get(L)!==M&&(h.set(L,M),L.update())}function Ge(L,M){const W=L.colorSpace,$=L.format,ee=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==tn&&W!==ui&&(lt.getTransfer(W)===bt?($!==_n||ee!==ln)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",W)),M}function Je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=I,this.getTextureUnits=P,this.setTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=k,this.rebindTextures=ae,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=be,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function FT(i,e){function t(n,s=ui){let r;const a=lt.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===Oh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Km)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wm)return i.BYTE;if(n===Xm)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===Uh)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===Ym)return i.ALPHA;if(n===$m)return i.RGB;if(n===_n)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===kh)return i.RED;if(n===zh)return i.RED_INTEGER;if(n===Qi)return i.RG;if(n===Gh)return i.RG_INTEGER;if(n===Hh)return i.RGBA_INTEGER;if(n===co||n===lo||n===ho||n===uo)if(a===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pl||n===Ll||n===Il||n===Dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nl||n===Fl||n===Ul||n===Ol||n===Bl||n===wo||n===kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nl||n===Fl)return a===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ul)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ol)return r.COMPRESSED_R11_EAC;if(n===Bl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wo)return r.COMPRESSED_RG11_EAC;if(n===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zl||n===Gl||n===Hl||n===Vl||n===Wl||n===Xl||n===ql||n===Kl||n===Yl||n===$l||n===Jl||n===jl||n===Zl||n===Ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ql)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eh||n===th||n===nh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===eh)return a===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ih||n===sh||n===To||n===rh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ih)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const UT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new cg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jn({vertexShader:UT,fragmentShader:OT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kT extends ns{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",p=new BT,m={},x=t.getContextAttributes();let E=null,v=null;const S=[],y=[],R=new ue;let b=null,w=null;const A=new kt;A.viewport=new St;const C=new kt;C.viewport=new St;const U=[A,C],I=new BM;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Z=S[J];return Z===void 0&&(Z=new Sc,S[J]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(J){let Z=S[J];return Z===void 0&&(Z=new Sc,S[J]=Z),Z.getGripSpace()},this.getHand=function(J){let Z=S[J];return Z===void 0&&(Z=new Sc,S[J]=Z),Z.getHandSpace()};function G(J){const Z=y.indexOf(J.inputSource);if(Z===-1)return;const fe=S[Z];fe!==void 0&&(fe.update(J.inputSource,J.frame,l||a),fe.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",X);for(let J=0;J<S.length;J++){const Z=y[J];Z!==null&&(y[J]=null,S[J].disconnect(Z))}P=null,F=null,p.reset();for(const J in m)delete m[J];if(e.setRenderTarget(E),d=null,f=null,u=null,s=null,v=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),w!==null){const J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",z),s.addEventListener("inputsourceschange",X),x.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ce=null,be=null;x.depth&&(be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?Yi:Mi,Ce=x.stencil?Wr:Jn);const Pe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Pe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new vn(f.textureWidth,f.textureHeight,{format:_n,type:ln,depthTexture:new Jr(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new vn(d.framebufferWidth,d.framebufferHeight,{format:_n,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(J){for(let Z=0;Z<J.removed.length;Z++){const fe=J.removed[Z],Ce=y.indexOf(fe);Ce>=0&&(y[Ce]=null,S[Ce].disconnect(fe))}for(let Z=0;Z<J.added.length;Z++){const fe=J.added[Z];let Ce=y.indexOf(fe);if(Ce===-1){for(let Pe=0;Pe<S.length;Pe++)if(Pe>=y.length){y.push(fe),Ce=Pe;break}else if(y[Pe]===null){y[Pe]=fe,Ce=Pe;break}if(Ce===-1)break}const be=S[Ce];be&&be.connect(fe)}}const O=new N,B=new N;function k(J,Z,fe){O.setFromMatrixPosition(Z.matrixWorld),B.setFromMatrixPosition(fe.matrixWorld);const Ce=O.distanceTo(B),be=Z.projectionMatrix.elements,Pe=fe.projectionMatrix.elements,Ke=be[14]/(be[10]-1),te=be[14]/(be[10]+1),ae=(be[9]+1)/be[5],ce=(be[9]-1)/be[5],he=(be[8]-1)/be[0],pe=(Pe[8]+1)/Pe[0],Le=Ke*he,Fe=Ke*pe,ie=Ce/(-he+pe),me=ie*-he;if(Z.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(me),J.translateZ(ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),be[10]===-1)J.projectionMatrix.copy(Z.projectionMatrix),J.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const D=Ke+ie,Ge=te+ie,Je=Le-me,L=Fe+(Ce-me),M=ae*te/Ge*D,W=ce*te/Ge*D;J.projectionMatrix.makePerspective(Je,L,M,W,D,Ge),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function q(J,Z){Z===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Z.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Z=J.near,fe=J.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),I.near=C.near=A.near=Z,I.far=C.far=A.far=fe,(P!==I.near||F!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),P=I.near,F=I.far),I.layers.mask=J.layers.mask|6,A.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;const Ce=J.parent,be=I.cameras;q(I,Ce);for(let Pe=0;Pe<be.length;Pe++)q(be[Pe],Ce);be.length===2?k(I,A,C):I.projectionMatrix.copy(A.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),j(J,I,Ce)};function j(J,Z,fe){fe===null?J.matrix.copy(Z.matrixWorld):(J.matrix.copy(fe.matrixWorld),J.matrix.invert(),J.matrix.multiply(Z.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Z.projectionMatrix),J.projectionMatrixInverse.copy(Z.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ws*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(J){return m[J]};let de=null;function xe(J,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){const fe=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ce=!1;fe.length!==I.cameras.length&&(I.cameras.length=0,Ce=!0);for(let te=0;te<fe.length;te++){const ae=fe[te];let ce=null;if(d!==null)ce=d.getViewport(ae);else{const pe=u.getViewSubImage(f,ae);ce=pe.viewport,te===0&&(e.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(v))}let he=U[te];he===void 0&&(he=new kt,he.layers.enable(te),he.viewport=new St,U[te]=he),he.matrix.fromArray(ae.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ae.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ce.x,ce.y,ce.width,ce.height),te===0&&(I.matrix.copy(he.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ce===!0&&I.cameras.push(he)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const te=u.getDepthInformation(fe[0]);te&&te.isValid&&te.texture&&p.init(te,s.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let te=0;te<fe.length;te++){const ae=fe[te].camera;if(ae){let ce=m[ae];ce||(ce=new cg,m[ae]=ce);const he=u.getCameraImage(ae);ce.sourceTexture=he}}}}for(let fe=0;fe<S.length;fe++){const Ce=y[fe],be=S[fe];Ce!==null&&be!==void 0&&be.update(Ce,Z,l||a)}de&&de(J,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ne=new Eg;Ne.setAnimationLoop(xe),this.setAnimationLoop=function(J){de=J},this.dispose=function(){}}}const zT=new $e,Lg=new et;Lg.set(-1,0,0,0,1,0,0,0,1);function GT(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,bg(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,E,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,x,E):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Xt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Xt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),E=x.envMap,v=x.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(zT.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Lg),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function HT(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){const y=S.program;n.uniformBlockBinding(v,y)}function l(v,S){let y=s[v.id];y===void 0&&(p(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",x));const R=S.program;n.updateUBOMapping(v,R);const b=e.render.frame;r[v.id]!==b&&(f(v),r[v.id]=b)}function h(v){const S=u();v.__bindingPointIndex=S;const y=i.createBuffer(),R=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const S=s[v.id],y=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,w=y.length;b<w;b++){const A=y[b];if(Array.isArray(A))for(let C=0,U=A.length;C<U;C++)d(A[C],b,C,R);else d(A,b,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,S,y,R){if(_(v,S,y,R)===!0){const b=v.__offset,w=v.value;if(Array.isArray(w)){let A=0;for(let C=0;C<w.length;C++){const U=w[C],I=m(U);g(U,v.__data,A),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(A+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function g(v,S,y){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,y)}function _(v,S,y,R){const b=v.value,w=S+"_"+y;if(R[w]===void 0)return typeof b=="number"||typeof b=="boolean"?R[w]=b:ArrayBuffer.isView(b)?R[w]=b.slice():R[w]=b.clone(),!0;{const A=R[w];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return R[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(A.equals(b)===!1)return A.copy(b),!0}}return!1}function p(v){const S=v.uniforms;let y=0;const R=16;for(let w=0,A=S.length;w<A;w++){const C=Array.isArray(S[w])?S[w]:[S[w]];for(let U=0,I=C.length;U<I;U++){const P=C[U],F=Array.isArray(P.value)?P.value:[P.value];for(let G=0,z=F.length;G<z;G++){const X=F[G],O=m(X),B=y%R,k=B%O.boundary,q=B+k;y+=k,q!==0&&R-q<O.storage&&(y+=R-q),P.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=O.storage}}}const b=y%R;return b>0&&(y+=R-b),v.__size=y,v.__cache={},this}function m(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",v),S}function x(v){const S=v.target;S.removeEventListener("dispose",x);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:E}}const VT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gn=null;function WT(){return Gn===null&&(Gn=new $r(VT,16,16,Qi,rn),Gn.name="DFG_LUT",Gn.minFilter=Lt,Gn.magFilter=Lt,Gn.wrapS=bn,Gn.wrapT=bn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class XT{constructor(e={}){const{canvas:t=Ax(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ln}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=d,p=new Set([Hh,Gh,zh]),m=new Set([ln,Jn,Vr,Wr,Oh,Bh]),x=new Uint32Array(4),E=new Int32Array(4),v=new N;let S=null,y=null;const R=[],b=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1,U=null,I=null,P=null,F=null;this._outputColorSpace=Mt;let G=0,z=0,X=null,O=-1,B=null;const k=new St,q=new St;let j=null;const de=new qe(0);let xe=0,Ne=t.width,J=t.height,Z=1,fe=null,Ce=null;const be=new St(0,0,Ne,J),Pe=new St(0,0,Ne,J);let Ke=!1;const te=new $h;let ae=!1,ce=!1;const he=new $e,pe=new N,Le=new St,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function me(){return X===null?Z:1}let D=n;function Ge(T,H){return t.getContext(T,H)}let Je,L,M,W,$,ee,ge,_e,ne,re,ve,He,Ee,Me,Ve,Ye,it,V,Se,se,ye,Re,le;try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dh}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",En,!1),D===null){const H="webgl2";if(D=Ge(H,T),D===null)throw Ge(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(T){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",En,!1),je("WebGLRenderer: "+T.message),T}function We(){Je=new WE(D),Je.init(),ye=new FT(D,Je),L=new NE(D,Je,e,ye),M=new DT(D,Je),L.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),I=D.createFramebuffer(),P=D.createFramebuffer(),F=D.createFramebuffer(),W=new KE(D),$=new xT,ee=new NT(D,Je,M,$,L,ye,W),ge=new VE(A),_e=new $M(D),Re=new IE(D,_e),ne=new XE(D,_e,W,Re),re=new $E(D,ne,_e,Re,W),V=new YE(D,L,ee),Ve=new FE($),ve=new _T(A,ge,Je,L,Re,Ve),He=new GT(A,$),Ee=new MT,Me=new AT(Je),it=new LE(A,ge,M,re,g,c),Ye=new IT(A,re,L),le=new HT(D,W,L,M),Se=new DE(D,Je,W),se=new qE(D,Je,W),W.programs=ve.programs,A.capabilities=L,A.extensions=Je,A.properties=$,A.renderLists=Ee,A.shadowMap=Ye,A.state=M,A.info=W}_!==ln&&(w=new jE(_,t.width,t.height,o,s,r));const Be=new kT(A,D);this.xr=Be,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Je.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Je.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(Ne,J,!1))},this.getSize=function(T){return T.set(Ne,J)},this.setSize=function(T,H,Q=!0){if(Be.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=T,J=H,t.width=Math.floor(T*Z),t.height=Math.floor(H*Z),Q===!0&&(t.style.width=T+"px",t.style.height=H+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(Ne*Z,J*Z).floor()},this.setDrawingBufferSize=function(T,H,Q){Ne=T,J=H,Z=Q,t.width=Math.floor(T*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,T,H)},this.setEffects=function(T){if(_===ln){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let H=0;H<T.length;H++)if(T[H].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(be)},this.setViewport=function(T,H,Q,K){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,H,Q,K),M.viewport(k.copy(be).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(Pe)},this.setScissor=function(T,H,Q,K){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,H,Q,K),M.scissor(q.copy(Pe).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){M.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){fe=T},this.setTransparentSort=function(T){Ce=T},this.getClearColor=function(T){return T.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,Q=!0){let K=0;if(T){let Y=!1;if(X!==null){const Ae=X.texture.format;Y=p.has(Ae)}if(Y){const Ae=X.texture.type,De=m.has(Ae),Te=it.getClearColor(),Ue=it.getClearAlpha(),ke=Te.r,rt=Te.g,ct=Te.b;De?(x[0]=ke,x[1]=rt,x[2]=ct,x[3]=Ue,D.clearBufferuiv(D.COLOR,0,x)):(E[0]=ke,E[1]=rt,E[2]=ct,E[3]=Ue,D.clearBufferiv(D.COLOR,0,E))}else K|=D.COLOR_BUFFER_BIT}H&&(K|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",En,!1),it.dispose(),Ee.dispose(),Me.dispose(),$.dispose(),ge.dispose(),re.dispose(),Re.dispose(),le.dispose(),ve.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Tu),Be.removeEventListener("sessionend",Au),Bi.stop()};function Tt(T){T.preventDefault(),Co("WebGLRenderer: Context Lost."),C=!0}function pt(){Co("WebGLRenderer: Context Restored."),C=!1;const T=W.autoReset,H=Ye.enabled,Q=Ye.autoUpdate,K=Ye.needsUpdate,Y=Ye.type;We(),W.autoReset=T,Ye.enabled=H,Ye.autoUpdate=Q,Ye.needsUpdate=K,Ye.type=Y}function En(T){je("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Bn(T){const H=T.target;H.removeEventListener("dispose",Bn),B0(H)}function B0(T){k0(T),$.remove(T)}function k0(T){const H=$.get(T).programs;H!==void 0&&(H.forEach(function(Q){ve.releaseProgram(Q)}),T.isShaderMaterial&&ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Q,K,Y,Ae){H===null&&(H=Fe);const De=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Te=H0(T,H,Q,K,Y);M.setMaterial(K,De);let Ue=Q.index,ke=1;if(K.wireframe===!0){if(Ue=ne.getWireframeAttribute(Q),Ue===void 0)return;ke=2}const rt=Q.drawRange,ct=Q.attributes.position;let Oe=rt.start*ke,mt=(rt.start+rt.count)*ke;Ae!==null&&(Oe=Math.max(Oe,Ae.start*ke),mt=Math.min(mt,(Ae.start+Ae.count)*ke)),Ue!==null?(Oe=Math.max(Oe,0),mt=Math.min(mt,Ue.count)):ct!=null&&(Oe=Math.max(Oe,0),mt=Math.min(mt,ct.count));const Ut=mt-Oe;if(Ut<0||Ut===1/0)return;Re.setup(Y,K,Te,Q,Ue);let Pt,yt=Se;if(Ue!==null&&(Pt=_e.get(Ue),yt=se,yt.setIndex(Pt)),Y.isMesh)K.wireframe===!0?(M.setLineWidth(K.wireframeLinewidth*me()),yt.setMode(D.LINES)):yt.setMode(D.TRIANGLES);else if(Y.isLine){let qt=K.linewidth;qt===void 0&&(qt=1),M.setLineWidth(qt*me()),Y.isLineSegments?yt.setMode(D.LINES):Y.isLineLoop?yt.setMode(D.LINE_LOOP):yt.setMode(D.LINE_STRIP)}else Y.isPoints?yt.setMode(D.POINTS):Y.isSprite&&yt.setMode(D.TRIANGLES);if(Y.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))yt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qt=Y._multiDrawStarts,Ie=Y._multiDrawCounts,Zt=Y._multiDrawCount,ut=Ue?_e.get(Ue).bytesPerElement:1,pn=$.get(K).currentProgram.getUniforms();for(let kn=0;kn<Zt;kn++)pn.setValue(D,"_gl_DrawID",kn),yt.render(qt[kn]/ut,Ie[kn])}else if(Y.isInstancedMesh)yt.renderInstances(Oe,Ut,Y.count);else if(Q.isInstancedBufferGeometry){const qt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ie=Math.min(Q.instanceCount,qt);yt.renderInstances(Oe,Ut,Ie)}else yt.render(Oe,Ut)};function wu(T,H,Q,K){U!==null&&T.isNodeMaterial&&U.setObject(K,T),ae===!0&&Ve.setState(T,Q,!1),T.transparent===!0&&T.side===nn&&T.forceSinglePass===!1?(T.side=Xt,T.needsUpdate=!0,ca(T,H,K),T.side=vi,T.needsUpdate=!0,ca(T,H,K),T.side=nn):ca(T,H,K)}this.compile=function(T,H,Q=null){Q===null&&(Q=T),U!==null&&U.renderStart(T,H,Q),y=Me.get(Q),y.init(H),b.push(y),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),T!==Q&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights(),U!==null&&U.updateLights(y.state.lightsArray),ce=this.localClippingEnabled,ae=Ve.init(this.clippingPlanes,ce),ae===!0&&Ve.setGlobalState(this.clippingPlanes,H),U!==null&&Ye.render(y.state.shadowsArray,Q,H);const K=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){const Te=Ae[De];wu(Te,Q,H,Y),K.add(Te)}else wu(Ae,Q,H,Y),K.add(Ae)}),y=b.pop(),U!==null&&U.renderEnd(),K},this.compileAsync=function(T,H,Q=null){const K=this.compile(T,H,Q);return new Promise(Y=>{function Ae(){if(K.forEach(function(De){const Ue=$.get(De).currentProgram;(Ue===void 0||Ue.isReady())&&K.delete(De)}),K.size===0){Y(T);return}setTimeout(Ae,10)}Je.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let ec=null;function z0(T){ec&&ec(T)}function Tu(){Bi.stop()}function Au(){Bi.start()}const Bi=new Eg;Bi.setAnimationLoop(z0),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(T){ec=T,Be.setAnimationLoop(T),T===null?Bi.stop():Bi.start()},Be.addEventListener("sessionstart",Tu),Be.addEventListener("sessionend",Au),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(T,H);const Q=Be.enabled===!0&&Be.isPresenting===!0,K=w!==null&&(X===null||Q)&&w.begin(A,X);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(H),H=Be.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,H,X),y=Me.get(T,b.length),y.init(H),y.state.textureUnits=ee.getTextureUnits(),b.push(y),he.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),te.setFromProjectionMatrix(he,qn,H.reversedDepth),ce=this.localClippingEnabled,ae=Ve.init(this.clippingPlanes,ce),S=Ee.get(T,R.length),S.init(),R.push(S),Be.enabled===!0&&Be.isPresenting===!0){const De=A.xr.getDepthSensingMesh();De!==null&&tc(De,H,-1/0,A.sortObjects)}tc(T,H,0,A.sortObjects),S.finish(),U!==null&&U.updateLights(y.state.lightsArray),A.sortObjects===!0&&S.sort(fe,Ce),ie=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,ie&&it.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Ve.beginShadows();const Y=y.state.shadowsArray;if(Ye.render(Y,T,H),ae===!0&&Ve.endShadows(),(K&&w.hasRenderPass())===!1){const De=S.opaque,Te=S.transmissive;if(y.setupLights(),H.isArrayCamera){const Ue=H.cameras;if(Te.length>0)for(let ke=0,rt=Ue.length;ke<rt;ke++){const ct=Ue[ke];Cu(De,Te,T,ct)}ie&&it.render(T);for(let ke=0,rt=Ue.length;ke<rt;ke++){const ct=Ue[ke];Ru(S,T,ct,ct.viewport)}}else Te.length>0&&Cu(De,Te,T,H),ie&&it.render(T),Ru(S,T,H)}X!==null&&z===0&&(ee.updateMultisampleRenderTarget(X),ee.updateRenderTargetMipmap(X)),K&&w.end(A),T.isScene===!0&&T.onAfterRender(A,T,H),Re.resetDefaultState(),O=-1,B=null,b.pop(),b.length>0?(y=b[b.length-1],ee.setTextureUnits(y.state.textureUnits),ae===!0&&Ve.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,U!==null&&U.renderEnd()};function tc(T,H,Q,K){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLightProbeGrid)y.pushLightProbeGrid(T);else if(T.isLight)y.pushLight(T),T.castShadow&&y.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(te)){K&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const De=re.update(T),Te=T.material;Te.visible&&S.push(T,De,Te,Q,Le.z,null,H)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(te))){const De=re.update(T),Te=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Le.copy(De.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(he)),Array.isArray(Te)){const Ue=De.groups;for(let ke=0,rt=Ue.length;ke<rt;ke++){const ct=Ue[ke],Oe=Te[ct.materialIndex];Oe&&Oe.visible&&S.push(T,De,Oe,Q,Le.z,ct,H)}}else Te.visible&&S.push(T,De,Te,Q,Le.z,null,H)}}const Ae=T.children;for(let De=0,Te=Ae.length;De<Te;De++)tc(Ae[De],H,Q,K)}function Ru(T,H,Q,K){const{opaque:Y,transmissive:Ae,transparent:De}=T;y.setupLightsView(Q),ae===!0&&Ve.setGlobalState(A.clippingPlanes,Q),K&&M.viewport(k.copy(K)),Y.length>0&&oa(Y,H,Q),Ae.length>0&&oa(Ae,H,Q),De.length>0&&oa(De,H,Q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Cu(T,H,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[K.id]===void 0){const Oe=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[K.id]=new vn(1,1,{generateMipmaps:!0,type:Oe?rn:ln,minFilter:hn,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Ae=y.state.transmissionRenderTarget[K.id],De=K.viewport||k;Ae.setSize(De.z*A.transmissionResolutionScale,De.w*A.transmissionResolutionScale);const Te=A.getRenderTarget(),Ue=A.getActiveCubeFace(),ke=A.getActiveMipmapLevel();A.setRenderTarget(Ae),A.getClearColor(de),xe=A.getClearAlpha(),xe<1&&A.setClearColor(16777215,.5),A.clear(),ie&&it.render(Q);const rt=A.toneMapping;A.toneMapping=$n;const ct=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),y.setupLightsView(K),ae===!0&&Ve.setGlobalState(A.clippingPlanes,K),oa(T,Q,K),ee.updateMultisampleRenderTarget(Ae),ee.updateRenderTargetMipmap(Ae),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let mt=0,Ut=H.length;mt<Ut;mt++){const Pt=H[mt],{object:yt,geometry:qt,material:Ie,group:Zt}=Pt;if(Ie.side===nn&&yt.layers.test(K.layers)){const ut=Ie.side;Ie.side=Xt,Ie.needsUpdate=!0,Pu(yt,Q,K,qt,Ie,Zt),Ie.side=ut,Ie.needsUpdate=!0,Oe=!0}}Oe===!0&&(ee.updateMultisampleRenderTarget(Ae),ee.updateRenderTargetMipmap(Ae))}A.setRenderTarget(Te,Ue,ke),A.setClearColor(de,xe),ct!==void 0&&(K.viewport=ct),A.toneMapping=rt}function oa(T,H,Q){const K=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Ae=T.length;Y<Ae;Y++){const De=T[Y],{object:Te,geometry:Ue,group:ke}=De;let rt=De.material;rt.allowOverride===!0&&K!==null&&(rt=K),Te.layers.test(Q.layers)&&Pu(Te,H,Q,Ue,rt,ke)}}function Pu(T,H,Q,K,Y,Ae){U!==null&&Y.isNodeMaterial&&U.setObject(T,Y),T.onBeforeRender(A,H,Q,K,Y,Ae),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(A,H,Q,K,T,Ae),Y.transparent===!0&&Y.side===nn&&Y.forceSinglePass===!1?(Y.side=Xt,Y.needsUpdate=!0,A.renderBufferDirect(Q,H,K,Y,T,Ae),Y.side=vi,Y.needsUpdate=!0,A.renderBufferDirect(Q,H,K,Y,T,Ae),Y.side=nn):A.renderBufferDirect(Q,H,K,Y,T,Ae),T.onAfterRender(A,H,Q,K,Y,Ae)}function ca(T,H,Q){H.isScene!==!0&&(H=Fe);const K=$.get(T),Y=y.state.lights,Ae=y.state.shadowsArray,De=Y.state.version,Te=ve.getParameters(T,Y.state,Ae,H,Q,y.state.lightProbeGridArray),Ue=ve.getProgramCacheKey(Te);let ke=K.programs;K.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,K.fog=H.fog;const rt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;K.envMap=ge.get(T.envMap||K.environment,rt),K.envMapRotation=K.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",Bn),ke=new Map,K.programs=ke);let ct=ke.get(Ue);if(ct!==void 0){if(K.currentProgram===ct&&K.lightsStateVersion===De)return Iu(T,Te),ct}else Te.uniforms=ve.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,Q,Te),T.onBeforeCompile(Te,A),ct=ve.acquireProgram(Te,Ue),ke.set(Ue,ct),K.uniforms=Te.uniforms;const Oe=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=Ve.uniform),Iu(T,Te),K.needsLights=W0(T),K.lightsStateVersion=De,K.needsLights&&(Oe.ambientLightColor.value=Y.state.ambient,Oe.lightProbe.value=Y.state.probe,Oe.sunLights.value=Y.state.sun,Oe.sunLightShadows.value=Y.state.sunShadow,Oe.directionalLights.value=Y.state.directional,Oe.directionalLightShadows.value=Y.state.directionalShadow,Oe.spotLights.value=Y.state.spot,Oe.spotLightShadows.value=Y.state.spotShadow,Oe.rectAreaLights.value=Y.state.rectArea,Oe.ltc_1.value=Y.state.rectAreaLTC1,Oe.ltc_2.value=Y.state.rectAreaLTC2,Oe.pointLights.value=Y.state.point,Oe.pointLightShadows.value=Y.state.pointShadow,Oe.hemisphereLights.value=Y.state.hemi,Oe.sunShadowMatrix.value=Y.state.sunShadowMatrix,Oe.sunShadowCascade.value=Y.state.sunShadowCascade,Oe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Oe.spotLightMatrix.value=Y.state.spotLightMatrix,Oe.spotLightMap.value=Y.state.spotLightMap,Oe.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.lightProbeGrid=y.state.lightProbeGridArray.length>0,K.currentProgram=ct,K.uniformsList=null,ct}function Lu(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=po.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Iu(T,H){const Q=$.get(T);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function G0(T,H){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let Q=0,K=T.length;Q<K;Q++){const Y=T[Q];if(Y.texture!==null&&Y.boundingBox.containsPoint(v))return Y}return null}function H0(T,H,Q,K,Y){H.isScene!==!0&&(H=Fe),ee.resetTextureUnits();const Ae=H.fog,De=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?H.environment:null,Te=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:lt.workingColorSpace,Ue=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,ke=ge.get(K.envMap||De,Ue),rt=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ct=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Oe=!!Q.morphAttributes.position,mt=!!Q.morphAttributes.normal,Ut=!!Q.morphAttributes.color;let Pt=$n;K.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Pt=A.toneMapping);const yt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,qt=yt!==void 0?yt.length:0,Ie=$.get(K),Zt=y.state.lights;if(ae===!0&&(ce===!0||T!==B)){const At=T===B&&K.id===O;Ve.setState(K,T,At)}let ut=!1;K.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Zt.state.version||Ie.outputColorSpace!==Te||Y.isBatchedMesh&&Ie.batching===!1||!Y.isBatchedMesh&&Ie.batching===!0||Y.isBatchedMesh&&Ie.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ie.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ie.instancing===!1||!Y.isInstancedMesh&&Ie.instancing===!0||Y.isSkinnedMesh&&Ie.skinning===!1||!Y.isSkinnedMesh&&Ie.skinning===!0||Y.isInstancedMesh&&Ie.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ie.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ie.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ie.instancingMorph===!1&&Y.morphTexture!==null||Ie.envMap!==ke||K.fog===!0&&Ie.fog!==Ae||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Ve.numPlanes||Ie.numIntersection!==Ve.numIntersection)||Ie.vertexAlphas!==rt||Ie.vertexTangents!==ct||Ie.morphTargets!==Oe||Ie.morphNormals!==mt||Ie.morphColors!==Ut||Ie.toneMapping!==Pt||Ie.morphTargetsCount!==qt||!!Ie.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Ie.__version=K.version);let pn=Ie.currentProgram;ut===!0&&(pn=ca(K,H,Y),U&&K.isNodeMaterial&&U.onUpdateProgram(K,pn,Ie));let kn=!1,Ei=!1,rs=!1;const vt=pn.getUniforms(),Nt=Ie.uniforms;if(M.useProgram(pn.program)&&(kn=!0,Ei=!0,rs=!0),K.id!==O&&(O=K.id,Ei=!0),Ie.needsLights){const At=G0(y.state.lightProbeGridArray,Y);Ie.lightProbeGrid!==At&&(Ie.lightProbeGrid=At,Ei=!0)}if(kn||B!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),vt.setValue(D,"projectionMatrix",T.projectionMatrix),vt.setValue(D,"viewMatrix",T.matrixWorldInverse);const Ti=vt.map.cameraPosition;Ti!==void 0&&Ti.setValue(D,pe.setFromMatrixPosition(T.matrixWorld)),L.logarithmicDepthBuffer&&vt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&vt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),B!==T&&(B=T,Ei=!0,rs=!0)}if(Ie.needsLights&&(Zt.state.sunShadowMap.length>0&&vt.setValue(D,"sunShadowMap",Zt.state.sunShadowMap,ee),Zt.state.directionalShadowMap.length>0&&vt.setValue(D,"directionalShadowMap",Zt.state.directionalShadowMap,ee),Zt.state.spotShadowMap.length>0&&vt.setValue(D,"spotShadowMap",Zt.state.spotShadowMap,ee),Zt.state.pointShadowMap.length>0&&vt.setValue(D,"pointShadowMap",Zt.state.pointShadowMap,ee)),Y.isSkinnedMesh){vt.setOptional(D,Y,"bindMatrix"),vt.setOptional(D,Y,"bindMatrixInverse");const At=Y.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),vt.setValue(D,"boneTexture",At.boneTexture,ee))}Y.isBatchedMesh&&(vt.setOptional(D,Y,"batchingTexture"),vt.setValue(D,"batchingTexture",Y._matricesTexture,ee),vt.setOptional(D,Y,"batchingIdTexture"),vt.setValue(D,"batchingIdTexture",Y._indirectTexture,ee),vt.setOptional(D,Y,"batchingColorTexture"),Y._colorsTexture!==null&&vt.setValue(D,"batchingColorTexture",Y._colorsTexture,ee));const wi=Q.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&V.update(Y,Q,pn),(Ei||Ie.receiveShadow!==Y.receiveShadow)&&(Ie.receiveShadow=Y.receiveShadow,vt.setValue(D,"receiveShadow",Y.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&H.environment!==null&&(Nt.envMapIntensity.value=H.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=WT()),Ei){if(vt.setValue(D,"toneMappingExposure",A.toneMappingExposure),Ie.needsLights&&V0(Nt,rs),Ae&&K.fog===!0&&He.refreshFogUniforms(Nt,Ae),He.refreshMaterialUniforms(Nt,K,Z,J,y.state.transmissionRenderTarget[T.id]),Ie.needsLights&&Ie.lightProbeGrid){const At=Ie.lightProbeGrid;Nt.probesSH.value=At.texture,Nt.probesMin.value.copy(At.boundingBox.min),Nt.probesMax.value.copy(At.boundingBox.max),Nt.probesResolution.value.copy(At.resolution)}po.upload(D,Lu(Ie),Nt,ee)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(po.upload(D,Lu(Ie),Nt,ee),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&vt.setValue(D,"center",Y.center),vt.setValue(D,"modelViewMatrix",Y.modelViewMatrix),vt.setValue(D,"normalMatrix",Y.normalMatrix),vt.setValue(D,"modelMatrix",Y.matrixWorld),K.uniformsGroups!==void 0){const At=K.uniformsGroups;for(let Ti=0,as=At.length;Ti<as;Ti++){const Nu=At[Ti];le.update(Nu,pn),le.bind(Nu,pn)}}return pn}function V0(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.sunLights.needsUpdate=H,T.sunLightShadows.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function W0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(T,H,Q){const K=$.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),$.get(T.texture).__webglTexture=H,$.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const Q=$.get(T);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Q=0){X=T,G=H,z=Q;let K=null,Y=!1,Ae=!1;if(T){const Te=$.get(T);if(Te.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(D.FRAMEBUFFER,Te.__webglFramebuffer),k.copy(T.viewport),q.copy(T.scissor),j=T.scissorTest,M.viewport(k),M.scissor(q),M.setScissorTest(j),O=-1;return}else if(Te.__webglFramebuffer===void 0)ee.setupRenderTarget(T);else if(Te.__hasExternalTextures)ee.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const rt=T.depthTexture;if(Te.__boundDepthTexture!==rt){if(rt!==null&&$.has(rt)&&(T.width!==rt.image.width||T.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(T)}}const Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ae=!0);const ke=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[H])?K=ke[H][Q]:K=ke[H],Y=!0):T.samples>0&&ee.useMultisampledRTT(T)===!1?K=$.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?K=ke[Q]:K=ke,k.copy(T.viewport),q.copy(T.scissor),j=T.scissorTest}else k.copy(be).multiplyScalar(Z).floor(),q.copy(Pe).multiplyScalar(Z).floor(),j=Ke;if(Q!==0&&(K=I),M.bindFramebuffer(D.FRAMEBUFFER,K)&&M.drawBuffers(T,K),M.viewport(k),M.scissor(q),M.setScissorTest(j),Y){const Te=$.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Te.__webglTexture,Q)}else if(Ae){const Te=H;for(let Ue=0;Ue<T.textures.length;Ue++){const ke=$.get(T.textures[Ue]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ue,ke.__webglTexture,Q,Te)}}else if(T!==null&&Q!==0){const Te=$.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Te.__webglTexture,Q)}O=-1};function Du(T){const H=$.get(T);return(H.__readFormat!==T.format||H.__readType!==T.type)&&(H.__readFormat=T.format,H.__readType=T.type,H.__formatReadable=L.textureFormatReadable(T.format),H.__typeReadable=L.textureTypeReadable(T.type)),H}this.readRenderTargetPixels=function(T,H,Q,K,Y,Ae,De,Te=0){if(!(T&&T.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){M.bindFramebuffer(D.FRAMEBUFFER,Ue);try{const ke=T.textures[Te],rt=ke.format,ct=ke.type;T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Te);const Oe=Du(ke);if(Oe.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-K&&Q>=0&&Q<=T.height-Y&&D.readPixels(H,Q,K,Y,ye.convert(rt),ye.convert(ct),Ae)}finally{const ke=X!==null?$.get(X).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,H,Q,K,Y,Ae,De,Te=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue)if(H>=0&&H<=T.width-K&&Q>=0&&Q<=T.height-Y){M.bindFramebuffer(D.FRAMEBUFFER,Ue);const ke=T.textures[Te],rt=ke.format,ct=ke.type;T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Te);const Oe=Du(ke);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,mt),D.bufferData(D.PIXEL_PACK_BUFFER,Ae.byteLength,D.STREAM_READ),D.readPixels(H,Q,K,Y,ye.convert(rt),ye.convert(ct),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Ut=X!==null?$.get(X).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,Ut);const Pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Rx(D,Pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,mt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ae),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(mt),D.deleteSync(Pt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,Q=0){const K=Math.pow(2,-Q),Y=Math.floor(T.image.width*K),Ae=Math.floor(T.image.height*K),De=H!==null?H.x:0,Te=H!==null?H.y:0;ee.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,Q,0,0,De,Te,Y,Ae),M.unbindTexture()},this.copyTextureToTexture=function(T,H,Q=null,K=null,Y=0,Ae=0){let De,Te,Ue,ke,rt,ct,Oe,mt,Ut;const Pt=T.isCompressedTexture?T.mipmaps[Ae]:T.image;if(Q!==null)De=Q.max.x-Q.min.x,Te=Q.max.y-Q.min.y,Ue=Q.isBox3?Q.max.z-Q.min.z:1,ke=Q.min.x,rt=Q.min.y,ct=Q.isBox3?Q.min.z:0;else{const Nt=Math.pow(2,-Y);De=Math.floor(Pt.width*Nt),Te=Math.floor(Pt.height*Nt),T.isDataArrayTexture?Ue=Pt.depth:T.isData3DTexture?Ue=Math.floor(Pt.depth*Nt):Ue=1,ke=0,rt=0,ct=0}K!==null?(Oe=K.x,mt=K.y,Ut=K.z):(Oe=0,mt=0,Ut=0);const yt=ye.convert(H.format),qt=ye.convert(H.type);let Ie;H.isData3DTexture?(ee.setTexture3D(H,0),Ie=D.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ee.setTexture2DArray(H,0),Ie=D.TEXTURE_2D_ARRAY):(ee.setTexture2D(H,0),Ie=D.TEXTURE_2D),M.activeTexture(D.TEXTURE0),M.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),M.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),M.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const Zt=M.getParameter(D.UNPACK_ROW_LENGTH),ut=M.getParameter(D.UNPACK_IMAGE_HEIGHT),pn=M.getParameter(D.UNPACK_SKIP_PIXELS),kn=M.getParameter(D.UNPACK_SKIP_ROWS),Ei=M.getParameter(D.UNPACK_SKIP_IMAGES);M.pixelStorei(D.UNPACK_ROW_LENGTH,Pt.width),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt.height),M.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),M.pixelStorei(D.UNPACK_SKIP_ROWS,rt),M.pixelStorei(D.UNPACK_SKIP_IMAGES,ct);const rs=T.isDataArrayTexture||T.isData3DTexture,vt=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const Nt=$.get(T),wi=$.get(H),At=$.get(Nt.__renderTarget),Ti=$.get(wi.__renderTarget);M.bindFramebuffer(D.READ_FRAMEBUFFER,At.__webglFramebuffer),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let as=0;as<Ue;as++)rs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$.get(T).__webglTexture,Y,ct+as),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$.get(H).__webglTexture,Ae,Ut+as)),D.blitFramebuffer(ke,rt,De,Te,Oe,mt,De,Te,D.DEPTH_BUFFER_BIT,D.NEAREST);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||$.has(T)){const Nt=$.get(T),wi=$.get(H);M.bindFramebuffer(D.READ_FRAMEBUFFER,P),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,F);for(let At=0;At<Ue;At++)rs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,Y,ct+At):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Nt.__webglTexture,Y),vt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wi.__webglTexture,Ae,Ut+At):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wi.__webglTexture,Ae),Y!==0?D.blitFramebuffer(ke,rt,De,Te,Oe,mt,De,Te,D.COLOR_BUFFER_BIT,D.NEAREST):vt?D.copyTexSubImage3D(Ie,Ae,Oe,mt,Ut+At,ke,rt,De,Te):D.copyTexSubImage2D(Ie,Ae,Oe,mt,ke,rt,De,Te);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else vt?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ie,Ae,Oe,mt,Ut,De,Te,Ue,yt,qt,Pt.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(Ie,Ae,Oe,mt,Ut,De,Te,Ue,yt,Pt.data):D.texSubImage3D(Ie,Ae,Oe,mt,Ut,De,Te,Ue,yt,qt,Pt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ae,Oe,mt,De,Te,yt,qt,Pt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ae,Oe,mt,Pt.width,Pt.height,yt,Pt.data):D.texSubImage2D(D.TEXTURE_2D,Ae,Oe,mt,De,Te,yt,qt,Pt);M.pixelStorei(D.UNPACK_ROW_LENGTH,Zt),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),M.pixelStorei(D.UNPACK_SKIP_PIXELS,pn),M.pixelStorei(D.UNPACK_SKIP_ROWS,kn),M.pixelStorei(D.UNPACK_SKIP_IMAGES,Ei),Ae===0&&H.generateMipmaps&&D.generateMipmap(Ie),M.unbindTexture()},this.initRenderTarget=function(T){$.get(T).__webglFramebuffer===void 0&&ee.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ee.setTextureCube(T,0):T.isData3DTexture?ee.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ee.setTexture2DArray(T,0):ee.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){G=0,z=0,X=null,M.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}function Ig(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ct;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Pd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][f]);const g=Pd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Pd(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Rt(a,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const _=h.getComponent(f,g);o.setComponent(f+u,g,_)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Ld(i,e){if(e===mx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ah||e===Jm){let t=i.getIndex();if(t===null){const r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===ah)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function qT(i){const e=new Map,t=new Map,n=i.clone();return Dg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Dg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Dg(i.children[n],e.children[n],t)}class Ng extends is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jT(t)}),this.register(function(t){return new ZT(t)}),this.register(function(t){return new oA(t)}),this.register(function(t){return new cA(t)}),this.register(function(t){return new lA(t)}),this.register(function(t){return new eA(t)}),this.register(function(t){return new tA(t)}),this.register(function(t){return new nA(t)}),this.register(function(t){return new iA(t)}),this.register(function(t){return new JT(t)}),this.register(function(t){return new sA(t)}),this.register(function(t){return new QT(t)}),this.register(function(t){return new aA(t)}),this.register(function(t){return new rA(t)}),this.register(function(t){return new YT(t)}),this.register(function(t){return new Id(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Id(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new hA(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Nr.extractUrlBase(e);a=Nr.resolveURL(l,this.path)}else a=Nr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new eu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Fg){try{a[ot.KHR_BINARY_GLTF]=new uA(e)}catch(u){s&&s(u);return}r=JSON.parse(a[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new EA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:a[u]=new $T;break;case ot.KHR_DRACO_MESH_COMPRESSION:a[u]=new fA(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:a[u]=new dA;break;case ot.KHR_MESH_QUANTIZATION:a[u]=new pA;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function KT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ft(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class YT{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new qe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],tn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new yg(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Sg(h),l.distance=u;break;case"spot":l=new DM(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Vn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class $T{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Kn}extendParams(e,t,n){const s=[];e.color=new qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],tn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(s)}}class JT{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class jT{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(r,r)}return Promise.all(s)}}class ZT{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class QT{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class eA{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],tn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Mt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class tA{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class nA{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(r[0],r[1],r[2],tn),Promise.all(s)}}class iA{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class sA{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(r[0],r[1],r[2],tn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Mt)),Promise.all(s)}}class rA{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class aA{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Un:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class oA{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class cA{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class lA{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Id{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}}class hA{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==gn.TRIANGLES&&l.mode!==gn.TRIANGLE_STRIP&&l.mode!==gn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const g of u){const _=new $e,p=new N,m=new an,x=new N(1,1,1),E=new zs(g.geometry,g.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,S),c.SCALE&&x.fromBufferAttribute(c.SCALE,S),E.setMatrixAt(S,_.compose(p,m,x));let v=null;for(const S in c)if(S==="_COLOR_0"){const y=c[S];E.instanceColor=new Lo(y.array,y.itemSize,y.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){const R=E.geometry;v=new Ct,v.name=R.name;for(const b in R.attributes)v.setAttribute(b,R.attributes[b]);for(const b in R.morphAttributes)v.morphAttributes[b]=R.morphAttributes[b];R.index!==null&&v.setIndex(R.index),v.morphTargetsRelative=R.morphTargetsRelative;for(const b of R.groups)v.addGroup(b.start,b.count,b.materialIndex);R.boundingBox!==null&&(v.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(v.boundingSphere=R.boundingSphere.clone()),v.drawRange.start=R.drawRange.start,v.drawRange.count=R.drawRange.count,v.userData=Object.assign({},R.userData),E.geometry=v}const y=c[S];v.setAttribute(S,new Lo(y.array,y.itemSize,y.normalized))}wt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),d.push(E)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Fg="glTF",hr=12,Dd={JSON:1313821514,BIN:5130562};class uA{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,hr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-hr,r=new DataView(e,hr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Dd.JSON){const l=new Uint8Array(e,hr+a,o);this.content=n.decode(l)}else if(c===Dd.BIN){const l=hr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=ph[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=ph[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],d=Gs[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(const g in d.attributes){const _=d.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}u(d)},o,l,tn,f)})})}}class dA{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class pA{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class Ug extends Ks{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,_=g-l,p=-2*d+3*f,m=d-f,x=1-p,E=m-f+u;for(let v=0;v!==o;v++){const S=a[_+v+o],y=a[_+v+c]*h,R=a[g+v+o],b=a[g+v]*h;r[v]=x*S+E*y+p*R+m*b}return r}}const mA=new an;class gA extends Ug{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return mA.fromArray(r).normalize().toArray(r),r}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nd={9728:Bt,9729:Lt,9984:Vm,9985:oo,9986:xr,9987:hn},Fd={33071:bn,33648:Eo,10497:Sn},jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ph={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bA={CUBICSPLINE:void 0,LINEAR:qr,STEP:Xr},Zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _A(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Et({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vi})),i.DefaultMaterial}function Wi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xA(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function vA(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MA(i){let e;const t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qc(t.attributes):e=i.indices+":"+Qc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Qc(i.targets[n]);return e}function Qc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function mh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SA(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const yA=new $e;class EA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new KT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new PM(this.options.manager):this.textureLoader=new UM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new eu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Wi(r,o,s),Vn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Nr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=jc[s.type],o=Gs[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Rt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=jc[s.type],l=Gs[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(d&&d!==u){const m=Math.floor(f/d),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let E=t.cache.get(x);E||(_=new l(o,m*d,s.count*d/h),E=new fv(_,d/h),t.cache.add(x,E)),p=new Kh(E,c,f%d/h,g)}else o===null?_=new l(s.count*c):_=new l(o,f,s.count*c),p=new Rt(_,c,g);if(s.sparse!==void 0){const m=jc.SCALAR,x=Gs[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,S=new x(a[1],E,s.sparse.count*m),y=new l(a[2],v,s.sparse.count*c);o!==null&&(p=new Rt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let R=0,b=S.length;R<b;R++){const w=S[R];if(p.setX(w,y[R*c]),c>=2&&p.setY(w,y[R*c+1]),c>=3&&p.setZ(w,y[R*c+2]),c>=4&&p.setW(w,y[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Nd[f.magFilter]||Lt,h.minFilter=Nd[f.minFilter]||hn,h.wrapS=Fd[f.wrapS]||Sn,h.wrapT=Fd[f.wrapT]||Sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==Lt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const p=new zt(_);p.needsUpdate=!0,f(p)}),t.load(Nr.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Vn(u,a),u.userData.mimeType=a.mimeType||SA(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ag,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Jh,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Et}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){const u=s[ot.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new qe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],tn),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Mt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=nn);const h=r.alphaMode||Zc.OPAQUE;if(h===Zc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Zc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Kn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Kn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Kn){const u=r.emissiveFactor;o.emissive=new qe().setRGB(u[0],u[1],u[2],tn)}return r.emissiveTexture!==void 0&&a!==Kn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Vn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Wi(s,u,r),u})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Ud(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=MA(l),u=s[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Ud(new Ct,l,t),l.mode===gn.TRIANGLE_STRIP?f=f.then(d=>Ld(d,Jm)):l.mode===gn.TRIANGLE_FAN&&(f=f.then(d=>Ld(d,ah))),s[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?_A(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const _=h[d],p=a[d];let m;const x=l[d];if(p.mode===gn.TRIANGLES||p.mode===gn.TRIANGLE_STRIP||p.mode===gn.TRIANGLE_FAN||p.mode===void 0){const E=r.isSkinnedMesh===!0,v=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");E&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=E&&v?new _v(_,x):new oe(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===gn.LINES)m=new rg(_,x);else if(p.mode===gn.LINE_STRIP)m=new Ko(_,x);else if(p.mode===gn.LINE_LOOP)m=new Sv(_,x);else if(p.mode===gn.POINTS)m=new yv(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&vA(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Vn(m,r),p.extensions&&Wi(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Wi(s,u[0],r),u[0];const f=new Ze;r.extensions&&Wi(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(qx.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ts(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const f=new $e;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Yh(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const d=s.channels[u],g=s.samplers[d.sampler],_=d.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let E=0,v=f.length;E<v;E++){const S=f[E],y=d[E],R=g[E],b=_[E],w=p[E];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const A=n._createAnimationTracks(S,y,R,b,w);if(A)for(let C=0;C<A.length;C++)m.push(A[C])}const x=new SM(r,void 0,m);return Vn(x,s),x})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,yA)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){const d=h.userData.pivot,g=u[0];h.pivot=new N().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new sg:l.length>1?h=new Ze:l.length===1?h=l[0]:h=new wt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Vn(h,r),r.extensions&&Wi(n,h,r),r.matrix!==void 0){const u=new $e;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ze;n.name&&(r.name=s.createUniqueName(n.name)),Vn(r,n),n.extensions&&Wi(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){const f=c[h];f.parent!==null?r.add(qT(f)):r.add(f)}const l=h=>{const u=new Map;for(const[f,d]of s.associations)(f instanceof In||f instanceof zt)&&u.set(f,d);return h.traverse(f=>{const d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}Ii[r.path]===Ii.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Ii[r.path]){case Ii.weights:h=ta;break;case Ii.rotation:h=na;break;case Ii.translation:case Ii.scale:h=Fo;break;default:switch(n.itemSize){case 1:h=ta;break;case 2:case 3:default:h=Fo;break}break}const u=s.interpolation!==void 0?bA[s.interpolation]:qr,f=this._getArrayFromAccessor(n);for(let d=0,g=c.length;d<g;d++){const _=new h(c[d]+"."+Ii[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=mh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof na?gA:Ug;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function wA(i,e,t){const n=e.attributes,s=new fn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),o.normalized){const h=mh(Gs[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new N,c=new N;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=mh(Gs[f.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Fn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Ud(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=ph[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return lt.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),Vn(i,e),wA(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?xA(i,e.targets,t):i})}var Og=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var x=new Uint8Array(m.length),E=0;E<m.length;++E){var v=m.charCodeAt(E);x[E]=v>96?v-97:v>64?v-39:v+4}for(var S=0,E=0;E<m.length;++E)x[S++]=x[E]<60?n[x[E]]:(x[E]-60)*64+x[++E];return x.buffer.slice(0,S)}function c(m,x,E,v,S,y,R){var b=m.exports.sbrk,w=v+3&-4,A=b(w*S),C=b(y.length),U=new Uint8Array(m.exports.memory.buffer);U.set(y,C);var I=x(A,v,S,C,y.length);if(I==0&&R&&R(A,w,S),E.set(U.subarray(A,A+v*S)),b(A-b(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(m){var x={object:new Worker(m),pending:0,requests:{}};return x.object.onmessage=function(E){var v=E.data;x.pending-=v.count,x.requests[v.id][v.action](v.value),delete x.requests[v.id]},x}function g(m){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+p.name+";"+c.toString()+p.toString(),E=new Blob([x],{type:"text/javascript"}),v=URL.createObjectURL(E),S=u.length;S<m;++S)u[S]=d(v);for(var S=m;S<u.length;++S)u[S].object.postMessage({});u.length=m,URL.revokeObjectURL(v)}function _(m,x,E,v,S){for(var y=u[0],R=1;R<u.length;++R)u[R].pending<y.pending&&(y=u[R]);return new Promise(function(b,w){var A=new Uint8Array(E),C=++f;y.pending+=m,y.requests[C]={resolve:b,reject:w},y.object.postMessage({id:C,count:m,size:x,source:A,mode:v,filter:S},[A.buffer])})}function p(m){var x=m.data;self.ready.then(function(E){if(!x.id)return self.close();try{var v=new Uint8Array(x.count*x.size);c(E,E.exports[x.mode],v,x.count,x.size,x.source,E.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(S){self.postMessage({id:x.id,count:x.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(m){g(m)},decodeVertexBuffer:function(m,x,E,v,S){c(r,r.exports.meshopt_decodeVertexBuffer,m,x,E,v,r.exports[l[S]])},decodeIndexBuffer:function(m,x,E,v){c(r,r.exports.meshopt_decodeIndexBuffer,m,x,E,v)},decodeIndexSequence:function(m,x,E,v){c(r,r.exports.meshopt_decodeIndexSequence,m,x,E,v)},decodeGltfBuffer:function(m,x,E,v,S,y){c(r,r.exports[h[S]],m,x,E,v,r.exports[l[y]])},decodeGltfBufferAsync:function(m,x,E,v,S){return u.length>0?_(m,x,E,h[v],l[S]):a.then(function(){var y=new Uint8Array(m*x);return c(r,r.exports[h[v]],y,m,x,E,r.exports[l[S]]),y})}}})();let Va=null;function TA(){return Va||(Va=new Ng,Va.setMeshoptDecoder(Og)),Va}function AA(i,e){if(/^https?:\/\//i.test(i))return i.endsWith(".glb")?i:`${i.replace(/\/+$/,"")}/field${e==="low"?"-low":""}.glb`;const t=e==="low"?"field-low.glb":"field.glb",n=i.replace(/\/?field(-low)?\.glb$/i,"").replace(/^\/+/,"").replace(/\/+$/,"");return`${"/".replace(/\/+$/,"")}/${n}/${t}`.replace(/\/{2,}/g,"/")}function Bg(i,e){let t=null;return i.traverse(n=>{var s;t||(((s=n.userData)==null?void 0:s.name)===e||n.name===e)&&(t=n)}),t}function Ds(i,e){const t=Bg(i,e);if(!t)throw new Error(`renderFieldGlb: glTF is missing expected node "${e}" — see field-cad's README for the node names convert.py writes`);return t}function Fr(i,e){return Bg(i,e)}const RA=["tile","glass","metal","plastic","decal","tape","misc"],CA=2764339,PA=.08,LA=.13,kg=.15,IA=8227734,DA=.18,NA=255,FA=31713,UA=10,zg=5,OA=1.586,el=.55,Od=12,Bd=1/kg,BA=.018,kA=14673644,zA=1.25,GA=12,kd=.05;function Gg(i,e=0){const t=new qe().setHex(kA,Mt),n=new Un({color:IA,metalness:0,roughness:DA,ior:OA,transparent:!0,opacity:i,depthWrite:!1,side:nn,envMapIntensity:kg});return n.customProgramCacheKey=()=>`bb-clear-panel|${el}|${Od}|${Bd}|${kd}|${e}`,n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",[`float bbCos = max( abs( dot( normalize( normal ), normalize( vViewPosition ) ) ), ${kd.toFixed(2)} );`,"float bbExcess = pow( 1.0 - bbCos, 5.0 );","float bbPath = 1.0 - pow( 1.0 - diffuseColor.a, 1.0 / bbCos );",`float bbFresnel = mix( diffuseColor.a, ${el.toFixed(4)}, bbExcess );`,`diffuseColor.a = min( max( bbPath, bbFresnel ), ${el.toFixed(4)} );`,`vec3 bbSpec = reflectedLight.directSpecular + reflectedLight.indirectSpecular * ${Bd.toFixed(4)};`,`outgoingLight += bbSpec * min( 1.0 / max( diffuseColor.a, 0.02 ) - 1.0, ${Od.toFixed(1)} );`,...e>0?[`float bbVeilT = min( diffuseColor.a / max( ${i.toFixed(4)}, 0.001 ), ${zA.toFixed(2)} );`,`float bbVeilG = min( 1.0 / max( diffuseColor.a, 0.02 ), ${GA.toFixed(1)} );`,`outgoingLight += vec3( ${t.r.toFixed(4)}, ${t.g.toFixed(4)}, ${t.b.toFixed(4)} ) * ${e.toFixed(4)} * bbVeilT * bbVeilG;`]:[],"#include <opaque_fragment>"].join(`
`))},n}function Hg(){return Gg(LA,BA)}function gh(){return Gg(PA)}const Yn=-2;function Vg(i){return i?i==="tiles"||i==="walls"||i==="tape"||i==="stations"?i:/^hive_(red|blue)\/tray$/.test(i)?"hive_tray":/^hive_(red|blue|shared)\/frame$/.test(i)?"hive_frame":/^flower_\d+$/.test(i)?"flower":null:null}function su(i,e,t){return i==="glass"?!0:i==="plastic"&&e===15132390&&t==="hive_tray"}function bh(i,e,t){if(su(i,e,t))return i==="glass"?gh():Hg();const n=e===NA?FA:e;switch(i){case"glass":return gh();case"metal":return new Et({color:n,metalness:.7,roughness:.35});case"plastic":return new Et({color:n,metalness:.05,roughness:.5});case"tape":return new Et({color:n,metalness:0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:Yn,polygonOffsetUnits:Yn});case"decal":return new Et({color:n,metalness:0,roughness:.85,polygonOffset:!0,polygonOffsetFactor:Yn,polygonOffsetUnits:Yn});case"tile":return new Et({color:CA,metalness:0,roughness:.9});case"misc":default:return new Et({color:n,metalness:.2,roughness:.6})}}const jo=40;function Zo(i,e){const t=i.getIndex(),n=i.getAttribute("position");if(!t||!n){i.computeVertexNormals();return}const s=t.count/3,r=n.count,a=new Float32Array(s*3),o=new Float32Array(s),c=new N,l=new N,h=new N,u=new N,f=new N;for(let A=0;A<s;A++){c.fromBufferAttribute(n,t.getX(A*3)),l.fromBufferAttribute(n,t.getX(A*3+1)),h.fromBufferAttribute(n,t.getX(A*3+2)),u.subVectors(h,l),f.subVectors(c,l),u.cross(f);const C=u.length();o[A]=C/2,C>0&&u.divideScalar(C),a[A*3]=u.x,a[A*3+1]=u.y,a[A*3+2]=u.z}const d=new Uint32Array(r+1);for(let A=0;A<t.count;A++)d[t.getX(A)+1]++;for(let A=0;A<r;A++)d[A+1]+=d[A];const g=d.slice(0,r),_=new Uint32Array(t.count),p=new Uint32Array(t.count);for(let A=0;A<s;A++)for(let C=0;C<3;C++){const U=g[t.getX(A*3+C)]++;_[U]=A,p[U]=A*3+C}const m=Math.cos(e*Math.PI/180),x=new Uint32Array(t.count),E=[],v=[],S=1-1e-6,y=[];for(let A=0;A<r;A++){const C=d[A],U=d[A+1];if(C===U){E.push(A),v.push(0,0,1);continue}y.length=0;for(let I=C;I<U;I++){const P=_[I]*3,F=o[_[I]]===0;let G=0,z=0,X=0;for(let k=C;k<U;k++){const q=_[k],j=o[q];if(j===0)continue;const de=q*3;!F&&a[P]*a[de]+a[P+1]*a[de+1]+a[P+2]*a[de+2]<m||(G+=a[de]*j,z+=a[de+1]*j,X+=a[de+2]*j)}const O=Math.hypot(G,z,X);O>0?(G/=O,z/=O,X/=O):X=1;let B=-1;for(const k of y)if(v[k*3]*G+v[k*3+1]*z+v[k*3+2]*X>=S){B=k;break}B<0&&(B=E.length,y.push(B),E.push(A),v.push(G,z,X)),x[p[I]]=B}}const R=E.length,b=Float32Array.from(v),w=(A,C,U)=>U===0?A.getX(C):U===1?A.getY(C):U===2?A.getZ(C):A.getW(C);for(const A of Object.keys(i.attributes)){const C=i.getAttribute(A),U=C.itemSize,I=new Float32Array(R*U);for(let P=0;P<R;P++){const F=E[P];for(let G=0;G<U;G++)I[P*U+G]=w(C,F,G)}i.setAttribute(A,new Rt(I,U))}i.setAttribute("normal",new Rt(b,3)),i.setIndex(new Rt(x,1))}function Wg(i){if(!i)return null;const e=i.indexOf("#");if(e<=0)return null;const t=i.slice(0,e);if(!RA.includes(t))return null;const n=i.slice(e+1);return/^[0-9a-f]{6}$/i.test(n)?{finish:t,colorHex:parseInt(n,16)}:null}function HA(i){const e=new Map,t=new Set,n=(s,r)=>{var c;const o=Vg(((c=s.userData)==null?void 0:c.name)??s.name)??r;if(s instanceof oe){s.castShadow=!0,s.receiveShadow=!0,s.geometry&&!s.geometry.getAttribute("normal")&&Zo(s.geometry,jo);const l=Array.isArray(s.material)?s.material[0]:s.material,h=l==null?void 0:l.name,u=Wg(h),f=`${u?h:"__unrecognised__"}@${o}`;let d=e.get(f);d||(u||t.add(String(h)),d=u?bh(u.finish,u.colorHex,o):bh("misc",10133931,o),d.name=f,e.set(f,d)),s.material=d,(u==null?void 0:u.finish)==="tile"&&(s.castShadow=!1),u&&su(u.finish,u.colorHex,o)&&(s.castShadow=!1,s.renderOrder=u.finish==="glass"?UA:zg)}for(const l of s.children)n(l,o)};n(i,"other"),t.size>0&&console.warn(`renderFieldGlb: ${t.size} glTF material name(s) are not "<finish>#<rrggbb>" and fell back to grey: ${[...t].join(", ")}. Regenerate with \`npm run field-cad\`, or add the finish to FINISHES here and to FINISH in assemble-gltf.mjs.`)}function zd(i,e){var r;const t=Ds(i,`hive_${e}/tray`),n=yo().trays[e].pivot,s=new Ze;return s.name=`hive_${e}/tray-pivot`,s.position.set(n[0],n[1],n[2]),(r=t.parent)==null||r.add(s),s.attach(t),s}const VA=46,WA=11.5,XA=36;function qA(i,e){return e>=VA||Math.abs(i)>=WA&&e>=XA}function KA(i,e){const t=new Map,n=i.geometry,s=n.getAttribute("position");if(!s)return t;i.updateWorldMatrix(!0,!1);const r=new N,a=new Float32Array(s.count*3);for(let _=0;_<s.count;_++)r.fromBufferAttribute(s,_).applyMatrix4(i.matrixWorld),a[_*3]=r.x,a[_*3+1]=r.y,a[_*3+2]=r.z;const o=n.getIndex(),c=o?o.count/3:s.count/3,l=new Map,h=[];for(let _=0;_<c;_++){const p=o?o.getX(_*3):_*3,m=o?o.getX(_*3+1):_*3+1,x=o?o.getX(_*3+2):_*3+2,E=(a[p*3]+a[m*3]+a[x*3])/3,v=(a[p*3+1]+a[m*3+1]+a[x*3+1])/3,S=(a[p*3+2]+a[m*3+2]+a[x*3+2])/3,y=e(E,v,S,_);if(y===null)h.push(p,m,x);else{const R=l.get(y);R?R.push(p,m,x):l.set(y,[p,m,x])}}if(l.size===0)return t;const u=Object.keys(n.attributes),f=(_,p,m)=>m===0?_.getX(p):m===1?_.getY(p):m===2?_.getZ(p):_.getW(p),d=(_,p)=>{const m=new Ct;for(const x of u){const E=n.getAttribute(x),v=E.itemSize,S=new Float32Array(_.length*v);for(let y=0;y<_.length;y++){const R=_[y];if(p&&x==="position")S[y*3]=a[R*3],S[y*3+1]=a[R*3+1],S[y*3+2]=a[R*3+2];else for(let b=0;b<v;b++)S[y*v+b]=f(E,R,b)}m.setAttribute(x,new Rt(S,v))}return m.getAttribute("normal")||Zo(m,jo),m};for(const[_,p]of l)t.set(_,d(p,!0));const g=d(h,!1);return n.dispose(),i.geometry=g,t}const YA=1.25;function $A(i){const{tri:e,triCount:t,siteCount:n,sitePos:s}=Xg(i.geometry),r=new Int32Array(t).fill(-1),a=new Map;if(t===0)return{ofTriangle:r,spans:a};i.updateWorldMatrix(!0,!1);const o=new N,c=new Float64Array(n),l=new Float64Array(n);for(let u=0;u<n;u++)o.set(s[u*3],s[u*3+1],s[u*3+2]).applyMatrix4(i.matrixWorld),c[u]=o.x,l[u]=o.z;const h=qg(e,t,n);for(let u=0;u<t;u++){const f=h[u];r[u]=f;let d=a.get(f);d||(d={tris:0,xMin:1/0,xMax:-1/0,zMin:1/0,zMax:-1/0},a.set(f,d)),d.tris++;for(let g=0;g<3;g++){const _=e[u*3+g],p=c[_],m=l[_];p<d.xMin&&(d.xMin=p),p>d.xMax&&(d.xMax=p),m<d.zMin&&(d.zMin=m),m>d.zMax&&(d.zMax=m)}}return{ofTriangle:r,spans:a}}function Xg(i){const e=i.getAttribute("position");if(!e)return{tri:new Int32Array(0),triCount:0,siteCount:0,sitePos:new Float64Array(0)};if(!i.getIndex()){const c=new Uint32Array(e.count);for(let l=0;l<e.count;l++)c[l]=l;i.setIndex(new Rt(c,1))}const t=i.getIndex(),n=Math.floor(t.count/3),s=new Map,r=new Int32Array(e.count),a=[];for(let c=0;c<e.count;c++){const l=e.getX(c),h=e.getY(c),u=e.getZ(c),f=`${l},${h},${u}`;let d=s.get(f);d===void 0&&(d=s.size,s.set(f,d),a.push(l,h,u)),r[c]=d}const o=new Int32Array(n*3);for(let c=0;c<n*3;c++)o[c]=r[t.getX(c)];return{tri:o,triCount:n,siteCount:s.size,sitePos:Float64Array.from(a)}}function qg(i,e,t){const n=new Int32Array(t);for(let a=0;a<t;a++)n[a]=a;const s=a=>{for(;n[a]!==a;)n[a]=n[n[a]],a=n[a];return a};for(let a=0;a<e;a++){const o=s(i[a*3]),c=s(i[a*3+1]),l=s(i[a*3+2]);o!==c&&(n[c]=o),s(l)!==s(o)&&(n[s(l)]=s(o))}const r=new Int32Array(e);for(let a=0;a<e;a++)r[a]=s(i[a*3]);return r}const JA=["hive_red/frame","hive_blue/frame","hive_shared/frame"];function jA(){return{red:yo().trays.red.pivot[0],blue:yo().trays.blue.pivot[0]}}const ZA=.03,QA=1e-6;function eR(i,e,t,n){const s=new Uint8Array(e);for(let b=0;b<e;b++){const w=i[b*3],A=i[b*3+1],C=i[b*3+2];(w===A||A===C||C===w)&&(s[b]=1)}const r=qg(i,e,t),a=e*3,o=new Map,c=new Int32Array(a),l=new Int32Array(a),h=new Int8Array(a),u=new Int8Array(a),f=new Int32Array(a);let d=0;for(let b=0;b<e;b++)if(!s[b])for(let w=0;w<3;w++){const A=i[b*3+w],C=i[b*3+(w+1)%3],U=A<C?A*t+C:C*t+A;let I=o.get(U);I===void 0&&(I=d++,o.set(U,I));const P=f[I]++;P===0?(c[I]=b,h[I]=A<C?1:-1):P===1&&(l[I]=b,u[I]=A<C?1:-1)}const g=new Map,_=b=>{const w=r[b];let A=g.get(w);return A||(A={tris:0,boundaryEdges:0,flippedEdges:0,okInteriorEdges:0,nonManifoldEdges:0,signedVolume:0,boundaryFraction:0,open:!1},g.set(w,A)),A};for(let b=0;b<e;b++)_(b).tris++;for(let b=0;b<d;b++){const w=_(c[b]);f[b]===1?w.boundaryEdges++:f[b]===2?h[b]===u[b]?w.flippedEdges++:w.okInteriorEdges++:w.nonManifoldEdges++}const p=new Int32Array(e+1);for(let b=0;b<d;b++)f[b]===2&&(p[c[b]+1]++,p[l[b]+1]++);for(let b=0;b<e;b++)p[b+1]+=p[b];const m=p.slice(0,e),x=new Int32Array(p[e]),E=new Int32Array(p[e]);for(let b=0;b<d;b++){if(f[b]!==2)continue;const w=c[b],A=l[b];x[m[w]]=A,E[m[w]++]=b,x[m[A]]=w,E[m[A]++]=b}const v=new Int8Array(e);let S=0;const y=[],R=[];for(let b=0;b<e;b++){if(v[b]!==0||s[b])continue;v[b]=1,y.length=0,R.length=0,y.push(b);let w=!1;for(;y.length>0;){const X=y.pop();R.push(X);for(let O=p[X];O<p[X+1];O++){const B=x[O],k=E[O],q=(c[k]===X?h[k]:u[k])*v[X],j=c[k]===X?u[k]:h[k],de=q*j>0?-1:1;v[B]===0?(v[B]=de,y.push(B)):v[B]!==de&&(w=!0)}}w&&S++;let A=0,C=1/0,U=1/0,I=1/0,P=-1/0,F=-1/0,G=-1/0;for(const X of R){const O=v[X],B=i[X*3],k=i[X*3+(O>0?1:2)],q=i[X*3+(O>0?2:1)],j=n[B*3],de=n[B*3+1],xe=n[B*3+2],Ne=n[k*3],J=n[k*3+1],Z=n[k*3+2],fe=n[q*3],Ce=n[q*3+1],be=n[q*3+2];A+=(j*(J*be-Z*Ce)+de*(Z*fe-Ne*be)+xe*(Ne*Ce-J*fe))/6;for(const[Pe,Ke,te]of[[j,de,xe],[Ne,J,Z],[fe,Ce,be]])Pe<C&&(C=Pe),Pe>P&&(P=Pe),Ke<U&&(U=Ke),Ke>F&&(F=Ke),te<I&&(I=te),te>G&&(G=te)}const z=Math.max((P-C)*(F-U)*(G-I),1e-12);if(A<0&&Math.abs(A)/z>QA){for(const X of R)v[X]=v[X]>0?-1:1;A=-A}_(b).signedVolume+=A}for(const b of g.values()){const w=b.boundaryEdges+b.flippedEdges+b.okInteriorEdges+b.nonManifoldEdges;b.boundaryFraction=w>0?b.boundaryEdges/w:1,b.open=b.boundaryFraction>ZA}return{components:g,componentOf:r,orient:v,nonOrientableIslands:S}}function tR(i){var _;const e={components:0,openComponents:0,reversedTris:0,openTris:0,nonOrientableIslands:0,open:null},{tri:t,triCount:n,siteCount:s,sitePos:r}=Xg(i);if(n===0)return e;const{components:a,componentOf:o,orient:c,nonOrientableIslands:l}=eR(t,n,s,r),h=i.getIndex();let u=0;for(let p=0;p<n;p++){if(c[p]>=0)continue;const m=h.getX(p*3+1);h.setX(p*3+1,h.getX(p*3+2)),h.setX(p*3+2,m),u++}u>0&&(h.needsUpdate=!0);let f=0,d=0,g=null;for(const p of a.values())p.open&&f++;if(f>0){g=new Uint8Array(n);for(let p=0;p<n;p++)(_=a.get(o[p]))!=null&&_.open&&(g[p]=1,d++)}return{components:a.size,openComponents:f,reversedTris:u,openTris:d,nonOrientableIslands:l,open:g}}function nR(i){const e=Gd(),t={meshes:0,components:0,openComponents:0,totalTris:0,reversedTris:0,openTris:0,clearPanelTris:0,nonOrientableIslands:0,ms:0},n=new Map,s=new Set,r=(a,o)=>{var h;const l=Vg(((h=a.userData)==null?void 0:h.name)??a.name)??o;if(a instanceof oe&&a.geometry){const u=Array.isArray(a.material)?a.material[0]:a.material,f=Wg(u==null?void 0:u.name),d=Kg(a.geometry);if(f&&su(f.finish,f.colorHex,l))t.clearPanelTris+=d;else if(!s.has(a.geometry)){s.add(a.geometry),t.meshes++,t.totalTris+=d;const g=tR(a.geometry);t.components+=g.components,t.openComponents+=g.openComponents,t.reversedTris+=g.reversedTris,t.openTris+=g.openTris,t.nonOrientableIslands+=g.nonOrientableIslands,g.open&&n.set(a.geometry,g.open)}}for(const u of a.children)r(u,l)};return r(i,"other"),t.ms=Gd()-e,{stats:t,open:n}}function Kg(i){const e=i.getIndex(),t=i.getAttribute("position");return Math.floor((e?e.count:(t==null?void 0:t.count)??0)/3)}function Gd(){return typeof performance<"u"&&typeof performance.now=="function"?performance.now():0}const Hd=new Map;function iR(i){let e=Hd.get(i);return e||(e=i.clone(),e.side=nn,e.name=`${i.name}|doubleside`,Hd.set(i,e)),e}function sR(i,e){if(e.size===0)return 0;const t=[];i.traverse(r=>{r instanceof oe&&e.has(r.geometry)&&t.push(r)});const n=new Map;let s=0;for(const r of t){const a=e.get(r.geometry);if(!a)continue;let o=n.get(r.geometry);if(!o){const h=rR(r.geometry,a);if(!h)continue;o=h,n.set(r.geometry,o),s+=Kg(o.open)}r.geometry=o.kept;const c=Array.isArray(r.material)?r.material[0]:r.material,l=new oe(o.open,iR(c));l.name=`${r.name||"mesh"}/doubleside`,l.castShadow=r.castShadow,l.receiveShadow=r.receiveShadow,l.renderOrder=r.renderOrder,l.userData.bbDoubleSided=!0,r.add(l)}return s}function rR(i,e){const t=i.getIndex();if(!t)return null;const n=Math.floor(t.count/3),s=[],r=[];for(let u=0;u<n;u++)(e[u]?r:s).push(t.getX(u*3),t.getX(u*3+1),t.getX(u*3+2));if(r.length===0)return null;const a=Object.keys(i.attributes),o=(u,f,d)=>d===0?u.getX(f):d===1?u.getY(f):d===2?u.getZ(f):u.getW(f),c=u=>{const f=new Ct,d=new Map,g=[],_=new Uint32Array(u.length);for(let p=0;p<u.length;p++){let m=d.get(u[p]);m===void 0&&(m=g.length,d.set(u[p],m),g.push(u[p])),_[p]=m}for(const p of a){const m=i.getAttribute(p),x=m.itemSize,E=new Float32Array(g.length*x);for(let v=0;v<g.length;v++)for(let S=0;S<x;S++)E[v*x+S]=o(m,g[v],S);f.setAttribute(p,new Rt(E,x))}return f.setIndex(new Rt(_,1)),f.getAttribute("normal")||Zo(f,jo),f},l=c(s),h=c(r);return i.dispose(),{kept:l,open:h}}function aR(i,e){const t=jA();let n=0,s=0;for(const r of JA){const a=Fr(i,r);if(!a)continue;const o=[];a.traverse(c=>{c instanceof oe&&o.push(c)});for(const c of o){const{ofTriangle:l,spans:h}=$A(c),u=new Map;for(const[d,g]of h)for(const _ of["red","blue"])Math.max(Math.abs(g.xMin-t[_]),Math.abs(g.xMax-t[_]))<=YA&&u.set(d,_);const f=KA(c,(d,g,_,p)=>{const m=u.get(l[p]);return m?`rocker:${m}`:qA(g,_)?`brace:${Math.abs(d-t.red)<Math.abs(d-t.blue)?"red":"blue"}`:null});for(const[d,g]of f){const[_,p]=d.split(":"),m=p,x=yo().trays[m],E=new $e().makeRotationX(-G_(m)).multiply(new $e().makeTranslation(-x.pivot[0],-x.pivot[1],-x.pivot[2]));g.applyMatrix4(E);const v=new oe(g,c.material);v.name=`hive_${m}/tray-${_}`,v.castShadow=!0,v.receiveShadow=!0,c.userData.bbDoubleSided&&(v.userData.bbDoubleSided=!0);const S=g.getAttribute("position").count/3;_==="rocker"?s+=S:n+=S,e[m].tray.add(v)}}}return{braceTris:n,rockerTris:s}}const oR=[1,2,3,4,5,2,3,4,3,6,6,6,6,6,5,5,5,4,6,5,4,3,2,5,4,3,4,1,1,1,1,1,2,2,2,3],cR=[1,1,1,1,1,2,2,2,3,1,2,3,4,5,2,3,4,3,6,6,6,6,6,5,5,5,4,6,5,4,3,2,5,4,3,4],lR={30:60884361568,31:12872940643,32:19096692507,33:21549952597,34:26672269255,35:28204941670,36:28173392202,37:29781966262,38:37813287046,39:42389124888,40:47235095178,41:50168524841,42:56410991961,43:60007549953,44:61056786991,45:67567695709};function Yg(i){const e=lR[i];if(e===void 0)throw new Error(`apriltag36h11Cells: no code for tag ${i} (BIOBUZZ uses 30..45)`);const t=new Uint8Array(100).fill(1),n=1;for(let s=0;s<8;s++)for(let r=0;r<8;r++)t[(s+n)*10+(r+n)]=0;for(let s=0;s<36;s++){const r=Math.floor(e/2**(35-s))%2;t[(cR[s]+n)*10+(oR[s]+n)]=r}return t}const hR={red:{north:[30,31,32,33],south:[34,35,36,37]},blue:{north:[42,43,44,45],south:[38,39,40,41]}},uR={red:{north:"RED FAR",south:"RED AUDIENCE"},blue:{north:"BLUE FAR",south:"BLUE AUDIENCE"}},ru=3.25,fR="36h11",dR=ru/10,$g=3.5,ws=12;function pR(i,e,t,n){const s=ws*10/ru,r=document.createElement("canvas");r.width=Math.round(t*s),r.height=Math.round(n*s);const a=r.getContext("2d");if(!a)throw new Error("tagClusterTexture: no 2d context");a.fillStyle="#ffffff",a.fillRect(0,0,r.width,r.height);const o=ws*10,c=Math.round(r.height-.4*s-o);for(let f=0;f<i.length;f++){const d=Yg(i[f]),g=Math.round((t/2+(f-(i.length-1)/2)*$g)*s-o/2);a.fillStyle="#000000";for(let _=0;_<10;_++)for(let p=0;p<10;p++)d[_*10+p]===0&&a.fillRect(g+p*ws,c+_*ws,ws,ws)}a.textAlign="center",a.textBaseline="middle";const l=Math.round(.6*s),h=Math.round(.4*s);a.fillStyle="#1b1f24",a.font=`700 ${l}px system-ui, sans-serif`,a.fillText(e,r.width/2,c/2-h*.7),a.fillStyle="#3c4450",a.font=`500 ${h}px system-ui, sans-serif`,a.fillText(`Tag family: ${fR}`,r.width/2,c/2+l*.7);const u=new Nn(r);return u.colorSpace=Mt,u.magFilter=Bt,u.minFilter=hn,u.needsUpdate=!0,u}const mR=1.4,gR=.3,bR="#f2f4f6",_R="#a8b2bc";function xR(i,e,t){const n=mR,s=document.createElement("canvas");s.width=Math.max(2,Math.round(e*n)),s.height=Math.max(2,Math.round(t*n));const r=s.getContext("2d");if(!r)throw new Error("tagBleedTexture: no 2d context");r.fillStyle=bR,r.fillRect(0,0,s.width,s.height);const a=ru,o=dR,c=t-.4-a;r.fillStyle=_R;for(let h=0;h<i.length;h++){const u=Yg(i[h]),f=e/2+(h-(i.length-1)/2)*$g-a/2;for(let d=0;d<10;d++)for(let g=0;g<10;g++)u[d*10+g]===0&&r.fillRect((f+g*o)*n,(c+d*o)*n,o*n,o*n)}const l=new Nn(s);return l.colorSpace=Mt,l.magFilter=Lt,l.minFilter=hn,l.needsUpdate=!0,l}function vR(i){return new Et({map:i,metalness:0,roughness:.95,transparent:!0,opacity:gR,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:Yn,polygonOffsetUnits:Yn})}const MR="#e4e7ea",Vd="rgba(80, 90, 102, 0.28)";function SR(i,e){const n=document.createElement("canvas");n.width=Math.round(i*16),n.height=Math.round(e*16);const s=n.getContext("2d");if(!s)throw new Error("bannerTexture: no 2d context");const r=s.createLinearGradient(0,0,0,n.height);r.addColorStop(0,"#ffffff"),r.addColorStop(1,MR),s.fillStyle=r,s.fillRect(0,0,n.width,n.height);const a=Math.max(1,Math.round(.18*16)),o=s.createLinearGradient(0,0,n.width,0);o.addColorStop(0,Vd),o.addColorStop(a/n.width,"rgba(0,0,0,0)"),o.addColorStop(1-a/n.width,"rgba(0,0,0,0)"),o.addColorStop(1,Vd),s.fillStyle=o,s.fillRect(0,0,n.width,n.height);const c=new Nn(n);return c.colorSpace=Mt,c.minFilter=hn,c.needsUpdate=!0,c}function yR(i){return new Et({map:i,metalness:.08,roughness:.42,polygonOffset:!0,polygonOffsetFactor:Yn,polygonOffsetUnits:Yn})}function ER(i){return new Et({map:i,metalness:0,roughness:.85,polygonOffset:!0,polygonOffsetFactor:Yn,polygonOffsetUnits:Yn})}function Wd(i,e,t,n){const s=i.geometry,r=s.getAttribute("position");if(!r)return null;i.updateWorldMatrix(!0,!1);const a=[],o=new N;for(let R=0;R<r.count;R++)a.push(o.fromBufferAttribute(r,R).applyMatrix4(i.matrixWorld).clone());const c=s.getIndex(),l=c?c.count/3:r.count/3,h=new N,u=new N,f=new N,d=new N,g=new Set;for(let R=0;R<l;R++){const b=c?c.getX(R*3):R*3,w=c?c.getX(R*3+1):R*3+1,A=c?c.getX(R*3+2):R*3+2,C=a[b],U=a[w],I=a[A];if(!e((C.x+U.x+I.x)/3,(C.y+U.y+I.y)/3,(C.z+U.z+I.z)/3))continue;u.subVectors(I,U),f.subVectors(C,U),d.copy(u).cross(f);const P=d.length();P<=0||(d.divideScalar(P),!(d.dot(t)<.7)&&(h.addScaledVector(d,P/2),g.add(b),g.add(w),g.add(A)))}if(g.size===0||h.lengthSq()===0)return null;h.normalize();const _=n.clone().addScaledVector(h,-n.dot(h));if(_.lengthSq()===0)return null;_.normalize();const p=new N().crossVectors(_,h);let m=1/0,x=-1/0,E=1/0,v=-1/0,S=-1/0;for(const R of g){const b=a[R];m=Math.min(m,b.dot(p)),x=Math.max(x,b.dot(p)),E=Math.min(E,b.dot(_)),v=Math.max(v,b.dot(_)),S=Math.max(S,b.dot(h))}return{centre:new N().addScaledVector(p,(m+x)/2).addScaledVector(_,(E+v)/2).addScaledVector(h,S),quaternion:new an().setFromRotationMatrix(new $e().makeBasis(p,_,h)),width:x-m,height:v-E}}function wR(i){const e=Array.isArray(i.material)?i.material[0]:i.material,t=e&&!Array.isArray(e)?e.name??"":"",n=t.lastIndexOf("@");return n>0?t.slice(0,n):t}function Wa(i,e){const t=[];return i.traverse(n=>{n instanceof oe&&!n.userData.bbDoubleSided&&wR(n)===e&&t.push(n)}),t}const tl=.01,Xd=.375,nl=.265,TR={tagPlates:0,tagBleeds:0,banners:0,standoffs:0};function AR(i,e,t){const n={tagPlates:0,tagBleeds:0,banners:0,standoffs:0},s=new N(0,0,-1),r=new N(0,0,1);for(const l of["red","blue"]){const h=e[l].tray;for(const u of Wa(h,"decal#ffffff")){for(const f of[1,-1]){const d=f>0?"north":"south",g=Wd(u,(E,v)=>Math.sign(v)===f,s,new N(0,f,0));if(!g)continue;const _=hR[l][d],p=new oe(new Mn(g.width,g.height),ER(pR(_,uR[l][d],g.width,g.height)));p.name=`bb-apriltags:${l}:${d}`,p.position.copy(g.centre).addScaledVector(s,tl),p.quaternion.copy(g.quaternion),p.castShadow=!1,p.receiveShadow=!0,h.attach(p),n.tagPlates++;const m=new fn().setFromObject(u).max.z,x=new oe(new Mn(g.width,g.height),vR(xR(_,g.width,g.height)));x.name=`bb-apriltag-bleed:${l}:${d}`,x.position.set(g.centre.x,g.centre.y,m+tl),x.quaternion.setFromRotationMatrix(new $e().makeBasis(new N(f,0,0),new N(0,f,0),r)),x.castShadow=!1,x.receiveShadow=!1,x.renderOrder=zg,h.attach(x),n.tagBleeds++}u.visible=!1}}const a=Fr(i,"hive_shared/frame");if(a)for(const l of Wa(a,"decal#ffffff")){for(const h of[1,-1]){const u=new N(0,h,0),f=Wd(l,(g,_)=>Math.sign(_)===h,u,new N(0,0,1));if(!f)continue;const d=new oe(new Mn(f.width,f.height),yR(SR(f.width,f.height)));d.name=`bb-banner:${h>0?"north":"south"}`,d.position.copy(f.centre).addScaledVector(new N(0,0,1).applyQuaternion(f.quaternion),tl),d.quaternion.copy(f.quaternion),d.castShadow=!1,d.receiveShadow=!0,a.attach(d),n.banners++}l.visible=!1}let o=null,c=null;for(let l=0;l<t.length;l++){const h=Wa(t[l],"plastic#641c65")[0],u=Wa(t[l],"plastic#ffba52")[0];if(!h||!u)continue;const f=new fn().setFromObject(h),d=new fn().setFromObject(u),g=f.min.z-d.max.z;if(!(g>.5&&g<2))continue;o||(o=new ft(Xd/2,Xd/2,g,12),o.rotateX(Math.PI/2),c=bh("plastic",15132390,"flower"));const _=f.max.x-f.min.x>=f.max.y-f.min.y?"x":"y",p=_==="x"?"y":"x",m=Math.abs(f.min[p])<Math.abs(f.max[p])?f.min[p]:f.max[p],x=m+Math.sign(m)*nl,E=(d.max.z+f.min.z)/2;for(const v of[f.min[_]+nl,f.max[_]-nl]){const S=new oe(o,c);S.name=`bb-flower-standoff:${l}`,S.position.set(_==="x"?v:x,_==="x"?x:v,E),S.castShadow=!0,S.receiveShadow=!0,t[l].attach(S),n.standoffs++}}return n}async function RR(i,e="high"){const t=AA(i,e),n=await TA().loadAsync(t);return CR(n.scene,e)}function CR(i,e){PR(i);const{stats:t,open:n}=nR(i);HA(i),sR(i,n);const s=Ds(i,"tiles"),r=Ds(i,"walls"),a=Fr(i,"stations"),o=Fr(i,"tape"),c=Fr(i,"hive_shared/frame"),l={red:{frame:Ds(i,"hive_red/frame"),tray:zd(i,"red")},blue:{frame:Ds(i,"hive_blue/frame"),tray:zd(i,"blue")}},h=[0,1,2,3].map(g=>Ds(i,`flower_${g}`)),{braceTris:u,rockerTris:f}=aR(i,l),d=e==="high"?AR(i,l,h):TR;return{floor:s,walls:r,tape:o,sharedFrame:c,stations:a,hives:l,flowers:h,root:i,braceTris:u,rockerTris:f,winding:t,markings:d}}function PR(i){let e=0;i.traverse(t=>{t instanceof oe&&(t.updateWorldMatrix(!0,!1),t.matrixWorld.determinant()<0&&e++)}),e>0&&console.warn(`renderFieldGlb: ${e} mesh node(s) carry a MIRRORED world transform. The winding repair orients shells by a local signed volume and will turn those inside out — see the winding header.`)}function LR(i){return i==="low"?"flat":"tiles"}const IR={flat:1024,tiles:2048},qd={period:2.369,amplitude:.4052},Jg="#454545",DR="#4c4c4c",NR="#333333",FR=.44,UR=.24;function OR(i,e,t,n){const s=t-e,r=Math.max(1,Math.round(s/qd.period)),a=s/r,o=(e+t)/2,c=qd.amplitude,l=[],h=Math.ceil(((e-o)/a-.25)*2),u=Math.floor(((t-o)/a-.25)*2);for(let m=h;m<=u;m++){const x=o+a*(.25+m/2);x>e+1e-9&&x<t-1e-9&&l.push(x)}const f=m=>(((m-o)/a+.75)%1+1)%1<.5,d=(m,x)=>n==="x"?[i+x,m]:[m,i+x],g=[];let _=e;for(const m of l){const x=f((_+m)/2)?c:-c;g.push(d(_,x)),g.push(d(m,x)),_=m}const p=f((_+t)/2)?c:-c;return g.push(d(_,p)),g.push(d(t,p)),g}function BR(i,e,t,n){return n==="x"?[[i,e],[i,t]]:[[e,i],[t,i]]}function kR(i){const e=qi,t=e[0],n=e[e.length-1],s=[];for(const r of["x","y"])for(let a=0;a<e.length;a++){if(!(a>0&&a<e.length-1)||i==="flat"){s.push({points:BR(e[a],t,n,r),interior:!1});continue}for(let c=0;c<e.length-1;c++)s.push({points:OR(e[a],e[c],e[c+1],r),interior:!0})}return s}function jg(i){let e=i*2654435761>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zR(i,e){const t=1-.08*jg(i*131+e*7919+17),n=parseInt(Jg.slice(1,3),16),r=Math.max(0,Math.min(255,Math.round(n*t))).toString(16).padStart(2,"0");return`#${r}${r}${r}`}const GR=256,Kd=24,Yd=.28;function $d(i,e){const t=(n,s)=>jg((n%i+i)%i*92837+(s%i+i)%i*689287+e);return(n,s)=>{const r=n*i,a=s*i,o=Math.floor(r),c=Math.floor(a),l=r-o,h=a-c,u=l*l*(3-2*l),f=h*h*(3-2*h),d=t(o,c),g=t(o+1,c),_=t(o,c+1),p=t(o+1,c+1);return d+(g-d)*u+(_+(p-_)*u-(d+(g-d)*u))*f}}function HR(i){var e,t;if(i==="flat")return null;try{const n=GR,s=document.createElement("canvas");s.width=n,s.height=n;const r=s.getContext("2d"),a=(e=r==null?void 0:r.createImageData)==null?void 0:e.call(r,n,n);if(!r||!a||!a.data)return null;const o=document.createElement("canvas");o.width=n,o.height=n;const c=o.getContext("2d"),l=(t=c==null?void 0:c.createImageData)==null?void 0:t.call(c,n,n);if(!c||!l||!l.data)return null;const h=$d(32,1),u=$d(96,2),f=(_,p)=>.65*h(_,p)+.35*u(_,p),d=1/n;for(let _=0;_<n;_++)for(let p=0;p<n;p++){const m=p/n,x=_/n,E=f(m+d,x)-f(m-d,x),v=f(m,x+d)-f(m,x-d),S=(_*n+p)*4;a.data[S]=Math.max(0,Math.min(255,Math.round(128-E*220))),a.data[S+1]=Math.max(0,Math.min(255,Math.round(128-v*220))),a.data[S+2]=255,a.data[S+3]=255;const y=Math.max(0,Math.min(255,Math.round(214+f(m,x)*41)));l.data[S]=y,l.data[S+1]=y,l.data[S+2]=y,l.data[S+3]=255}r.putImageData(a,0,0),c.putImageData(l,0,0);const g=(_,p)=>{const m=new Nn(_);return m.colorSpace=p?Mt:ui,m.wrapS=Sn,m.wrapT=Sn,m.repeat.set(Kd,Kd),m.anisotropy=4,m};return{normalMap:g(s,!1),roughnessMap:g(o,!1)}}catch{return null}}const ia=43.95,Zg=15.44,Sr=12.04,Xa=20,yr=14,VR=42.91,Jd=eb*Math.PI/180,WR=.25,XR=Zg+Sr/2,qa=(Q0[0]-ia-XR*Math.sin(Jd))/Math.cos(Jd)+yr/2,ci=2,jd=12,Zd=2.79/2,qR=3.2/2,Ka=.3,Qd=.35,ep=2,tp=1.25,np=.25,ip=5.49,KR="#641c65",Ui=["red","blue"];function Ln(i,e=1){return new Et({color:i,transparent:e<1,opacity:e,side:e<1?nn:vi})}const au=i=>i/(2*Jt);function Ur(i,e,t){const n=au(t);return[(i+Jt)*n,(xi-e)*n]}function YR(i){const e=au(i);return{a:e,b:0,c:0,d:-e,e:Jt*e,f:xi*e}}const ou="#007be1",$R=31713,Qg={red:"#e02020",blue:ou};function JR(i,e,t,n,s,r,a){const[o,c]=Ur(Math.min(e,n),Math.max(t,s),a),[l,h]=Ur(Math.max(e,n),Math.min(t,s),a);i.fillStyle=r,i.fillRect(o,c,Math.max(1,l-o),Math.max(1,h-c))}function jR(i,e,t){const n=Qg[e],s=(o,c)=>{const l=Z0(YR(t),o);if(!l){for(const h of c)JR(i,h.x0,h.y0,h.x1,h.y1,n,t);return}i.fillStyle=n;for(const[h,u,f,d]of l)i.fillRect(h,u,f,d)};s(br.loadingZone[e],br.loadingZone[e]);const r=[...br.garden[e],...br.gardenSupplement[e]],a={x0:Math.min(...r.map(o=>o.x0)),y0:Math.min(...r.map(o=>o.y0)),x1:Math.max(...r.map(o=>o.x1)),y1:Math.max(...r.map(o=>o.y1))};s([a],r)}function ZR(){const i=new Ze;i.name="tape:supplement";for(const e of Ui)for(const[t,n]of br.gardenSupplement[e].entries()){const s=new Mn(n.x1-n.x0,n.y1-n.y0),r=new oe(s,new Et({color:Qg[e],roughness:.8,metalness:0}));r.name=`tape:supplement:${e}:${t}`,r.position.set((n.x0+n.x1)/2,(n.y0+n.y1)/2,.01),r.receiveShadow=!0,i.add(r)}return i}function QR(i,e){const t=IR[e],n=e==="tiles",s=document.createElement("canvas");s.width=t,s.height=t;const r=s.getContext("2d");if(!r)return new Nn(s);const a=au(t);if(r.fillStyle=n?Jg:un.mat,r.fillRect(0,0,t,t),n)for(let h=0;h<qi.length-1;h++)for(let u=0;u<qi.length-1;u++){const[f,d]=Ur(qi[u],qi[h+1],t),[g,_]=Ur(qi[u+1],qi[h],t);r.fillStyle=zR(u,h),r.fillRect(f,d,g-f,_-d)}const o=h=>{r.beginPath(),h.forEach(([u,f],d)=>{const[g,_]=Ur(u,f,t);d===0?r.moveTo(g,_):r.lineTo(g,_)}),r.stroke()},c=kR(e);if(n){r.lineJoin="round",r.lineCap="butt",r.strokeStyle=NR,r.lineWidth=FR*a;for(const h of c)o(h.points);r.strokeStyle=DR,r.lineWidth=UR*a;for(const h of c)o(h.points)}else{r.strokeStyle=un.tile,r.lineWidth=2;for(const h of c)o(h.points)}if(i)for(const h of Ui)jR(r,h,t);const l=new Nn(s);return l.colorSpace=Mt,l.anisotropy=4,l}function e0(i,e){const t=new Mn(2*Jt,2*xi),n=new Et({map:QR(i,e)}),s=HR(e);s&&(n.normalMap=s.normalMap,n.normalScale=new ue(Yd,Yd),n.roughnessMap=s.roughnessMap,n.roughness=1,n.metalness=0);const r=new oe(t,n);return r.name="floor",r.position.z=-.02,r}function e1(){return gh()}const t1=10,sp=5;function n1(){const i=new Ze;i.name="walls";const e=e1(),t=2*Jt+2*ci,n=[{x:0,y:xi+ci/2,w:t,d:ci},{x:0,y:-xi-ci/2,w:t,d:ci},{x:Jt+ci/2,y:0,w:ci,d:t},{x:-Jt-ci/2,y:0,w:ci,d:t}],s=["wall:rear","wall:audience","wall:right","wall:left"];return n.forEach((r,a)=>{const o=new gt(r.w,r.d,jd),c=new oe(o,e);c.name=s[a],c.position.set(r.x,r.y,jd/2),c.renderOrder=t1,i.add(c)}),i}function t0(i,e,t,n){const s=new N().subVectors(e,i),r=s.length(),a=new ft(t,t,Math.max(r,.001),8),o=new oe(a,n);return o.position.copy(i).addScaledVector(s,.5),o.quaternion.setFromUnitVectors(new N(0,1,0),s.clone().normalize()),o}function i1(i){const e=new Ze;e.name=`hive:${i}:frame`;const t=Ln(un.wall),n=i==="red"?-1:1,s=n<0?-49/2:(Bu+Ou)/2,r=Ou-Bu,a=new oe(new gt(r,2*Fu,1),t);a.name=`hive:${i}:frame:base`,a.position.set(s,0,.5),e.add(a);const o=new N(n*ji,0,ia);for(const c of[1,-1]){const l=new N(s,c*Fu,1),h=t0(l,o,.5,t);h.name=`hive:${i}:frame:upright${c>0?"N":"S"}`,e.add(h)}return e}function s1(){const i=new N(-ji,0,ia),e=new N(ji,0,ia),t=t0(i,e,.5,Ln(un.wall));return t.name="hive:crossbar",t}function rp(i,e,t){const n=new Ze;n.name=`hive:${t}:cell:${i>0?"north":"south"}`;const s=Hg(),r=Ln(e,.85),a=i*Zg,o=WR,c=qa-yr/2,l=qa+yr/2,h=a-i*(Sr/2+o/2),u=Xa/2,f=new oe(new gt(Xa,Sr,o),r);f.name=`${n.name}:floor`,f.position.set(0,a,c+o/2),n.add(f);const d=new oe(new gt(Xa,o,yr),s);d.name=`${n.name}:back`,d.position.set(0,h,qa),n.add(d);for(const _ of[1,-1]){const p=new oe(new gt(o,Sr,yr),s);p.name=`${n.name}:side${_>0?"X+":"X-"}`,p.position.set(_*(u+o/2),a,qa),n.add(p)}const g=new oe(new gt(Xa,Sr,o),s);g.name=`${n.name}:ceiling`,g.position.set(0,a,l-o/2),n.add(g);for(const _ of[d,g])_.renderOrder=sp,_.castShadow=!1;for(const _ of n.children)_.name.includes(":side")&&(_.renderOrder=sp,_.castShadow=!1);return n}function r1(i){const e=new Ze;e.name=`hive:${i}:tray`;const t=i==="blue"?ou:un.red;e.add(rp(1,t,i)),e.add(rp(-1,t,i));const n=new oe(new ft(1,1,VR,8),Ln(t));return n.name=`hive:${i}:tray:bar`,e.add(n),e}function a1(i,e){const t=Ph[i.wall],n=i.wall==="left"||i.wall==="right",s=i.x-t.x*Uu,r=i.y-t.y*Uu,a=s+t.x*os.deep/2,o=r+t.y*os.deep/2,c=n?os.deep:os.along,l=n?os.along:os.deep,h=new oe(new gt(c,l,ep),Ln(un.wall));return h.name=e,h.position.set(a,o,ep/2),h}function o1(i,e){const t=new Ze,n=`flower:${e}`;t.name=n,t.add(a1(i,`${n}:foot`));const s=Ln(un.white,.9),r=new oe(new No(Tr,Ka,8,24),s);r.name=`${n}:ring`,r.position.set(i.x,i.y,_r),t.add(r);const a=Ph[i.wall],o=i.wall==="left"||i.wall==="right",c=Tr+Ka,l=new oe(new gt(o?np:ip,o?ip:np,tp),Ln(KR));l.name=`${n}:backstop`,l.position.set(i.x-a.x*c,i.y-a.y*c,_r-Ka+tp/2),t.add(l);const h=new oe(new No(qR,Ka*.8,8,24),s);h.name=`${n}:midring`,h.position.set(i.x,i.y,K0),t.add(h);const u=new oe(new ft(Zd+.3,Zd+.3,.5,16),Ln(un.wall));u.name=`${n}:lowerring`,u.rotation.x=Math.PI/2,u.position.set(i.x,i.y,Y0),t.add(u);const f=Tr+.3;for(let d=0;d<4;d++){const g=d/4*Math.PI*2,_=i.x+Math.cos(g)*f,p=i.y+Math.sin(g)*f,m=new oe(new ft(Qd,Qd,_r,6),Ln(un.wall));m.name=`${n}:pipe${d}`,m.rotation.x=Math.PI/2,m.position.set(_,p,_r/2),t.add(m)}return t}function c1(i){const e=new Ze;e.name=`hive:${i}`,e.position.set(i==="red"?-ji:ji,0,ia),e.add(i1(i));const t=r1(i);return e.add(t),{group:e,tray:t}}function ap(i){const e=new Ze;e.name=`nectar-box:${i}`;const{x:t,y:n}=$0(i),s=Ln("#191d24"),r=new oe(new gt(nc-2*ti,ic-2*ti,ti),s);r.name=`${e.name}:floor`,r.position.set(t,n,ti/2),r.receiveShadow=!0,e.add(r);const a=Ln(i==="blue"?ou:un.red),o=sc/2;for(const h of[1,-1]){const u=new oe(new gt(ti,ic,sc),a);u.name=`${e.name}:side${h>0?"Out":"In"}`,u.position.set(t+h*(nc/2-ti/2),n,o),e.add(u);const f=new oe(new gt(nc,ti,sc),a);f.name=`${e.name}:end${h>0?"N":"S"}`,f.position.set(t,n+h*(ic/2-ti/2),o),e.add(f)}const c=new Et({color:i==="blue"?$R:14833229,roughness:.4,metalness:.05}),l=[];for(let h=0;h<J0;h++){const u=j0(i,h),f=new oe(new ea(zr,12,8),c);f.name=`${e.name}:nectar${h}`,f.position.set(u.x,u.y,ti+zr),f.castShadow=!0,l.push(f),e.add(f)}return{group:e,beads:l}}function n0(){return{red:ap("red"),blue:ap("blue")}}function l1(i,e){let t=0;for(const n of i.balls)n.state.kind==="stock"&&n.state.alliance===e&&t++;return t}function h1(i,e){for(const t of Ui){const n=i[t],s=l1(e,t);for(let r=0;r<n.beads.length;r++)n.beads[r].visible=r<s}}function u1(i){const e=new Ze;e.name="bb-field";const t=e0(!0,i),n=n1();e.add(t,n,s1());const s={},r={};for(const c of Ui){const{group:l,tray:h}=c1(c);e.add(l),s[c]=l,r[c]=h}const a=Ch.map((c,l)=>{const h=o1(c,l);return e.add(h),h}),o=n0();for(const c of Ui)e.add(o[c].group);return{group:e,floor:t,walls:n,hives:s,flowers:a,trays:r,boxes:o}}function f1(i,e){const t=i.root;t.name="bb-field",i.floor.visible=!1;const n=e0(!1,e);t.add(n),t.add(ZR()),i.stations&&(i.stations.visible=!1);const s=i.walls,r={},a={};for(const l of Ui){const h=i.hives[l],u=new Ze;u.name=`hive:${l}`;const f=h.tray.position;u.position.copy(f),t.add(u),u.attach(h.frame),u.attach(h.tray),h.tray.name="tray",r[l]=u,a[l]=h.tray}const o=i.flowers.map((l,h)=>(l.name=`flower:${h}`,l)),c=n0();for(const l of Ui)t.add(c[l].group);return{group:t,floor:n,walls:s,hives:r,flowers:o,trays:a,boxes:c}}async function d1(i="high"){const e=LR(i);try{const t=await RR("models/biobuzz",i);return f1(t,e)}catch(t){return console.warn("BIOBUZZ 3D field: CAD field.glb failed to load; falling back to the constants-built field.",t),u1(e)}}function p1(i,e){for(const t of Ui){const n=H_(e,t)-V_();i.trays[t].rotation.set(n,0,0)}h1(i.boxes,e)}const op={pollen:"pollen",nectar:"nectar"},cp=.02;let Ya=null;function m1(){return Ya||(Ya=new Ng,Ya.setMeshoptDecoder(Og)),Ya}function g1(i){if(/^https?:\/\//i.test(i))return i.endsWith(".glb")?i:`${i.replace(/\/+$/,"")}/elements.glb`;const e=i.replace(/\/?elements\.glb$/i,"").replace(/^\/+/,"").replace(/\/+$/,"");return`${"/".replace(/\/+$/,"")}/${e}/elements.glb`.replace(/\/{2,}/g,"/")}function lp(i,e){let t=null;if(i.traverse(n=>{var s;t||n.isMesh&&(((s=n.userData)==null?void 0:s.name)===e||n.name===e)&&(t=n)}),!t)throw new Error(`renderElementsGlb: elements.glb is missing the "${e}" mesh`);return t}function hp(i,e,t){i.updateWorldMatrix(!0,!1);const n=i.geometry,s=n.getAttribute("position"),r=n.getIndex();if(!s||!r)throw new Error(`renderElementsGlb: "${t}" has no indexed position attribute`);const a=new Float32Array(s.count*3),o=new N;let c=0;for(let f=0;f<s.count;f++)o.set(s.getX(f),s.getY(f),s.getZ(f)).applyMatrix4(i.matrixWorld),a[f*3]=o.x,a[f*3+1]=o.y,a[f*3+2]=o.z,c=Math.max(c,o.length());if(Math.abs(c-e)>cp)throw new Error(`renderElementsGlb: "${t}" outer radius ${c.toFixed(4)} in is not ${e} ± ${cp}`);const l=e/c;for(let f=0;f<a.length;f++)a[f]*=l;const h=new Uint32Array(r.count);for(let f=0;f<r.count;f++)h[f]=r.getX(f);const u=new Ct;return u.setAttribute("position",new Rt(a,3)),u.setIndex(new Rt(h,1)),Zo(u,jo),u.computeBoundingSphere(),u.name=`bb-${t}-cad`,u}let $a=null;function i0(i="models/biobuzz"){return $a||($a=new Promise((e,t)=>{m1().load(g1(i),n=>{try{e({pollen:hp(lp(n.scene,op.pollen),Lh,"pollen"),nectar:hp(lp(n.scene,op.nectar),zr,"nectar")})}catch(s){t(s instanceof Error?s:new Error(String(s)))}},void 0,n=>t(n instanceof Error?n:new Error("elements.glb failed to load")))}).catch(e=>{throw $a=null,e})),$a}const Xn=56,up=15913291,s0={red:14833229,blue:31713},$i=new $e().makeScale(0,0,0);function b1(i){return i==="red"||i==="blue"}function _1(i="sphere"){const e=new ea(Lh,12,8),t=new ea(zr,12,8),n=new Et({color:up,roughness:.55,metalness:.05,emissive:up,emissiveIntensity:.12}),s=new Et({color:16777215,roughness:.4,metalness:.05,emissive:16777215,emissiveIntensity:.05}),r=new zs(e,n,Xn),a=new zs(t,s,Xn);r.name="bb-pollen",a.name="bb-nectar",r.instanceMatrix.setUsage(gc),a.instanceMatrix.setUsage(gc);for(let f=0;f<Xn;f++)r.setMatrixAt(f,$i),a.setMatrixAt(f,$i),a.setColorAt(f,new qe(s0.red));const o=new ra(1,16),c=new Kn({color:0,transparent:!0,opacity:.32,depthWrite:!1}),l=new zs(o,c,Xn*2);l.name="bb-element-blobs",l.instanceMatrix.setUsage(gc),l.renderOrder=-1,l.visible=!1;for(let f=0;f<Xn*2;f++)l.setMatrixAt(f,$i);r.frustumCulled=!1,a.frustumCulled=!1,l.frustumCulled=!1;const h=new Ze;h.add(r,a,l);const u={pollen:r,nectar:a,blobs:l,group:h,sphereGeo:{pollen:e,nectar:t},cadGeo:null,detail:"sphere",spin:new Map,lastTick:-1,shadowMode:"real",rollingSpin:!0};return r0(u,i),u}function r0(i,e){i.detail=e;const t=()=>{const n=i.detail==="cad"&&i.cadGeo?i.cadGeo:i.sphereGeo;i.pollen.geometry=n.pollen,i.nectar.geometry=n.nectar};t(),!(e!=="cad"||i.cadGeo)&&i0().then(n=>{i.cadGeo=n,t()}).catch(n=>{console.warn("BIOBUZZ 3D: elements.glb failed to load; the scoring elements stay smooth spheres.",n)})}function x1(i,e){i.shadowMode=e,i.pollen.castShadow=e==="real",i.nectar.castShadow=e==="real",i.blobs.visible=e==="blob"}const v1=.06,M1=40,a0=1.5,S1=nb-2*a0,Uo=new N,y1=new an,E1=new N(1,1,1),Oo=new $e;function il(i,e,t,n,s,r){Uo.set(t,n,s),Oo.compose(Uo,r,E1),i.setMatrixAt(e,Oo)}const fp=new N,dp=new an,w1=12,T1=.001;function A1(i){let e=(i+1)*2654435761;e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13;const t=(e>>>0)/4294967296*Math.PI*2;e=Math.imul(e^e>>>16,3266489909);const n=(e>>>0)/4294967296*Math.PI*2;e=Math.imul(e^e>>>16,668265263);const s=(e>>>0)/4294967296*Math.PI*2;return new an().setFromEuler(new Dn(t,n,s))}function o0(i,e,t,n){let s=i.spin.get(e);return s||(s={q:A1(e),x:t,y:n},i.spin.set(e,s)),s}function R1(i,e,t,n){const s=o0(i,e,t,n);return s.x=t,s.y=n,s.q}function C1(i,e,t,n,s){const r=o0(i,e,t,n),a=t-r.x,o=n-r.y;r.x=t,r.y=n;const c=Math.hypot(a,o);return c>T1&&c<w1&&s>.01&&(fp.set(-o,a,0).normalize(),dp.setFromAxisAngle(fp,c/s),r.q.premultiply(dp)),r.q}const pp=new N(1,1,1);function P1(i,e,t,n,s,r){const a=Math.min(1,Math.max(0,s/M1)),o=r*(1.15+a*1.6);pp.set(o,o,1),Uo.set(t,n,v1),Oo.compose(Uo,y1,pp),i.setMatrixAt(e,Oo)}function L1(i,e){let t=0,n=0,s=0;const r=tb(e)==="3d",a=i.shadowMode==="blob",o=new Set,c=i.lastTick<0||e.tick<i.lastTick;i.lastTick=e.tick;const l=i.rollingSpin&&!c,h=new Map;if(!r){for(const f of e.balls)if(f.state.kind==="element"&&f.state.el.startsWith("hive:")){const d=h.get(f.state.el);d?d.push(f):h.set(f.state.el,[f])}for(const f of h.values())f.sort((d,g)=>{const _=d.state.kind==="element"?d.state.slot:0,p=g.state.kind==="element"?g.state.slot:0;return _-p})}const u=new Map;if(!r)for(const f of h.values())f.forEach((d,g)=>u.set(d.id,{i:g,n:f.length}));for(const f of e.balls){const d=b1(f.color),g=d?i.nectar:i.pollen,_=f.r??(d?zr:Lh);let p;if(d){if(n>=Xn)continue;p=n++}else{if(t>=Xn)continue;p=t++}o.add(f.id);const m=l&&(f.state.kind==="ground"||f.state.kind==="flight")?C1(i,f.id,f.pos.x,f.pos.y,_):R1(i,f.id,f.pos.x,f.pos.y);if(f.state.kind==="held"||f.state.kind==="stock")g.setMatrixAt(p,$i);else if(f.state.kind==="element"&&f.state.el.startsWith("hive:")){const x=u.get(f.id),E=x&&x.n>1?Math.min(S1,(x.n-1)*a0):0,v=x&&x.n>1?x.i/(x.n-1)-.5:0;il(g,p,f.pos.x+v*E,f.pos.y,r?f.z+_:f.z,m)}else f.state.kind==="element"?il(g,p,f.pos.x,f.pos.y,r?f.z+_:f.z,m):(il(g,p,f.pos.x,f.pos.y,f.z+_,m),a&&P1(i.blobs,s++,f.pos.x,f.pos.y,f.z,_));d&&i.nectar.setColorAt(p,new qe(s0[f.color]))}for(let f=t;f<Xn;f++)i.pollen.setMatrixAt(f,$i);for(let f=n;f<Xn;f++)i.nectar.setMatrixAt(f,$i);if(a){for(let f=s;f<Xn*2;f++)i.blobs.setMatrixAt(f,$i);i.blobs.instanceMatrix.needsUpdate=!0}for(const f of i.spin.keys())o.has(f)||i.spin.delete(f);i.pollen.instanceMatrix.needsUpdate=!0,i.nectar.instanceMatrix.needsUpdate=!0,i.nectar.instanceColor&&(i.nectar.instanceColor.needsUpdate=!0),i.pollen.count=t,i.nectar.count=n}const ss=new Set,cu=new Set,mp=new Map;function nt(i,e=.6,t=.1){const n=`${i}|${e}|${t}`;let s=mp.get(n);return s||(s=new Et({color:i,roughness:e,metalness:t}),mp.set(n,s),cu.add(s)),s}let Ja=null;function I1(){return Ja||(Ja=new Et({color:pl,emissive:pl,emissiveIntensity:.85,roughness:.35,metalness:0}),cu.add(Ja)),Ja}function Xe(i){return i.castShadow=!0,i}const D1=un.red,N1="#007be1",Bo="#262c35",Wt="#98a3b2",Hs="#39414f",lu="#39414f",gp="#5c6676",Or="#12161c",F1="#8a94a3",_h="#2b313a";function bp(i){const e=parseInt(i.replace("#",""),16);return[e>>16&255,e>>8&255,e&255]}function xh(i,e,t){const[n,s,r]=bp(i),[a,o,c]=bp(e),l=(h,u)=>Math.round(h+(u-h)*t);return`#${[l(n,a),l(s,o),l(r,c)].map(h=>h.toString(16).padStart(2,"0")).join("")}`}const Fi=jt,$t=.22,Ns=.95;function U1(i){return Math.max(.6,i.width/2-$t*2-Qo)}function O1(i,e,t,n){const s=i/2,r=e/2,a=Math.min(.6,e*.18),o=new dn;o.moveTo(-s+a,-r),o.lineTo(s-a,-r),o.quadraticCurveTo(s,-r,s,-r+a),o.lineTo(s,r-a),o.quadraticCurveTo(s,r,s-a,r),o.lineTo(-s+a,r),o.quadraticCurveTo(-s,r,-s,r-a),o.lineTo(-s,-r+a),o.quadraticCurveTo(-s,-r,-s+a,-r);const c=Math.min(e*.26,i/(n*2.6));if(n>0&&c>.25)for(let h=0;h<n;h++){const u=-s+(h+.5)*i/n,f=new Si;f.absarc(u,0,c,0,Math.PI*2,!0),o.holes.push(f)}const l=new yn(o,{depth:t,bevelEnabled:!1,curveSegments:8});return l.rotateX(Math.PI/2),l.translate(0,t/2,0),l}function ht(i,e,t,n,s,r){const a=new gt(i,e,t);return a.translate(n,s,r),a}const _p=new Map;function tt(i,e){const t=_p.get(i);if(t)return t;const n=e(),s=n.map(a=>a.index?a.toNonIndexed():a),r=Ig(s,!1)??s[0];for(const a of new Set([...n,...s]))a!==r&&a.dispose();return _p.set(i,r),ss.add(r),r}const Zn=1/25.4,xp=104*Zn/2,B1=11,vp=1.5*Zn,Mp=.31,Sp=48*Zn,hu={r:xp,w:Sp,rollers:B1,rows:1,rollerAngle:Math.PI/4,rollerR:Mp,rollerL:(Sp-2*vp-.1)*Math.SQRT2,plateT:vp,plateR:xp-Mp*.65},sl=96*Zn/2,yp=9,mo=.2,c0=.09,k1=c0+4*mo,vh={r:sl,w:k1,rollers:yp,rows:2,rollerAngle:Math.PI/2,rollerR:mo,rollerL:2*(sl-mo)*Math.sin(Math.PI/yp)*.92,plateT:c0,plateR:sl-mo+.1},z1=96*Zn/2,G1=32*Zn,H1=72*Zn/2,V1=28*Zn,W1=.05;function l0(i,e){return{r:i,w:e,rollers:0,rows:0,rollerAngle:0,rollerR:0,rollerL:0,plateT:e,plateR:i*.7}}const X1=l0(z1,G1),uu=l0(H1,V1),ko={mecanum:hu,omni:vh,traction:X1,podTraction:uu},h0=hu.w,Qo=h0+.4;function go(i,e){return i.meshDetail==="low"||e==="low"||e==="medium"?"low":"high"}const fu={low:{rollerSeg:5,rollerPts:3,plateSeg:12,tyrePts:2,holes:0,ribs:0},high:{rollerSeg:8,rollerPts:7,plateSeg:34,tyrePts:5,holes:8,ribs:20}};function q1(i,e){const t=i.r-i.rollerR,n=Math.sin(i.rollerAngle),s=[new ue(.02,-i.rollerL/2)];for(let r=0;r<=e;r++){const a=-i.rollerL/2+i.rollerL*r/e;s.push(new ue(Math.max(.03,i.r-Math.hypot(t,a*n)),a))}return s.push(new ue(.02,i.rollerL/2)),s}function K1(i,e,t){const n=fu[e],s=i.r-i.rollerR,r=Math.cos(i.rollerAngle),a=Math.sin(i.rollerAngle),o=q1(i,n.rollerPts),c=[],l=i.rows>1?[-(i.plateT/2+i.rollerR),i.plateT/2+i.rollerR]:[0];for(let h=0;h<l.length;h++){const u=Math.PI/2+h*Math.PI/i.rollers;for(let f=0;f<i.rollers;f++){const d=u+f*Math.PI*2/i.rollers,g=Math.cos(d),_=Math.sin(d),p=new N(g,0,_),m=new N(-_,0,g),x=new N(0,r,0).addScaledVector(m,-t*a).normalize(),E=new N().crossVectors(p,x),v=new aa(o,n.rollerSeg);v.applyMatrix4(new $e().makeBasis(p,x,E).setPosition(g*s,l[h],_*s)),c.push(v)}}return c}function Ep(i,e){const t=fu[e],n=i.rows===1?[-(i.w/2-i.plateT/2),i.w/2-i.plateT/2]:[0],s=[];for(const r of n){let a;if(t.holes>0){const o=new dn;o.absarc(0,0,i.plateR,0,Math.PI*2,!1);const c=new Si;c.absarc(0,0,14*Zn/2,0,Math.PI*2,!0),o.holes.push(c);const l=32*Zn/2,h=Math.min(.11,l*Math.PI/t.holes/2.2);for(let f=0;f<t.holes;f++){const d=f*Math.PI*2/t.holes,g=new Si;g.absarc(Math.cos(d)*l,Math.sin(d)*l,h,0,Math.PI*2,!0),o.holes.push(g)}const u=new yn(o,{depth:i.plateT,bevelEnabled:!1,curveSegments:12,steps:1});u.rotateX(Math.PI/2),u.translate(0,i.plateT/2,0),a=u}else a=new ft(i.plateR,i.plateR,i.plateT,t.plateSeg);a.translate(0,r,0),s.push(a)}return s}function Y1(i,e){const t=fu[e],n=i.w/2,s=i.plateR,r=[new ue(s,-n)];for(let o=0;o<=t.tyrePts;o++){const c=-1+2*o/t.tyrePts;r.push(new ue(i.r-W1*c*c,c*n))}r.push(new ue(s,n),new ue(s,-n));const a=[new aa(r,t.plateSeg)];for(let o=0;o<t.ribs;o++){const c=o*Math.PI*2/t.ribs,l=new gt(.09,i.w*.84,.15);l.translate(i.r-.06,0,0),l.rotateY(-c),a.push(l)}return a}function Mh(i,e="high",t=Bo,n=1){const s=ko[i],r=new Ze;r.rotation.order="ZYX";const a=nt(xh(Bo,t,.45),.95,0),o=nt(Wt,.35,.7);if(s.rollers>0){const c=tt(`wheel:${i}:rollers:${e}:${n}`,()=>K1(s,e,n)),l=tt(`wheel:${i}:plates:${e}`,()=>Ep(s,e)),h=Xe(new oe(c,a));h.name="bb-wheel-rollers",r.add(h);const u=Xe(new oe(l,o));u.name="bb-wheel-plates",r.add(u)}else{const c=tt(`wheel:${i}:tyre:${e}`,()=>Y1(s,e)),l=tt(`wheel:${i}:core:${e}`,()=>Ep(s,e)),h=Xe(new oe(c,a));h.name="bb-wheel-tread",r.add(h);const u=Xe(new oe(l,o));u.name="bb-wheel-core",r.add(u)}return r}const wp=new Map;function u0(i,e){const t=`${i}|${e}`,n=wp.get(t);if(n)return n;const s=new ft(i,i,e,14);return wp.set(t,s),ss.add(s),s}function $1(i){const e=i.length/2-ko[f0(i.drivetrain)].r-.7;return i.drivetrain==="tank"?[e,0,-e]:[e,-e]}function f0(i){return i==="xdrive"?"omni":i==="tank"?"traction":i==="swerve"?"podTraction":"mecanum"}const du=(2*vh.r+vh.w)/(2*Math.SQRT2),d0=.15,J1=du+Ns+d0,p0=du+$t+d0,hi=uu.r,m0=uu.w,Er=.22,j1=2.1,Z1=.45,Q1=.72,wr=1.25,bo=.44,Sh=.15,Ts=jt-.26-bo,g0=m0/2+.2,ja=.45,_o=.2,b0=3.2,eC=(g0+Er/2+_o)*2,zo=Math.max(Math.hypot(b0,eC)/2,wr+Sh),yh=Math.min(.6,jt-.26-2*hu.r);function tC(){const i=g0,e=tt("swervePod:struct",()=>{const o=[],c=j1/2,l=Ts-.3;for(const u of[1,-1]){const f=new dn;f.moveTo(c,l),f.lineTo(-c,l),f.absarc(0,hi,Z1,Math.PI,0,!1),f.closePath();const d=new yn(f,{depth:Er,bevelEnabled:!1,curveSegments:12});d.rotateX(Math.PI/2),d.translate(0,u*i+Er/2,0),o.push(d)}o.push(ht(b0,i*2+Er,.3,0,0,Ts-.15));const h=new ft(.28,.28,Ts-.3-hi*2,8);return h.rotateX(Math.PI/2),h.translate(0,0,(hi*2+Ts-.3)/2),o.push(h),o}),t=Ts+bo/2,n=tt("swervePod:ring",()=>{const o=[],c=new ft(wr,wr,bo,20);c.rotateX(Math.PI/2),c.translate(0,0,t),o.push(c);const l=new ft(wr+Sh,wr+Sh,.15,20);return l.rotateX(Math.PI/2),l.translate(0,0,t+bo/2-.075),o.push(l),o}),s=i+Er/2+_o/2,r=Ts-.3-ja-.05,a=tt("swervePod:drive",()=>{const o=[];for(const c of[hi,r]){const l=new ft(ja,ja,_o,12);l.translate(0,s,c),o.push(l)}for(const c of[1,-1])o.push(ht(.14,_o,r-hi,c*ja,s,(r+hi)/2));return o});return[Xe(new oe(e,nt(Wt,.45,.35))),Xe(new oe(n,nt(lu,.4,.5))),Xe(new oe(a,nt(Or,.6,.2)))]}function nC(i=Bo,e="high"){const t=new Ze,n=Mh("podTraction",e,i);n.name="bb-pod-wheel",n.position.set(0,0,hi),t.add(n);const s=new oe(u0(Q1,m0+.14),nt(Wt,.4,.5));s.name="bb-pod-hub",s.position.set(0,0,hi),t.add(Xe(s));for(const r of tC())t.add(r);return t}function iC(i,e=Bo,t="high"){const n={nodes:[],pods:[],traction:[],roller:[],spin:[]},s=i.width/2-$t-Qo/2,r=i.length/2,a=i.width/2,o=i.drivetrain,c=f0(o),l=ko[c];for(const h of $1(i))for(const u of[1,-1]){if(o==="swerve"){const g=nC(e,t);g.name=`robot:pod:${n.pods.length}`,g.position.set((Math.sign(h)||1)*(r-zo),u*(a-zo),0),n.nodes.push(g),n.pods.push(g);const _=g.getObjectByName("bb-pod-wheel");_&&n.spin.push({node:_,r:hi});continue}const f=h*u>=0?1:-1,d=Mh(c,t,e,f);if(d.name=`robot:wheel:${n.spin.length}`,d.position.set(h,u*s,l.r),n.spin.push({node:d,r:l.r}),o==="xdrive"&&(d.position.x=(Math.sign(h)||1)*Math.max(.5,r-J1),d.position.y=u*Math.max(.5,a-p0),d.rotation.z=h*u>=0?-Math.PI/4:Math.PI/4),n.nodes.push(d),o==="butterfly"){n.roller.push({node:d,z:l.r});const g=ko.traction,_=h-Math.sign(h)*(l.r+g.r+.5),p=Mh("traction",t,e);p.name=`robot:wheel:tank:${n.traction.length}`,p.position.set(_,u*s,g.r+yh),n.nodes.push(p),n.traction.push({node:p,z:g.r}),n.spin.push({node:p,r:g.r})}}return n}const Tp=.2,Ap=$t+.5;function sC(i){const e=i.length/2,t=i.width/2,n=U1(i),s=t-$t/2,r=t-$t*1.5-Qo,a=Math.max(2,Math.round(i.length/4.5)),o=`${i.length}|${i.width}|${i.drivetrain}`,l=i.drivetrain==="swerve"||i.drivetrain==="xdrive"?[s]:[s,r],h=tt(`skin:${o}`,()=>{const g=[];for(const _ of[1,-1]){for(const p of l){const m=O1(i.length,Fi,$t,a);m.translate(0,_*p,Fi/2),g.push(m)}g.push(ht(i.length,Ap,Tp,0,_*(t-Ap/2),Fi+Tp/2))}return g.push(ht(i.length,i.width,.26,0,0,jt-.13)),g}),u=tt(`frame:${o}`,()=>{const g=[];for(const _ of[1,-1])g.push(ht(Ns,t*2-$t*2,Ns,_*(e-$t-Ns/2),0,jt-.26-Ns/2));return g.push(ht(i.length-Ns*2.6,n*2,.22,0,0,.85)),g}),f=new oe(h,nt(vm(i.chassisColor),.55,.15));f.name="robot:frame:skin";const d=new oe(u,nt(Hs,.45,.4));return d.name="robot:frame:rails",[Xe(f),Xe(d)]}const rC=.15;function aC(i,e){const t=i.width/2;return i.drivetrain==="swerve"?{center:e*(t-zo),half:zo}:i.drivetrain==="xdrive"?{center:e*Math.max(.5,t-p0),half:du}:{center:e*(t-$t-Qo/2),half:h0/2}}const Rp=new Map;function Cp(i,e,t){const n=`${i}|${e}|${t}`;let s=Rp.get(n);return s||(s=new gt(i,e,t),Rp.set(n,s),ss.add(s)),s}function oC(i,e,t){const n=i.length/2,s=i.width/2,r=e==="front"?1:-1,a=nt(vm(i.chassisColor),.55,.15),o=r*(n-$t/2);if(t===void 0){const l=Xe(new oe(Cp($t,(s-$t)*2,Fi),a));return l.position.set(o,0,Fi/2),[l]}const c=[];for(const l of[1,-1]){const{center:h,half:u}=aC(i,l),f=l*(s-$t),d=Math.max(0,Math.abs(h)-u-rC),g=Math.max(.1,Math.abs(f)-d),_=l*(Math.abs(f)+d)/2,p=0,m=Fi-p,x=Xe(new oe(Cp($t,g,m),a));x.position.set(o,_,p+m/2),c.push(x)}return c}function cC(i,e){var a,o;const t=Mm(i),n=(a=t.find(c=>c.edge==="front"))==null?void 0:a.y1,s=(o=t.find(c=>c.edge==="back"))==null?void 0:o.y1,r=[];for(const[c,l]of[["front",n],["back",s]]){const h=oC(i,c,l);h.length===1?h[0].name=`robot:${e}:endplate:${c}`:(h[0].name=`robot:${e}:endplate:${c}:l`,h[1].name=`robot:${e}:endplate:${c}:r`),r.push(...h)}return r}const sa=6.5,_0=2.25,x0=.25,Go=_0+x0*2;function lC(i){const e=Math.round(i.teamNumber);return Number.isFinite(e)&&e>0?String(e):"-"}const Za=48,Pp=new Map;function hC(i,e){const t=`${i}|${e}`,n=Pp.get(t);if(n)return n;const s=document.createElement("canvas");s.width=Math.round(sa*Za),s.height=Math.round(Go*Za);const r=s.getContext("2d");r.fillStyle=e==="blue"?N1:D1,r.fillRect(0,0,s.width,s.height),r.fillStyle="#ffffff",r.font=`700 ${Math.round(_0/.72*Za)}px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle";const a=(sa-x0*2)*Za,o=r.measureText(i).width,c=o>a?a/o:1;r.translate(s.width/2,s.height/2),r.scale(c,1),r.fillText(i,0,0);const l=new Nn(s);return l.colorSpace=Mt,l.anisotropy=4,Pp.set(t,l),l}const Lp=new Map;function uC(i,e,t){const n=`${i}|${e}|${t.toFixed(3)}`,s=Lp.get(n);if(s)return s;const r=256,a=Math.max(1,Math.round(r/Math.max(.05,t))),o=document.createElement("canvas");o.width=r,o.height=a;const c=o.getContext("2d");c.clearRect(0,0,r,a),c.fillStyle=e;const l=r/2,h=a/2;switch(i){case"stripe":{const f=a*.18;c.fillRect(0,h-f/2,r,f);break}case"racing":{const f=a*.1,d=a*.15;c.fillRect(0,h-d-f/2,r,f),c.fillRect(0,h+d-f/2,r,f);break}case"chevron":{const f=r*.22,d=f*.55,g=h*.82;c.beginPath(),c.moveTo(l+f*.5,h),c.lineTo(l-f*.5,h-g),c.lineTo(l-f*.5+d,h-g),c.lineTo(l+f*.5+d,h),c.lineTo(l-f*.5+d,h+g),c.lineTo(l-f*.5,h+g),c.closePath(),c.fill();break}case"hazard":{c.save(),c.beginPath(),c.rect(0,0,r/3,a),c.clip();const f=a*.16;for(let d=-a;d<r/3+a;d+=f*2)c.beginPath(),c.moveTo(d,0),c.lineTo(d+f,0),c.lineTo(d+f+a,a),c.lineTo(d+a,a),c.closePath(),c.fill();c.restore();break}case"checker":{const d=r/4,g=a*.3,_=Math.max(1,Math.round(g/d)),p=g/_;for(let m=0;m<4;m++)for(let x=0;x<_;x++)(m+x)%2===0&&c.fillRect(m*d,h-g/2+x*p,d,p);break}case"star":{const f=Math.min(l,h)*.8,d=bb(l,h,f,0);c.beginPath(),d.forEach(([g,_],p)=>p===0?c.moveTo(g,_):c.lineTo(g,_)),c.closePath(),c.fill();break}}const u=new Nn(o);return Lp.set(n,u),u}const fC="#c7ced6",Ip=new Map;function dC(i){const e=Ip.get(i);if(e)return e;const t=i==="bold"?.35:.18,n=i==="rounded"?.4:0,s=sa+t*2,r=Go+t*2,a=s/2,o=r/2,c=new dn;c.moveTo(-a+n,-o),c.lineTo(a-n,-o),n&&c.quadraticCurveTo(a,-o,a,-o+n),c.lineTo(a,o-n),n&&c.quadraticCurveTo(a,o,a-n,o),c.lineTo(-a+n,o),n&&c.quadraticCurveTo(-a,o,-a,o-n),c.lineTo(-a,-o+n),n&&c.quadraticCurveTo(-a,-o,-a+n,-o);const l=new Si,h=sa/2,u=Go/2;l.moveTo(-h,-u),l.lineTo(h,-u),l.lineTo(h,u),l.lineTo(-h,u),l.closePath(),c.holes.push(l);const f=new yn(c,{depth:.08,bevelEnabled:!1,curveSegments:8});return Ip.set(i,f),ss.add(f),f}function Dp(i){const e=new N(0,i,0),t=new N(0,0,1),n=new N().crossVectors(t,e);return new an().setFromRotationMatrix(new $e().makeBasis(n,t,e))}const ur=$t+.06,mi=.75,Br=2,Fs=vo+mi+.15,pC=3,v0=.14,mC=vo+v0/2;function gC(i){const e=Br-mi,t=mC-Fs,n=Math.sin(i),s=(t-mi*n)/e;if(n>=s)return 0;const r=Math.PI-Math.asin(Math.max(-1,Math.min(1,s))),a=(i%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return Math.max(0,a-r)}const Np=12;let rl=null,al=null;function bC(){if(!rl){const i=new ft(ml,ml,Gr*.86,12);i.rotateX(Math.PI/2),ss.add(i),rl=i}return rl}function _C(){if(!al){const i=Math.PI/Np,e=xl*Math.cos(i),t=2*xl*Math.sin(i),n=ml-.05,s=e-n,r=[];for(let o=0;o<Np;o++){const l=o%2===0?Gr:Gr*.78;r.push(new gt(s,t,l).translate(n+s/2,0,0).rotateZ(i+o*2*i))}const a=Ig(r.map(o=>o.index?o.toNonIndexed():o),!1)??r[0];for(const o of r)o!==a&&o.dispose();ss.add(a),al=a}return al}const xC=.5,vC=.25,Fp=Math.PI/2+xm;function Up(i){return i*i*(3-2*i)}function Op(i){return(i+Math.PI*3)%(Math.PI*2)-Math.PI}function Qa(i,e){return i>e?e:i<-e?-e:i}function MC(i,e=Or,t="high"){const n=nt(xh(Or,e,.5),.5,.25),s=[],r=[],a=[],o=[],c=[],l=EC(i),h=Sm(i),u=i.length/2,f=i.width/2;for(const d of Mm(i)){const g=_b(d,u,f),_=new Ze;_.name=`robot:intake:${d.edge}`,_.position.set(g.ox,g.oy,0),_.rotation.z=g.rot;const p=g.depth,m=g.rail-1.1,x=p-m,E=p-Br,v=g.rail-.2,S=E-v>1.8,y=ua,R=vo+.25,b=Fs+.6,w=tt(`arm:${x.toFixed(2)}|${(E-m).toFixed(2)}`,()=>{const B=[];B.push(ht(x,y,.5,m+x/2,0,R));const k=new ft(.25,.25,y,12);k.translate(p-.25,0,R),B.push(k);const q=new ft(.55,.55,y,12);q.translate(E,0,Fs),B.push(q),B.push(ht(.45,y,b-R,E,0,(b+R)/2));const j=m-(m+x),de=b-R,xe=new gt(Math.hypot(j,de),y,.34);return xe.rotateY(-Math.atan2(de,j)),xe.translate(m+x/2,0,(R+b)/2),B.push(xe),B});for(const B of[1,-1]){const k=new oe(w,nt(Wt,.45,.35));k.position.set(0,B*(g.half-ur-y/2),0),_.add(Xe(k))}const A=.55,C=tt(`intakeBrace:${g.half.toFixed(2)}|${A.toFixed(2)}`,()=>[ht(A,g.half*2-2*ur,A,p-A/2,0,vo+A/2)]),U=new oe(C,nt(Wt,.45,.35));U.name=`robot:intake:brace:${d.edge}`,_.add(Xe(U));let I=g.half*2-.9,P=0;h==="ramp"&&(P=g.half-ur-y-.15,I=Math.min(I,2*(P-.25)));const F=tt(`rollerHub:${I.toFixed(2)}`,()=>[new ft(mi,mi,I,12)]),G=tt(`rollerFlap:${I.toFixed(2)}`,()=>[ht(Br-mi,I,v0,(Br-mi)/2,0,0)]),z=new Ze;z.name=`robot:sweeper:${d.edge}`,z.position.set(E,0,Fs);const X=Xe(new oe(F,n));z.add(X);const O=[];for(let B=0;B<pC;B++){const k=new Ze;k.add(Xe(new oe(G,n))),z.add(k),O.push(k)}if(_.add(z),r.push({hub:X,flaps:O,phase:0}),S){const B=new oe(F,n);B.name=`robot:transfer:${d.edge}`,B.scale.set(.62,1,.62),B.position.set(v,0,Fs+.9),_.add(Xe(B)),r.push({hub:B,flaps:[],phase:0});for(const k of[1,-1]){const q=new oe(new gt(E-v,.12,.5),nt(xh(Or,e,.35),.8,0));q.position.set((E+v)/2,k*(g.half-.45),Fs+.45),_.add(q)}}if(h==="siderollers"){const B=xb(g.half),k=p+Nb,q=js-Gr/2,j=js+Gr/2,de=k-sf;for(const xe of[1,-1]){const Ne=xe*vb(g.half),J=xe*(B+y/2),Z=Ne-xe*B,fe=k-de,Ce=Math.hypot(fe,Z),be=Math.atan2(Z,fe),Pe=Fe=>tt(`srYoke:${Ce.toFixed(3)}:${be.toFixed(5)}:${Fe.toFixed(3)}:${de.toFixed(3)}:${(xe*B).toFixed(3)}`,()=>{const ie=new ft(Wu,Wu,cs,12);return ie.rotateX(Math.PI/2),ie.translate(k,Ne,Fe+cs/2),[new gt(Ce,Db,cs).translate(Ce/2,0,0).rotateZ(be).translate(de,xe*B,Fe+cs/2),ie]});for(const[Fe,ie]of[["top",j],["bot",q-cs]]){const me=Xe(new oe(Pe(ie),nt(Wt,.45,.35)));me.name=`robot:sideroller:yoke:${Fe}:${d.edge}`,_.add(me)}const Ke=new ft(.17,.17,j-q+2*cs,8);Ke.rotateX(Math.PI/2),Ke.translate(k,Ne,js);const te=Xe(new oe(Ke,nt(Hs,.5,.5)));te.name=`robot:sideroller:axle:${d.edge}`,_.add(te);const ae=ua*.6,ce=Math.max(.2,sf-xl),he=ht(ce,ae,j-q,de+ce/2,J-xe*ae/2,js),pe=Xe(new oe(he,nt(Wt,.45,.35)));pe.name=`robot:sideroller:web:${d.edge}`,_.add(pe);const Le=new Ze;Le.name=`robot:sideroller:${d.edge}:${xe===1?"l":"r"}`,Le.add(Xe(new oe(_C(),n))),Le.add(Xe(new oe(bC(),nt(Wt,.5,.4)))),Le.position.set(k,Ne,js),_.add(Le),a.push({mesh:Le,sign:-xe,phase:0})}}if(h==="ramp"){const B=new Ze;B.name=`robot:ramp:${d.edge}`,B.position.set(p-la,0,ha),_.add(B),o.push(B);const k=tt(`ramp:rail|${P.toFixed(2)}`,()=>[ht(xC,vC,Xu,0,0,Xu/2)]);for(const J of[1,-1]){const Z=Xe(new oe(k,nt(Wt,.5,.3)));Z.name=`robot:ramp:rail:${d.edge}:${J===1?"l":"r"}`,Z.position.set(0,J*P,0),B.add(Z)}const q=Math.PI/2+xm,j=new Ze;j.name=`robot:ramp:bar:${d.edge}`,B.add(j),((J,Z,fe,Ce,be,Pe)=>{const Ke=Math.hypot(fe-J,Ce-Z),te=(J+fe)/2+cc*(Ce-Z)/Ke,ae=(Z+Ce)/2-cc*(fe-J)/Ke,ce=te+la,he=ae-ha,pe=Math.cos(q),Le=Math.sin(q),Fe=ce*pe-he*Le,ie=ce*Le+he*pe,me=tt(`ramp:wedge:${Pe}|${Ke.toFixed(2)}|${P.toFixed(2)}`,()=>[ht(Ke,P*2,cc*2,0,0,0)]),D=Xe(new oe(me,nt(Wt,.5,.3)));D.name=`robot:ramp:bar:${d.edge}:${Pe}`,D.position.set(Fe,0,ie),D.rotation.y=be-q,j.add(D)})(jb,rf,Jb,rf,0,"deck");const xe=g.half-ur-y/2,Ne=tt(`ramp:pivotbracket:${(p-la).toFixed(2)}`,()=>[ht(ua*.6,ua*.6,Math.abs(R-ha),p-la,0,(R+ha)/2)]);for(const J of[1,-1]){const Z=Xe(new oe(Ne,nt(Wt,.45,.35)));Z.name=`robot:ramp:pivotbracket:${d.edge}`,Z.position.set(0,J*xe,0),_.add(Z)}}if(l){const B=new Ze;B.name=`robot:nectarbar:${d.edge}`,B.position.set(E,0,b),_.add(B);const k=p+yC-E,q=SC-b,j=Math.hypot(k,q),de=g.half-ur,xe=tt(`nectarbar:bar|${de.toFixed(2)}`,()=>[new ft(Bp,Bp,2*de,12)]),Ne=Xe(new oe(xe,nt(Wt,.5,.3)));Ne.name=`robot:nectarbar:bar:${d.edge}`,Ne.position.set(j,0,0),B.add(Ne);const J=tt(`nectarbar:arm|${j.toFixed(2)}`,()=>[ht(j,.25,.5,j/2,0,0)]);for(const Z of[1,-1]){const fe=Xe(new oe(J,nt(Wt,.45,.35)));fe.name=`robot:nectarbar:arm:${d.edge}:${Z===1?"l":"r"}`,fe.position.set(0,Z*(de-.2),0),B.add(fe)}c.push({node:B,up:-Math.PI/2,down:Math.asin(-q/j)})}s.push(_)}return{nodes:s,rollers:r,sideRollers:a,rampPivots:o,barPivots:c}}const Bp=.25,SC=3.25,yC=.4;function EC(i){return Sm(i)!=="ramp"&&Ib(i)==="bar"}const wC=.5,kp=.42,zp=.38,fr=.68,dr=.54,TC=.16,eo=.35,AC=.25,ol=Math.PI/2;function M0(i){const e=-(i.wallR+bl),t=Ji,n=-i.motorR-e,s=-t,r=Math.hypot(n,s),o=(_l+$b)/r,c=Math.sqrt(1-o*o),l=(n*o+s*c)/r,h=(-n*c+s*o)/r;return{nx:l,nz:h,c:l*e+h*t}}function RC(i,e){const t=Math.sin(i),n=Math.cos(i);let s=1/0;t>1e-9&&(s=Math.min(s,Mo/t)),t<-1e-9&&(s=Math.min(s,Ji/t)),n>1e-9&&(s=Math.min(s,vl/n)),n<-1e-9&&(s=Math.min(s,e.sideRearX/n));const r=M0(e),a=r.nx*n+r.nz*t;return a<-1e-9&&(s=Math.min(s,r.c/a)),s}function CC(i){const e=M0(i),t=(e.c-e.nz*Ji)/e.nx,n=(e.c-e.nx*i.sideRearX)/e.nz;return[Math.atan2(Mo,vl),Math.atan2(Mo,i.sideRearX),Math.PI*2+Math.atan2(n,i.sideRearX),Math.PI*2+Math.atan2(Ji,t),Math.PI*2+Math.atan2(Ji,vl)]}function Gp(i,e,t,n,s,r){const a=new dn;a.absarc(0,0,e,t,n,!1),i>0&&a.absarc(0,0,i,n,t,!0),a.closePath();const o=new yn(a,{depth:s,bevelEnabled:!1,curveSegments:24});return o.rotateX(Math.PI/2),o.translate(0,r+s/2,0),o}function Hp(i,e,t,n,s,r=!1){const a=r?-1:1;return i.moveTo(e+s,-a*n),i.lineTo(t-s,-a*n),i.quadraticCurveTo(t,-a*n,t,-a*(n-s)),i.lineTo(t,a*(n-s)),i.quadraticCurveTo(t,a*n,t-s,a*n),i.lineTo(e+s,a*n),i.quadraticCurveTo(e,a*n,e,a*(n-s)),i.lineTo(e,-a*(n-s)),i.quadraticCurveTo(e,-a*n,e+s,-a*n),i}function S0(i,e){const t=new Ze,n=i.elemR,s=i.plateGap/2-Ob-n,r=.75,a=ol+qb,o=tt(`hood:${e}`,()=>[Gp(i.hoodR,i.hoodR+Yu,ol,a,n*2,0)]),c=new oe(o,nt(gp,.35,.55));c.name="bb-turret-hood",t.add(Xe(c));for(const u of[1,-1]){const f=u*(n+s/2),d=tt(`hoodCheek:${e}:${u}`,()=>{const _=i.hoodR+Yu,p=new dn;p.absarc(0,0,_,ol,a,!1),p.lineTo(0,0),p.closePath();const m=new yn(p,{depth:s,bevelEnabled:!1,curveSegments:24});return m.rotateX(Math.PI/2),m.translate(0,f+s/2,0),[m,Gp(0,r,0,Math.PI*2,s,f)]}),g=new oe(d,nt(gp,.4,.45));g.name="bb-turret-hood-cheek",t.add(Xe(g))}const l=new wt;l.name="bb-turret-exit";const h=wm(Bb,e);return l.position.set(-h.back-i.axleX,0,h.z-Ih),t.add(l),t}function y0(i,e,t,n){const s=tt(`turretPlate:${n}`,()=>{const I=Hp(new dn,t.plateBackX,t.plateFrontX,t.plateHalfW,.5);I.holes.push(Hp(new Si,t.slotBackX,t.slotFrontX,t.slotHalfW,.25,!0));const P=new yn(I,{depth:qu,bevelEnabled:!1,curveSegments:8});return P.translate(0,0,Fb-jt-qu),[P]}),r=new oe(s,nt(Hs,.45,.4));r.name="bb-turret-plate",i.add(Xe(r));const a=tt(`shooterSidePlate:${n}`,()=>{const I=[];for(let z=0;z<480;z++)I.push(Math.PI*2*z/480);for(const z of CC(t))I.push((z%(Math.PI*2)+Math.PI*2)%(Math.PI*2));I.sort((z,X)=>z-X);const F=new dn;I.forEach((z,X)=>{const O=RC(z,t),B=Math.cos(z)*O,k=Math.sin(z)*O;X===0?F.moveTo(B,k):F.lineTo(B,k)}),F.closePath();const G=new yn(F,{depth:fa,bevelEnabled:!1});return G.rotateX(Math.PI/2),[G]});for(const I of[1,-1]){const P=new oe(a,nt(Wt,.4,.45));P.name="bb-turret-side-plate",P.position.y=I>0?t.plateGap/2+fa:-t.plateGap/2,e.add(Xe(P))}const o=t.elemR*2*wC,c=new oe(u0(lc,o),nt(Or,.45,.2));c.name="bb-turret-flywheel",e.add(Xe(c));const l=tt(`flywheelHub:${n}`,()=>{const I=[new ft(lc*kp,lc*kp,o+.06,12)];for(const P of[1,-1])I.push(new ft(zp,zp,.3,10).translate(0,P*(o/2+.15),0));return I}),h=new oe(l,nt(Hs,.35,.6));h.name="bb-turret-flywheel-hub",e.add(Xe(h));const u=t.plateGap/2+fa+AC+eo/2,f=-(t.plateGap/2+fa+.15),d=u+eo/2+.1,g=tt(`shooterBrace:${n}`,()=>Ub.map(I=>{const P=new ft(Ku,Ku,t.tieSpan,10);return P.translate(Math.cos(I.th)*I.r,0,Math.sin(I.th)*I.r),P})),_=new oe(g,nt(Wt,.35,.55));_.name="bb-turret-brace",e.add(Xe(_));const p=-(t.wallR+bl/2),m=Mo-.06,x=tt(`feedThroat:${n}`,()=>[ht(bl,t.plateGap,m-Ji,p,0,(m+Ji)/2)]),E=new oe(x,nt(Wt,.4,.45));E.name="bb-turret-throat",e.add(Xe(E));const v=-t.motorR,S=t.plateGap/2,y=t.plateGap-.1,R=tt(`shooterMotor:${n}`,()=>[new ft(_l,_l,y,12).translate(v,S-y/2,0)]),b=new oe(R,nt(_h,.5,.4));b.name="bb-turret-motor",e.add(Xe(b));const w=tt(`shooterShaft:${n}`,()=>[new ft(.26,.26,d-f,8).translate(0,(f+d)/2,0),new ft(.16,.16,d-S,8).translate(v,(d+S)/2,0)]),A=new oe(w,nt(Wt,.3,.7));A.name="bb-turret-shaft",e.add(Xe(A));const C=tt(`shooterBelt:${n}`,()=>{const I=[];for(const[z,X]of[[fr,0],[dr,v]]){const O=new ft(z,z,eo+.08,14);O.translate(X,u,0),I.push(O)}const P=t.motorR,F=Math.asin((fr-dr)/P),G=Math.sqrt(P*P-(fr-dr)**2);for(const z of[1,-1]){const X=Math.PI+z*(Math.PI/2+F),O=Math.cos(X)*fr,B=Math.sin(X)*fr,k=v+Math.cos(X)*dr,q=Math.sin(X)*dr,j=new gt(G,eo,TC);j.rotateY(-Math.atan2(q-B,k-O)),j.translate((O+k)/2,u,(B+q)/2),I.push(j)}return I}),U=new oe(C,nt(Hs,.55,.3));U.name="bb-turret-belt",e.add(Xe(U))}function Vp(i,e,t=0){const n=new Ze,s=Tm(t),r=ym(i),a=Em(i,e);n.name="bb-turret",n.position.set(a.x,a.y,jt);const o=Math.min(s.elemR+.25,Math.max(.2,r-.45)),c=tt(`turretRing:${r.toFixed(4)}:${t}`,()=>{const d=new dn;d.absarc(0,0,r,0,Math.PI*2,!1);const g=new Si;return g.absarc(0,0,o,0,Math.PI*2,!0),d.holes.push(g),[new yn(d,{depth:gl,bevelEnabled:!1,curveSegments:24})]}),l=new oe(c,nt(lu,.4,.5));l.name="bb-turret-ring",n.add(Xe(l));const h=new Ze;h.name="bb-turret-head";const u=new Ze;u.name="bb-turret-axle",u.position.set(s.axleX,0,Ih-jt),y0(h,u,s,t);const f=S0(s,t);return f.name="bb-turret-pitch",u.add(f),h.add(u),n.add(h),n.userData.head=h,n.userData.axle=u,n.userData.pitch=f,n}function PC(i,e){const t=new Ze,n=Tm(0),s=_m(i,0),r=Eb(i),a=wb(i);wm(a,0),t.name="bb-fixed-shooter";{const g=Em(i,s.mount);t.position.set(g.x,g.y,jt)}const o=ym(i),c=Math.max(1.2,o*1.3),l=tt(`fixedRiser:${c.toFixed(4)}`,()=>[ht(c,c,gl,0,0,gl/2)]),h=new oe(l,nt(lu,.4,.5));h.name="bb-fixed-riser",h.rotation.z=r,t.add(Xe(h));const u=new Ze;u.name="bb-fixed-head",u.rotation.z=r;const f=new Ze;f.name="bb-fixed-axle",f.position.set(n.axleX,0,Ih-jt),y0(u,f,n,0);const d=S0(n,0);return d.name="bb-fixed-pitch",d.rotation.y=-a,f.add(d),u.add(f),t.add(u),t}const to=.1;function LC(i,e){const t=(i.time-e.lastFireAt)/mb;if(!(t>=0)||t>=1)return 0;if(t<to)return t/to;const n=(t-to)/(1-to);return(1-n)*(1-n)}function IC(i,e){const t=Mb({shooterMount:e.mount}),{dist:n,span:s}=Sb(i,t),r=new Ze;r.name="robot:dumper",r.rotation.z=yb[t];const a=s*.86,o=n-Math.min(8,n*.8),l=n-.7-o,h=$u-2.3,u=nt(F1,.5,.3),f=tt(`dumpmount:${a.toFixed(2)}|${o.toFixed(2)}`,()=>{const _=[],p=new ft(.34,.34,a*2,8);p.translate(o,0,h),_.push(p);for(const m of[1,-1])_.push(ht(.6,.6,h-jt,o,m*(a-.3),(h+jt)/2));return _});r.add(Xe(new oe(f,u)));const d=new Ze;d.name="bb-dump-arm",d.position.set(o,0,h);const g=tt(`dumper:${l.toFixed(2)}|${a.toFixed(2)}`,()=>{const _=[],p=$u-h,m=new gt(l,a*2,.22);m.rotateY(-.22),m.translate(l/2,0,p-1.5),_.push(m);for(const x of[1,-1]){const E=new gt(l,.3,1.9);E.rotateY(-.22),E.translate(l/2,x*(a-.15),p-1.1),_.push(E)}_.push(ht(.6,a*2,.5,l,0,p-.25)),_.push(ht(.3,a*2,2.6,.4,0,p-2.4));for(const x of[1,-1])_.push(ht(l*.8,.28,Ju,l*.45,x*a,p-1.2+Ju/2));return _});return d.add(Xe(new oe(g,u))),r.add(d),r.userData.dumpArm=d,r}function E0(i,e,t,n="high"){const s=new Ze;s.name=`robot:${e}`;const r=_m(i,0),a=cb(i),o=lb(i),c=hb(o.accent,i.chassisColor);for(const x of sC(i))s.add(x);for(const x of cC(i,e))s.add(x);const l=iC(i,c,n);for(const x of l.nodes)s.add(x);s.userData.swervePods=l.pods,s.userData.butterflySets={traction:l.traction,roller:l.roller},s.userData.spinWheels=l.spin;for(const x of DC(i,e))s.add(x);if(o.decal!=="none"){const x=i.length,E=i.width,v=uC(o.decal,c,x/E),S=new Et({map:v,roughness:.7,transparent:!0}),y=new oe(new gt(x,E,.02),S);y.name=`robot:${e}:decal`,y.position.set(0,0,jt+.02),s.add(y)}const h=hC(lC(i),t),u=new Mn(sa,Go),f=new Et({map:h,roughness:.6}),d=o.plate!=="classic"?dC(o.plate):null,g=d?nt(o.plate==="bold"?c:fC,.5,o.plate==="bold"?.3:.6):null;for(const[x,E]of[[1,"left"],[-1,"right"]]){const v=new oe(u,f);if(v.name=`robot:${e}:sign:${E}`,v.position.set(0,x*(i.width/2+.05),Fi*.5),v.quaternion.copy(Dp(x)),s.add(v),d&&g){const S=new oe(d,g);S.name=`robot:${e}:plate:${E}`,S.position.set(0,x*(i.width/2+.05+.02),Fi*.5),S.quaternion.copy(Dp(x)),s.add(S)}}const _=MC(i,c);for(const x of _.nodes)s.add(x);s.userData.intakeRollers=_.rollers,s.userData.sideRollers=_.sideRollers,s.userData.rampPivots=_.rampPivots,s.userData.barPivots=_.barPivots;const p=[],m=[];if(ub(r)){const x=Vp(i,r.mount,0);if(s.add(x),p.push(x.userData.head),m.push(x.userData.pitch),r.kind==="twinturret"&&r.mount2){const E=Vp(i,r.mount2,1);s.add(E),p.push(E.userData.head),m.push(E.userData.pitch)}}else if(r.kind==="dumper"){const x=IC(i,r);s.add(x),s.userData.dumpArm=x.userData.dumpArm}else r.kind==="fixed"&&s.add(PC(i));for(const x of m)x.rotation.y=-fb;if(s.userData.turretHeads=p,s.userData.turretPitches=m,s.userData.launcher=r,a){const x=NC(i,a.mount,e);s.add(x.node),s.userData.tubeStages=x.stages,s.userData.tube=x.rig}return s}function DC(i,e){const t=gb(i),n=[],s=jt+Vu/2,r=h=>h.gap?`|gap${h.gap.y0.toFixed(3)}:${h.gap.y1.toFixed(3)}`:"",a=h=>Xb(h).map(u=>ht(h.x1-h.x0,u.y1-u.y0,Vu,(h.x0+h.x1)/2,(u.y0+u.y1)/2,0)),o=Xe(new oe(tt(`front:bar|${t.front.x0.toFixed(3)}|${t.front.halfY.toFixed(3)}${r(t.front)}`,()=>a(t.front)),I1()));o.name=`robot:${e}:front:bar`,o.position.set(0,0,s),n.push(o);const c=Xe(new oe(tt(`front:arrow|${t.arrow.apex.toFixed(3)}|${t.arrow.base.toFixed(3)}|${t.arrow.half.toFixed(3)}`,()=>{const h=new dn;return h.moveTo(t.arrow.apex,0),h.lineTo(t.arrow.base,t.arrow.half),h.lineTo(t.arrow.base,-t.arrow.half),h.closePath(),[new yn(h,{depth:Pb,bevelEnabled:!1})]}),nt(pl,.45,.05)));c.name=`robot:${e}:front:arrow`,c.position.set(0,0,jt+.02),n.push(c);const l=Xe(new oe(tt(`rear:bar|${t.rear.x1.toFixed(3)}|${t.rear.halfY.toFixed(3)}${r(t.rear)}`,()=>a(t.rear)),nt(Lb,.75,.05)));return l.name=`robot:${e}:rear:bar`,l.position.set(0,0,s),n.push(l),n}function NC(i,e,t){const n=Tb(i),s=Ab(i,e,n),r=Rb(s.placeDist),a=r.sectionLen,o=new Ze;o.name=`robot:${t}:tube`,o.position.set(s.outer.x,s.outer.y,Gu),o.rotation.z=Math.atan2(s.uy,s.ux);const c=o.rotation.z,l=Cb(s,r),h=nt(Hs,.55,.35),u=nt(_h,.6,.2),f=Xe(new oe(tt(`tube:base|${a.toFixed(3)}`,()=>{const F=[];for(const X of l)X.what==="plate"&&F.push(ht(X.u1-X.u0,X.v1-X.v0,X.z1-X.z0,(X.u0+X.u1)/2,(X.v0+X.v1)/2,(X.z0+X.z1)/2));const G=ls[0]/2+ju+Zu+Qu,z=new ft(.16,.16,G*2,12);return F.push(z),F}),h));f.name=`robot:${t}:tube:pivot`,o.add(f);const d=Xe(new oe(tt("tube:drums",()=>{const F=[],G=ls[0]/2+ju+Zu,z=Qu,X=kb,O=new ft(X,X,z,20);O.translate(0,G+z/2,0),F.push(O);const B=jt-Gu;for(const q of[1,-1]){const j=-B+.05;F.push(ht(.06,z*.8,j,q*(X-.03),G+z/2,B+j/2-.05))}const k=new ft(X*.6,X*.6,z,16);k.translate(0,-.9099999999999999,0),F.push(k);for(const q of[.02,z-.02]){const j=new ft(X,X,.04,20);j.translate(0,-(G+q),0),F.push(j)}return F}),u));d.name=`robot:${t}:tube:drive`,o.add(d);const g=new Ze;g.name=`robot:${t}:tube:pitch`,o.add(g);const _=nt(Wt,.4,.45),p=nt(_h,.7,.05),m=[];let x=g;for(let F=0;F<ls.length;F++){const G=ls[F],z=tt(`tube:${G}|${a.toFixed(3)}`,()=>{const O=zb,B=a/2-rc,k=[];for(const q of[1,-1])k.push(ht(G,O,a,0,q*(G-O)/2,B)),k.push(ht(O,G-O*2,a,q*(G-O)/2,0,B));return k}),X=Xe(new oe(z,_));if(X.name=`robot:${t}:tube:s${F}`,(F===0?g:m[F-1]).add(X),m.push(X),F<ls.length-1){const O=Xe(new oe(tt(`tube:collar:${G}`,()=>{const k=[],q=G+2*Gb,j=ls[F+1],de=a-rc-.35/2;for(const xe of[1,-1])k.push(ht(q,(q-j)/2,.35,0,xe*(q+j)/4,de)),k.push(ht((q-j)/2,j,.35,xe*(q+j)/4,0,de));return k}),p));O.name=`robot:${t}:tube:s${F}:block`,X.add(O)}x=X}const E=new Ze;E.name=`robot:${t}:tube:tip`,E.position.z=a-rc,x.add(E);const v=new Ze;v.name=`robot:${t}:tube:level`,E.add(v);const S=Xe(new oe(tt("tube:wrist",()=>{const F=ef*2;return[ht(F,F*.8,Zs,0,0,Zs/2)]}),u));S.name=`robot:${t}:tube:wrist`,v.add(S);const y=new Ze;y.name=`robot:${t}:tube:yaw`,v.add(y);const R=Xe(new oe(tt("tube:yoke",()=>{const F=tf/2+.06,G=ef-.25,z=Hb,X=[ht(z-G,F*2+.12,.1,(G+z)/2,0,Zs-.05)];for(const O of[1,-1])X.push(ht(.3,.06,Zs-oc+.12,ac,O*(F+.03),(Zs+oc-.12)/2));return X}),h));R.name=`robot:${t}:tube:yoke`,y.add(R);const b=new Ze;b.name=`robot:${t}:tube:swing`,b.position.set(ac,0,oc),y.add(b);const w=Yb-ac,A=w-Kb,C=Xe(new oe(tt("tube:arm",()=>{const F=Vb,G=tf,z=[];z.push(ht(F,G,A+F/2,0,0,-1.8249999999999997/2));const X=new ft(.1,.1,G+.24,12);return z.push(X),z.push(ht(F,(Hu+Qs)*2,Qs*1.5,0,0,-A)),z}),h));C.name=`robot:${t}:tube:arm`,b.add(C);const U=[];for(const[F,G]of[[1,"l"],[-1,"r"]]){const z=new Ze;z.name=`robot:${t}:tube:jaw:${G}`,z.position.set(0,F*Hu,-A);const X=Xe(new oe(tt(`tube:jaw:${G}`,()=>{const O=Wb;return[ht(nf,Qs,O,0,0,-O/2),ht(nf,.28,Qs,0,-F*.1,-O+Qs/2)]}),u));z.add(X),b.add(z),U.push(z)}const I=new wt;I.name=`robot:${t}:tube:claw`,I.position.set(0,0,-w),b.add(I);const P=Math.atan2(s.sy,s.sx);return y.rotation.z=P-c,{node:o,stages:m,rig:{frame:s,stages:r,baseYaw:c,pitch:g,level:v,yaw:y,swing:b,jaws:U,stowPsi:P}}}function FC(i,e){const t=i.userData.tube,n=i.userData.tubeStages;t&&n&&UC(t,n,e)}function UC(i,e,t){i.pitch.rotation.y=Math.PI/2-t.lean,i.level.rotation.y=-(Math.PI/2-t.lean);for(let n=1;n<e.length;n++)e[n].position.z=t.ext;i.yaw.rotation.z=t.psi-i.baseYaw,i.swing.rotation.y=-t.swing,i.jaws[0].rotation.x=t.jaw,i.jaws[1].rotation.x=-t.jaw}const Wp=db/Br;function OC(){const i=new Ze;i.name="bb-robots";const e=new Map;let t=0,n="high",s=!0;function r(a){const o=new Set,c=Math.max(0,Math.min(.2,a.time-t));t=a.time;for(const l of a.robots){o.add(l.id);const h=`${gm(l.spec)}|${n}`;let u=e.get(l.id);if(!u||u.key!==h){u&&(i.remove(u.group),kr(u.group));const b=E0(l.spec,l.id,l.alliance,n);u={group:b,key:h,tubeEase:0,tubeLean:Math.PI/2,tubeExt:0,tubePsi:0,tubeSwing:0},e.set(l.id,u),i.add(b)}u.group.position.set(l.pos.x,l.pos.y,l.z??0),u.group.rotation.set(0,0,l.heading);const f=u.group.userData.intakeRollers;if(f&&f.length>0){const b=ku(a)&&(l.autoIntake||a.time-l.lastIntakeAt<.4)&&l.hopper.length<zu(l.spec);for(const w of f){b&&(w.phase+=Wp*c),w.hub.rotation.y=-w.phase;for(let A=0;A<w.flaps.length;A++){const C=w.phase+A*Math.PI*2/w.flaps.length,U=gC(C);w.flaps[A].position.set(Math.cos(C)*mi,0,Math.sin(C)*mi),w.flaps[A].rotation.y=-(C-U)}}}const d=u.group.userData.sideRollers;if(d&&d.length>0){const b=ku(a)&&(l.autoIntake||a.time-l.lastIntakeAt<.4)&&l.hopper.length<zu(l.spec);for(const w of d)b&&(w.phase+=Wp*c*w.sign),w.mesh.rotation.z=w.phase}const g=u.group.userData.rampPivots;if(g&&g.length>0){const b=Math.max(0,Math.min(1,(a.time-(l.bbRampAt??-1/0))/ib)),w=Up(b),A=l.bbRampOut?Fp*w:Fp*(1-w);for(const C of g)C.rotation.y=A}const _=u.group.userData.barPivots;if(_&&_.length>0){const b=Math.max(0,Math.min(1,(a.time-(l.bbBarAt??-1/0))/sb)),w=Up(b),A=l.bbBarOut?w:1-w;for(const C of _)C.node.rotation.y=C.up+(C.down-C.up)*A}const p=u.group.userData.swervePods;if(p)for(let b=0;b<p.length;b++)p[b].rotation.z=l.moduleAngles[b]??0;const m=u.group.userData.butterflySets;if(m&&m.traction.length>0){for(const b of m.traction)b.node.position.z=b.z+(l.butterflyTank?0:yh);for(const b of m.roller)b.node.position.z=b.z+(l.butterflyTank?yh:0)}const x=u.group.userData.spinWheels;if(x&&x.length>0&&s){const b=l.vel.x*Math.cos(l.heading)+l.vel.y*Math.sin(l.heading);for(const w of x)w.node.rotation.y-=b/w.r*c}const E=u.group.userData.tube;if(E){const b=bm(a,l),w=b!==null?1:0;if(b!==null){const C=Ch[b],U=Ph[C.wall],I=Math.cos(-l.heading),P=Math.sin(-l.heading),F=C.x-l.pos.x,G=C.y-l.pos.y,z=rb(E.frame,E.stages,{x:F*I-G*P,y:F*P+G*I},{x:U.x*I-U.y*P,y:U.x*P+U.y*I},l.z??0);if(u.tubeEase<=0)u.tubeLean=z.lean,u.tubeExt=z.ext,u.tubePsi=z.psi,u.tubeSwing=z.psiSwing;else{const X=Qb*c;u.tubeLean+=Qa(z.lean-u.tubeLean,X),u.tubeExt+=Qa(z.ext-u.tubeExt,Zb*c),u.tubePsi+=Qa(Op(z.psi-u.tubePsi),X),u.tubeSwing+=Qa(Op(z.psiSwing-u.tubeSwing),X)}}const A=c/pb;u.tubeEase=w>u.tubeEase?Math.min(w,u.tubeEase+A):Math.max(w,u.tubeEase-A/ab),FC(u.group,ob(E.frame,{lean:u.tubeLean,ext:u.tubeExt,psi:u.tubePsi,psiSwing:u.tubeSwing},u.tubeEase))}const v=u.group.userData.turretHeads,S=u.group.userData.turretPitches,y=u.group.userData.launcher;v&&v.length>0&&S&&y&&(v[0].rotation.z=l.turretHeading-l.heading,S[0].rotation.y=-(l.bbTurretPitch??0),v.length>1&&(v[1].rotation.z=(l.bbTurret2Heading??l.turretHeading)-l.heading,S[1].rotation.y=-(l.bbTurret2Pitch??0)));const R=u.group.userData.dumpArm;R&&(R.rotation.y=-1.05*LC(a,l))}for(const[l,h]of e)o.has(l)||(i.remove(h.group),kr(h.group),e.delete(l))}return i.userData.sync=r,{group:i,get wheelDetail(){return n},set wheelDetail(a){n=a},get wheelSpin(){return s},set wheelSpin(a){s=a},dispose(){for(const a of e.values())i.remove(a.group),kr(a.group);e.clear()}}}function kr(i){i.traverse(e=>{const t=e,n=t.geometry;n&&!ss.has(n)&&n.dispose();const s=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const r of s)cu.has(r)||r.dispose()})}function BC(i,e){i.group.userData.sync(e)}const kC=.25;function Xp(){try{const i=getComputedStyle(document.documentElement).getPropertyValue("--ds-on-field-accent").trim();if(/^#[0-9a-fA-F]{6}$/.test(i))return parseInt(i.slice(1),16)}catch{}return parseInt(s_.slice(1),16)}const zC=Tr+.4,GC=Tr+1.6,HC=.4,VC=1.6,Eh=.42,WC=.88,XC=.14;function qC(){const i=new dn;i.absarc(0,0,GC,0,Math.PI*2,!1);const e=new Si;return e.absarc(0,0,zC,0,Math.PI*2,!0),i.holes.push(e),new Qh(i,32)}function KC(){const i=new Ze;i.name="bb-reticle",i.visible=!1;const e=new Ct;e.setAttribute("position",new Rt(Ki,3));const t=new Float32Array(i_);e.setAttribute("lineDistance",new Rt(t,1)),e.setDrawRange(0,0);const n=new _g({color:Xp(),dashSize:t_,gapSize:e_,transparent:!0,opacity:.92,depthTest:!1,depthWrite:!1}),s=new Ko(e,n);s.name="bb-reticle:path",s.renderOrder=10,s.position.z=kC,s.frustumCulled=!1,s.visible=!1,i.add(s),i.userData.path=s,i.userData.dists=t;const r=qC(),a=new Kn({color:Xp(),transparent:!0,opacity:Eh,depthTest:!1,depthWrite:!1,side:nn}),o=new oe(r,a);return o.name="bb-reticle:reach",o.renderOrder=9,o.frustumCulled=!1,o.visible=!1,i.add(o),i.userData.reach=o,{group:i,dispose(){e.dispose(),n.dispose(),r.dispose(),a.dispose()}}}function YC(i,e,t,n=!0){const s=i.group;if(!n||t===void 0){s.visible=!1;return}let r=null;for(const h of e.robots)if(h.id===t){r=h;break}if(!r||r.passive){s.visible=!1;return}s.visible=!0;const a=s.userData.reach,o=bm(e,r);if(o===null)a.visible=!1;else{const h=Ch[o],u=.5+.5*Math.sin(e.time*VC*Math.PI*2);a.position.set(h.x,h.y,_r+HC);const f=1+u*XC;a.scale.set(f,f,1),a.material.opacity=Eh+u*(WC-Eh),a.visible=!0}const c=s.userData.path;if(!n_(e,r)||hc.points<2){c.visible=!1;return}c.visible=!0;const l=s.userData.dists;l[0]=0;for(let h=1;h<hc.points;h++){const u=(h-1)*3,f=h*3,d=Ki[f]-Ki[u],g=Ki[f+1]-Ki[u+1],_=Ki[f+2]-Ki[u+2];l[h]=l[h-1]+Math.sqrt(d*d+g*g+_*_)}c.geometry.setDrawRange(0,hc.points),c.geometry.getAttribute("position").needsUpdate=!0,c.geometry.getAttribute("lineDistance").needsUpdate=!0}function $C(i,e){return i.meshDetail==="low"||e==="low"?"low":"high"}const JC={low:{lampCols:2,lampRows:3,cycSeg:16,horizon:28,truss:!1,columns:!1,stands:!1,crowd:!1},high:{lampCols:4,lampRows:4,cycSeg:32,horizon:64,truss:!0,columns:!0,stands:!0,crowd:!0}},jC=-.75,qp=660;function gi(i){let e=i*2654435761>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yi(i,e,t){const n=new zs(new gt(1,1,1),e,t.length);n.name=i;const s=new $e,r=new qe;let a=!1;return t.forEach((o,c)=>{s.makeScale(o.w,o.d,o.h),s.setPosition(o.x,o.y,o.z),n.setMatrixAt(c,s),o.tint!==void 0&&(n.setColorAt(c,r.setHex(o.tint)),a=!0)}),n.instanceMatrix.needsUpdate=!0,a&&n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.castShadow=!1,n.receiveShadow=!1,n.computeBoundingSphere(),n}function Qn(i,e){const t=new Et({color:i,roughness:.94,metalness:0});return e&&(t.map=e),t}function pu(i,e){return new Et({color:0,emissive:i,emissiveIntensity:e,roughness:1,metalness:0})}function ZC(i,e){const n=document.createElement("canvas");n.width=128,n.height=128;const s=n.getContext("2d"),r=i>>16&255,a=i>>8&255,o=i&255;s.fillStyle=`rgb(${r},${a},${o})`,s.fillRect(0,0,128,128);const c=h=>`rgb(${Math.round(r*h)},${Math.round(a*h)},${Math.round(o*h)})`;for(let h=0;h<200;h++){s.fillStyle=c(gi(h*5+3)>.5?1.09:.91);const u=2+gi(h*5+4)*5;s.fillRect(gi(h*5)*128,gi(h*5+1)*128,u,u)}e&&(s.strokeStyle="rgba(0,0,0,0.22)",s.lineWidth=1,s.beginPath(),s.moveTo(.5,0),s.lineTo(.5,128),s.moveTo(0,.5),s.lineTo(128,.5),s.stroke());const l=new Nn(n);return l.wrapS=Sn,l.wrapT=Sn,l.colorSpace=Mt,l}const Kp=48;function cl(i,e,t){const n=ZC(i.floor,i.gridded===!0);n.repeat.set(t*2/Kp,t*2/Kp);const s=e?new ra(t,48):new Mn(t*2,t*2);if(e){const a=s.attributes.uv,o=s.attributes.position;for(let c=0;c<a.count;c++)a.setXY(c,o.getX(c)/(t*2)+.5,o.getY(c)/(t*2)+.5);a.needsUpdate=!0}const r=new oe(s,Qn(16777215,n));return r.name="bb-venue:ground",r.position.z=jC,r.receiveShadow=!0,r}function QC(i){const e=Qn(i.wall),t=Qn(mu(i.wall,i.trim,.45)),n=[e,e,e,e,t,e];for(const a of n)a.side=Xt;const s=new gt(i.half*2,i.half*2,i.ceil+1),r=new oe(s,n);return r.name="bb-venue:shell",r.position.z=(i.ceil+1)/2-1,r}function mu(i,e,t){const n=s=>Math.round((i>>s&255)*(1-t)+(e>>s&255)*t)&255;return n(16)<<16|n(8)<<8|n(0)}function eP(i,e){if(i.lampPower<=0)return null;const t=[],n=i.half*1.35;for(let r=0;r<e.lampCols;r++)for(let a=0;a<e.lampRows;a++){const o=((r+.5)/e.lampCols-.5)*n,c=((a+.5)/e.lampRows-.5)*n;t.push({x:o,y:c,z:i.ceil-5,w:n/e.lampCols*.52,d:14,h:3})}const s=yi("bb-venue:fittings",pu(i.lamp,i.lampPower),t);return s.layers.set(gu),s}const gu=1;function tP(i){for(const e of i)e.layers.enable(gu)}function nP(i){const e=[],t=i.ceil-22,n=i.half*1.5;for(let r=0;r<5;r++){const a=((r+.5)/5-.5)*n;e.push({x:a,y:0,z:t,w:7,d:n,h:10}),e.push({x:0,y:a,z:t-11,w:n,d:7,h:10})}const s=yi("bb-venue:truss",Qn(i.trim),e);return s.layers.set(gu),s}function iP(i){const e=i.ceil,t=i.half-9,n=[];for(const s of[-1,1])for(const r of[-1,1])n.push({x:s*t,y:r*t,z:e/2,w:18,d:18,h:e}),n.push({x:s*t,y:0,z:e/2,w:16,d:16,h:e}),n.push({x:0,y:r*t,z:e/2,w:16,d:16,h:e});return yi("bb-venue:columns",Qn(mu(i.wall,i.trim,.6)),n)}const bu=6,wh=32;function w0(i,e){return{y:i.half-24-bu*wh+(e+.5)*wh,h:14+e*17}}function sP(i){const e=[],t=(i.half-60)*2;for(const n of[-1,1])for(let s=0;s<bu;s++){const{y:r,h:a}=w0(i,s);e.push({x:0,y:n*r,z:a/2,w:t,d:wh,h:a})}return yi("bb-venue:stands",Qn(i.trim),e)}const Yp=[4869976,5984584,4146768,5591132,4672325,6445650];function rP(i){const e=[],t=(i.half-70)*2,n=Math.max(8,Math.round(t/21));let s=0;for(const r of[-1,1])for(let a=1;a<bu;a++){const{y:o,h:c}=w0(i,a);for(let l=0;l<n;l++){if(s++,gi(s*3)<.34)continue;const h=(l+.5)/n*t-t/2+(gi(s*3+1)-.5)*7,u=15+gi(s*3+2)*9;e.push({x:h,y:r*(o-5),z:c+u/2,w:9,d:8,h:u,tint:Yp[s%Yp.length]})}}return yi("bb-venue:crowd",Qn(16777215),e)}function aP(i,e){const t=i.half,n=Math.min(i.half*.42,230),s=[];for(let c=0;c<=6;c++){const l=-Math.PI/2+c/6*(Math.PI/2);s.push(new ue(t-n+n*Math.cos(l),n+n*Math.sin(l)))}s.push(new ue(t,i.ceil));const r=new aa(s,e),a=Qn(i.wall);a.side=Xt;const o=new oe(r,a);return o.name="bb-venue:cyc",o.rotation.x=Math.PI/2,o}function oP(i){if(i.lampPower<=0)return null;const e=[];for(const t of[-1,1])for(const n of[-1,1])e.push({x:t*105,y:n*105,z:i.ceil*.78,w:116,d:116,h:5});return yi("bb-venue:softbox",pu(i.lamp,i.lampPower),e)}function cP(i,e){const t=[],n=2*Math.PI*i.half/e;for(let s=0;s<e;s++){const r=s/e*Math.PI*2,a=40+gi(s*2)*190,o=60+gi(s*2+1)*90;t.push({x:Math.cos(r)*i.half,y:Math.sin(r)*i.half,z:a/2,w:n*1.15,d:o,h:a})}return yi("bb-venue:horizon",Qn(i.trim),t)}function lP(i){const e=new Ze;e.name="bb-venue:masts";const t=[],n=[],s=185;for(const r of[-1,1])for(const a of[-1,1])t.push({x:r*210,y:a*210,z:s/2,w:9,d:9,h:s}),n.push({x:r*210,y:a*210,z:s+8,w:58,d:26,h:12});return e.add(yi("bb-venue:mast-poles",Qn(mu(i.trim,10134190,.55)),t)),e.add(yi("bb-venue:mast-heads",pu(i.lamp,i.lampPower),n)),e}function hP(i,e){const t=JC[e],n=new Ze;n.name="bb-venue";const s=i.kind!=="outdoor"&&i.half<qp?{...i,half:qp}:i;if(s.kind==="outdoor")return n.add(cl(s,!0,s.half*1.35)),n.add(cP(s,t.horizon)),s.lampPower>0&&n.add(lP(s)),n;if(s.kind==="studio"){n.add(cl(s,!0,s.half*.98)),n.add(aP(s,t.cycSeg));const a=oP(s);return a&&n.add(a),n}n.add(cl(s,!1,s.half+2)),n.add(QC(s));const r=eP(s,t);return r&&n.add(r),t.truss&&n.add(nP(s)),t.columns&&n.add(iP(s)),t.stands&&s.stands&&(n.add(sP(s)),t.crowd&&n.add(rP(s))),n}function Th(i){const e=-i;return{x:-Math.sin(e),y:Math.cos(e)}}const T0=62,uP=44,A0=72;function fP(i){return Math.max(uP,Math.min(A0,i))}const R0=12,ll=240,_u=60,C0=95,dP=.04,pP=_u*Math.PI/180,Ah=C0*Math.PI/180;let Oi=null;function P0(i){return Oi==null?Ah:Math.min(Ah,Wo(Oi,i)*Math.PI/180)}function mP(i){return Oi==null?68:Wo(Oi,i)}function $p(i){return Oi==null?55:Math.max(_u-15,Wo(Oi,i)-15)}function gP(i){return Math.min(C0,Wo(Oi??N_,i))}let L0=!1,xo=null;function bP(i,e){Oi=i==null?null:Math.min(F_,Math.max(U_,i)),L0=e==="reduced",Rh=NaN}function Jp(i){xo=i}const jp=66,_P=.18,Zp=b_(Jt,xi,Am),As=(()=>{const i=[];for(const e of[1,-1])for(const t of[1,-1])i.push({x:e*Jt,y:t*xi,z:0}),i.push({x:e*Jt,y:t*xi,z:Am});return i.push({x:ji,y:0,z:jp}),i.push({x:-ji,y:0,z:jp}),i})();function pr(i,e,t,n){const s=Th(n),r=Jt+e,a=-s.x*r,o=-s.y*r,c=s.y,l=-s.x;let h=1/0,u=-1/0;const f=new Array(As.length),d=new Array(As.length),g=new Array(As.length);for(let A=0;A<As.length;A++){const C=As[A],U=C.x-a,I=C.y-o,P=U*s.x+I*s.y,F=C.z-i,G=U*c+I*l;f[A]=P,d[A]=F,g[A]=G;const z=Math.atan2(F,P);z<h&&(h=z),z>u&&(u=z)}const _=-(h+u)/2,p=1-dP,x=2*Math.max(Math.abs(h+_),Math.abs(u+_))/p,E=Math.cos(_),v=Math.sin(_);let S=0,y=1/0;for(let A=0;A<As.length;A++){const C=f[A]*E-d[A]*v;C<y&&(y=C);const U=C>1e-6?Math.abs(g[A])/C:1/0;U>S&&(S=U)}const R=2*Math.atan(S/(t*p)),b=Math.max(x,R),w=b<=P0(t)+1e-9&&y>.001&&Number.isFinite(b);return{pitch:_,vFov:b,fits:w}}let Qp=NaN,Rh=NaN;const Rs={eyeH:T0,setback:R0,pitch:0,vFov:Ah};function xP(i,e,t){if(e===Qp&&t===Rh)return Rs;Qp=e,Rh=t;let n=T0,s=R0,r=pr(n,s,t,e);if(r.fits||(n=A0,r=pr(n,s,t,e)),!r.fits){if(pr(n,ll,t,e).fits){let c=s,l=ll;for(let h=0;h<30;h++){const u=(c+l)/2;pr(n,u,t,e).fits?l=u:c=u}s=l}else s=ll;r=pr(n,s,t,e)}const a=Math.min(P0(t),Math.max(pP,r.vFov));return Rs.eyeH=n,Rs.setback=s,Rs.pitch=r.pitch,Rs.vFov=a,Rs}const It={left:0,top:0,w:1,h:1,fullW:1,fullH:1,offset:!1};function mr(i){const e=Math.max(1,i.width),t=Math.max(1,i.height),n=i.insets;let s=n?Math.max(0,n.left):0,r=n?Math.max(0,n.right):0,a=n?Math.max(0,n.top):0,o=n?Math.max(0,n.bottom):0;s+r>e*.9&&(s=r=0),a+o>t*.9&&(a=o=0),It.left=s,It.top=a,It.w=e-s-r,It.h=t-a-o,It.fullW=e,It.fullH=t,It.offset=s>.5||r>.5||a>.5||o>.5}function Cs(i){var e;It.offset?i.setViewOffset(It.w,It.h,-It.left,-It.top,It.fullW,It.fullH):(e=i.view)!=null&&e.enabled&&i.clearViewOffset()}const em=60,vP=40,tm=36,MP=14,SP=68,yP=.12,EP=.08,no=.012,wP=72,TP=.08,AP=250,RP=90,CP=620,PP=.56,LP=.08,IP=1.45,nm=24,im=55,DP=.05,sm=.006,rm=.004,NP=.0012,FP=4,am=24,hl=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null;function io(){return L0||((hl==null?void 0:hl.matches)??!1)}function so(i,e){return i>0?e<=0?1:1-Math.pow(2,-i/e):0}const li=new N;function UP(){const i=new kt(_u,1,1,4e3);i.up.set(0,0,1);const e=new ts(-1,1,1,-1,1,4e3);e.up.set(0,0,1);const t=new kt(SP,1,1,4e3);t.up.set(0,0,1);const n=new kt(im,1,1,4e3);n.up.set(0,0,1);const s=new kt(im,1,1,4e3);s.up.set(0,0,1);const r=new N,a=new N;let o=!1,c=-Math.PI/2,l=PP,h=AP,u=!0,f=0,d=uc(0),g=d,_=!1,p=a_,m=0;function x(){const O=performance.now(),B=m?(O-m)/1e3:0;return m=O,B>0&&B<.25?B:0}function E(O,B){if(B.localRobotId===void 0)return null;for(const k of O.robots)if(k.id===B.localRobotId)return k;return null}let v="",S=null,y=0,R=0,b=!1;function w(O,B,k,q){if(xo==null)return null;const j=E(B,O);if(!j)return null;const de=m_(O.localStartCat,j.alliance);if(de!=="TOP"&&de!=="BOTTOM")return null;const xe=`${j.alliance}|${de}|${xo}|${q}|${k}`;return(xe!==v||!S)&&(v=xe,b=!1,S=g_(j.alliance,de,xo,Zp,q,k*Math.PI/180)),S}function A(O,B,k){mr(O);const q=Math.max(.001,It.w/It.h),j=gP(q),de=w(O,B,j,q),xe=de?E(B,O):null;if(de&&xe){const ae=d_(de,Zp,{x:xe.pos.x,y:xe.pos.y,z:xe.z??0},q);if(!b||!(k>0))y=ae.yaw,R=ae.pitch,b=!0;else{const Le=so(k,io()?no:_P);y+=af(ae.yaw-y)*Le,R+=(ae.pitch-R)*Le}i.aspect=q,i.fov=de.vFov*180/Math.PI,Cs(i),i.position.set(de.eye.x,de.eye.y,de.eye.z),i.up.set(0,0,1);const ce=Math.cos(R),he=Math.sin(R),pe=100;li.set(de.eye.x+Math.cos(y)*ce*pe,de.eye.y+Math.sin(y)*ce*pe,de.eye.z-he*pe),i.lookAt(li),i.updateProjectionMatrix();return}const Ne=Th(O.viewAngle),J=xP("red",O.viewAngle,q),Z=Jt+J.setback;i.aspect=q,i.fov=J.vFov*180/Math.PI,Cs(i);const fe=-Ne.x*Z,Ce=-Ne.y*Z,be=fP(J.eyeH+f);i.position.set(fe,Ce,be),i.up.set(0,0,1);const Pe=Math.cos(J.pitch),Ke=Math.sin(J.pitch),te=100;li.set(fe+Ne.x*Pe*te,Ce+Ne.y*Pe*te,be-Ke*te),i.lookAt(li),i.updateProjectionMatrix()}function C(O){const B=Th(O.viewAngle);mr(O);const k=Math.max(.001,It.w/It.h),q=Jt+Ml,j=k>=1?q:q/k,de=k>=1?q*k:q;e.left=-de,e.right=de,e.top=j,e.bottom=-j,e.near=1,e.far=4e3,Cs(e),e.position.set(0,0,800),e.up.set(B.x,B.y,0),e.lookAt(0,0,0),e.updateProjectionMatrix()}function U(O,B,k){const q=E(B,O);if(!q)return!1;mr(O);const j=Math.max(.001,It.w/It.h),de=Math.cos(q.heading),xe=Math.sin(q.heading),Ne=q.z??0,J=q.pos.x-de*em,Z=q.pos.y-xe*em,fe=Ne+Math.max(12,Math.min(96,vP+f)),Ce=q.pos.x+de*tm,be=q.pos.y+xe*tm,Pe=Ne+MP,Ke=io();if(!o||k===0||a.distanceTo(li.set(Ce,be,Pe))>wP)r.set(J,Z,fe),a.set(Ce,be,Pe),o=!0;else{const ae=so(k,Ke?no:yP),ce=so(k,Ke?no:EP);r.x+=(J-r.x)*ae,r.y+=(Z-r.y)*ae,r.z+=(fe-r.z)*ae,a.x+=(Ce-a.x)*ce,a.y+=(be-a.y)*ce,a.z+=(Pe-a.z)*ce}return t.aspect=j,Cs(t),t.fov=mP(j),t.position.copy(r),t.up.set(0,0,1),t.lookAt(a),t.updateProjectionMatrix(),!0}function I(O,B){mr(O),n.aspect=Math.max(.001,It.w/It.h),n.fov=$p(n.aspect),u&&!io()&&(c+=DP*B);const k=Math.cos(l),q=Math.sin(l);Cs(n),n.position.set(Math.cos(c)*k*h,Math.sin(c)*k*h,nm+q*h),n.up.set(0,0,1),li.set(0,0,nm),n.lookAt(li),n.updateProjectionMatrix()}function P(O,B){mr(O),s.aspect=Math.max(.001,It.w/It.h),s.fov=$p(s.aspect),Cs(s),_||(d=uc(O.viewAngle),g=d,_=!0);const k=p.smoothing?so(B,io()?no:TP):1;g=k<=0?g:k>=1?d:{yaw:g.yaw+af(d.yaw-g.yaw)*k,pitch:g.pitch+(d.pitch-g.pitch)*k,dist:g.dist+(d.dist-g.dist)*k,target:[g.target[0]+(d.target[0]-g.target[0])*k,g.target[1]+(d.target[1]-g.target[1])*k]};const q=p_(g);s.position.set(q.eye[0],q.eye[1],q.eye[2]),s.up.set(0,0,1),li.set(q.target[0],q.target[1],q.target[2]),s.lookAt(li),s.updateProjectionMatrix()}const F=new N,G=4*(Jt+Ml);function z(O,B){if(!Number.isFinite(O)||!Number.isFinite(B))return null;F.set(O,B,.5).unproject(s);const k=F.x-s.position.x,q=F.y-s.position.y,j=F.z-s.position.z;if(!(Math.abs(j)>1e-9))return null;const de=-s.position.z/j;if(!(de>0)||!Number.isFinite(de))return null;const xe=s.position.x+k*de,Ne=s.position.y+q*de;return!Number.isFinite(xe)||!Number.isFinite(Ne)||Math.abs(xe)>G||Math.abs(Ne)>G?null:[xe,Ne]}const X={driver:i,overhead:e,chase:t,orbit:n,free:s,active:i,update(O,B,k){const q=x();A(O,B,q),C(O);let j;return k==="chase"?j=U(O,B,q)?t:i:k==="orbit"?(I(O,q),j=n):k==="free"?(P(O,q),j=s):j=k==="overhead"?e:i,X.active=j,j},nudgeEye(O){return f=Math.max(-am,Math.min(am,f+O*FP)),f},orbitDrag(O,B){u=!1,c-=O*sm,l=Math.max(LP,Math.min(IP,l+B*rm))},orbitZoom(O){const B=Math.exp(O*.0012);h=Math.max(RP,Math.min(CP,h*B))},setFreeNav(O){p=O},freeOrbit(O,B){const k=u_(p,O,B,sm,rm);d=f_(d,k.dYaw,k.dPitch)},freePan(O,B){d=l_(d,O,B,h_(p))},freeDolly(O,B){const k=Math.exp(O*r_(p)*p.zoomSpeed*NP),q=p.zoomToCursor&&B?z(B.x,B.y):null;d=q?o_(d,k,q[0],q[1]):c_(d,k)},freeReset(O){d=uc(O)}};return X}class OP extends Po{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new gt;e.deleteAttribute("uv");const t=new Et({side:Xt}),n=new Et,s=new Sg(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new oe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new zs(e,n,6),o=new wt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new oe(e,Ps(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new oe(e,Ps(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new oe(e,Ps(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new oe(e,Ps(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new oe(e,Ps(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new oe(e,Ps(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ps(i){return new hM({color:0,emissive:16777215,emissiveIntensity:i})}class BP extends CM{constructor(e){super(e),this.type=rn}parse(e){const a=function(b,w){switch(b){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(w||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(w||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(w||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(w||""))}},u=function(b,w,A){w=w||1024;let U=b.pos,I=-1,P=0,F="",G=String.fromCharCode.apply(null,new Uint16Array(b.subarray(U,U+128)));for(;0>(I=G.indexOf(`
`))&&P<w&&U<b.byteLength;)F+=G,P+=G.length,U+=128,G=String.fromCharCode.apply(null,new Uint16Array(b.subarray(U,U+128)));return-1<I?(b.pos+=P+I+1,F+G.slice(0,I)):!1},f=function(b){const w=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*FORMAT=(\S+)\s*$/,I=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let F,G;for((b.pos>=b.byteLength||!(F=u(b)))&&a(1,"no header found"),(G=F.match(w))||a(3,"bad initial token"),P.valid|=1,P.programtype=G[1],P.string+=F+`
`;F=u(b),F!==!1;){if(P.string+=F+`
`,F.charAt(0)==="#"){P.comments+=F+`
`;continue}if((G=F.match(A))&&(P.gamma=parseFloat(G[1])),(G=F.match(C))&&(P.exposure=parseFloat(G[1])),(G=F.match(U))&&(P.valid|=2,P.format=G[1]),(G=F.match(I))&&(P.valid|=4,P.height=parseInt(G[1],10),P.width=parseInt(G[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||a(3,"missing format specifier"),P.valid&4||a(3,"missing image size specifier"),P},d=function(b,w,A){const C=w;if(C<8||C>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);C!==(b[2]<<8|b[3])&&a(3,"wrong scanline width");const U=new Uint8Array(4*w*A);U.length||a(4,"unable to allocate buffer space");let I=0,P=0;const F=4*C,G=new Uint8Array(4),z=new Uint8Array(F);let X=A;for(;X>0&&P<b.byteLength;){P+4>b.byteLength&&a(1),G[0]=b[P++],G[1]=b[P++],G[2]=b[P++],G[3]=b[P++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=C)&&a(3,"bad rgbe scanline format");let O=0,B;for(;O<F&&P<b.byteLength;){B=b[P++];const q=B>128;if(q&&(B-=128),(B===0||O+B>F)&&a(3,"bad scanline data"),q){const j=b[P++];for(let de=0;de<B;de++)z[O++]=j}else z.set(b.subarray(P,P+B),O),O+=B,P+=B}const k=C;for(let q=0;q<k;q++){let j=0;U[I]=z[q+j],j+=C,U[I+1]=z[q+j],j+=C,U[I+2]=z[q+j],j+=C,U[I+3]=z[q+j],I+=4}X--}return U},g=function(b,w,A,C){const U=b[w+3],I=Math.pow(2,U-128)/255;A[C+0]=b[w+0]*I,A[C+1]=b[w+1]*I,A[C+2]=b[w+2]*I,A[C+3]=1},_=function(b,w,A,C){const U=b[w+3],I=Math.pow(2,U-128)/255;A[C+0]=xa.toHalfFloat(Math.min(b[w+0]*I,65504)),A[C+1]=xa.toHalfFloat(Math.min(b[w+1]*I,65504)),A[C+2]=xa.toHalfFloat(Math.min(b[w+2]*I,65504)),A[C+3]=xa.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=f(p),x=m.width,E=m.height,v=d(p.subarray(p.pos),x,E);let S,y,R;switch(this.type){case sn:R=v.length/4;const b=new Float32Array(R*4);for(let A=0;A<R;A++)g(v,A*4,b,A*4);S=b,y=sn;break;case rn:R=v.length/4;const w=new Uint16Array(R*4);for(let A=0;A<R;A++)_(v,A*4,w,A*4);S=w,y=rn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:x,height:E,data:S,header:m.string,gamma:m.gamma,exposure:m.exposure,type:y,colorSpace:tn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}const kP=.4,zP=.5,Hn=768,Rn=384,GP=2,gr=new Map,HP=5*6e4,om=new Map,cm=new Dn(Math.PI/2,0,0);function Xi(i){return`#${i.toString(16).padStart(6,"0")}`}function ro(i){let e=i*2654435761>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lm(i){return(90-i)/180*Rn}function VP(i){const e=document.createElement("canvas");e.width=Hn,e.height=Rn;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,Rn);for(const[s,r]of i.sky)n.addColorStop(Math.min(1,Math.max(0,s)),Xi(r));if(t.fillStyle=n,t.fillRect(0,0,Hn,Rn),i.stars){t.fillStyle="#ffffff";for(let s=0;s<420;s++){const r=ro(s*3)*Hn,a=ro(s*3+1)*Rn*.46,o=.25+ro(s*3+2)*.6;t.globalAlpha=o*(1-a/(Rn*.5)),t.fillRect(r,a,1.2,1.2)}t.globalAlpha=1}if(i.truss){const s=lm(i.truss.el),r=i.truss.h/180*Rn,a=t.createLinearGradient(0,s-r*3,0,s+r*3);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(.5,Xi(i.truss.color)),a.addColorStop(1,"rgba(0,0,0,0)"),t.globalAlpha=.5,t.fillStyle=a,t.fillRect(0,s-r*3,Hn,r*6),t.globalAlpha=1,t.fillStyle=Xi(i.truss.color),t.fillRect(0,s-r,Hn,r*2)}if(i.lamp){const s=i.lamp.az%360/360*Hn,r=lm(i.lamp.el),a=i.lamp.r/180*Rn;for(const o of[-Hn,0,Hn]){const c=t.createRadialGradient(s+o,r,0,s+o,r,a);c.addColorStop(0,Xi(i.lamp.color)),c.addColorStop(.45,`${Xi(i.lamp.color)}80`),c.addColorStop(1,`${Xi(i.lamp.color)}00`),t.fillStyle=c,t.fillRect(s+o-a,r-a,a*2,a*2)}}if(i.silhouette){const s=i.silhouette,r=s.top*Rn,a=s.bottom*Rn;t.globalAlpha=s.alpha,t.fillStyle=Xi(s.color),t.fillRect(0,(r+a)/2,Hn,Rn-(r+a)/2);const o=Hn/s.teeth;for(let c=0;c<s.teeth;c++){const l=(a-r)*(.35+ro(c*7+11)*.65);t.fillRect(c*o,(r+a)/2-l,o*.94,l)}t.globalAlpha=1}return e}function WP(i,e,t,n,s){const r=n.rig;e.color.setHex(r.hemiSky),e.groundColor.setHex(r.hemiGround),e.intensity=s?r.hemiIbl:r.hemiNoIbl,t.position.set(r.sun[0],r.sun[1],r.sun[2]),t.color.setHex(r.sunColor),t.intensity=r.sunIntensity,i.toneMappingExposure=r.exposure}function I0(i,e,t){const n=new uh(i);n.compileEquirectangularShader();const s=new Map,r=new qe(t);let a="room",o=!1;e.backgroundRotation.copy(cm),e.environmentRotation.copy(cm);let c=0,l=!1;const h=()=>{const p=s.get("room");if(p)return p;const m=new OP,x=n.fromScene(m,.04).texture;return m.traverse(E=>{var S;const v=E;if(v.isMesh){(S=v.geometry)==null||S.dispose();const y=Array.isArray(v.material)?v.material:v.material?[v.material]:[];for(const R of y)R.dispose()}}),s.set("room",x),x},u=(p=!0)=>{e.environment=p?h():null,e.background=r,e.backgroundBlurriness=0,e.backgroundIntensity=1,a="room"},f=p=>{const m=s.get(p.id);if(m)return m;const x=new Nn(VP(p.look));x.mapping=Cr,x.colorSpace=Mt;const E=n.fromEquirectangular(x).texture;return x.dispose(),s.set(p.id,E),E},d=(p,m)=>{const x=f(p);e.environment=m?x:null,e.background=x,e.backgroundBlurriness=p.look.blur,e.backgroundIntensity=p.look.intensity,a=p.id},g=(p,m)=>{const x=__(p.hdri.fallback);return x.look?d(x,m):u(m),x},_=(p,m)=>{e.environment=m,e.background=m,e.backgroundBlurriness=kP,e.backgroundIntensity=zP,a=p};return u(),{get current(){return a},get loading(){return o},async apply(p,m,x=!0){if(l)return;const E=++c,v=Rm(p);if(v.look){o=!1,d(v,x);return}if(!v.hdri){o=!1,u(x);return}if(!x){o=!1,u(!1);return}const S=s.get(p);if(S){o=!1,_(p,S);return}if(Date.now()-(om.get(p)??0)>=HP&&gr.delete(p),(gr.get(p)??0)>=GP){o=!1,g(v,x);return}o=!0;try{let y;try{y=await new BP().loadAsync(v.hdri.url)}catch(b){throw gr.set(p,(gr.get(p)??0)+1),om.set(p,Date.now()),b}if(gr.delete(p),l||E!==c){y.dispose();return}y.mapping=Cr;const R=n.fromEquirectangular(y).texture;y.dispose(),s.set(p,R),_(p,R)}catch(y){if(l||E!==c)return;const R=g(v,x);m==null||m(`Couldn’t load the ${v.name} environment. Using ${R.name} instead.`),console.warn(`BIOBUZZ 3D: HDRI environment failed to load; using ${R.id} instead.`,y)}finally{E===c&&(o=!1)}},refreshBackdrop(p){r.setHex(p),a==="room"&&(e.background=r)},dispose(){l=!0,c++,e.environment=null,e.background=null;for(const p of s.values())p.dispose();s.clear(),n.dispose()}}}const XP=500;function qP(i,e){let t=0,n=0,s=0;return{frame(r,a,o,c){n++,s+=r;const l=performance.now();l-t<XP||(t=l,x_(n>0?s/n:r,a,o,c),n=0,s=0)},setMode(){},dispose(){}}}let ul=null;function xu(){if(ul)return ul;const i=B_();return i.webgl2&&!i.software&&(ul=i),i}function D0(i){i.dispose(),i.forceContextLoss()}class Ho extends Error{constructor(t){super(`BIOBUZZ 3D scene unsupported: ${t}`);Qe(this,"reason");this.name="SceneUnsupportedError",this.reason=t}}const KP=2106924;function hm(){try{const i=getComputedStyle(document.documentElement).getPropertyValue("--ds-bg").trim();if(/^#[0-9a-fA-F]{6}$/.test(i))return parseInt(i.slice(1),16)}catch{}return KP}const YP=1.2,$P=16777215,JP=4936284,N0=1.3,jP=2.1,ZP=1.9,QP=-.0012,e2=.035;function F0(i,e){const t=new XT({canvas:i,antialias:e.antialias,alpha:e.alpha,powerPreference:"high-performance"});return t.outputColorSpace=Mt,t.toneMapping=Fh,t.toneMappingExposure=YP,t.shadowMap.type=Us,e.alpha&&t.setClearAlpha(0),t}function U0(i,e){const t=n=>{n.preventDefault(),e()};return i.addEventListener("webglcontextlost",t),()=>i.removeEventListener("webglcontextlost",t)}function O0(){const i=new LM($P,JP,N0),e=new yg(16777215,ZP);return e.shadow.bias=QP,e.shadow.normalBias=e2,{hemi:i,sun:e}}function um(i){i.traverse(e=>{const t=e;if(!t.geometry)return;t.geometry.dispose();const n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const s of n){const r=s.map;r&&r.dispose(),s.dispose()}})}const t2=2.4,n2=1.35,Ls=256,fm=v_,i2=.5,s2=.02,r2=1.35,a2=.55,o2=2.4,c2=.28,l2=.006,h2=.004,u2=-2.2,dm=32,f2=new N(.55,-.75,1).normalize();let fl=null;function d2(){if(fl)return fl;const i=document.createElement("canvas");i.width=Ls,i.height=Ls;const e=i.getContext("2d");e&&(e.fillStyle=un.mat,e.fillRect(0,0,Ls,Ls),e.strokeStyle=un.tile,e.lineWidth=3,e.beginPath(),e.moveTo(0,1.5),e.lineTo(Ls,1.5),e.moveTo(1.5,0),e.lineTo(1.5,Ls),e.stroke());const t=new Nn(i);return t.colorSpace=Mt,t.wrapS=Sn,t.wrapT=Sn,fl=t,t}const dl=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null,T2=(i,e)=>{const t=e??{},n=xu();if(!n.webgl2)throw new Ho("WebGL2 unavailable");if(n.software)throw new Ho(`software renderer: ${n.renderer}`);const s=document.createElement("canvas");s.style.display="block",s.style.width="100%",s.style.height="100%",i.appendChild(s);const r=F0(s,{antialias:!0,alpha:!0}),a=new Po,o=new kt(dm,1,1,4e3);o.up.set(0,0,1);const{hemi:c,sun:l}=O0();a.add(c,l);const h=new ra(1,64),u=d2().clone();u.needsUpdate=!0;const f=new Et({map:u,roughness:.95}),d=new oe(h,f);d.name="bb-preview:floor",d.receiveShadow=!0,d.position.z=-.02,a.add(d);const g=I0(r,a,0);let _=t.quality??null,p=_?{...So[_]}:Ar().settings,m=_??Ar().tier,x=null,E="",v="red",S=20;const y=new fn,R=new Fn,b=new N(0,0,9);let w=u2,A=i2,C=1,U=t.animate!==!1,I=1,P=1,F=1,G=0,z=0,X=0,O=0,B=!0,k=!1;const q=[];let j=null;function de(){var D;const ie=p;G=Pm(ie.maxFps);const me=ie.shadows!=="off";if(r.shadowMap.enabled=me,l.castShadow=me,me){const Ge=Lm(ie.shadows);l.shadow.mapSize.x!==Ge&&(l.shadow.mapSize.set(Ge,Ge),(D=l.shadow.map)==null||D.dispose(),l.shadow.map=null),l.shadow.radius=Im(ie.shadows)}r.shadowMap.needsUpdate=!0,c.intensity=ie.envLighting?N0:jP,ie.envLighting?g.apply(ie.environment):(g.apply("room"),a.environment=null),xe(),Ne()}function xe(){const ie=Math.min(p.anisotropy,r.capabilities.getMaxAnisotropy()),me=p.reflections?1:0;a.traverse(D=>{const Ge=D;if(!Ge.isMesh)return;const Je=Array.isArray(Ge.material)?Ge.material:[Ge.material];for(const L of Je){const M=L;M.map&&M.map.anisotropy!==ie&&(M.map.anisotropy=ie,M.map.needsUpdate=!0),typeof M.metalness=="number"&&M.metalness>=.3&&(M.envMapIntensity=me)}})}function Ne(){const ie=Dm(p,m,I,P,F);r.setPixelRatio(ie),r.setSize(I,P,!1),o.aspect=Math.max(.001,I/P),o.updateProjectionMatrix()}function J(ie){const D=Math.hypot(ie.length,ie.width)/2*t2;d.scale.set(D,D,1),u.repeat.set(D*2/fm,D*2/fm),l.position.copy(f2).multiplyScalar(D*3);const Ge=l.shadow.camera;Ge.left=-D,Ge.right=D,Ge.top=D,Ge.bottom=-D,Ge.near=1,Ge.far=D*7,Ge.updateProjectionMatrix()}function Z(ie){y.setFromObject(ie),!y.isEmpty()&&(y.getBoundingSphere(R),S=Math.max(1,R.radius)*n2,b.copy(R.center))}function fe(){const ie=Math.tan(dm/2*Math.PI/180),me=ie*o.aspect;return S/Math.max(.05,Math.min(ie,me))*C}function Ce(ie){const me=ie.length/2,D=ie.width/2,Ge=M_(ie),Je=[[me,D],[me,-D],[-me,-D],[-me,D]],L=[];Je.forEach(([$,ee],ge)=>{L.push($,ee,0,$,ee,Ge);const[_e,ne]=Je[(ge+1)%4];L.push($,ee,Ge,_e,ne,Ge)});const M=new Ct;M.setAttribute("position",new dt(L,3));const W=new rg(M,new _g({color:"#98a3b2",dashSize:.9,gapSize:.7,transparent:!0,opacity:.5}));return W.name="bb-height-envelope",W.computeLineDistances(),W}let be=null,Pe=!1,Ke=null;function te(){return Ke??(Ke=r.compileAsync(a,o).catch(()=>{}).then(()=>{Pe=!0})),Ke}let ae=go(p,m);function ce(ie){x&&(a.remove(x),kr(x)),be=ie,ae=go(p,m),x=E0(ie,1,v,ae),x.add(Ce(ie)),a.add(x),Z(x),xe(),te()}function he(ie){U&&!((dl==null?void 0:dl.matches)??!1)&&(w+=c2*ie);const me=fe(),D=Math.cos(A),Ge=Math.sin(A);o.position.set(b.x+Math.cos(w)*D*me,b.y+Math.sin(w)*D*me,b.z+Ge*me),o.lookAt(b),o.near=Math.max(1,me*.05),o.far=me*6,o.updateProjectionMatrix()}function pe(ie){a.background!==null&&(a.background=null),he(ie),r.render(a,o)}function Le(){O=requestAnimationFrame(Le);const ie=performance.now();if(!Pe||!B||G>0&&ie-z<G)return;const me=X===0?0:Math.min(.25,(ie-X)/1e3);X=ie,z=ie,pe(me)}if(t.interactive!==!1){let ie=!1,me=0,D=0;const Ge=W=>{W.button===0&&(ie=!0,me=W.clientX,D=W.clientY,U=!1)},Je=W=>{ie&&(w-=(W.clientX-me)*l2,A=Math.max(s2,Math.min(r2,A+(W.clientY-D)*h2)),me=W.clientX,D=W.clientY)},L=()=>{ie=!1},M=W=>{W.preventDefault(),C=Math.max(a2,Math.min(o2,C*Math.exp(W.deltaY*.0012)))};i.addEventListener("pointerdown",Ge),window.addEventListener("pointermove",Je),window.addEventListener("pointerup",L),window.addEventListener("pointercancel",L),i.addEventListener("wheel",M,{passive:!1}),q.push(()=>{i.removeEventListener("pointerdown",Ge),window.removeEventListener("pointermove",Je),window.removeEventListener("pointerup",L),window.removeEventListener("pointercancel",L),i.removeEventListener("wheel",M)})}if(_||q.push(Cm(ie=>{p=ie.settings,m=ie.tier,de()})),de(),t.animate!==!1){if(typeof IntersectionObserver=="function"){const ie=new IntersectionObserver(me=>{B=me.some(D=>D.isIntersecting),B||(X=0)});ie.observe(i),q.push(()=>ie.disconnect())}O=requestAnimationFrame(Le)}const Fe={element:s,setSpec(ie,me){if(k)return;const D=`${gm(ie)}|${me}`;J(ie),D!==E&&(E=D,v=me,ce(ie))},setQuality(ie){if(k)return;if(_=ie,ie)p={...So[ie]},m=ie;else{const D=Ar();p=D.settings,m=D.tier}de();const me=go(p,m);be&&me!==ae&&ce(be)},resize(ie,me,D){k||(I=Math.max(1,ie),P=Math.max(1,me),F=Math.min(D,2),Ne())},capture(ie){if(k)return"";const me=I,D=P,Ge=F;I=Math.max(1,Math.round(ie)),P=I,F=1,Ne(),pe(0),j??(j=document.createElement("canvas")),j.width=I,j.height=P;const Je=j.getContext("2d");let L="";return Je&&(Je.clearRect(0,0,I,P),Je.drawImage(s,0,0,I,P),L=j.toDataURL("image/png")),I=me,P=D,F=Ge,Ne(),L},ready(){return te()},dispose(){var ie;if(!k){k=!0,O&&cancelAnimationFrame(O),O=0;for(const me of q)me();q.length=0,g.dispose(),x&&(a.remove(x),kr(x)),x=null,h.dispose(),u.dispose(),f.dispose(),j=null,D0(r),(ie=s.parentElement)==null||ie.removeChild(s)}}};return q.push(U0(s,()=>{var ie;Fe.dispose(),(ie=t.onContextLost)==null||ie.call(t)})),Fe};function p2(i){i.floor.receiveShadow=!0,i.walls.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)});for(const e of["red","blue"])i.hives[e].traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)});for(const e of i.flowers)e.traverse(t=>{t.isMesh&&(t.castShadow=!0)})}const m2=.26,pm=12,g2=120,b2=260,_2=4;class x2{constructor(e,t,n,s){Qe(this,"canvas");Qe(this,"renderer");Qe(this,"scene",new Po);Qe(this,"cameras");Qe(this,"field");Qe(this,"elements");Qe(this,"robots");Qe(this,"reticle");Qe(this,"reticleOn",!0);Qe(this,"env");Qe(this,"stats");Qe(this,"governor");Qe(this,"hemi");Qe(this,"sun");Qe(this,"host");Qe(this,"onQualityEvent");Qe(this,"fixedTier");Qe(this,"interactive");Qe(this,"settings");Qe(this,"tier");Qe(this,"target",null);Qe(this,"blitScene",new Po);Qe(this,"blitCamera",new ts(-1,1,1,-1,0,1));Qe(this,"blitMesh");Qe(this,"pipCamera",new ts(-1,1,1,-1,1,4e3));Qe(this,"frameInterval",0);Qe(this,"lastDraw",0);Qe(this,"robotChildren",-1);Qe(this,"venue",null);Qe(this,"venueKey","");Qe(this,"cssW",1);Qe(this,"cssH",1);Qe(this,"hostDpr",1);Qe(this,"cameraPref",S_());Qe(this,"teardown",[]);Qe(this,"lastW",1);Qe(this,"lastH",1);Qe(this,"projScratch",new N);Qe(this,"lastCamera","driver");Qe(this,"lastViewAngle",0);Qe(this,"dragMode",null);Qe(this,"freeNav",y_());Qe(this,"dragX",0);Qe(this,"dragY",0);this.canvas=e,this.host=n,this.onQualityEvent=s.onQualityEvent,this.fixedTier=s.quality??null,this.interactive=s.interactive!==!1;const r=Ar();this.tier=this.fixedTier??r.tier,this.settings=this.fixedTier?{...So[this.fixedTier]}:r.settings,this.renderer=F0(e,{antialias:!1,alpha:!1}),this.teardown.push(U0(e,()=>{var o;Sl(),(o=this.onQualityEvent)==null||o.call(this,"Lost the graphics context. Showing the 2D view.")}));const a=O0();this.hemi=a.hemi,this.sun=a.sun,this.sun.position.set(60,-80,140);{const o=this.sun.shadow.camera,c=Jt+20;o.left=-c,o.right=c,o.top=c,o.bottom=-c,o.near=1,o.far=260,o.updateProjectionMatrix()}this.scene.add(this.hemi,this.sun),this.field=t,this.scene.add(this.field.group),this.elements=_1(this.settings.elementDetail),this.scene.add(this.elements.group),this.robots=OC(),this.scene.add(this.robots.group),this.reticle=KC(),this.scene.add(this.reticle.group),p2(this.field),this.env=I0(this.renderer,this.scene,hm()),this.blitMesh=new oe(new Mn(2,2),new Kn({depthTest:!1,depthWrite:!1})),this.blitMesh.frustumCulled=!1,this.blitScene.add(this.blitMesh),this.pipCamera.up.set(0,0,1),this.cameras=UP(),this.stats=qP(n,this.settings.perfOverlay),this.governor=z_(()=>performance.now(),this.onQualityEvent),this.applyQuality(),this.bindTheme(),this.bindPrefs(),this.interactive&&(this.bindPointer(),this.bindKeys(),this.teardown.push(E_()),this.teardown.push(w_(()=>this.cameras.freeReset(this.lastViewAngle))))}get element(){return this.canvas}get camera(){return this.lastCamera}applyQuality(){var a;const e=this.settings;this.frameInterval=Pm(e.maxFps);const t=e.shadows!=="off";if(this.renderer.shadowMap.enabled=t,this.sun.castShadow=t,t){const o=Lm(e.shadows);this.sun.shadow.mapSize.x!==o&&(this.sun.shadow.mapSize.set(o,o),(a=this.sun.shadow.map)==null||a.dispose(),this.sun.shadow.map=null),this.sun.shadow.radius=Im(e.shadows)}this.renderer.shadowMap.needsUpdate=!0,x1(this.elements,e.elementShadows),r0(this.elements,e.elementDetail),this.robots.wheelDetail=go(e,this.tier),this.elements.rollingSpin=e.effects!=="minimal",this.robots.wheelSpin=e.effects!=="minimal",this.reticleOn=e.effects!=="minimal";const n=Rm(e.environment);WP(this.renderer,this.hemi,this.sun,n,e.envLighting),this.env.apply(e.environment,this.onQualityEvent,e.envLighting);const s=$C(e,this.tier),r=`${n.id}:${s}`;r!==this.venueKey&&(this.venue&&(this.scene.remove(this.venue),um(this.venue)),this.venue=hP(n.venue,s),tP([this.cameras.driver,this.cameras.chase,this.cameras.orbit,this.cameras.free]),this.scene.add(this.venue),this.venueKey=r),this.tuneMaterials(),bP(e.hfov,e.cameraMotion),this.stats.setMode(e.perfOverlay),this.syncTarget(),this.syncSize()}tuneMaterials(){const e=this.renderer.capabilities.getMaxAnisotropy(),t=Math.min(this.settings.anisotropy,e),n=this.settings.reflections?1:0;this.scene.traverse(s=>{const r=s;if(!r.isMesh)return;const a=Array.isArray(r.material)?r.material:[r.material];for(const o of a){const c=o;c.map&&c.map.anisotropy!==t&&(c.map.anisotropy=t,c.map.needsUpdate=!0),typeof c.metalness=="number"&&c.metalness>=.3&&(c.envMapIntensity=n)}}),this.robotChildren=this.robots.group.children.length}syncTarget(){var s;const e=O_(this.settings.aa);if(e===0){this.target&&(this.target.dispose(),this.target=null,this.blitMesh.material.map=null);return}const t=Math.max(1,Math.round(this.cssW*this.renderer.getPixelRatio())),n=Math.max(1,Math.round(this.cssH*this.renderer.getPixelRatio()));if(this.target&&this.target.samples===e){this.target.setSize(t,n);return}(s=this.target)==null||s.dispose(),this.target=new vn(t,n,{samples:e,type:rn,depthBuffer:!0,stencilBuffer:!1}),this.target.texture.colorSpace=tn,this.blitMesh.material.map=this.target.texture,this.blitMesh.material.needsUpdate=!0}syncSize(){const e=Dm(this.settings,this.tier,this.cssW,this.cssH,this.hostDpr);this.renderer.setPixelRatio(e),this.renderer.setSize(this.cssW,this.cssH,!1),this.target&&this.target.setSize(Math.max(1,Math.round(this.cssW*e)),Math.max(1,Math.round(this.cssH*e)))}bindTheme(){if(typeof MutationObserver!="function"||typeof document>"u")return;const e=new MutationObserver(()=>this.env.refreshBackdrop(hm()));e.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),this.teardown.push(()=>e.disconnect())}bindPrefs(){this.teardown.push(T_(e=>{this.cameraPref=e})),Jp(A_()),this.teardown.push(R_(Jp)),this.cameras.setFreeNav(this.freeNav),this.teardown.push(C_(e=>{this.freeNav=e,this.cameras.setFreeNav(e)})),!this.fixedTier&&this.teardown.push(Cm(e=>{this.settings=e.settings,this.tier=e.tier,this.applyQuality()}))}bindPointer(){const e=this.host,t=l=>{if(!this.dragMode)return;const h=l.clientX-this.dragX,u=l.clientY-this.dragY;this.dragX=l.clientX,this.dragY=l.clientY,this.dragMode==="orbit"?this.cameras.orbitDrag(h,u):this.dragMode==="free-orbit"?this.cameras.freeOrbit(h,u):this.dragMode==="free-pan"?this.cameras.freePan(h,u):this.cameras.freeDolly(-u*_2,this.ndcOf(l))},n=l=>{if(this.dragMode)try{e.releasePointerCapture(l.pointerId)}catch{}this.dragMode=null},s=l=>{if(l.pointerType==="mouse"){if(this.lastCamera==="orbit"&&l.button===0)this.dragMode="orbit";else if(this.lastCamera==="free"){const h=L_(this.freeNav,l.button,{shift:l.shiftKey,ctrl:l.ctrlKey||l.metaKey,alt:l.altKey});if(!h)return;this.dragMode=h==="orbit"?"free-orbit":h==="pan"?"free-pan":"free-zoom"}else return;this.dragX=l.clientX,this.dragY=l.clientY;try{e.setPointerCapture(l.pointerId)}catch{}}},r=l=>{this.lastCamera==="orbit"?(l.preventDefault(),this.cameras.orbitZoom(l.deltaY)):this.lastCamera==="free"&&(l.preventDefault(),this.cameras.freeDolly(l.deltaY,this.ndcOf(l)))},a=l=>{this.lastCamera==="free"&&l.button===1&&l.preventDefault()},o=l=>{this.lastCamera==="free"&&l.preventDefault()},c=()=>{this.lastCamera==="free"&&this.cameras.freeReset(this.lastViewAngle)};e.addEventListener("pointerdown",s),e.addEventListener("mousedown",a),window.addEventListener("pointermove",t),window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n),e.addEventListener("wheel",r,{passive:!1}),e.addEventListener("contextmenu",o),e.addEventListener("dblclick",c),this.teardown.push(()=>{e.removeEventListener("pointerdown",s),e.removeEventListener("mousedown",a),window.removeEventListener("pointermove",t),window.removeEventListener("pointerup",n),window.removeEventListener("pointercancel",n),e.removeEventListener("wheel",r),e.removeEventListener("contextmenu",o),e.removeEventListener("dblclick",c)})}ndcOf(e){const t=this.canvas;if(typeof t.getBoundingClientRect!="function")return;const n=t.getBoundingClientRect();if(!(!(n.width>0)||!(n.height>0)))return{x:(e.clientX-n.left)/n.width*2-1,y:-((e.clientY-n.top)/n.height*2-1)}}bindKeys(){if(typeof window>"u")return;const e=t=>{switch(I_(t)){case"cameraCycle":{const n=fc.indexOf(this.cameraPref);D_(fc[(n+1)%fc.length]);break}case"eyeUp":this.cameras.nudgeEye(1);break;case"eyeDown":this.cameras.nudgeEye(-1);break;default:return}};window.addEventListener("keydown",e),this.teardown.push(()=>window.removeEventListener("keydown",e))}resolvedCamera(e){return P_(this.interactive,e,this.cameraPref)}render(e,t){const n=performance.now();if(this.frameInterval>0&&n-this.lastDraw<this.frameInterval)return;this.lastDraw=n,p1(this.field,e),L1(this.elements,e),BC(this.robots,e),YC(this.reticle,e,t.localRobotId,this.reticleOn),this.robots.group.children.length!==this.robotChildren&&this.tuneMaterials(),this.lastW=Math.max(1,t.width),this.lastH=Math.max(1,t.height),this.lastViewAngle=t.viewAngle,this.lastCamera=this.resolvedCamera(t.camera);const s=this.cameras.update(t,e,this.lastCamera);this.renderer.setRenderTarget(this.target),this.renderer.render(this.scene,s);const r=this.renderer.info.render.calls,a=this.renderer.info.render.triangles;this.target&&(this.renderer.setRenderTarget(null),this.renderer.render(this.blitScene,this.blitCamera)),this.settings.minimap&&this.renderMinimap(t);const o=performance.now()-n;this.governor.sample(o),this.stats.frame(o,this.governor.p95Ms,r,a)}renderMinimap(e){const t=Math.min(this.lastW,this.lastH),n=Math.max(g2,Math.min(b2,t*m2)),s=n,r=n,a=pm,o=pm,c=Math.max(Jt,xi)+Ml;this.pipCamera.left=-c,this.pipCamera.right=c,this.pipCamera.top=c,this.pipCamera.bottom=-c,this.pipCamera.position.set(0,0,300);const l=-e.viewAngle;this.pipCamera.up.set(-Math.sin(l),Math.cos(l),0),this.pipCamera.lookAt(0,0,0),this.pipCamera.updateProjectionMatrix();const h=this.renderer;h.setScissorTest(!0),h.setScissor(a,o,s,r),h.setViewport(a,o,s,r),h.autoClear=!1,h.clear(!0,!0,!1),h.render(this.scene,this.pipCamera),h.setScissorTest(!1),h.autoClear=!0,h.setViewport(0,0,this.cssW,this.cssH)}project(e,t,n,s){const r=this.cameras.active,a=this.projScratch.set(e,t,n);if(a.applyMatrix4(r.matrixWorldInverse),a.z>-.001){s.visible=!1;return}a.applyMatrix4(r.projectionMatrix),s.x=(a.x*.5+.5)*this.lastW,s.y=(-a.y*.5+.5)*this.lastH,s.visible=a.x>=-1&&a.x<=1&&a.y>=-1&&a.y<=1&&a.z<=1}resize(e,t,n){this.cssW=Math.max(1,e),this.cssH=Math.max(1,t),this.hostDpr=Math.min(n,2),this.syncSize()}dispose(){var e,t;for(const n of this.teardown)n();this.teardown.length=0,this.governor.dispose(),this.stats.dispose(),this.reticle.dispose(),this.env.dispose(),(e=this.target)==null||e.dispose(),this.blitMesh.geometry.dispose(),this.blitMesh.material.dispose(),this.scene.remove(this.robots.group),this.robots.dispose(),um(this.scene),D0(this.renderer),(t=this.element.parentElement)==null||t.removeChild(this.element)}}let mm=!1;function v2(i){if(mm)return;mm=!0;const e=xu();of(e,"",i),k_().then(t=>{t&&of(e,t,i)})}const A2=async(i,e)=>{var o,c;const t=e??{};t.quality||v2(t.onQualityEvent);const n=xu();if(!n.webgl2)throw Sl(),(o=t.onQualityEvent)==null||o.call(t,"This browser has no WebGL2. Showing the 2D view."),new Ho("WebGL2 unavailable");if(n.software)throw Sl(),(c=t.onQualityEvent)==null||c.call(t,`No GPU acceleration here (${n.renderer||"software renderer"}). Showing the 2D view.`),new Ho(`software renderer: ${n.renderer}`);const s=document.createElement("canvas");s.style.display="block",s.style.width="100%",s.style.height="100%";const r=t.quality?So[t.quality]:Ar().settings,[a]=await Promise.all([d1(r.meshDetail),r.elementDetail==="cad"?i0().catch(()=>null):null]);return i.appendChild(s),new x2(s,a,i,t)};export{Ho as SceneUnsupportedError,A2 as createBiobuzzScene,T2 as createRobotPreviewScene};
