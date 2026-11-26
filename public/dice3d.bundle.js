(()=>{var jc=0,bo=1,qc=2;var tn=1,Yc=2,Un=3,On=0,Rt=1,ci=2,nn=0,Gr=1,To=2,Eo=3,wo=4,$c=5;var Fn=100,Zc=101,Jc=102,Kc=103,Qc=104,eh=200,th=201,ih=202,nh=203,rh=204,sh=205,ah=206,oh=207,lh=208,ch=209,hh=210,uh=211,dh=212,ph=213,mh=214,Ao=0,Ro=1,Co=2,pa=3,Io=4,Po=5,Lo=6,No=7,fh=0,gh=1,_h=2,hi=0,Do=1,Uo=2,Oo=3,Fo=4,Bo=5,zo=6,Hr=7;var Vr=301,Bn=302,ma=303,fa=304,vh=1e3,ga=1001,xh=1002,zi=1003,yh=1004;var kr=1005;var Wt=1006,_a=1007;var Gi=1008;var ti=1009,Sh=1010,Mh=1011,Wr=1012,Go=1013,Hi=1014,wi=1015,ui=1016,Ho=1017,Vo=1018,rn=1020,bh=35902,Th=35899,Eh=1021,wh=1022,Ai=1023,zn=1026,Vi=1027,Ah=1028,ko=1029,sn=1030,Wo=1031;var Xo=1033,va=33776,xa=33777,ya=33778,Sa=33779,jo=35840,qo=35841,Yo=35842,$o=35843,Zo=36196,Jo=37492,Ko=37496,Qo=37488,el=37489,Ma=37490,tl=37491,il=37808,nl=37809,rl=37810,sl=37811,al=37812,ol=37813,ll=37814,cl=37815,hl=37816,ul=37817,dl=37818,pl=37819,ml=37820,fl=37821,gl=36492,_l=36494,vl=36495,xl=36283,yl=36284,ba=36285,Sl=36286;var Ml=0,Rh=1,an="",Gn="srgb",Ta="srgb-linear",bl="linear",Qe="srgb";var Ch=512,Ih=513,Ph=514,Tl=515,Lh=516,Nh=517,El=518,wl=519;var Al="300 es",Rl=2e3;function wu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Au(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dh(){let n=lr("canvas");return n.style.display="block",n}var pc={},En=null;function Cl(...n){let e="THREE."+n.shift();En?En("log",e,...n):console.log(e,...n)}function Uh(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Re(...n){let e="THREE."+(n=Uh(n)).shift();if(En)En("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Pe(...n){let e="THREE."+(n=Uh(n)).shift();if(En)En("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zi(...n){let e=n.join(" ");e in pc||(pc[e]=!0,Re(...n))}function Oh(n,e,t){return new Promise(function(i,r){setTimeout(function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var Fh={[Ao]:0,[Co]:6,[Io]:4,[pa]:5,[Ro]:1,[Lo]:2,[No]:7,[Po]:3},si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mc=1234567,bn=Math.PI/180,wn=180/Math.PI;function on(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Et[255&n]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[255&e]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[63&t|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[255&i]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function Il(n,e){return(n%e+e)%e}function Ru(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Cu(n,e,t){return n!==e?(t-n)/(e-n):0}function sr(n,e,t){return(1-t)*n+t*e}function Iu(n,e,t,i){return sr(n,e,1-Math.exp(-t*i))}function Pu(n,e=1){return e-Math.abs(Il(n,2*e)-e)}function Lu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)}function Nu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)}function Du(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Uu(n,e){return n+Math.random()*(e-n)}function Ou(n){return n*(.5-Math.random())}function Fu(n){n!==void 0&&(mc=n);let e=mc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}function Bu(n){return n*bn}function zu(n){return n*wn}function Gu(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Hu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Vu(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),m=a((e-i)/2),d=s((i-e)/2),p=a((i-e)/2);switch(r){case"XYX":n.set(o*h,c*u,c*m,o*l);break;case"YZY":n.set(c*m,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*m,o*h,o*l);break;case"XZX":n.set(o*h,c*p,c*d,o*l);break;case"YXY":n.set(c*d,o*h,c*p,o*l);break;case"ZYZ":n.set(c*p,c*d,o*h,o*l);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ll(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bh(n,e){if(e.constructor===Float32Array)return n;let t=Ll(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function zh(n,e){if(e.constructor===Float32Array)return n;let t=Ll(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Hn={DEG2RAD:bn,RAD2DEG:wn,generateUUID:on,clamp:Ge,euclideanModulo:Il,mapLinear:Ru,inverseLerp:Cu,lerp:sr,damp:Iu,pingpong:Pu,smoothstep:Lu,smootherstep:Nu,randInt:Du,randFloat:Uu,randFloatSpread:Ou,seededRandom:Fu,degToRad:Bu,radToDeg:zu,isPowerOfTwo:Gu,ceilPowerOfTwo:Hu,floorPowerOfTwo:Pl,setQuaternionFromProperEuler:Vu,normalize:zh,denormalize:Bh},Fl=class Fl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fl.prototype.isVector2=!0;var ne=Fl,St=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],m=s[a+0],d=s[a+1],p=s[a+2],_=s[a+3];if(u!==_||c!==m||l!==d||h!==p){let g=c*m+l*d+h*p+u*_;g<0&&(m=-m,d=-d,p=-p,_=-_,g=-g);let f=1-o;if(g<.9995){let y=Math.acos(g),S=Math.sin(y);f=Math.sin(f*y)/S,c=c*f+m*(o=Math.sin(o*y)/S),l=l*f+d*o,h=h*f+p*o,u=u*f+_*o}else{c=c*f+m*o,l=l*f+d*o,h=h*f+p*o,u=u*f+_*o;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],m=s[a+1],d=s[a+2],p=s[a+3];return e[t]=o*p+h*u+c*d-l*m,e[t+1]=c*p+h*m+l*u-o*d,e[t+2]=l*p+h*d+o*m-c*u,e[t+3]=h*p-o*u-c*m-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),m=c(i/2),d=c(r/2),p=c(s/2);switch(a){case"XYZ":this._x=m*h*u+l*d*p,this._y=l*d*u-m*h*p,this._z=l*h*p+m*d*u,this._w=l*h*u-m*d*p;break;case"YXZ":this._x=m*h*u+l*d*p,this._y=l*d*u-m*h*p,this._z=l*h*p-m*d*u,this._w=l*h*u+m*d*p;break;case"ZXY":this._x=m*h*u-l*d*p,this._y=l*d*u+m*h*p,this._z=l*h*p+m*d*u,this._w=l*h*u-m*d*p;break;case"ZYX":this._x=m*h*u-l*d*p,this._y=l*d*u+m*h*p,this._z=l*h*p-m*d*u,this._w=l*h*u+m*d*p;break;case"YZX":this._x=m*h*u+l*d*p,this._y=l*d*u+m*h*p,this._z=l*h*p-m*d*u,this._w=l*h*u-m*d*p;break;case"XZY":this._x=m*h*u-l*d*p,this._y=l*d*u-m*h*p,this._z=l*h*p+m*d*u,this._w=l*h*u+m*d*p;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],m=i+o+u;if(m>0){let d=.5/Math.sqrt(m+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Bl=class Bl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bl.prototype.isVector3=!0;var w=Bl,Wa=new w,fc=new St,zl=class zl{constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],m=i[2],d=i[5],p=i[8],_=r[0],g=r[3],f=r[6],y=r[1],S=r[4],A=r[7],E=r[2],b=r[5],I=r[8];return s[0]=a*_+o*y+c*E,s[3]=a*g+o*S+c*b,s[6]=a*f+o*A+c*I,s[1]=l*_+h*y+u*E,s[4]=l*g+h*S+u*b,s[7]=l*f+h*A+u*I,s[2]=m*_+d*y+p*E,s[5]=m*g+d*S+p*b,s[8]=m*f+d*A+p*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,m=o*c-h*s,d=l*s-a*c,p=t*u+i*m+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=u*_,e[1]=(r*l-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=m*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return Zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return Zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zl.prototype.isMatrix3=!0;var De=zl,Xa=new De,gc=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ku(){let n={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer==="srgb"&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=Tn(r.r),r.g=Tn(r.g),r.b=Tn(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?"linear":this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ta]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:gc,fromXYZ:_c,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},[Gn]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:gc,fromXYZ:_c,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),n}var je=ku();function bi(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function Tn(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var un,Es=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{un===void 0&&(un=lr("canvas")),un.width=e.width,un.height=e.height;let r=un.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=un}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=lr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*bi(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*bi(t[i]/255)):t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wu=0,An=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ja(r[a].image)):s.push(ja(r[a]))}else s=ja(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Es.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var Xu=0,qa=new w,It=class n extends si{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=on(),this.name="",this.source=new An(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(qa).x}get height(){return this.source.getSize(qa).y}get depth(){return this.source.getSize(qa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i:Re(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null,It.DEFAULT_MAPPING=300,It.DEFAULT_ANISOTROPY=1;var Gl=class Gl{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],m=c[1],d=c[5],p=c[9],_=c[2],g=c[6],f=c[10];if(Math.abs(h-m)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+m)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,A=(d+1)/2,E=(f+1)/2,b=(h+m)/4,I=(u+_)/4,L=(p+g)/4;return S>A&&S>E?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=b/i,s=I/i):A>E?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=b/r,s=L/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=I/s,r=L/s),this.set(i,r,s,t),this}let y=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(m-h)*(m-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-_)/y,this.z=(m-h)/y,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gl.prototype.isVector4=!0;var Je=Gl,ws=class extends si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new It({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new An(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends ws{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},cr=class extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var As=class extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var da=class da{constructor(e,t,i,r,s,a,o,c,l,h,u,m,d,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,u,m,d,p,_,g)}set(e,t,i,r,s,a,o,c,l,h,u,m,d,p,_,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=m,f[3]=d,f[7]=p,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new da().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/dn.setFromMatrixColumn(e,0).length(),s=1/dn.setFromMatrixColumn(e,1).length(),a=1/dn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let m=a*h,d=a*u,p=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=m-_*l,t[9]=-o*c,t[2]=_-m*l,t[6]=p+d*l,t[10]=a*c}else if(e.order==="YXZ"){let m=c*h,d=c*u,p=l*h,_=l*u;t[0]=m+_*o,t[4]=p*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=_+m*o,t[10]=a*c}else if(e.order==="ZXY"){let m=c*h,d=c*u,p=l*h,_=l*u;t[0]=m-_*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=_-m*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let m=a*h,d=a*u,p=o*h,_=o*u;t[0]=c*h,t[4]=p*l-d,t[8]=m*l+_,t[1]=c*u,t[5]=_*l+m,t[9]=d*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let m=a*c,d=a*l,p=o*c,_=o*l;t[0]=c*h,t[4]=_-m*u,t[8]=p*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+p,t[10]=m-_*u}else if(e.order==="XZY"){let m=a*c,d=a*l,p=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=m*u+_,t[5]=a*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*h,t[10]=_*u+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ju,e,qu)}lookAt(e,t,i){let r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Ci.crossVectors(i,Nt),Ci.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Ci.crossVectors(i,Nt)),Ci.normalize(),Qr.crossVectors(Nt,Ci),r[0]=Ci.x,r[4]=Qr.x,r[8]=Nt.x,r[1]=Ci.y,r[5]=Qr.y,r[9]=Nt.y,r[2]=Ci.z,r[6]=Qr.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],m=i[9],d=i[13],p=i[2],_=i[6],g=i[10],f=i[14],y=i[3],S=i[7],A=i[11],E=i[15],b=r[0],I=r[4],L=r[8],D=r[12],P=r[1],q=r[5],U=r[9],V=r[13],Z=r[2],te=r[6],Y=r[10],F=r[14],X=r[3],re=r[7],me=r[11],Se=r[15];return s[0]=a*b+o*P+c*Z+l*X,s[4]=a*I+o*q+c*te+l*re,s[8]=a*L+o*U+c*Y+l*me,s[12]=a*D+o*V+c*F+l*Se,s[1]=h*b+u*P+m*Z+d*X,s[5]=h*I+u*q+m*te+d*re,s[9]=h*L+u*U+m*Y+d*me,s[13]=h*D+u*V+m*F+d*Se,s[2]=p*b+_*P+g*Z+f*X,s[6]=p*I+_*q+g*te+f*re,s[10]=p*L+_*U+g*Y+f*me,s[14]=p*D+_*V+g*F+f*Se,s[3]=y*b+S*P+A*Z+E*X,s[7]=y*I+S*q+A*te+E*re,s[11]=y*L+S*U+A*Y+E*me,s[15]=y*D+S*V+A*F+E*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],m=e[10],d=e[14],p=e[3],_=e[7],g=e[11],f=e[15],y=c*d-l*m,S=o*d-l*u,A=o*m-c*u,E=a*d-l*h,b=a*m-c*h,I=a*u-o*h;return t*(_*y-g*S+f*A)-i*(p*y-g*E+f*b)+r*(p*S-_*E+f*I)-s*(p*A-_*b+g*I)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(s*h-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],m=e[10],d=e[11],p=e[12],_=e[13],g=e[14],f=e[15],y=t*o-i*a,S=t*c-r*a,A=t*l-s*a,E=i*c-r*o,b=i*l-s*o,I=r*l-s*c,L=h*_-u*p,D=h*g-m*p,P=h*f-d*p,q=u*g-m*_,U=u*f-d*_,V=m*f-d*g,Z=y*V-S*U+A*q+E*P-b*D+I*L;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let te=1/Z;return e[0]=(o*V-c*U+l*q)*te,e[1]=(r*U-i*V-s*q)*te,e[2]=(_*I-g*b+f*E)*te,e[3]=(m*b-u*I-d*E)*te,e[4]=(c*P-a*V-l*D)*te,e[5]=(t*V-r*P+s*D)*te,e[6]=(g*A-p*I-f*S)*te,e[7]=(h*I-m*A+d*S)*te,e[8]=(a*U-o*P+l*L)*te,e[9]=(i*P-t*U-s*L)*te,e[10]=(p*b-_*A+f*y)*te,e[11]=(u*A-h*b-d*y)*te,e[12]=(o*D-a*q-c*L)*te,e[13]=(t*q-i*D+r*L)*te,e[14]=(_*S-p*E-g*y)*te,e[15]=(h*E-u*S+m*y)*te,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,m=s*l,d=s*h,p=s*u,_=a*h,g=a*u,f=o*u,y=c*l,S=c*h,A=c*u,E=i.x,b=i.y,I=i.z;return r[0]=(1-(_+f))*E,r[1]=(d+A)*E,r[2]=(p-S)*E,r[3]=0,r[4]=(d-A)*b,r[5]=(1-(m+f))*b,r[6]=(g+y)*b,r[7]=0,r[8]=(p+S)*I,r[9]=(g-y)*I,r[10]=(1-(m+_))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=dn.set(r[0],r[1],r[2]).length(),o=dn.set(r[4],r[5],r[6]).length(),c=dn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),$t.copy(this);let l=1/a,h=1/o,u=1/c;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=h,$t.elements[5]*=h,$t.elements[6]*=h,$t.elements[8]*=u,$t.elements[9]*=u,$t.elements[10]*=u,t.setFromRotationMatrix($t),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(i-r),m=(t+e)/(t-e),d=(i+r)/(i-r),p,_;if(c)p=s/(a-s),_=a*s/(a-s);else if(o===2e3)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else{if(o!==2001)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),_=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-r),m=-(t+e)/(t-e),d=-(i+r)/(i-r),p,_;if(c)p=1/(a-s),_=a/(a-s);else if(o===2e3)p=-2/(a-s),_=-(a+s)/(a-s);else{if(o!==2001)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);p=-1/(a-s),_=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};da.prototype.isMatrix4=!0;var Fe=da,dn=new w,$t=new Fe,ju=new w(0,0,0),qu=new w(1,1,1),Ci=new w,Qr=new w,Nt=new w,vc=new Fe,xc=new St,ai=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],m=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xc.setFromEuler(this),this.setFromQuaternion(xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Yu=0,yc=new w,pn=new St,_i=new Fe,es=new w,Kn=new w,$u=new w,Zu=new St,Sc=new w(1,0,0),Mc=new w(0,1,0),bc=new w(0,0,1),Tc={type:"added"},Ju={type:"removed"},mn={type:"childadded",child:null},Ya={type:"childremoved",child:null},yt=class n extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new w,t=new ai,i=new St,r=new w(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new De}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.multiply(pn),this}rotateOnWorldAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.premultiply(pn),this}rotateX(e){return this.rotateOnAxis(Sc,e)}rotateY(e){return this.rotateOnAxis(Mc,e)}rotateZ(e){return this.rotateOnAxis(bc,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sc,e)}translateY(e){return this.translateOnAxis(Mc,e)}translateZ(e){return this.translateOnAxis(bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?es.copy(e):es.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Kn,es,this.up):_i.lookAt(es,Kn,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),pn.setFromRotationMatrix(_i),this.quaternion.premultiply(pn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tc),mn.child=e,this.dispatchEvent(mn),mn.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ju),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tc),mn.child=e,this.dispatchEvent(mn),mn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,e,$u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,Zu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),m=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),m.length>0&&(i.skeletons=m),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=r,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yt.DEFAULT_UP=new w(0,1,0),yt.DEFAULT_MATRIX_AUTO_UPDATE=!0,yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $i=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ku={type:"move"},Rn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,i),f=this._getHandJoint(l,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],m=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&m>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ku)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new $i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},ts={h:0,s:0,l:0};function $a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=Il(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=$a(a,s,e+1/3),this.g=$a(a,s,e),this.b=$a(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t="srgb"){function i(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let i=Gh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return je.workingToColorSpace(wt.copy(this),e),65536*Math.round(Ge(255*wt.r,0,255))+256*Math.round(Ge(255*wt.g,0,255))+Math.round(Ge(255*wt.b,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(wt.copy(this),t);let i=wt.r,r=wt.g,s=wt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e="srgb"){je.workingToColorSpace(wt.copy(this),e);let t=wt.r,i=wt.g,r=wt.b;return e!=="srgb"?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(ts);let i=sr(Ii.h,ts.h,t),r=sr(Ii.s,ts.s,t),s=sr(Ii.l,ts.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wt=new Ne;Ne.NAMES=Gh;var Ji=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zt=new w,vi=new w,Za=new w,xi=new w,fn=new w,gn=new w,Ec=new w,Ja=new w,Ka=new w,Qa=new w,eo=new Je,to=new Je,io=new Je,Mi=class n{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zt.subVectors(e,t),r.cross(Zt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zt.subVectors(r,t),vi.subVectors(i,t),Za.subVectors(e,t);let a=Zt.dot(Zt),o=Zt.dot(vi),c=Zt.dot(Za),l=vi.dot(vi),h=vi.dot(Za),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let m=1/u,d=(l*c-o*h)*m,p=(a*h-o*c)*m;return s.set(1-d-p,p,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xi)!==null&&xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,xi.x),c.addScaledVector(a,xi.y),c.addScaledVector(o,xi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return eo.setScalar(0),to.setScalar(0),io.setScalar(0),eo.fromBufferAttribute(e,t),to.fromBufferAttribute(e,i),io.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(eo,s.x),a.addScaledVector(to,s.y),a.addScaledVector(io,s.z),a}static isFrontFacing(e,t,i,r){return Zt.subVectors(i,t),vi.subVectors(e,t),Zt.cross(vi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),.5*Zt.cross(vi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;fn.subVectors(r,i),gn.subVectors(s,i),Ja.subVectors(e,i);let c=fn.dot(Ja),l=gn.dot(Ja);if(c<=0&&l<=0)return t.copy(i);Ka.subVectors(e,r);let h=fn.dot(Ka),u=gn.dot(Ka);if(h>=0&&u<=h)return t.copy(r);let m=c*u-h*l;if(m<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(i).addScaledVector(fn,a);Qa.subVectors(e,s);let d=fn.dot(Qa),p=gn.dot(Qa);if(p>=0&&d<=p)return t.copy(s);let _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(i).addScaledVector(gn,o);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Ec.subVectors(s,r),o=(u-h)/(u-h+(d-p)),t.copy(r).addScaledVector(Ec,o);let f=1/(g+_+m);return a=_*f,o=m*f,t.copy(i).addScaledVector(fn,a).addScaledVector(gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vt=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(s,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),is.copy(i.boundingBox)),is.applyMatrix4(e.matrixWorld),this.union(is)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qn),ns.subVectors(this.max,Qn),_n.subVectors(e.a,Qn),vn.subVectors(e.b,Qn),xn.subVectors(e.c,Qn),Pi.subVectors(vn,_n),Li.subVectors(xn,vn),Xi.subVectors(_n,xn);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-Xi.z,Xi.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,Xi.z,0,-Xi.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-Xi.y,Xi.x,0];return!!no(t,_n,vn,xn,ns)&&(t=[1,0,0,0,1,0,0,0,1],!!no(t,_n,vn,xn,ns)&&(rs.crossVectors(Pi,Li),t=[rs.x,rs.y,rs.z],no(t,_n,vn,xn,ns)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Jt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yi=[new w,new w,new w,new w,new w,new w,new w,new w],Jt=new w,is=new Vt,_n=new w,vn=new w,xn=new w,Pi=new w,Li=new w,Xi=new w,Qn=new w,ns=new w,rs=new w,ji=new w;function no(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ji.fromArray(n,s);let o=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),c=e.dot(ji),l=t.dot(ji),h=i.dot(ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var U0=Qu();function Qu(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[256|c]=32768,r[c]=24,r[256|c]=24):l<-14?(i[c]=1024>>-l-14,i[256|c]=1024>>-l-14|32768,r[c]=-l-1,r[256|c]=-l-1):l<=15?(i[c]=l+15<<10,i[256|c]=l+15<<10|32768,r[c]=13,r[256|c]=13):l<128?(i[c]=31744,i[256|c]=64512,r[c]=24,r[256|c]=24):(i[c]=31744,i[256|c]=64512,r[c]=13,r[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var mt=new w,ss=new ne,ed=0,Qt=class extends si{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=e!==void 0?Ll(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):zh(e,this.array)}};var ur=class extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var dr=class extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ie=class extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}},td=new Vt,er=new w,ro=new w,kt=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):td.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);let t=er.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(er,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(ro)),this.expandByPoint(er.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},id=0,Ht=new Fe,so=new yt,yn=new w,Dt=new Vt,tr=new Vt,xt=new w,dt=class n extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wu(e)?dr:ur)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yn).negate(),this.translate(yn.x,yn.y,yn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new w,1/0);if(e){let i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Dt.min,tr.min),Dt.expandByPoint(xt),xt.addVectors(Dt.max,tr.max),Dt.expandByPoint(xt)):(Dt.expandByPoint(tr.min),Dt.expandByPoint(tr.max))}Dt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xt.fromBufferAttribute(o,l),c&&(yn.fromBufferAttribute(e,l),xt.add(yn)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===i.count||(a=new Qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new w,c[D]=new w;let h=new w,u=new w,m=new w,d=new ne,p=new ne,_=new ne,g=new w,f=new w;function y(D,P,q){l[D]=l[P]=l[q]=1,h.fromBufferAttribute(i,D),u.fromBufferAttribute(i,P),m.fromBufferAttribute(i,q),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,P),_.fromBufferAttribute(s,q),u.sub(h),m.sub(h),p.sub(d),_.sub(d);let U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(m,-p.y).multiplyScalar(U),f.copy(m).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(U),o[D].add(g),o[P].add(g),o[q].add(g),c[D].add(f),c[P].add(f),c[q].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,P=S.length;D<P;++D){let q=S[D],U=q.start;for(let V=U,Z=U+q.count;V<Z;V+=3)y(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let A=new w,E=new w,b=new w,I=new w;function L(D){b.fromBufferAttribute(r,D),I.copy(b);let P=o[D];A.copy(P),A.sub(b.multiplyScalar(b.dot(P))).normalize(),E.crossVectors(I,P);let q=E.dot(c[D])<0?-1:1;a.setXYZW(D,A.x,A.y,A.z,q)}for(let D=0,P=i.count;D<P;++D)l[D]&&L(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Qt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let m=0,d=i.count;m<d;m++)i.setXYZ(m,0,0,0);let r=new w,s=new w,a=new w,o=new w,c=new w,l=new w,h=new w,u=new w;if(e)for(let m=0,d=e.count;m<d;m+=3){let p=e.getX(m+0),_=e.getX(m+1),g=e.getX(m+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),o.add(h),c.add(h),l.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let m=0,d=t.count;m<d;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,m=new l.constructor(c.length*h),d=0,p=0;for(let _=0,g=c.length;_<g;_++){d=o.isInterleavedBufferAttribute?c[_]*o.data.stride+o.offset:c[_]*h;for(let f=0;f<h;f++)m[p++]=l[d++]}return new Qt(m,h,u)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=e(r[o],i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let m=e(l[h],i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,m=l.length;u<m;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let m=0,d=u.length;m<d;m++)h.push(u[m].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var O0=new w;var ao=new w,nd=new w,rd=new De,Kt=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ao.subVectors(i,t).cross(nd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(ao),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||rd.getNormalMatrix(e),r=this.coplanarPoint(ao).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};var sd=0,oi=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=on(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:Re(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Kt().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var F0=new w,B0=new w,z0=new w,G0=new ne,H0=new ne,V0=new Fe,k0=new w,W0=new w,X0=new w,j0=new ne,q0=new ne,Y0=new ne;var $0=new w,Z0=new w;var Si=new w,oo=new w,as=new w,os=new w,Ki=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){oo.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),os.copy(this.origin).sub(oo);let s=.5*e.distanceTo(t),a=-this.direction.dot(as),o=os.dot(this.direction),c=-os.dot(as),l=os.lengthSq(),h=Math.abs(1-a*a),u,m,d,p;if(h>0)if(u=a*c-o,m=a*o-c,p=s*h,u>=0)if(m>=-p)if(m<=p){let _=1/h;u*=_,m*=_,d=u*(u+a*m+2*o)+m*(a*u+m+2*c)+l}else m=s,u=Math.max(0,-(a*m+o)),d=-u*u+m*(m+2*c)+l;else m=-s,u=Math.max(0,-(a*m+o)),d=-u*u+m*(m+2*c)+l;else m<=-p?(u=Math.max(0,-(-a*s+o)),m=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+m*(m+2*c)+l):m<=p?(u=0,m=Math.min(Math.max(-s,-c),s),d=m*(m+2*c)+l):(u=Math.max(0,-(a*s+o)),m=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+m*(m+2*c)+l);else m=a>0?-s:s,u=Math.max(0,-(a*m+o)),d=-u*u+m*(m+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(oo).addScaledVector(as,m),d}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,m=this.origin;return l>=0?(i=(e.min.x-m.x)*l,r=(e.max.x-m.x)*l):(i=(e.max.x-m.x)*l,r=(e.min.x-m.x)*l),h>=0?(s=(e.min.y-m.y)*h,a=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,a=(e.min.y-m.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-m.z)*u,c=(e.max.z-m.z)*u):(o=(e.max.z-m.z)*u,c=(e.min.z-m.z)*u),i>c||o>r?null:((o>i||i!=i)&&(i=o),(c<r||r!=r)&&(r=c),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,m=e.y-a.y,d=e.z-a.z,p=t.x-a.x,_=t.y-a.y,g=t.z-a.z,f=i.x-a.x,y=i.y-a.y,S=i.z-a.z,A=Math.abs(c),E=Math.abs(l),b=Math.abs(h),I,L,D,P,q,U,V,Z,te,Y,F,X;if(A>=E&&A>=b?(D=c,U=u,te=p,X=f,c>=0?(I=l,L=h,P=m,q=d,V=_,Z=g,Y=y,F=S):(I=h,L=l,P=d,q=m,V=g,Z=_,Y=S,F=y)):E>=b?(D=l,U=m,te=_,X=y,l>=0?(I=h,L=c,P=d,q=u,V=g,Z=p,Y=S,F=f):(I=c,L=h,P=u,q=d,V=p,Z=g,Y=f,F=S)):(D=h,U=d,te=g,X=S,h>=0?(I=c,L=l,P=u,q=m,V=p,Z=_,Y=f,F=y):(I=l,L=c,P=m,q=u,V=_,Z=p,Y=y,F=f)),D===0)return null;let re=I/D,me=L/D,Se=P-re*U,K=q-me*U,se=V-re*te,he=Z-me*te,oe=Y-re*X,ve=F-me*X,le=oe*he-ve*se,Me=Se*ve-K*oe,Ee=se*K-he*Se;if(r){if(le<0||Me<0||Ee<0)return null}else if((le<0||Me<0||Ee<0)&&(le>0||Me>0||Ee>0))return null;let Ce=le+Me+Ee;if(Ce===0)return null;let H=1/D*(le*U+Me*te+Ee*X);return(Ce>0?H<0:H>0)?null:this.at(H/Ce,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rs=class extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wc=new Fe,qi=new Ki,ls=new kt,Ac=new w,cs=new w,hs=new w,us=new w,lo=new w,ds=new w,Rc=new w,ps=new w,rt=class extends yt{constructor(e=new dt,t=new Rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ds.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(lo.fromBufferAttribute(u,e),a?ds.addScaledVector(lo,h):ds.addScaledVector(lo.sub(t),h))}t.add(ds)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(s),qi.copy(e.ray).recast(e.near),ls.containsPoint(qi.origin)===!1&&(qi.intersectSphere(ls,Ac)===null||qi.origin.distanceToSquared(Ac)>(e.far-e.near)**2))return;wc.copy(s).invert(),qi.copy(e.ray).applyMatrix4(wc),i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,qi)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,m=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=m.length;p<_;p++){let g=m[p],f=a[g.materialIndex];for(let y=Math.max(g.start,d.start),S=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));y<S;y+=3)r=ms(this,f,e,i,l,h,u,o.getX(y),o.getX(y+1),o.getX(y+2)),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);p<_;p+=3)r=ms(this,a,e,i,l,h,u,o.getX(p),o.getX(p+1),o.getX(p+2)),r&&(r.faceIndex=Math.floor(p/3),t.push(r));else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=m.length;p<_;p++){let g=m[p],f=a[g.materialIndex];for(let y=Math.max(g.start,d.start),S=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));y<S;y+=3)r=ms(this,f,e,i,l,h,u,y,y+1,y+2),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);p<_;p+=3)r=ms(this,a,e,i,l,h,u,p,p+1,p+2),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}};function ad(n,e,t,i,r,s,a,o){let c;if(c=e.side===1?i.intersectTriangle(a,s,r,!0,o):i.intersectTriangle(r,s,a,e.side===0,o),c===null)return null;ps.copy(o),ps.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ps);return l<t.near||l>t.far?null:{distance:l,point:ps.clone(),object:n}}function ms(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,cs),n.getVertexPosition(c,hs),n.getVertexPosition(l,us);let h=ad(n,e,t,i,cs,hs,us,Rc);if(h){let u=new w;Mi.getBarycoord(Rc,cs,hs,us,u),r&&(h.uv=Mi.getInterpolatedAttribute(r,o,c,l,u,new ne)),s&&(h.uv1=Mi.getInterpolatedAttribute(s,o,c,l,u,new ne)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,c,l,u,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let m={a:o,b:c,c:l,normal:new w,materialIndex:0};Mi.getNormal(cs,hs,us,m.normal),h.face=m,h.barycoord=u}return h}var J0=new Je,K0=new Je,Q0=new Je,e_=new Je,t_=new Fe,i_=new w,n_=new kt,r_=new Fe,s_=new Ki;var pr=class extends It{constructor(e=null,t=1,i=1,r,s,a,o,c,l=1003,h=1003,u,m){super(null,a,o,c,l,h,r,s,u,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},a_=new Fe,o_=new Fe;var mr=class extends Qt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Sn=new Fe,Cc=new Fe,fs=[],Ic=new Vt,od=new Fe,ir=new rt,nr=new kt,fr=class extends rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mr(new Float32Array(16*i),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,od)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sn),Ic.copy(e.boundingBox).applyMatrix4(Sn),this.boundingBox.union(Ic)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sn),nr.copy(e.boundingSphere).applyMatrix4(Sn),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(i),e.ray.intersectsSphere(nr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Sn),Cc.multiplyMatrices(i,Sn),ir.matrixWorld=Cc,ir.raycast(e,fs);for(let a=0,o=fs.length;a<o;a++){let c=fs[a];c.instanceId=s,c.object=this,t.push(c)}fs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mr(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,16*e),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new pr(new Float32Array(r*this.count),r,this.count,1028,1015));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Yi=new kt,ld=new ne(.5,.5),gs=new w,Ti=class{constructor(e=new Kt,t=new Kt,i=new Kt,r=new Kt,s=new Kt,a=new Kt){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],m=s[6],d=s[7],p=s[8],_=s[9],g=s[10],f=s[11],y=s[12],S=s[13],A=s[14],E=s[15];if(r[0].setComponents(l-a,d-h,f-p,E-y).normalize(),r[1].setComponents(l+a,d+h,f+p,E+y).normalize(),r[2].setComponents(l+o,d+u,f+_,E+S).normalize(),r[3].setComponents(l-o,d-u,f-_,E-S).normalize(),i)r[4].setComponents(c,m,g,A).normalize(),r[5].setComponents(l-c,d-m,f-g,E-A).normalize();else if(r[4].setComponents(l-c,d-m,f-g,E-A).normalize(),t===2e3)r[5].setComponents(l+c,d+m,f+g,E+A).normalize();else{if(t!==2001)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(c,m,g,A).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);let t=ld.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(gs.x=r.normal.x>0?e.max.x:e.min.x,gs.y=r.normal.y>0?e.max.y:e.min.y,gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Pc=new Fe,gr=class n{constructor(){this.coordinateSystem=2e3,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];Pc.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Ti),i[r].setFromProjectionMatrix(Pc,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Ti),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var fo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}},l_=new Fe,c_=new Ne(1,1,1),h_=new Ti,u_=new gr,d_=new Vt,p_=new kt,m_=new w,f_=new w,g_=new w,__=new w,v_=new fo,x_=new rt;var y_=new w,S_=new w,M_=new Fe,b_=new Ki,T_=new kt,E_=new w,w_=new w;var A_=new w,R_=new w;var C_=new Fe,I_=new Ki,P_=new kt,L_=new w;var _r=class extends It{constructor(e=[],t=301,i,r,s,a,o,c,l,h){super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vr=class extends It{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ei=class extends It{constructor(e,t,i=1014,r,s,a,o=1003,c=1003,l,h=1026,u=1){if(h!==1026&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new An(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},xr=class extends Ei{constructor(e,t=1014,i=301,r,s,a=1003,o=1003,c,l=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},yr=class extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ei=class n extends dt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],m=0,d=0;function p(_,g,f,y,S,A,E,b,I,L,D){let P=A/I,q=E/L,U=A/2,V=E/2,Z=b/2,te=I+1,Y=L+1,F=0,X=0,re=new w;for(let me=0;me<Y;me++){let Se=me*q-V;for(let K=0;K<te;K++){let se=K*P-U;re[_]=se*y,re[g]=Se*S,re[f]=Z,l.push(re.x,re.y,re.z),re[_]=0,re[g]=0,re[f]=b>0?1:-1,h.push(re.x,re.y,re.z),u.push(K/I),u.push(1-me/L),F+=1}}for(let me=0;me<L;me++)for(let Se=0;Se<I;Se++){let K=m+Se+te*me,se=m+Se+te*(me+1),he=m+(Se+1)+te*(me+1),oe=m+(Se+1)+te*me;c.push(K,se,oe),c.push(se,he,oe),X+=6}o.addGroup(d,X,D),d+=X,m+=F}p("z","y","x",-1,-1,i,t,e,a,s,0),p("z","y","x",1,-1,i,t,-e,a,s,1),p("x","z","y",1,1,e,i,t,r,a,2),p("x","z","y",1,-1,e,i,-t,r,a,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Cs=class n extends dt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,m=t,d=2*u+m,p=2*i+s,_=r+1,g=new w,f=new w;for(let y=0;y<=p;y++){let S=0,A=0,E=0,b=0;if(y<=i){let D=y/i,P=D*Math.PI/2;A=-h-e*Math.cos(P),E=e*Math.sin(P),b=-e*Math.cos(P),S=D*u}else if(y<=i+s){let D=(y-i)/s;A=D*t-h,E=e,b=0,S=u+D*m}else{let D=(y-i-s)/i,P=D*Math.PI/2;A=h+e*Math.sin(P),E=e*Math.cos(P),b=e*Math.sin(P),S=u+m+D*u}let I=Math.max(0,Math.min(1,S/d)),L=0;y===0?L=.5/r:y===p&&(L=-.5/r);for(let D=0;D<=r;D++){let P=D/r,q=P*Math.PI*2,U=Math.sin(q),V=Math.cos(q);f.x=-E*V,f.y=A,f.z=E*U,o.push(f.x,f.y,f.z),g.set(-E*V,b,E*U),g.normalize(),c.push(g.x,g.y,g.z),l.push(P+L,I)}if(y>0){let D=(y-1)*_;for(let P=0;P<r;P++){let q=D+P,U=D+P+1,V=y*_+P,Z=y*_+P+1;a.push(q,U,V),a.push(U,Z,V)}}}this.setIndex(a),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Is=class n extends dt{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new w,h=new ne;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,m=3;u<=t;u++,m+=3){let d=i+u/t*r;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[m]/e+1)/2,h.y=(a[m+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(o,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Sr=class n extends dt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],m=[],d=[],p=0,_=[],g=i/2,f=0;function y(S){let A=p,E=new ne,b=new w,I=0,L=S===!0?e:t,D=S===!0?1:-1;for(let q=1;q<=r;q++)u.push(0,g*D,0),m.push(0,D,0),d.push(.5,.5),p++;let P=p;for(let q=0;q<=r;q++){let U=q/r*c+o,V=Math.cos(U),Z=Math.sin(U);b.x=L*Z,b.y=g*D,b.z=L*V,u.push(b.x,b.y,b.z),m.push(0,D,0),E.x=.5*V+.5,E.y=.5*Z*D+.5,d.push(E.x,E.y),p++}for(let q=0;q<r;q++){let U=A+q,V=P+q;S===!0?h.push(V,V+1,U):h.push(V+1,V,U),I+=3}l.addGroup(f,I,S===!0?1:2),f+=I}(function(){let S=new w,A=new w,E=0,b=(t-e)/i;for(let I=0;I<=s;I++){let L=[],D=I/s,P=D*(t-e)+e;for(let q=0;q<=r;q++){let U=q/r,V=U*c+o,Z=Math.sin(V),te=Math.cos(V);A.x=P*Z,A.y=-D*i+g,A.z=P*te,u.push(A.x,A.y,A.z),S.set(Z,b,te).normalize(),m.push(S.x,S.y,S.z),d.push(U,1-D),L.push(p++)}_.push(L)}for(let I=0;I<r;I++)for(let L=0;L<s;L++){let D=_[L][I],P=_[L+1][I],q=_[L+1][I+1],U=_[L][I+1];(e>0||L!==0)&&(h.push(D,P,U),E+=3),(t>0||L!==s-1)&&(h.push(P,q,U),E+=3)}l.addGroup(f,E,0),f+=E})(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(m,3)),this.setAttribute("uv",new Ie(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ps=class n extends Sr{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oi=class n extends dt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(d,p,_,g){let f=g+1,y=[];for(let S=0;S<=f;S++){y[S]=[];let A=d.clone().lerp(_,S/f),E=p.clone().lerp(_,S/f),b=f-S;for(let I=0;I<=b;I++)y[S][I]=I===0&&S===f?A:A.clone().lerp(E,I/b)}for(let S=0;S<f;S++)for(let A=0;A<2*(f-S)-1;A++){let E=Math.floor(A/2);A%2==0?(c(y[S][E+1]),c(y[S+1][E]),c(y[S][E])):(c(y[S][E+1]),c(y[S+1][E+1]),c(y[S+1][E]))}}function c(d){s.push(d.x,d.y,d.z)}function l(d,p){let _=3*d;p.x=e[_+0],p.y=e[_+1],p.z=e[_+2]}function h(d,p,_,g){g<0&&d.x===1&&(a[p]=d.x-1),_.x===0&&_.z===0&&(a[p]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}function m(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}(function(d){let p=new w,_=new w,g=new w;for(let f=0;f<t.length;f+=3)l(t[f+0],p),l(t[f+1],_),l(t[f+2],g),o(p,_,g,d)})(r),(function(d){let p=new w;for(let _=0;_<s.length;_+=3)p.x=s[_+0],p.y=s[_+1],p.z=s[_+2],p.normalize().multiplyScalar(d),s[_+0]=p.x,s[_+1]=p.y,s[_+2]=p.z})(i),(function(){let d=new w;for(let p=0;p<s.length;p+=3){d.x=s[p+0],d.y=s[p+1],d.z=s[p+2];let _=u(d)/2/Math.PI+.5,g=m(d)/Math.PI+.5;a.push(_,1-g)}(function(){let p=new w,_=new w,g=new w,f=new w,y=new ne,S=new ne,A=new ne;for(let E=0,b=0;E<s.length;E+=9,b+=6){p.set(s[E+0],s[E+1],s[E+2]),_.set(s[E+3],s[E+4],s[E+5]),g.set(s[E+6],s[E+7],s[E+8]),y.set(a[b+0],a[b+1]),S.set(a[b+2],a[b+3]),A.set(a[b+4],a[b+5]),f.copy(p).add(_).add(g).divideScalar(3);let I=u(f);h(y,b+0,p,I),h(S,b+2,_,I),h(A,b+4,g,I)}})(),(function(){for(let p=0;p<a.length;p+=6){let _=a[p+0],g=a[p+2],f=a[p+4],y=Math.max(_,g,f),S=Math.min(_,g,f);y>.9&&S<.1&&(_<.2&&(a[p+0]+=1),g<.2&&(a[p+2]+=1),f<.2&&(a[p+4]+=1))}})()})(),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(s.slice(),3)),this.setAttribute("uv",new Ie(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Ls=class n extends Oi{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},_s=new w,vs=new w,co=new w,xs=new Mi,Ns=class extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(bn*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),m=new Map,d=[];for(let p=0;p<c;p+=3){a?(l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);let{a:_,b:g,c:f}=xs;if(_.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),xs.getNormal(co),u[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let y=0;y<3;y++){let S=(y+1)%3,A=u[y],E=u[S],b=xs[h[y]],I=xs[h[S]],L=`${A}_${E}`,D=`${E}_${A}`,P=m.get(D);P?(co.dot(P.normal)<=s&&(d.push(b.x,b.y,b.z),d.push(I.x,I.y,I.z)),m.set(D,null)):m.has(L)||m.set(L,{index0:l[y],index1:l[S],normal:co.clone()})}}for(let p of m.values())if(p){let{index0:_,index1:g}=p;_s.fromBufferAttribute(o,_),vs.fromBufferAttribute(o,g),d.push(_s.x,_s.y,_s.z),d.push(vs.x,vs.y,vs.z)}this.setAttribute("position",new Ie(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ft=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Re("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,c=0,l=s-1;for(;c<=l;)if(r=Math.floor(c+(l-c)/2),o=i[r]-a,o<0)c=r+1;else{if(!(o>0)){l=r;break}l=r-1}if(r=l,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new ne:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new w,r=[],s=[],a=[],o=new w,c=new Fe;for(let d=0;d<=e;d++){let p=d/e;r[d]=this.getTangentAt(p,new w)}s[0]=new w,a[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),m=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),m<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Ge(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,p))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Ge(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(c.makeRotationAxis(r[p],d*p)),a[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Cn=class extends Ft{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ne){let i=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),m=c-this.aX,d=l-this.aY;c=m*h-d*u+this.aX,l=m*u+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ds=class extends Cn{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Nl(){let n=0,e=0,t=0,i=0;function r(s,a,o,c){n=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let m=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;m*=h,d*=h,r(a,o,m,d)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var Lc=new w,Nc=new w,ho=new Nl,uo=new Nl,po=new Nl,Us=class extends Ft{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new w){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=r[(l-1)%s]:(Nc.subVectors(r[0],r[1]).add(r[0]),o=Nc);let u=r[l%s],m=r[(l+1)%s];if(this.closed||l+2<s?c=r[(l+2)%s]:(Lc.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Lc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(o.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(m),d),g=Math.pow(m.distanceToSquared(c),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),ho.initNonuniformCatmullRom(o.x,u.x,m.x,c.x,p,_,g),uo.initNonuniformCatmullRom(o.y,u.y,m.y,c.y,p,_,g),po.initNonuniformCatmullRom(o.z,u.z,m.z,c.z,p,_,g)}else this.curveType==="catmullrom"&&(ho.initCatmullRom(o.x,u.x,m.x,c.x,this.tension),uo.initCatmullRom(o.y,u.y,m.y,c.y,this.tension),po.initCatmullRom(o.z,u.z,m.z,c.z,this.tension));return i.set(ho.calc(h),uo.calc(h),po.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new w().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dc(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function cd(n,e){let t=1-n;return t*t*e}function hd(n,e){return 2*(1-n)*n*e}function ud(n,e){return n*n*e}function ar(n,e,t,i){return cd(n,e)+hd(n,t)+ud(n,i)}function dd(n,e){let t=1-n;return t*t*t*e}function pd(n,e){let t=1-n;return 3*t*t*n*e}function md(n,e){return 3*(1-n)*n*n*e}function fd(n,e){return n*n*n*e}function or(n,e,t,i,r){return dd(n,e)+pd(n,t)+md(n,i)+fd(n,r)}var Mr=class extends Ft{constructor(e=new ne,t=new ne,i=new ne,r=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ne){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(or(e,r.x,s.x,a.x,o.x),or(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Os=class extends Ft{constructor(e=new w,t=new w,i=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new w){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(or(e,r.x,s.x,a.x,o.x),or(e,r.y,s.y,a.y,o.y),or(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},br=class extends Ft{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fs=class extends Ft{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tr=class extends Ft{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ar(e,r.x,s.x,a.x),ar(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Er=class extends Ft{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ar(e,r.x,s.x,a.x),ar(e,r.y,s.y,a.y),ar(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends Ft{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(Dc(o,c.x,l.x,h.x,u.x),Dc(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ne().fromArray(r))}return this}},Bs=Object.freeze({__proto__:null,ArcCurve:Ds,CatmullRomCurve3:Us,CubicBezierCurve:Mr,CubicBezierCurve3:Os,EllipseCurve:Cn,LineCurve:br,LineCurve3:Fs,QuadraticBezierCurve:Tr,QuadraticBezierCurve3:Er,SplineCurve:wr}),zs=class extends Ft{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bs[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Bs[r.type]().fromJSON(r))}return this.cacheLengths=null,this}},Ar=class extends zs{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new br(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Tr(this.currentPoint.clone(),new ne(e,t),new ne(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new Mr(this.currentPoint.clone(),new ne(e,t),new ne(i,r),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new wr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,s,a,o,c),this}absellipse(e,t,i,r,s,a,o,c){let l=new Cn(e,t,i,r,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Rr=class extends Ar{constructor(e){super(e),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ar().fromJSON(r))}return this}};function gd(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Hh(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=Sd(n,e,s,t)),n.length>80*t){o=n[0],c=n[1];let h=o,u=c;for(let m=t;m<r;m+=t){let d=n[m],p=n[m+1];d<o&&(o=d),p<c&&(c=p),d>h&&(h=d),p>u&&(u=p)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Cr(s,a,t,o,c,l,0),a}function Hh(n,e,t,i,r){let s;if(r===Ld(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=Uc(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Uc(a/i|0,n[a],n[a+1],s);return s&&In(s,s.next)&&(Pr(s),s=s.next),s}function Qi(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!In(i,i.next)&&ct(i.prev,i,i.next)!==0)i=i.next;else{if(Pr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Cr(n,e,t,i,r,s,a){if(!n)return;!a&&s&&wd(n,i,r,s);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(s?vd(n,i,r,s):_d(n))e.push(c.i,n.i,l.i),Pr(n),n=l.next,o=l.next;else if((n=l)===o){a?a===1?Cr(n=xd(Qi(n),e),e,t,i,r,s,2):a===2&&yd(n,e,t,i,r,s):Cr(Qi(n),e,t,i,r,s,1);break}}}function _d(n){let e=n.prev,t=n,i=n.next;if(ct(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(r,s,a),u=Math.min(o,c,l),m=Math.max(r,s,a),d=Math.max(o,c,l),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=m&&p.y>=u&&p.y<=d&&rr(r,o,s,c,a,l,p.x,p.y)&&ct(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function vd(n,e,t,i){let r=n.prev,s=n,a=n.next;if(ct(r,s,a)>=0)return!1;let o=r.x,c=s.x,l=a.x,h=r.y,u=s.y,m=a.y,d=Math.min(o,c,l),p=Math.min(h,u,m),_=Math.max(o,c,l),g=Math.max(h,u,m),f=go(d,p,e,t,i),y=go(_,g,e,t,i),S=n.prevZ,A=n.nextZ;for(;S&&S.z>=f&&A&&A.z<=y;){if(S.x>=d&&S.x<=_&&S.y>=p&&S.y<=g&&S!==r&&S!==a&&rr(o,h,c,u,l,m,S.x,S.y)&&ct(S.prev,S,S.next)>=0||(S=S.prevZ,A.x>=d&&A.x<=_&&A.y>=p&&A.y<=g&&A!==r&&A!==a&&rr(o,h,c,u,l,m,A.x,A.y)&&ct(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;S&&S.z>=f;){if(S.x>=d&&S.x<=_&&S.y>=p&&S.y<=g&&S!==r&&S!==a&&rr(o,h,c,u,l,m,S.x,S.y)&&ct(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;A&&A.z<=y;){if(A.x>=d&&A.x<=_&&A.y>=p&&A.y<=g&&A!==r&&A!==a&&rr(o,h,c,u,l,m,A.x,A.y)&&ct(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function xd(n,e){let t=n;do{let i=t.prev,r=t.next.next;!In(i,r)&&kh(i,t,t.next,r)&&Ir(i,r)&&Ir(r,i)&&(e.push(i.i,t.i,r.i),Pr(t),Pr(t.next),t=n=r),t=t.next}while(t!==n);return Qi(t)}function yd(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cd(a,o)){let c=Wh(a,o);return a=Qi(a,a.next),c=Qi(c,c.next),Cr(a,e,t,i,r,s,0),void Cr(c,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function Sd(n,e,t,i){let r=[];for(let s=0,a=e.length;s<a;s++){let o=Hh(n,e[s]*i,s<a-1?e[s+1]*i:n.length,i,!1);o===o.next&&(o.steiner=!0),r.push(Rd(o))}r.sort(Md);for(let s=0;s<r.length;s++)t=bd(r[s],t);return t}function Md(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function bd(n,e){let t=Td(n,e);if(!t)return e;let i=Wh(t,n);return Qi(i,i.next),Qi(t,t.next)}function Td(n,e){let t=e,i=n.x,r=n.y,s,a=-1/0;if(In(n,t))return t;do{if(In(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>a&&(a=u,s=t.x<t.next.x?t:t.next,u===i))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0;t=s;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Vh(r<l?i:a,r,c,l,r<l?a:i,r,t.x,t.y)){let u=Math.abs(r-t.y)/(i-t.x);Ir(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Ed(s,t)))&&(s=t,h=u)}t=t.next}while(t!==o);return s}function Ed(n,e){return ct(n.prev,n,e.prev)<0&&ct(e.next,n,n.next)<0}function wd(n,e,t,i){let r=n;do r.z===0&&(r.z=go(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Ad(r)}function Ad(n){let e,t=1;do{let i,r=n;n=null;let s=null;for(e=0;r;){e++;let a=r,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||r.z<=a.z)?(i=r,r=r.nextZ,o--):(i=a,a=a.nextZ,c--),s?s.nextZ=i:n=i,i.prevZ=s,s=i;r=a}s.nextZ=null,t*=2}while(e>1);return n}function go(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Rd(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Vh(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function rr(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&Vh(n,e,t,i,r,s,a,o)}function Cd(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Id(n,e)&&(Ir(n,e)&&Ir(e,n)&&Pd(n,e)&&(ct(n.prev,n,e.prev)||ct(n,e.prev,e))||In(n,e)&&ct(n.prev,n,n.next)>0&&ct(e.prev,e,e.next)>0)}function ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function In(n,e){return n.x===e.x&&n.y===e.y}function kh(n,e,t,i){let r=Ss(ct(n,e,t)),s=Ss(ct(n,e,i)),a=Ss(ct(t,i,n)),o=Ss(ct(t,i,e));return r!==s&&a!==o||!(r!==0||!ys(n,t,e))||!(s!==0||!ys(n,i,e))||!(a!==0||!ys(t,n,i))||!(o!==0||!ys(t,e,i))}function ys(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ss(n){return n>0?1:n<0?-1:0}function Id(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&kh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ir(n,e){return ct(n.prev,n,n.next)<0?ct(n,e,n.next)>=0&&ct(n,n.prev,e)>=0:ct(n,e,n.prev)<0||ct(n,n.next,e)<0}function Pd(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Wh(n,e){let t=_o(n.i,n.x,n.y),i=_o(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Uc(n,e,t,i){let r=_o(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Pr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _o(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ld(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}var vo=class{static triangulate(e,t,i=2){return gd(e,t,i)}},ri=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Oc(e),Fc(i,e);let a=e.length;t.forEach(Oc);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Fc(i,t[c]);let o=vo.triangulate(i,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Oc(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Fc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Gs=class n extends dt{constructor(e=new Rr([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,m=t.bevelEnabled===void 0||t.bevelEnabled,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Nd,S,A,E,b,I,L=!1;if(f){S=f.getSpacedPoints(h),L=!0,m=!1;let H=!!f.isCatmullRomCurve3&&f.closed;A=f.computeFrenetFrames(h,H),E=new w,b=new w,I=new w}m||(g=0,d=0,p=0,_=0);let D=o.extractPoints(l),P=D.shape,q=D.holes;if(!ri.isClockWise(P)){P=P.reverse();for(let H=0,W=q.length;H<W;H++){let T=q[H];ri.isClockWise(T)&&(q[H]=T.reverse())}}function U(H){let W=10000000000000001e-36,T=H[0];for(let z=1;z<=H.length;z++){let x=z%H.length,v=H[x],R=v.x-T.x,G=v.y-T.y,N=R*R+G*G,k=Math.max(Math.abs(v.x),Math.abs(v.y),Math.abs(T.x),Math.abs(T.y));N<=W*k*k?(H.splice(x,1),z--):T=v}}U(P),q.forEach(U);let V=q.length,Z=P;for(let H=0;H<V;H++){let W=q[H];P=P.concat(W)}function te(H,W,T){return W||Pe("ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(W,T)}let Y=P.length;function F(H,W,T){let z,x,v,R=H.x-W.x,G=H.y-W.y,N=T.x-H.x,k=T.y-H.y,J=R*R+G*G,C=R*k-G*N;if(Math.abs(C)>Number.EPSILON){let Q=Math.sqrt(J),ae=Math.sqrt(N*N+k*k),ce=W.x-G/Q,ie=W.y+R/Q,Oe=((T.x-k/ae-ce)*k-(T.y+N/ae-ie)*N)/(R*k-G*N);z=ce+R*Oe-H.x,x=ie+G*Oe-H.y;let ge=z*z+x*x;if(ge<=2)return new ne(z,x);v=Math.sqrt(ge/2)}else{let Q=!1;R>Number.EPSILON?N>Number.EPSILON&&(Q=!0):R<-Number.EPSILON?N<-Number.EPSILON&&(Q=!0):Math.sign(G)===Math.sign(k)&&(Q=!0),Q?(z=-G,x=R,v=Math.sqrt(J)):(z=R,x=G,v=Math.sqrt(J/2))}return new ne(z/v,x/v)}let X=[];for(let H=0,W=Z.length,T=W-1,z=H+1;H<W;H++,T++,z++)T===W&&(T=0),z===W&&(z=0),X[H]=F(Z[H],Z[T],Z[z]);let re=[],me,Se,K=X.concat();for(let H=0,W=V;H<W;H++){let T=q[H];me=[];for(let z=0,x=T.length,v=x-1,R=z+1;z<x;z++,v++,R++)v===x&&(v=0),R===x&&(R=0),me[z]=F(T[z],T[v],T[R]);re.push(me),K=K.concat(me)}if(g===0)Se=ri.triangulateShape(Z,q);else{let H=[],W=[];for(let T=0;T<g;T++){let z=T/g,x=d*Math.cos(z*Math.PI/2),v=p*Math.sin(z*Math.PI/2)+_;for(let R=0,G=Z.length;R<G;R++){let N=te(Z[R],X[R],v);ve(N.x,N.y,-x),z===0&&H.push(N)}for(let R=0,G=V;R<G;R++){let N=q[R];me=re[R];let k=[];for(let J=0,C=N.length;J<C;J++){let Q=te(N[J],me[J],v);ve(Q.x,Q.y,-x),z===0&&k.push(Q)}z===0&&W.push(k)}}Se=ri.triangulateShape(H,W)}let se=Se.length,he=p+_;for(let H=0;H<Y;H++){let W=m?te(P[H],K[H],he):P[H];L?(b.copy(A.normals[0]).multiplyScalar(W.x),E.copy(A.binormals[0]).multiplyScalar(W.y),I.copy(S[0]).add(b).add(E),ve(I.x,I.y,I.z)):ve(W.x,W.y,0)}for(let H=1;H<=h;H++)for(let W=0;W<Y;W++){let T=m?te(P[W],K[W],he):P[W];L?(b.copy(A.normals[H]).multiplyScalar(T.x),E.copy(A.binormals[H]).multiplyScalar(T.y),I.copy(S[H]).add(b).add(E),ve(I.x,I.y,I.z)):ve(T.x,T.y,u/h*H)}for(let H=g-1;H>=0;H--){let W=H/g,T=d*Math.cos(W*Math.PI/2),z=p*Math.sin(W*Math.PI/2)+_;for(let x=0,v=Z.length;x<v;x++){let R=te(Z[x],X[x],z);ve(R.x,R.y,u+T)}for(let x=0,v=q.length;x<v;x++){let R=q[x];me=re[x];for(let G=0,N=R.length;G<N;G++){let k=te(R[G],me[G],z);L?ve(k.x,k.y+S[h-1].y,S[h-1].x+T):ve(k.x,k.y,u+T)}}}function oe(H,W){let T=H.length;for(;--T>=0;){let z=T,x=T-1;x<0&&(x=H.length-1);for(let v=0,R=h+2*g;v<R;v++){let G=Y*v,N=Y*(v+1);Me(W+z+G,W+x+G,W+x+N,W+z+N)}}}function ve(H,W,T){c.push(H),c.push(W),c.push(T)}function le(H,W,T){Ee(H),Ee(W),Ee(T);let z=r.length/3,x=y.generateTopUV(i,r,z-3,z-2,z-1);Ce(x[0]),Ce(x[1]),Ce(x[2])}function Me(H,W,T,z){Ee(H),Ee(W),Ee(z),Ee(W),Ee(T),Ee(z);let x=r.length/3,v=y.generateSideWallUV(i,r,x-6,x-3,x-2,x-1);Ce(v[0]),Ce(v[1]),Ce(v[3]),Ce(v[1]),Ce(v[2]),Ce(v[3])}function Ee(H){r.push(c[3*H+0]),r.push(c[3*H+1]),r.push(c[3*H+2])}function Ce(H){s.push(H.x),s.push(H.y)}(function(){let H=r.length/3;if(m){let W=0,T=Y*W;for(let z=0;z<se;z++){let x=Se[z];le(x[2]+T,x[1]+T,x[0]+T)}W=h+2*g,T=Y*W;for(let z=0;z<se;z++){let x=Se[z];le(x[0]+T,x[1]+T,x[2]+T)}}else{for(let W=0;W<se;W++){let T=Se[W];le(T[2],T[1],T[0])}for(let W=0;W<se;W++){let T=Se[W];le(T[0]+Y*h,T[1]+Y*h,T[2]+Y*h)}}i.addGroup(H,r.length/3-H,0)})(),(function(){let H=r.length/3,W=0;oe(Z,W),W+=Z.length;for(let T=0,z=q.length;T<z;T++){let x=q[T];oe(x,W),W+=x.length}i.addGroup(H,r.length/3-H,1)})()}this.setAttribute("position",new Ie(r,3)),this.setAttribute("uv",new Ie(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return Dd(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Bs[r.type]().fromJSON(r)),new n(i,e.options)}},Nd={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],c=e[3*i+1],l=e[3*r],h=e[3*r+1];return[new ne(s,a),new ne(o,c),new ne(l,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*i],h=e[3*i+1],u=e[3*i+2],m=e[3*r],d=e[3*r+1],p=e[3*r+2],_=e[3*s],g=e[3*s+1],f=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new ne(a,1-c),new ne(l,1-u),new ne(m,1-p),new ne(_,1-f)]:[new ne(o,1-c),new ne(h,1-u),new ne(d,1-p),new ne(g,1-f)]}};function Dd(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Hs=class n extends Oi{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Vs=class n extends dt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ge(r,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new w,m=new ne,d=new w,p=new w,_=new w,g=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,d.x=1*f,d.y=-g,d.z=0*f,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:_.normalize(),c.push(_.x,_.y,_.z);break;default:g=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,d.x=1*f,d.y=-g,d.z=0*f,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let y=0;y<=t;y++){let S=i+y*h*r,A=Math.sin(S),E=Math.cos(S);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*A,u.y=e[b].y,u.z=e[b].x*E,a.push(u.x,u.y,u.z),m.x=y/t,m.y=b/(e.length-1),o.push(m.x,m.y);let I=c[3*b+0]*A,L=c[3*b+1],D=c[3*b+0]*E;l.push(I,L,D)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let A=S+y*e.length,E=A,b=A+e.length,I=A+e.length+1,L=A+1;s.push(E,b,L),s.push(I,L,b)}this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ks=class n extends Oi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Fi=class n extends dt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=e/o,m=t/c,d=[],p=[],_=[],g=[];for(let f=0;f<h;f++){let y=f*m-a;for(let S=0;S<l;S++){let A=S*u-s;p.push(A,-y,0),_.push(0,0,1),g.push(S/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){let S=y+l*f,A=y+l*(f+1),E=y+1+l*(f+1),b=y+1+l*f;d.push(S,A,b),d.push(A,E,b)}this.setIndex(d),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ws=class n extends dt{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],c=[],l=[],h=[],u=e,m=(t-e)/(r=Math.max(1,r)),d=new w,p=new ne;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){let f=s+g/i*a;d.x=u*Math.cos(f),d.y=u*Math.sin(f),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=m}for(let _=0;_<r;_++){let g=_*(i+1);for(let f=0;f<i;f++){let y=f+g,S=y,A=y+i+1,E=y+i+2,b=y+1;o.push(S,A,b),o.push(A,E,b)}}this.setIndex(o),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Xs=class n extends dt{constructor(e=new Rr([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=r.length/3,m=h.extractPoints(t),d=m.shape,p=m.holes;ri.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,f=p.length;g<f;g++){let y=p[g];ri.isClockWise(y)===!0&&(p[g]=y.reverse())}let _=ri.triangulateShape(d,p);for(let g=0,f=p.length;g<f;g++){let y=p[g];d=d.concat(y)}for(let g=0,f=d.length;g<f;g++){let y=d[g];r.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let g=0,f=_.length;g<f;g++){let y=_[g],S=y[0]+u,A=y[1]+u,E=y[2]+u;i.push(S,A,E),c+=3}}this.setIndex(i),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(s,3)),this.setAttribute("uv",new Ie(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return Ud(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}};function Ud(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var js=class n extends dt{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new w,m=new w,d=[],p=[],_=[],g=[];for(let f=0;f<=i;f++){let y=[],S=f/i,A=a+S*o,E=e*Math.cos(A),b=Math.sqrt(e*e-E*E),I=0;f===0&&a===0?I=.5/t:f===i&&c===Math.PI&&(I=-.5/t);for(let L=0;L<=t;L++){let D=L/t,P=r+D*s;u.x=-b*Math.cos(P),u.y=E,u.z=b*Math.sin(P),p.push(u.x,u.y,u.z),m.copy(u).normalize(),_.push(m.x,m.y,m.z),g.push(D+I,1-S),y.push(l++)}h.push(y)}for(let f=0;f<i;f++)for(let y=0;y<t;y++){let S=h[f][y+1],A=h[f][y],E=h[f+1][y],b=h[f+1][y+1];(f!==0||a>0)&&d.push(S,A,b),(f!==i-1||c<Math.PI)&&d.push(A,E,b)}this.setIndex(d),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},qs=class n extends Oi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ys=class n extends dt{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let c=[],l=[],h=[],u=[],m=new w,d=new w,p=new w;for(let _=0;_<=i;_++){let g=a+_/i*o;for(let f=0;f<=r;f++){let y=f/r*s;d.x=(e+t*Math.cos(g))*Math.cos(y),d.y=(e+t*Math.cos(g))*Math.sin(y),d.z=t*Math.sin(g),l.push(d.x,d.y,d.z),m.x=e*Math.cos(y),m.y=e*Math.sin(y),p.subVectors(d,m).normalize(),h.push(p.x,p.y,p.z),u.push(f/r),u.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=r;g++){let f=(r+1)*_+g-1,y=(r+1)*(_-1)+g-1,S=(r+1)*(_-1)+g,A=(r+1)*_+g;c.push(f,y,A),c.push(y,S,A)}this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},$s=class n extends dt{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],c=[],l=[],h=[],u=new w,m=new w,d=new w,p=new w,_=new w,g=new w,f=new w;for(let S=0;S<=i;++S){let A=S/i*s*Math.PI*2;y(A,s,a,e,d),y(A+.01,s,a,e,p),g.subVectors(p,d),f.addVectors(p,d),_.crossVectors(g,f),f.crossVectors(_,g),_.normalize(),f.normalize();for(let E=0;E<=r;++E){let b=E/r*Math.PI*2,I=-t*Math.cos(b),L=t*Math.sin(b);u.x=d.x+(I*f.x+L*_.x),u.y=d.y+(I*f.y+L*_.y),u.z=d.z+(I*f.z+L*_.z),c.push(u.x,u.y,u.z),m.subVectors(u,d).normalize(),l.push(m.x,m.y,m.z),h.push(S/i),h.push(E/r)}}for(let S=1;S<=i;S++)for(let A=1;A<=r;A++){let E=(r+1)*(S-1)+(A-1),b=(r+1)*S+(A-1),I=(r+1)*S+A,L=(r+1)*(S-1)+A;o.push(E,b,L),o.push(b,I,L)}function y(S,A,E,b,I){let L=Math.cos(S),D=Math.sin(S),P=E/A*S,q=Math.cos(P);I.x=b*(2+q)*.5*L,I.y=b*(2+q)*D*.5,I.z=b*Math.sin(P)*.5}this.setIndex(o),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Zs=class n extends dt{constructor(e=new Er(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,c=new w,l=new ne,h=new w,u=[],m=[],d=[],p=[];function _(g){h=e.getPointAt(g/t,h);let f=a.normals[g],y=a.binormals[g];for(let S=0;S<=r;S++){let A=S/r*Math.PI*2,E=Math.sin(A),b=-Math.cos(A);c.x=b*f.x+E*y.x,c.y=b*f.y+E*y.y,c.z=b*f.z+E*y.z,c.normalize(),m.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let g=0;g<t;g++)_(g);_(s===!1?t:0),(function(){for(let g=0;g<=t;g++)for(let f=0;f<=r;f++)l.x=g/t,l.y=f/r,d.push(l.x,l.y)})(),(function(){for(let g=1;g<=t;g++)for(let f=1;f<=r;f++){let y=(r+1)*(g-1)+(f-1),S=(r+1)*g+(f-1),A=(r+1)*g+f,E=(r+1)*(g-1)+f;p.push(y,S,E),p.push(S,A,E)}})()})(),this.setIndex(p),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(m,3)),this.setAttribute("uv",new Ie(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Bs[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Js=class extends dt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new w,s=new w;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],m=u.start;for(let d=m,p=m+u.count;d<p;d+=3)for(let _=0;_<3;_++){let g=o.getX(d+_),f=o.getX(d+(_+1)%3);r.fromBufferAttribute(a,g),s.fromBufferAttribute(a,f),Bc(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Bc(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ie(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Bc(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var N_=Object.freeze({__proto__:null,BoxGeometry:ei,CapsuleGeometry:Cs,CircleGeometry:Is,ConeGeometry:Ps,CylinderGeometry:Sr,DodecahedronGeometry:Ls,EdgesGeometry:Ns,ExtrudeGeometry:Gs,IcosahedronGeometry:Hs,LatheGeometry:Vs,OctahedronGeometry:ks,PlaneGeometry:Fi,PolyhedronGeometry:Oi,RingGeometry:Ws,ShapeGeometry:Xs,SphereGeometry:js,TetrahedronGeometry:qs,TorusGeometry:Ys,TorusKnotGeometry:$s,TubeGeometry:Zs,WireframeGeometry:Js}),Lr=class extends oi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ne(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function ln(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(zc(r))r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(zc(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Ct(n){let e={};for(let t=0;t<n.length;t++){let i=ln(n[t]);for(let r in i)e[r]=i[r]}return e}function zc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Od(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dl(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Xh={clone:ln,merge:Ct},Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ln(e.uniforms),this.uniformsGroups=Od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ne().setHex(r.value);break;case"v2":this.uniforms[i].value=new ne().fromArray(r.value);break;case"v3":this.uniforms[i].value=new w().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Je().fromArray(r.value);break;case"m3":this.uniforms[i].value=new De().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Fe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ks=class extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},en=class extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nr=class extends en{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Dr=class extends oi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qs=class extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ea=class extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mn(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}function Ms(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Bi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ta=class extends Bi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-i;break;case 2402:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,c=2*i-t;break;case 2402:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}let l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,m=this._weightPrev,d=this._weightNext,p=(i-t)/(r-t),_=p*p,g=_*p,f=-m*g+2*m*_-m*p,y=(1+m)*g+(-1.5-2*m)*_+(-.5+m)*p+1,S=(-1-d)*g+(1.5+d)*_+.5*p,A=d*g-d*_;for(let E=0;E!==o;++E)s[E]=f*a[h+E]+y*a[l+E]+S*a[c+E]+A*a[u+E];return s}},ia=class extends Bi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(r-t),u=1-h;for(let m=0;m!==o;++m)s[m]=a[l+m]*u+a[c+m]*h;return s}},na=class extends Bi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ra=class extends Bi{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(r-t),_=1-p;for(let g=0;g!==o;++g)s[g]=a[l+g]*_+a[c+g]*p;return s}let m=2*o,d=e-1;for(let p=0;p!==o;++p){let _=a[l+p],g=a[c+p],f=d*m+2*p,y=u[f],S=u[f+1],A=e*m+2*p,E=h[A],b=h[A+1],I=Gd(i,t,y,E,r);s[p]=jh(I,_,S,b,g)}return s}};function jh(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function zd(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function Gd(n,e,t,i,r){let s=(n-e)/(r-e);for(let a=0;a<8;a++){let o=jh(s,e,t,i,r)-n;if(Math.abs(o)<1e-10)break;let c=zd(s,e,t,i,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Ut=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mn(t,this.TimeBufferType),this.values=Mn(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Mn(e.times,Array),values:Mn(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Ms(e.settings)&&(i.settings={inTangents:Mn(e.settings.inTangents,Array),outTangents:Mn(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ra(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Re("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;Ms(this.settings)&&(Gc(this.settings.inTangents,e),Gc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Ms(this.settings)&&(Hc(this.settings.inTangents,e),Hc(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Pe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Pe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Au(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){Pe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===2302,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*i,u=h-i,m=h+i;for(let d=0;d!==i;++d){let p=t[h+d];if(p!==t[u+d]||p!==t[m+d]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let m=0;m!==i;++m)t[u+m]=t[h+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ms(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Gc(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Hc(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Ut.prototype.ValueTypeName="",Ut.prototype.TimeBufferType=Float32Array,Ut.prototype.ValueBufferType=Float32Array,Ut.prototype.DefaultInterpolation=2301;var Di=class extends Ut{constructor(e,t,i){super(e,t,i)}};Di.prototype.ValueTypeName="bool",Di.prototype.ValueBufferType=Array,Di.prototype.DefaultInterpolation=2300,Di.prototype.InterpolantFactoryMethodLinear=void 0,Di.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends Ut{constructor(e,t,i,r){super(e,t,i,r)}};sa.prototype.ValueTypeName="color";var aa=class extends Ut{constructor(e,t,i,r){super(e,t,i,r)}};aa.prototype.ValueTypeName="number";var oa=class extends Bi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)St.slerpFlat(s,0,a,l-o,a,l,c);return s}},Ur=class extends Ut{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new oa(this.times,this.values,this.getValueSize(),e)}};Ur.prototype.ValueTypeName="quaternion",Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Ut{constructor(e,t,i){super(e,t,i)}};Ui.prototype.ValueTypeName="string",Ui.prototype.ValueBufferType=Array,Ui.prototype.DefaultInterpolation=2300,Ui.prototype.InterpolantFactoryMethodLinear=void 0,Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends Ut{constructor(e,t,i,r){super(e,t,i,r)}};la.prototype.ValueTypeName="vector";var ca=class{constructor(e,t,i){let r=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){c++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,c),o===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,m=l.length;u<m;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qh=new ca,ha=class{constructor(e){this.manager=e!==void 0?e:qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pn=class extends yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Or=class extends Pn{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},mo=new Fe,Vc=new w,kc=new w,Fr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vc),kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(mo,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bs=new w,Ts=new St,ni=new w,Ln=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bs,Ts,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bs,Ts,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(bs,Ts,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bs,Ts,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ni=new w,Wc=new ne,Xc=new ne,At=class extends Ln{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*wn*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*bn*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*wn*Math.atan(Math.tan(.5*bn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Wc,Xc),t.subVectors(Xc,Wc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*bn*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var xo=class extends Fr{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0}},Br=class extends Pn{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new xo}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},zr=class extends Ln{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yo=class extends Fr{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Nn=class extends Pn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new yo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var D_=new Fe,U_=new Fe,O_=new Fe;var Dn=class extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new At(-90,1,e,t);r.layers=this.layers,this.add(r);let s=new At(-90,1,e,t);s.layers=this.layers,this.add(s);let a=new At(-90,1,e,t);a.layers=this.layers,this.add(a);let o=new At(-90,1,e,t);o.layers=this.layers,this.add(o);let c=new At(-90,1,e,t);c.layers=this.layers,this.add(c);let l=new At(-90,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==2001)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),m=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;g=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,m,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ua=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var F_=new w,B_=new St,z_=new w,G_=new w,H_=new w;var V_=new w,k_=new St,W_=new w,X_=new w;var Hd=new RegExp("[\\[\\]\\.:\\/]","g"),Ul="[^\\[\\]\\.:\\/]",Vd="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",kd=/((?:WC+[\/:])*)/.source.replace("WC",Ul),Wd=/(WCOD+)?/.source.replace("WCOD",Vd),Xd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ul),jd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ul),qd=new RegExp("^"+kd+Wd+Xd+jd+"$"),Yd=["material","materials","bones","map"],So=class{constructor(e,t,i){let r=i||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hd,"")}static parseTrackName(e){let t=qd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Yd.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Re("PropertyBinding: No target node found for track: "+this.path+".");if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material)return void Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(l!==void 0){if(e[l]===void 0)return void Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[r];if(a===void 0)return void Pe("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tt.Composite=So,tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray],tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j_=new Float32Array(1);var q_=new Fe;var Hl=class Hl{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Hl.prototype.isMatrix2=!0;var Mo=Hl,Y_=new ne;var $_=new w,Z_=new w,J_=new w,K_=new w,Q_=new w,ev=new w,tv=new w;var iv=new w;var nv=new w,rv=new Fe,sv=new Fe;var av=new w,ov=new Ne,lv=new Ne;var cv=new w,hv=new w,uv=new w;var dv=new w,pv=new Ln;var mv=new Vt;var fv=new w;function Ol(n,e,t,i){let r=$d(i);switch(t){case 1021:return n*e;case 1028:case 1029:return n*e/r.components*r.byteLength;case 1030:case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case 1023:case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $d(n){switch(n){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}})),typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function mu(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Jd(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(a,h),n.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=n.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(n.bindBuffer(o,s),l.length===0)n.bufferSubData(o,0,c);else{l.sort((u,m)=>u.start-m.start);let h=0;for(let u=1;u<l.length;u++){let m=l[h],d=l[u];d.start<=m.start+m.count+1?m.count=Math.max(m.count,d.start+d.count-m.start):(++h,l[h]=d)}l.length=h+1;for(let u=0,m=l.length;u<m;u++){let d=l[u];n.bufferSubData(o,d.start*c.BYTES_PER_ELEMENT,c,d.start,d.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qd=`#ifdef USE_ALPHAHASH
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
#endif`,ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
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
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,up=`#ifdef USE_IRIDESCENCE
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
#endif`,dp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sp=`#define PI 3.141592653589793
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
} // validated`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
#endif`,$p=`uniform sampler2D dfgLUT;
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,Zp=`
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,um=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Om=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ef=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`#include <common>
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
}`,sf=`#if DEPTH_PACKING == 3200
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
}`,af=`#define DISTANCE
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
}`,of=`#define DISTANCE
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
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`uniform float scale;
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
}`,uf=`uniform vec3 diffuse;
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
}`,df=`#include <common>
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#define LAMBERT
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
}`,ff=`#define LAMBERT
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
}`,gf=`#define MATCAP
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
}`,_f=`#define MATCAP
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
}`,vf=`#define NORMAL
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
}`,xf=`#define NORMAL
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
}`,yf=`#define PHONG
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
}`,Sf=`#define PHONG
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
}`,Mf=`#define STANDARD
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
}`,bf=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`,Tf=`#define TOON
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
}`,Ef=`#define TOON
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
}`,wf=`uniform float size;
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
}`,Af=`uniform vec3 diffuse;
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
}`,Rf=`#include <common>
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
}`,Cf=`uniform vec3 color;
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
}`,If=`uniform float rotation;
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
}`,Pf=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Kd,alphahash_pars_fragment:Qd,alphamap_fragment:ep,alphamap_pars_fragment:tp,alphatest_fragment:ip,alphatest_pars_fragment:np,aomap_fragment:rp,aomap_pars_fragment:sp,batching_pars_vertex:ap,batching_vertex:op,begin_vertex:lp,beginnormal_vertex:cp,bsdfs:hp,iridescence_fragment:up,bumpmap_pars_fragment:dp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:gp,color_fragment:_p,color_pars_fragment:vp,color_pars_vertex:xp,color_vertex:yp,common:Sp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:bp,displacementmap_vertex:Tp,emissivemap_fragment:Ep,emissivemap_pars_fragment:wp,colorspace_fragment:Ap,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Pp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:kp,envmap_vertex:Np,fog_vertex:Dp,fog_pars_vertex:Up,fog_fragment:Op,fog_pars_fragment:Fp,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:zp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Vp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:jp,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:$p,lights_fragment_begin:Zp,lights_fragment_maps:Jp,lights_fragment_end:Kp,lightprobes_pars_fragment:Qp,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:nm,map_fragment:rm,map_pars_fragment:sm,map_particle_fragment:am,map_particle_pars_fragment:om,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphinstance_vertex:hm,morphcolor_vertex:um,morphnormal_vertex:dm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:fm,normal_fragment_maps:gm,normal_pars_fragment:_m,normal_pars_vertex:vm,normal_vertex:xm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Tm,opaque_fragment:Em,packing:wm,premultiplied_alpha_fragment:Am,project_vertex:Rm,dithering_fragment:Cm,dithering_pars_fragment:Im,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Nm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Um,shadowmask_pars_fragment:Om,skinbase_vertex:Fm,skinning_pars_vertex:Bm,skinning_vertex:zm,skinnormal_vertex:Gm,specularmap_fragment:Hm,specularmap_pars_fragment:Vm,tonemapping_fragment:km,tonemapping_pars_fragment:Wm,transmission_fragment:Xm,transmission_pars_fragment:jm,uv_pars_fragment:qm,uv_pars_vertex:Ym,uv_vertex:$m,worldpos_vertex:Zm,background_vert:Jm,background_frag:Km,backgroundCube_vert:Qm,backgroundCube_frag:ef,cube_vert:tf,cube_frag:nf,depth_vert:rf,depth_frag:sf,distance_vert:af,distance_frag:of,equirect_vert:lf,equirect_frag:cf,linedashed_vert:hf,linedashed_frag:uf,meshbasic_vert:df,meshbasic_frag:pf,meshlambert_vert:mf,meshlambert_frag:ff,meshmatcap_vert:gf,meshmatcap_frag:_f,meshnormal_vert:vf,meshnormal_frag:xf,meshphong_vert:yf,meshphong_frag:Sf,meshphysical_vert:Mf,meshphysical_frag:bf,meshtoon_vert:Tf,meshtoon_frag:Ef,points_vert:wf,points_frag:Af,shadow_vert:Rf,shadow_frag:Cf,sprite_vert:If,sprite_frag:Pf},de={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},pi={basic:{uniforms:Ct([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ct([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ct([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ct([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ct([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ne(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ct([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ct([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ct([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ct([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ct([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ct([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Ct([de.common,de.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Ct([de.lights,de.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};pi.physical={uniforms:Ct([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Ea={r:0,b:0,g:0},Lf=new Fe,fu=new De;function Nf(n,e,t,i,r,s){let a=new Ne(0),o,c,l=r===!0?0:1,h=null,u=0,m=null;function d(_){let g=_.isScene===!0?_.background:null;if(g&&g.isTexture){let f=_.backgroundBlurriness>0;g=e.get(g,f)}return g}function p(_,g){_.getRGB(Ea,Dl(n)),t.buffers.color.setClear(Ea.r,Ea.g,Ea.b,g,s)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:function(_){let g=!1,f=d(_);f===null?p(a,l):f&&f.isColor&&(p(f,1),g=!0);let y=n.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||g)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(_,g){let f=d(g);f&&f.isCubeTexture?(c===void 0&&(c=new rt(new ei(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:ln(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=f,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lf.makeRotationFromEuler(g.backgroundRotation)).transpose(),f.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fu),c.material.toneMapped=je.getTransfer(f.colorSpace)!==Qe,h===f&&u===f.version&&m===n.toneMapping||(c.material.needsUpdate=!0,h=f,u=f.version,m=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new rt(new Fi(2,2),new li({name:"BackgroundMaterial",uniforms:ln(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=f,o.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,o.material.toneMapped=je.getTransfer(f.colorSpace)!==Qe,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),h===f&&u===f.version&&m===n.toneMapping||(o.material.needsUpdate=!0,h=f,u=f.version,m=n.toneMapping),o.layers.enableAll(),_.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function Df(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=l(null),s=r,a=!1;function o(f){return n.bindVertexArray(f)}function c(f){return n.deleteVertexArray(f)}function l(f){let y=[],S=[],A=[];for(let E=0;E<t;E++)y[E]=0,S[E]=0,A[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:S,attributeDivisors:A,object:f,attributes:{},index:null}}function h(){let f=s.newAttributes;for(let y=0,S=f.length;y<S;y++)f[y]=0}function u(f){m(f,0)}function m(f,y){let S=s.newAttributes,A=s.enabledAttributes,E=s.attributeDivisors;S[f]=1,A[f]===0&&(n.enableVertexAttribArray(f),A[f]=1),E[f]!==y&&(n.vertexAttribDivisor(f,y),E[f]=y)}function d(){let f=s.newAttributes,y=s.enabledAttributes;for(let S=0,A=y.length;S<A;S++)y[S]!==f[S]&&(n.disableVertexAttribArray(S),y[S]=0)}function p(f,y,S,A,E,b,I){I===!0?n.vertexAttribIPointer(f,y,S,E,b):n.vertexAttribPointer(f,y,S,A,E,b)}function _(){g(),a=!0,s!==r&&(s=r,o(s.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(f,y,S,A,E){let b=!1,I=(function(L,D,P,q){let U=q.wireframe===!0,V=i[D.id];V===void 0&&(V={},i[D.id]=V);let Z=L.isInstancedMesh===!0?L.id:0,te=V[Z];te===void 0&&(te={},V[Z]=te);let Y=te[P.id];Y===void 0&&(Y={},te[P.id]=Y);let F=Y[U];return F===void 0&&(F=l(n.createVertexArray()),Y[U]=F),F})(f,A,S,y);s!==I&&(s=I,o(s.object)),b=(function(L,D,P,q){let U=s.attributes,V=D.attributes,Z=0,te=P.getAttributes();for(let Y in te)if(te[Y].location>=0){let F=U[Y],X=V[Y];if(X===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),F===void 0||F.attribute!==X||X&&F.data!==X.data)return!0;Z++}return s.attributesNum!==Z||s.index!==q})(f,A,S,E),b&&(function(L,D,P,q){let U={},V=D.attributes,Z=0,te=P.getAttributes();for(let Y in te)if(te[Y].location>=0){let F=V[Y];F===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(F=L.instanceColor));let X={};X.attribute=F,F&&F.data&&(X.data=F.data),U[Y]=X,Z++}s.attributes=U,s.attributesNum=Z,s.index=q})(f,A,S,E),E!==null&&e.update(E,n.ELEMENT_ARRAY_BUFFER),(b||a)&&(a=!1,(function(L,D,P,q){h();let U=q.attributes,V=P.getAttributes(),Z=D.defaultAttributeValues;for(let te in V){let Y=V[te];if(Y.location>=0){let F=U[te];if(F===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(F=L.instanceColor)),F!==void 0){let X=F.normalized,re=F.itemSize,me=e.get(F);if(me===void 0)continue;let Se=me.buffer,K=me.type,se=me.bytesPerElement,he=K===n.INT||K===n.UNSIGNED_INT||F.gpuType===Go;if(F.isInterleavedBufferAttribute){let oe=F.data,ve=oe.isInterleavedBuffer===!0?oe.stride:oe.itemSize,le=F.offset;if(oe.isInstancedInterleavedBuffer||oe.isInstancedBufferAttribute){for(let Me=0;Me<Y.locationSize;Me++)m(Y.location+Me,oe.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Me=0;Me<Y.locationSize;Me++)u(Y.location+Me);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Me=0;Me<Y.locationSize;Me++)p(Y.location+Me,re/Y.locationSize,K,X,ve*se,(le+re/Y.locationSize*Me)*se,he)}else{if(F.isInstancedBufferAttribute){for(let oe=0;oe<Y.locationSize;oe++)m(Y.location+oe,F.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let oe=0;oe<Y.locationSize;oe++)u(Y.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let oe=0;oe<Y.locationSize;oe++)p(Y.location+oe,re/Y.locationSize,K,X,re*se,re/Y.locationSize*oe*se,he)}}else if(Z!==void 0){let X=Z[te];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(Y.location,X);break;case 3:n.vertexAttrib3fv(Y.location,X);break;case 4:n.vertexAttrib4fv(Y.location,X);break;default:n.vertexAttrib1fv(Y.location,X)}}}}d()})(f,y,S,A),E!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:_,resetDefaultState:g,dispose:function(){_();for(let f in i){let y=i[f];for(let S in y){let A=y[S];for(let E in A){let b=A[E];for(let I in b)c(b[I].object),delete b[I];delete A[E]}}delete i[f]}},releaseStatesOfGeometry:function(f){if(i[f.id]===void 0)return;let y=i[f.id];for(let S in y){let A=y[S];for(let E in A){let b=A[E];for(let I in b)c(b[I].object),delete b[I];delete A[E]}}delete i[f.id]},releaseStatesOfObject:function(f){for(let y in i){let S=i[y],A=f.isInstancedMesh===!0?f.id:0,E=S[A];if(E!==void 0){for(let b in E){let I=E[b];for(let L in I)c(I[L].object),delete I[L];delete E[b]}delete S[A],Object.keys(S).length===0&&delete i[y]}}},releaseStatesOfProgram:function(f){for(let y in i){let S=i[y];for(let A in S){let E=S[A];if(E[f.id]===void 0)continue;let b=E[f.id];for(let I in b)c(b[I].object),delete b[I];delete E[f.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:d}}function Uf(n,e,t){let i;this.setMode=function(r){i=r},this.render=function(r,s){n.drawArrays(i,r,s),t.update(s,i,1)},this.renderInstances=function(r,s,a){a!==0&&(n.drawArraysInstanced(i,r,s,a),t.update(s,i,a))},this.renderMultiDraw=function(r,s,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,r,0,s,0,a);let o=0;for(let c=0;c<a;c++)o+=s[c];t.update(o,i,1)}}function Of(n,e,t,i){let r;function s(h){if(h==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(Re("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),l=t.logarithmicDepthBuffer===!0&&c===!1;return t.reversedDepthBuffer===!0&&c===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&c===!0&&Re("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled."),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(h){return h===Ai||i.convert(h)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let u=h===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==ti&&h!==wi&&!u&&i.convert(h)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))},precision:a,logarithmicDepthBuffer:l,reversedDepthBuffer:c,maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function Ff(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Kt,o=new De,c={value:null,needsUpdate:!1};function l(h,u,m,d){let p=h!==null?h.length:0,_=null;if(p!==0){if(_=c.value,d!==!0||_===null){let g=m+4*p,f=u.matrixWorldInverse;o.getNormalMatrix(f),(_===null||_.length<g)&&(_=new Float32Array(g));for(let y=0,S=m;y!==p;++y,S+=4)a.copy(h[y]).applyMatrix4(f,o),a.normal.toArray(_,S),_[S+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,_}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let m=h.length!==0||u||i!==0||r;return r=u,i=h.length,m},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,m){let d=h.clippingPlanes,p=h.clipIntersection,_=h.clipShadows,g=n.get(h);if(!r||d===null||d.length===0||s&&!_)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let f=s?0:i,y=4*f,S=g.clippingState||null;c.value=S,S=l(d,u,y,m);for(let A=0;A!==y;++A)S[A]=t[A];g.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=f}}}fu.set(-1,0,0,0,1,0,0,0,1);var qr=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _r(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ei(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:ln(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:nn});s.uniforms.tEquirect.value=t;let a=new rt(r,s),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Wt),new Dn(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};var Bf=new w,zf=new Ne,kn=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Dn(1,10,null),this._boxMesh=new rt(new ei(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=Bf}=s,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,m=c.autoClearColor,d=c.autoClearDepth,p=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(zf));let g=new Dn(i,r,h);return g.position.copy(o),g.update(c,e),c.autoClear=u,c.autoClearColor=m,c.autoClearDepth=d,c.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(256,Pl(e))}_fromTexture(e,t){e.mapping===Vr||e.mapping===Bn?this._setSize(e.image.length===0?256:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Yh(e,!1,!1),i=Math.log2(e)-3;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Yh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Vr||e.mapping===Bn?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$h()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Gf(),this._integrationMaterial=Hf());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/16);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-3)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(256*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Vf());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};function Yh(n,e,t){return new qr(n,{minFilter:Gi,generateMipmaps:e,type:ui,colorSpace:Ta,depthBuffer:t})}function Yr(n,e,t){return new li({name:n,uniforms:e,vertexShader:He.cube_vert,fragmentShader:t,side:Rt,blending:nn,depthTest:!1,depthWrite:!1})}function Gf(){return Yr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES 256u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Hf(){return Yr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:16}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Vf(){return Yr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES 20
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function $h(){return Yr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Zh(){return Yr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function kf(n){let e=new WeakMap,t=new WeakMap,i=null;function r(o,c){return c===ma?o.mapping=Vr:c===fa&&(o.mapping=Bn),o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(o){let c=o.target;c.removeEventListener("dispose",a);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}return{get:function(o,c=!1){return o==null?null:c?(function(l){if(l&&l.isTexture&&l.isPMREMTexture!==!0){let h=l.mapping,u=h===ma||h===fa,m=h===Vr||h===Bn;if(u||m){let d=t.get(l),p=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return i===null&&(i=new kn(n)),d=u?i.fromEquirectangular(l,d):i.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),d.texture;if(d!==void 0)return d.texture;{let _=l.image;return u&&_&&_.height>0||m&&_&&(function(g){let f=0,y=6;for(let S=0;S<y;S++)g[S]!==void 0&&f++;return f===y})(_)?(i===null&&(i=new kn(n)),d=u?i.fromEquirectangular(l):i.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),l.addEventListener("dispose",a),d.texture):null}}}return l})(o):(function(l){if(l&&l.isTexture){let h=l.mapping;if(h===ma||h===fa){if(e.has(l))return r(e.get(l).texture,l.mapping);{let u=l.image;if(u&&u.height>0){let m=new qr(u.height);return m.fromEquirectangularTexture(n,l),e.set(l,m),l.addEventListener("dispose",s),r(m.texture,l.mapping)}return null}}}return l})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function Wf(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Zi("WebGLRenderer: "+i+" extension not supported."),r}}}function Xf(n,e,t,i){let r={},s=new WeakMap,a=new FinalizationRegistry(h=>delete r[h]);function o(h){c(h.target)}function c(h){h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id],a.unregister(h);let u=s.get(h);u&&(e.remove(u),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function l(h){let u=h.index,m=h.attributes.position,d=0;if(m===void 0)return;let p=u!==null?u.array.length:m.array.length/3-1,_=new(m.count>=65535?dr:ur)(6*Math.ceil(p/3),1),g=_.array;if(u!==null){let y=u.array;d=u.version;for(let S=0,A=0;S<p;S+=3){let E=y[S+0],b=y[S+1],I=y[S+2];g[A++]=E,g[A++]=b,g[A++]=b,g[A++]=I,g[A++]=I,g[A++]=E}}else{d=m.version;for(let y=0,S=0;y<p;y+=3){let A=y+0,E=y+1,b=y+2;g[S++]=A,g[S++]=E,g[S++]=E,g[S++]=b,g[S++]=b,g[S++]=A}}_.version=d;let f=s.get(h);f&&e.remove(f),s.set(h,_)}return{get:function(h,u){return r[u.id]!==void 0||(u.addEventListener("dispose",o),r[u.id]=new WeakRef(u),a.register(u,u.id,u),t.memory.geometries++),u},update:function(h){let u=h.attributes;for(let m in u)e.update(u[m],n.ARRAY_BUFFER)},getWireframeAttribute:function(h){let u=s.get(h);if(u){let m=h.index;m!==null&&u.version<m.version&&l(h)}else l(h);return s.get(h)},dispose:function(){for(let h in r){let u=r[h].deref();u!==void 0&&c(u)}}}}function jf(n,e,t){let i,r,s;this.setMode=function(a){i=a},this.setIndex=function(a){r=a.type,s=a.bytesPerElement},this.render=function(a,o){n.drawElements(i,o,r,a*s),t.update(o,i,1)},this.renderInstances=function(a,o,c){c!==0&&(n.drawElementsInstanced(i,o,r,a*s,c),t.update(o,i,c))},this.renderMultiDraw=function(a,o,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,o,0,r,a,0,c);let l=0;for(let h=0;h<c;h++)l+=o[h];t.update(l,i,1)}}function qf(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:Pe("WebGLInfo: Unknown draw mode:",i)}}}}function Yf(n,e,t){let i=new WeakMap,r=new Je;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=i.get(a);if(u===void 0||u.count!==h){u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],f=a.morphAttributes.color||[],y=0;m===!0&&(y=1),d===!0&&(y=2),p===!0&&(y=3);let S=a.attributes.position.count*y,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let E=new Float32Array(S*A*4*h),b=new cr(E,S,A,h);b.type=wi,b.needsUpdate=!0;let I=4*y;for(let L=0;L<h;L++){let D=_[L],P=g[L],q=f[L],U=S*A*4*L;for(let V=0;V<D.count;V++){let Z=V*I;m===!0&&(r.fromBufferAttribute(D,V),E[U+Z+0]=r.x,E[U+Z+1]=r.y,E[U+Z+2]=r.z,E[U+Z+3]=0),d===!0&&(r.fromBufferAttribute(P,V),E[U+Z+4]=r.x,E[U+Z+5]=r.y,E[U+Z+6]=r.z,E[U+Z+7]=0),p===!0&&(r.fromBufferAttribute(q,V),E[U+Z+8]=r.x,E[U+Z+9]=r.y,E[U+Z+10]=r.z,E[U+Z+11]=q.itemSize===4?r.w:1)}}u={count:h,texture:b,size:new ne(S,A)},i.set(a,u),a.addEventListener("dispose",function L(){b.dispose(),i.delete(a),a.removeEventListener("dispose",L)})}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];let d=a.morphTargetsRelative?1:1-m;o.getUniforms().setValue(n,"morphTargetBaseInfluence",d),o.getUniforms().setValue(n,"morphTargetInfluences",c)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function $f(n,e,t,i,r){let s=new WeakMap;function a(o){let c=o.target;c.removeEventListener("dispose",a),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:function(o){let c=r.render.frame,l=o.geometry,h=e.get(o,l);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==c&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,c))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h},dispose:function(){s=new WeakMap}}}var Zf={[Do]:"LINEAR_TONE_MAPPING",[Uo]:"REINHARD_TONE_MAPPING",[Oo]:"CINEON_TONE_MAPPING",[Fo]:"ACES_FILMIC_TONE_MAPPING",[zo]:"AGX_TONE_MAPPING",[Hr]:"NEUTRAL_TONE_MAPPING",[Bo]:"CUSTOM_TONE_MAPPING"};function Jf(n,e,t,i,r,s){let a=new Ot(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new dt;h.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ie([0,2,0,0,2,0],2));let u=new Ks({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new rt(h,u),d=new zr(-1,1,1,-1,0,1),p,_=null,g=null,f=!1,y=null,S=[],A=!1;this.setSize=function(E,b){a.setSize(E,b),o!==null&&o.setSize(E,b),c!==null&&c.setSize(E,b);for(let I=0;I<S.length;I++){let L=S[I];L.setSize&&L.setSize(E,b)}},this.setEffects=function(E){S=E,A=S.length>0&&S[0].isRenderPass===!0;let b=a.width,I=a.height;S.length>0&&o===null&&(o=new Ot(b,I,{type:ui,depthBuffer:!1,stencilBuffer:!1}),c=new Ot(b,I,{type:ui,depthBuffer:!1,stencilBuffer:!1}));let L=r===!0&&S.some(D=>D.needsDepthTexture===!0);L!==(a.depthTexture!==null)&&(L===!0&&l===null&&(l=new Ei(b,I),s===!0&&(l.format=Vi,l.type=rn)),a.dispose(),a.depthTexture=L?l:null,a.resolveDepthBuffer=L,a.storeMultisampledDepthBuffer=L);for(let D=0;D<S.length;D++){let P=S[D];P.setSize&&P.setSize(b,I),L&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(E,b){if(f||E.toneMapping===hi&&S.length===0)return!1;if(y=b,b!==null){let I=b.width,L=b.height;a.width===I&&a.height===L||this.setSize(I,L)}return A===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=hi,!0},this.hasRenderPass=function(){return A},this.end=function(E,b){E.toneMapping=p,f=!0;let I=a,L=o;for(let D=0;D<S.length;D++){let P=S[D];P.enabled!==!1&&(P.render(E,L,I,b),P.needsSwap!==!1&&(I=L,L=L===o?c:o))}if(_!==E.outputColorSpace||g!==E.toneMapping){_=E.outputColorSpace,g=E.toneMapping,u.defines={},je.getTransfer(_)===Qe&&(u.defines.SRGB_TRANSFER="");let D=Zf[g];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=I.texture,E.setRenderTarget(y),E.render(m,d),y=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var gu=new It,_u=new Ei(1,1),vu=new xr(1),xu=new cr,yu=new As,Su=new _r,Jh=[],Kh=[],Qh=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function Wn(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Jh[r];if(s===void 0&&(s=new Float32Array(r),Jh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ra(n,e){let t=Kh[e];t===void 0&&(t=new Int32Array(e),Kh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kf(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qf(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function eg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function tg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function ig(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(ft(t,i))return;tu.set(i),n.uniformMatrix2fv(this.addr,!1,tu),gt(t,i)}}function ng(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(ft(t,i))return;eu.set(i),n.uniformMatrix3fv(this.addr,!1,eu),gt(t,i)}}function rg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(ft(t,i))return;Qh.set(i),n.uniformMatrix4fv(this.addr,!1,Qh),gt(t,i)}}function sg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ag(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function og(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function lg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function cg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function ug(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function dg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function Ca(n){return n.version===0&&(n.compareFunction=wl,n.needsUpdate=!0),n}function pg(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),s=this.type===n.SAMPLER_2D_SHADOW?Ca(_u):gu,t.setTexture2D(e||s,r)}function mg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yu,r)}function fg(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),s=this.type===n.SAMPLER_CUBE_SHADOW?Ca(vu):Su,t.setTextureCube(e||s,r)}function gg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xu,r)}function _g(n){switch(n){case 5126:return Kf;case 35664:return Qf;case 35665:return eg;case 35666:return tg;case 35674:return ig;case 35675:return ng;case 35676:return rg;case 5124:case 35670:return sg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return gg}}function vg(n,e){n.uniform1fv(this.addr,e)}function xg(n,e){let t=Wn(e,this.size,2);n.uniform2fv(this.addr,t)}function yg(n,e){let t=Wn(e,this.size,3);n.uniform3fv(this.addr,t)}function Sg(n,e){let t=Wn(e,this.size,4);n.uniform4fv(this.addr,t)}function Mg(n,e){let t=Wn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bg(n,e){let t=Wn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Tg(n,e){let t=Wn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Eg(n,e){n.uniform1iv(this.addr,e)}function wg(n,e){n.uniform2iv(this.addr,e)}function Ag(n,e){n.uniform3iv(this.addr,e)}function Rg(n,e){n.uniform4iv(this.addr,e)}function Cg(n,e){n.uniform1uiv(this.addr,e)}function Ig(n,e){n.uniform2uiv(this.addr,e)}function Pg(n,e){n.uniform3uiv(this.addr,e)}function Lg(n,e){n.uniform4uiv(this.addr,e)}function Ng(n,e,t){let i=this.cache,r=e.length,s=Ra(t,r),a;ft(i,s)||(n.uniform1iv(this.addr,s),gt(i,s)),a=this.type===n.SAMPLER_2D_SHADOW?Ca(_u):gu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Dg(n,e,t){let i=this.cache,r=e.length,s=Ra(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||yu,s[a])}function Ug(n,e,t){let i=this.cache,r=e.length,s=Ra(t,r),a;ft(i,s)||(n.uniform1iv(this.addr,s),gt(i,s)),a=this.type===n.SAMPLER_CUBE_SHADOW?Ca(vu):Su;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function Og(n,e,t){let i=this.cache,r=e.length,s=Ra(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||xu,s[a])}function Fg(n){switch(n){case 5126:return vg;case 35664:return xg;case 35665:return yg;case 35666:return Sg;case 35674:return Mg;case 35675:return bg;case 35676:return Tg;case 5124:case 35670:return Eg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Ig;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Og}}var Wl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_g(t.type)}},Xl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fg(t.type)}},jl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},Vl=/(\w+)(\])?(\[|\.)?/g;function iu(n,e){n.seq.push(e),n.map[e.id]=e}function Bg(n,e,t){let i=n.name,r=i.length;for(Vl.lastIndex=0;;){let s=Vl.exec(i),a=Vl.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===r){iu(t,l===void 0?new Wl(o,n,e):new Xl(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new jl(o),iu(t,h)),t=h}}}var Vn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);Bg(o,e.getUniformLocation(t,o.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function nu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var zg=0;function Gg(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var ru=new De;function Hg(n){je._getMatrix(ru,je.workingColorSpace,n);let e=`mat3( ${ru.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case bl:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function su(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Gg(n.getShaderSource(e),a)}return r}function Vg(n,e){let t=Hg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var kg={[Do]:"Linear",[Uo]:"Reinhard",[Oo]:"Cineon",[Fo]:"ACESFilmic",[zo]:"AgX",[Hr]:"Neutral",[Bo]:"Custom"};function Wg(n,e){let t=kg[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wa=new w;function Xg(){return je.getLuminanceCoefficients(wa),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${wa.x.toFixed(4)}, ${wa.y.toFixed(4)}, ${wa.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function qg(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yg(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function jr(n){return n!==""}function au(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ou(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(n){return n.replace($g,Zg)}function Zg(n,e){let t=He[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ql(t)}var Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(n){return n.replace(Jg,Kg)}function Kg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Qg={[tn]:"SHADOWMAP_TYPE_PCF",[Un]:"SHADOWMAP_TYPE_VSM"};function e0(n){return Qg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var t0={[Bn]:"ENVMAP_MODE_REFRACTION"};function i0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":t0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var n0={[fh]:"ENVMAP_BLENDING_MULTIPLY",[gh]:"ENVMAP_BLENDING_MIX",[_h]:"ENVMAP_BLENDING_ADD"};function r0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":n0[n.combine]||"ENVMAP_BLENDING_NONE"}function s0(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=e0(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=i0(t),u=r0(t),m=jg(t),d=qg(s),p=r.createProgram(),_,g,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(jr).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(jr).join(`
`),g.length>0&&(g+=`
`)):(_=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),g=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?He.tonemapping_pars_fragment:"",t.toneMapping!==hi?Wg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Vg("linearToOutputTexel",t.outputColorSpace),Xg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jr).join(`
`)),a=ql(a),a=au(a,t),a=ou(a,t),o=ql(o),o=au(o,t),o=ou(o,t),a=lu(a),o=lu(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=f+_+a,S=f+g+o,A=nu(r,r.VERTEX_SHADER,y),E=nu(r,r.FRAGMENT_SHADER,S);function b(P){if(n.debug.checkShaderErrors){let q=r.getProgramInfoLog(p)||"",U=r.getShaderInfoLog(A)||"",V=r.getShaderInfoLog(E)||"",Z=q.trim(),te=U.trim(),Y=V.trim(),F=!0,X=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,A,E);else{let re=su(r,A,"vertex"),me=su(r,E,"fragment");Pe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+re+`
`+me)}else Z!==""?Re("WebGLProgram: Program Info Log:",Z):te!==""&&Y!==""||(X=!1);X&&(P.diagnostics={runnable:F,programLog:Z,vertexShader:{log:te,prefix:_},fragmentShader:{log:Y,prefix:g}})}r.deleteShader(A),r.deleteShader(E),I=new Vn(r,p),L=Yg(r,p)}let I,L;r.attachShader(p,A),r.attachShader(p,E),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),this.getUniforms=function(){return I===void 0&&b(this),I},this.getAttributes=function(){return L===void 0&&b(this),L};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(p,37297)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=E,this}var a0=0,Yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new $l(e),t.set(e,i)),i}},$l=class{constructor(e){this.id=a0++,this.code=e,this.usedTimes=0}};function o0(n){return n===sn||n===Ma||n===ba}function l0(n,e,t,i,r,s){let a=new hr,o=new Yl,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(p){return c.add(p),p===0?"uv":`uv${p}`}return{getParameters:function(p,_,g,f,y,S){let A=f.fog,E=y.geometry,b=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?f.environment:null,I=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,L=e.get(p.envMap||b,I),D=m[p.type],P=i.precision;p.precision!==null&&(P=i.getMaxPrecision(p.precision),P!==p.precision&&Re("WebGLProgram.getParameters:",p.precision,"not supported, using",P,"instead."));let q=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,U=q!==void 0?q.length:0,V,Z,te,Y,F=0;if(E.morphAttributes.position!==void 0&&(F=1),E.morphAttributes.normal!==void 0&&(F=2),E.morphAttributes.color!==void 0&&(F=3),D){let ut=pi[D];V=ut.vertexShader,Z=ut.fragmentShader}else{V=p.vertexShader,Z=p.fragmentShader;let ut=o.getVertexShaderStage(p),Tt=o.getFragmentShaderStage(p);o.update(p,ut,Tt),te=ut.id,Y=Tt.id}let X=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),me=y.isInstancedMesh===!0,Se=y.isBatchedMesh===!0,K=!!p.map,se=!!p.matcap,he=!!L,oe=he&&L.isPMREMTexture===!0,ve=!!p.aoMap,le=!!p.lightMap,Me=!!p.bumpMap&&p.wireframe===!1,Ee=!!p.normalMap,Ce=!!p.displacementMap,H=!!p.emissiveMap,W=!!p.metalnessMap,T=!!p.roughnessMap,z=p.anisotropy>0,x=p.clearcoat>0,v=p.diffuseRoughness>0,R=p.dispersion>0,G=p.retroreflectivity>0,N=p.iridescence>0,k=p.sheen>0,J=p.transmission>0,C=z&&!!p.anisotropyMap,Q=x&&!!p.clearcoatMap,ae=x&&!!p.clearcoatNormalMap,ce=x&&!!p.clearcoatRoughnessMap,ie=v&&!!p.diffuseRoughnessMap,Oe=N&&!!p.iridescenceMap,ge=N&&!!p.iridescenceThicknessMap,xe=k&&!!p.sheenColorMap,Ze=k&&!!p.sheenRoughnessMap,qe=!!p.specularMap,pe=!!p.specularColorMap,we=!!p.specularIntensityMap,ze=J&&!!p.transmissionMap,ht=J&&!!p.thicknessMap,Ke=!!p.gradientMap,st=!!p.alphaMap,at=p.alphaTest>0,be=!!p.alphaHash,ke=!!p.extensions,Ve=hi;p.toneMapped&&(X!==null&&X.isXRRenderTarget!==!0||(Ve=n.toneMapping));let bt=oe?L.isCompressedCubeTexture?L.image[0].mipmaps:L.mipmaps:null,_t={shaderID:D,shaderType:p.type,shaderName:p.name,vertexShader:V,fragmentShader:Z,defines:p.defines,customVertexShaderID:te,customFragmentShaderID:Y,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:P,batching:Se,batchingColor:Se&&y._colorsTexture!==null,instancing:me,instancingColor:me&&y.instanceColor!==null,instancingMorph:me&&y.morphTexture!==null,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:K,matcap:se,envMap:he,envMapMode:he&&L.mapping,envMapPMREM:oe,envMapMaxLod:oe?bt.length-1:null,envMapSize:oe?bt[0].width:null,aoMap:ve,lightMap:le,bumpMap:Me,normalMap:Ee,displacementMap:Ce,emissiveMap:H,normalMapObjectSpace:Ee&&p.normalMapType===Rh,normalMapTangentSpace:Ee&&p.normalMapType===Ml,packedNormalMap:Ee&&p.normalMapType===Ml&&o0(p.normalMap.format),metalnessMap:W,roughnessMap:T,anisotropy:z,anisotropyMap:C,clearcoat:x,clearcoatMap:Q,clearcoatNormalMap:ae,clearcoatRoughnessMap:ce,diffuseRoughness:v,diffuseRoughnessMap:ie,dispersion:R,retroreflection:G,iridescence:N,iridescenceMap:Oe,iridescenceThicknessMap:ge,sheen:k,sheenColorMap:xe,sheenRoughnessMap:Ze,specularMap:qe,specularColorMap:pe,specularIntensityMap:we,transmission:J,transmissionMap:ze,thicknessMap:ht,gradientMap:Ke,opaque:p.transparent===!1&&p.blending===Gr&&p.alphaToCoverage===!1,alphaMap:st,alphaTest:at,alphaHash:be,combine:p.combine,mapUv:K&&d(p.map.channel),aoMapUv:ve&&d(p.aoMap.channel),lightMapUv:le&&d(p.lightMap.channel),bumpMapUv:Me&&d(p.bumpMap.channel),normalMapUv:Ee&&d(p.normalMap.channel),displacementMapUv:Ce&&d(p.displacementMap.channel),emissiveMapUv:H&&d(p.emissiveMap.channel),metalnessMapUv:W&&d(p.metalnessMap.channel),roughnessMapUv:T&&d(p.roughnessMap.channel),anisotropyMapUv:C&&d(p.anisotropyMap.channel),clearcoatMapUv:Q&&d(p.clearcoatMap.channel),clearcoatNormalMapUv:ae&&d(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&d(p.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&d(p.diffuseRoughnessMap.channel),iridescenceMapUv:Oe&&d(p.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&d(p.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&d(p.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&d(p.sheenRoughnessMap.channel),specularMapUv:qe&&d(p.specularMap.channel),specularColorMapUv:pe&&d(p.specularColorMap.channel),specularIntensityMapUv:we&&d(p.specularIntensityMap.channel),transmissionMapUv:ze&&d(p.transmissionMap.channel),thicknessMapUv:ht&&d(p.thicknessMap.channel),alphaMapUv:st&&d(p.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(Ee||z),vertexNormals:!!E.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!E.attributes.uv&&(K||st),fog:!!A,useFog:p.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||E.attributes.normal===void 0&&Ee===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:re,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:F,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:S.filter(ut=>ut.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:p.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:K&&p.map.isVideoTexture===!0&&je.getTransfer(p.map.colorSpace)===Qe,decodeVideoTextureEmissive:H&&p.emissiveMap.isVideoTexture===!0&&je.getTransfer(p.emissiveMap.colorSpace)===Qe,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===ci,flipSided:p.side===Rt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:ke&&p.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&p.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t},getProgramCacheKey:function(p){let _=[];if(p.shaderID?_.push(p.shaderID):(_.push(p.customVertexShaderID),_.push(p.customFragmentShaderID)),p.defines!==void 0)for(let g in p.defines)_.push(g),_.push(p.defines[g]);return p.isRawShaderMaterial===!1&&((function(g,f){g.push(f.precision),g.push(f.outputColorSpace),g.push(f.envMapMode),g.push(f.envMapPMREM),g.push(f.envMapMaxLod),g.push(f.envMapSize),g.push(f.mapUv),g.push(f.alphaMapUv),g.push(f.lightMapUv),g.push(f.aoMapUv),g.push(f.bumpMapUv),g.push(f.normalMapUv),g.push(f.displacementMapUv),g.push(f.emissiveMapUv),g.push(f.metalnessMapUv),g.push(f.roughnessMapUv),g.push(f.anisotropyMapUv),g.push(f.clearcoatMapUv),g.push(f.clearcoatNormalMapUv),g.push(f.clearcoatRoughnessMapUv),g.push(f.diffuseRoughnessMapUv),g.push(f.iridescenceMapUv),g.push(f.iridescenceThicknessMapUv),g.push(f.sheenColorMapUv),g.push(f.sheenRoughnessMapUv),g.push(f.specularMapUv),g.push(f.specularColorMapUv),g.push(f.specularIntensityMapUv),g.push(f.transmissionMapUv),g.push(f.thicknessMapUv),g.push(f.combine),g.push(f.fogExp2),g.push(f.sizeAttenuation),g.push(f.morphTargetsCount),g.push(f.numSunLights),g.push(f.numDirLights),g.push(f.numPointLights),g.push(f.numSpotLights),g.push(f.numSpotLightMaps),g.push(f.numHemiLights),g.push(f.numRectAreaLights),g.push(f.numSunLightShadows),g.push(f.numDirLightShadows),g.push(f.numPointLightShadows),g.push(f.numSpotLightShadows),g.push(f.numSpotLightShadowsWithMaps),g.push(f.numLightProbes),g.push(f.numLightProbeGrids),g.push(f.shadowMapType),g.push(f.toneMapping),g.push(f.numClippingPlanes),g.push(f.numClipIntersection),g.push(f.depthPacking)})(_,p),(function(g,f){a.disableAll(),f.instancing&&a.enable(0),f.instancingColor&&a.enable(1),f.instancingMorph&&a.enable(2),f.matcap&&a.enable(3),f.envMap&&a.enable(4),f.normalMapObjectSpace&&a.enable(5),f.normalMapTangentSpace&&a.enable(6),f.clearcoat&&a.enable(7),f.iridescence&&a.enable(8),f.alphaTest&&a.enable(9),f.vertexColors&&a.enable(10),f.vertexAlphas&&a.enable(11),f.vertexUv1s&&a.enable(12),f.vertexUv2s&&a.enable(13),f.vertexUv3s&&a.enable(14),f.vertexTangents&&a.enable(15),f.anisotropy&&a.enable(16),f.alphaHash&&a.enable(17),f.batching&&a.enable(18),f.dispersion&&a.enable(19),f.retroreflection&&a.enable(24),f.diffuseRoughness&&a.enable(25),f.batchingColor&&a.enable(20),f.gradientMap&&a.enable(21),f.packedNormalMap&&a.enable(22),f.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),f.fog&&a.enable(0),f.useFog&&a.enable(1),f.flatShading&&a.enable(2),f.logarithmicDepthBuffer&&a.enable(3),f.reversedDepthBuffer&&a.enable(4),f.skinning&&a.enable(5),f.morphTargets&&a.enable(6),f.morphNormals&&a.enable(7),f.morphColors&&a.enable(8),f.premultipliedAlpha&&a.enable(9),f.shadowMapEnabled&&a.enable(10),f.doubleSided&&a.enable(11),f.flipSided&&a.enable(12),f.useDepthPacking&&a.enable(13),f.dithering&&a.enable(14),f.transmission&&a.enable(15),f.sheen&&a.enable(16),f.opaque&&a.enable(17),f.pointsUvs&&a.enable(18),f.decodeVideoTexture&&a.enable(19),f.decodeVideoTextureEmissive&&a.enable(20),f.alphaToCoverage&&a.enable(21),f.numLightProbeGrids>0&&a.enable(22),f.hasPositionAttribute&&a.enable(23),g.push(a.mask)})(_,p),_.push(n.outputColorSpace)),_.push(p.customProgramCacheKey),_.join()},getUniforms:function(p){let _=m[p.type],g;if(_){let f=pi[_];g=Xh.clone(f.uniforms)}else g=p.uniforms;return g},acquireProgram:function(p,_){let g=h.get(_);return g!==void 0?++g.usedTimes:(g=new s0(n,_,p,r),l.push(g),h.set(_,g)),g},releaseProgram:function(p){if(--p.usedTimes===0){let _=l.indexOf(p);l[_]=l[l.length-1],l.pop(),h.delete(p.cacheKey),p.destroy()}},releaseShaderCache:function(p){o.remove(p)},programs:l,dispose:function(){o.dispose()}}}function c0(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function h0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function hu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uu(){let n=[],e=0,t=[],i=[],r=[];function s(o){let c=0;return o.isInstancedMesh&&(c+=2),o.isSkinnedMesh&&(c+=1),c}function a(o,c,l,h,u,m){let d=n[e];return d===void 0?(d={id:o.id,object:o,geometry:c,material:l,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:m},n[e]=d):(d.id=o.id,d.object=o,d.geometry=c,d.material=l,d.materialVariant=s(o),d.groupOrder=h,d.renderOrder=o.renderOrder,d.z=u,d.group=m),e++,d}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(o,c,l,h,u,m,d){d.reversedDepth===!0&&(u=-u);let p=a(o,c,l,h,u,m);l.transmission>0?i.push(p):l.transparent===!0?r.push(p):t.push(p)},unshift:function(o,c,l,h,u,m){let d=a(o,c,l,h,u,m);l.transmission>0?i.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let o=e,c=n.length;o<c;o++){let l=n[o];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(o,c){t.length>1&&t.sort(o||h0),i.length>1&&i.sort(c||hu),r.length>1&&r.sort(c||hu)}}}function u0(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new uu,n.set(e,[r])):t>=i.length?(r=new uu,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function d0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new w,color:new Ne};break;case"SpotLight":t={position:new w,direction:new w,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new w,halfWidth:new w,halfHeight:new w}}return n[e.id]=t,t}}}function p0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3}}return n[e.id]=t,t}}}var m0=0;function f0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function g0(n){let e=new d0,t=p0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new w);let r=new w,s=new Fe,a=new Fe;return{setup:function(o){let c=0,l=0,h=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let u=0,m=0,d=0,p=0,_=0,g=0,f=0,y=0,S=0,A=0,E=0,b=0,I=0,L=0;o.sort(f0);for(let P=0,q=o.length;P<q;P++){let U=o[P],V=U.color,Z=U.intensity,te=U.distance,Y=null;if(U.shadow&&U.shadow.map&&(Y=U.shadow.map.texture.format===sn?U.shadow.map.texture:U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)c+=V.r*Z,l+=V.g*Z,h+=V.b*Z;else if(U.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(U.sh.coefficients[F],Z);L++}else if(U.isSunLight){let F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let X=U.shadow,re=t.get(U);re.shadowIntensity=X.intensity,re.shadowBias=X.bias,re.shadowNormalBias=X.normalBias,re.shadowRadius=X.radius,re.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[m]=re,i.sunShadowMap[m]=Y;let me=X.getViewportCount();for(let Se=0;Se<me;Se++)i.sunShadowMatrix[d+Se]=X.getMatrix(Se),i.sunShadowCascade[d+Se]=X._cascadeData[Se];d+=me,m++}i.sun[u]=F,u++}else if(U.isDirectionalLight){let F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let X=U.shadow,re=t.get(U);re.shadowIntensity=X.intensity,re.shadowBias=X.bias,re.shadowNormalBias=X.normalBias,re.shadowRadius=X.radius,re.shadowMapSize=X.mapSize,i.directionalShadow[p]=re,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=U.shadow.matrix,S++}i.directional[p]=F,p++}else if(U.isSpotLight){let F=e.get(U);F.position.setFromMatrixPosition(U.matrixWorld),F.color.copy(V).multiplyScalar(Z),F.distance=te,F.coneCos=Math.cos(U.angle),F.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),F.decay=U.decay,i.spot[g]=F;let X=U.shadow;if(U.map&&(i.spotLightMap[b]=U.map,b++,X.updateMatrices(U),U.castShadow&&I++),i.spotLightMatrix[g]=X.matrix,U.castShadow){let re=t.get(U);re.shadowIntensity=X.intensity,re.shadowBias=X.bias,re.shadowNormalBias=X.normalBias,re.shadowRadius=X.radius,re.shadowMapSize=X.mapSize,i.spotShadow[g]=re,i.spotShadowMap[g]=Y,E++}g++}else if(U.isRectAreaLight){let F=e.get(U);F.color.copy(V).multiplyScalar(Z),F.halfWidth.set(.5*U.width,0,0),F.halfHeight.set(0,.5*U.height,0),i.rectArea[f]=F,f++}else if(U.isPointLight){let F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),F.distance=U.distance,F.decay=U.decay,U.castShadow){let X=U.shadow,re=t.get(U);re.shadowIntensity=X.intensity,re.shadowBias=X.bias,re.shadowNormalBias=X.normalBias,re.shadowRadius=X.radius,re.shadowMapSize=X.mapSize,re.shadowCameraNear=X.camera.near,re.shadowCameraFar=X.camera.far,i.pointShadow[_]=re,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=U.shadow.matrix,A++}i.point[_]=F,_++}else if(U.isHemisphereLight){let F=e.get(U);F.skyColor.copy(U.color).multiplyScalar(Z),F.groundColor.copy(U.groundColor).multiplyScalar(Z),i.hemi[y]=F,y++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=l,i.ambient[2]=h;let D=i.hash;D.sunLength===u&&D.directionalLength===p&&D.pointLength===_&&D.spotLength===g&&D.rectAreaLength===f&&D.hemiLength===y&&D.numSunShadows===m&&D.numDirectionalShadows===S&&D.numPointShadows===A&&D.numSpotShadows===E&&D.numSpotMaps===b&&D.numLightProbes===L||(i.sun.length=u,i.directional.length=p,i.spot.length=g,i.rectArea.length=f,i.point.length=_,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=d,i.sunShadowCascade.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=E,i.spotShadowMap.length=E,i.spotLightMatrix.length=E+b-I,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=L,D.sunLength=u,D.directionalLength=p,D.pointLength=_,D.spotLength=g,D.rectAreaLength=f,D.hemiLength=y,D.numSunShadows=m,D.numDirectionalShadows=S,D.numPointShadows=A,D.numSpotShadows=E,D.numSpotMaps=b,D.numLightProbes=L,i.version=m0++)},setupView:function(o,c){let l=0,h=0,u=0,m=0,d=0,p=0,_=c.matrixWorldInverse;for(let g=0,f=o.length;g<f;g++){let y=o[g];if(y.isSunLight){let S=i.sun[l];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(_),l++}else if(y.isDirectionalLight){let S=i.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),h++}else if(y.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),m++}else if(y.isRectAreaLight){let S=i.rectArea[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),a.identity(),s.copy(y.matrixWorld),s.premultiply(_),a.extractRotation(s),S.halfWidth.set(.5*y.width,0,0),S.halfHeight.set(0,.5*y.height,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){let S=i.point[u];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),u++}else if(y.isHemisphereLight){let S=i.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(_),p++}}},state:i}}function du(n){let e=new g0(n),t=[],i=[],r=[],s={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,t.length=0,i.length=0,r.length=0},state:s,setupLights:function(){e.setup(t),r.sort((a,o)=>a.priority-o.priority||a.id-o.id)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){a.isLightProbeGrid?r.push(a):t.push(a)},pushShadow:function(a){i.push(a)}}}function _0(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),s;return r===void 0?(s=new du(n),e.set(t,[s])):i>=r.length?(s=new du(n),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}var v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
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
}`,y0=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],S0=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],pu=new Fe,Xr=new w,kl=new w;function M0(n,e,t){let i=new Ti,r=new ne,s=new ne,a=new Je,o=new Qs,c=new ea,l={},h=t.maxTextureSize,u={[On]:Rt,[Rt]:On,[ci]:ci},m=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:v0,fragmentShader:x0}),d=m.clone();d.defines.HORIZONTAL_PASS=1;let p=new dt;p.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new rt(p,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tn;let f=this.type;function y(b,I){let L=e.update(_);m.defines.VSM_SAMPLES!==b.blurSamples&&(m.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,m.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ot(r.x,r.y,{format:sn,type:ui}):b.mapPass.width===b.map.width&&b.mapPass.height===b.map.height||b.mapPass.setSize(b.map.width,b.map.height),m.uniforms.shadow_pass.value=b.map.depthTexture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(I,null,L,m,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(I,null,L,d,_,null)}function S(b,I,L,D){let P=null,q=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(q!==void 0)P=q;else if(P=L.isPointLight===!0?c:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let U=P.uuid,V=I.uuid,Z=l[U];Z===void 0&&(Z={},l[U]=Z);let te=Z[V];te===void 0&&(te=P.clone(),Z[V]=te,I.addEventListener("dispose",E)),P=te}return P.visible=I.visible,P.wireframe=I.wireframe,P.side=D===Un?I.shadowSide!==null?I.shadowSide:I.side:I.shadowSide!==null?I.shadowSide:u[I.side],P.alphaMap=I.alphaMap,P.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,P.map=I.map,P.clipShadows=I.clipShadows,P.clippingPlanes=I.clippingPlanes,P.clipIntersection=I.clipIntersection,P.displacementMap=I.displacementMap,P.displacementScale=I.displacementScale,P.displacementBias=I.displacementBias,P.wireframeLinewidth=I.wireframeLinewidth,P.linewidth=I.linewidth,L.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(n.properties.get(P).light=L),P}function A(b,I,L,D,P,q){if(b.visible===!1)return;if(b.layers.test(P)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&q===Un)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);let V=e.update(b),Z=b.material;if(Array.isArray(Z)){let te=V.groups;for(let Y=0,F=te.length;Y<F;Y++){let X=te[Y],re=Z[X.materialIndex];if(re&&re.visible){let me=S(b,re,D,q);b.onBeforeShadow(n,b,I,L,V,me,X),n.renderBufferDirect(L,null,V,me,b,X),b.onAfterShadow(n,b,I,L,V,me,X)}}}else if(Z.visible){let te=S(b,Z,D,q);b.onBeforeShadow(n,b,I,L,V,te,null),n.renderBufferDirect(L,null,V,te,b,null),b.onAfterShadow(n,b,I,L,V,te,null)}}let U=b.children;for(let V=0,Z=U.length;V<Z;V++)A(U[V],I,L,D,P,q)}function E(b){b.target.removeEventListener("dispose",E);for(let I in l){let L=l[I],D=b.target.uuid;D in L&&(L[D].dispose(),delete L[D])}}this.render=function(b,I,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Yc&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tn);let D=n.getRenderTarget(),P=n.getActiveCubeFace(),q=n.getActiveMipmapLevel(),U=n.state;U.setBlending(nn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let V=f!==this.type;V&&I.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(te=>te.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,te=b.length;Z<te;Z++){let Y=b[Z],F=Y.shadow;if(F===void 0){Re("WebGLShadowMap:",Y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let X=F.getFrameExtents();r.multiply(X),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,F.mapSize.y=s.y));let re=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=re,F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Un){if(Y.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ot(r.x,r.y,{format:sn,type:ui,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),F.map.texture.name=Y.name+".shadowMap",F.map.depthTexture=new Ei(r.x,r.y,wi),F.map.depthTexture.name=Y.name+".shadowMapDepth",F.map.depthTexture.format=zn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=zi,F.map.depthTexture.magFilter=zi}else Y.isPointLight?(F.map=new qr(r.x),F.map.depthTexture=new xr(r.x,Hi)):(F.map=new Ot(r.x,r.y),F.map.depthTexture=new Ei(r.x,r.y,Hi)),F.map.depthTexture.name=Y.name+".shadowMap",F.map.depthTexture.format=zn,this.type===tn?(F.map.depthTexture.compareFunction=re?El:Tl,F.map.depthTexture.minFilter=Wt,F.map.depthTexture.magFilter=Wt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=zi,F.map.depthTexture.magFilter=zi);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget===!0||F.map.width===r.x&&F.map.height===r.y||F.map.setSize(r.x,r.y);let me=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();Y.isPointLight!==!0&&F.updateMatrices(Y,L);let Se=4294967294&F.camera.layers.mask?F.camera.layers:L.layers;for(let K=0;K<me;K++){let se=F.getCamera(K);if(Y.isPointLight){let he=F.camera,oe=F.matrix,ve=Y.distance||he.far;ve!==he.far&&(he.far=ve,he.updateProjectionMatrix()),Xr.setFromMatrixPosition(Y.matrixWorld),he.position.copy(Xr),kl.copy(he.position),kl.add(y0[K]),he.up.copy(S0[K]),he.lookAt(kl),he.updateMatrixWorld(),oe.makeTranslation(-Xr.x,-Xr.y,-Xr.z),pu.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),F._frustum.setFromProjectionMatrix(pu,he.coordinateSystem,he.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,K),n.clear();else{K===0&&(n.setRenderTarget(F.map),n.clear());let he=F.getViewport(K);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),U.viewport(a)}i=F.getFrustum(K),A(I,L,se,Y,Se,this.type)}F.isPointLightShadow!==!0&&this.type===Un&&y(F,L),F.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(D,P,q)}}function b0(n,e){let t=new function(){let T=!1,z=new Je,x=null,v=new Je(0,0,0,0);return{setMask:function(R){x===R||T||(n.colorMask(R,R,R,R),x=R)},setLocked:function(R){T=R},setClear:function(R,G,N,k,J){J===!0&&(R*=k,G*=k,N*=k),z.set(R,G,N,k),v.equals(z)===!1&&(n.clearColor(R,G,N,k),v.copy(z))},reset:function(){T=!1,x=null,v.set(-1,0,0,0)}}},i=new function(){let T=!1,z=!1,x=null,v=null,R=null;return{setReversed:function(G){if(z!==G){let N=e.get("EXT_clip_control");G?N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT):N.clipControlEXT(N.LOWER_LEFT_EXT,N.NEGATIVE_ONE_TO_ONE_EXT),z=G;let k=R;R=null,this.setClear(k)}},getReversed:function(){return z},setTest:function(G){G?oe(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(G){x===G||T||(n.depthMask(G),x=G)},setFunc:function(G){if(z&&(G=Fh[G]),v!==G){switch(G){case Ao:n.depthFunc(n.NEVER);break;case Ro:n.depthFunc(n.ALWAYS);break;case Co:n.depthFunc(n.LESS);break;case pa:n.depthFunc(n.LEQUAL);break;case Io:n.depthFunc(n.EQUAL);break;case Po:n.depthFunc(n.GEQUAL);break;case Lo:n.depthFunc(n.GREATER);break;case No:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}v=G}},setLocked:function(G){T=G},setClear:function(G){R!==G&&(R=G,z&&(G=1-G),n.clearDepth(G))},reset:function(){T=!1,x=null,v=null,R=null,z=!1}}},r=new function(){let T=!1,z=null,x=null,v=null,R=null,G=null,N=null,k=null,J=null;return{setTest:function(C){T||(C?oe(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(C){z===C||T||(n.stencilMask(C),z=C)},setFunc:function(C,Q,ae){x===C&&v===Q&&R===ae||(n.stencilFunc(C,Q,ae),x=C,v=Q,R=ae)},setOp:function(C,Q,ae){G===C&&N===Q&&k===ae||(n.stencilOp(C,Q,ae),G=C,N=Q,k=ae)},setLocked:function(C){T=C},setClear:function(C){J!==C&&(n.clearStencil(C),J=C)},reset:function(){T=!1,z=null,x=null,v=null,R=null,G=null,N=null,k=null,J=null}}},s={},a=new WeakMap,o={},c={},l={},h=new WeakMap,u=[],m=null,d=!1,p=null,_=null,g=null,f=null,y=null,S=null,A=null,E=new Ne(0,0,0),b=0,I=!1,L=null,D=null,P=null,q=null,U=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,te=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=te>=1):Y.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=te>=2);let F=null,X={},re=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),Se=new Je().fromArray(re),K=new Je().fromArray(me);function se(T,z,x,v){let R=new Uint8Array(4),G=n.createTexture();n.bindTexture(T,G),n.texParameteri(T,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(T,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let N=0;N<x;N++)T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY?n.texImage3D(z,0,n.RGBA,1,1,v,0,n.RGBA,n.UNSIGNED_BYTE,R):n.texImage2D(z+N,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,R);return G}let he={};function oe(T){o[T]!==!0&&(n.enable(T),o[T]=!0)}function ve(T){o[T]!==!1&&(n.disable(T),o[T]=!1)}he[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),oe(n.DEPTH_TEST),i.setFunc(pa),Ce(!1),H(bo),oe(n.CULL_FACE),Ee(nn);let le={[Fn]:n.FUNC_ADD,[Zc]:n.FUNC_SUBTRACT,[Jc]:n.FUNC_REVERSE_SUBTRACT};le[Kc]=n.MIN,le[Qc]=n.MAX;let Me={[eh]:n.ZERO,[th]:n.ONE,[ih]:n.SRC_COLOR,[rh]:n.SRC_ALPHA,[hh]:n.SRC_ALPHA_SATURATE,[lh]:n.DST_COLOR,[ah]:n.DST_ALPHA,[nh]:n.ONE_MINUS_SRC_COLOR,[sh]:n.ONE_MINUS_SRC_ALPHA,[ch]:n.ONE_MINUS_DST_COLOR,[oh]:n.ONE_MINUS_DST_ALPHA,[uh]:n.CONSTANT_COLOR,[dh]:n.ONE_MINUS_CONSTANT_COLOR,[ph]:n.CONSTANT_ALPHA,[mh]:n.ONE_MINUS_CONSTANT_ALPHA};function Ee(T,z,x,v,R,G,N,k,J,C){if(T!==nn){if(d===!1&&(oe(n.BLEND),d=!0),T===$c)R=R||z,G=G||x,N=N||v,z===_&&R===y||(n.blendEquationSeparate(le[z],le[R]),_=z,y=R),x===g&&v===f&&G===S&&N===A||(n.blendFuncSeparate(Me[x],Me[v],Me[G],Me[N]),g=x,f=v,S=G,A=N),k.equals(E)!==!1&&J===b||(n.blendColor(k.r,k.g,k.b,J),E.copy(k),b=J),p=T,I=!1;else if(T!==p||C!==I){if(_===Fn&&y===Fn||(n.blendEquation(n.FUNC_ADD),_=Fn,y=Fn),C)switch(T){case Gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFunc(n.ONE,n.ONE);break;case Eo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pe("WebGLState: Invalid blending: ",T)}else switch(T){case Gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Eo:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wo:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",T)}g=null,f=null,S=null,A=null,E.set(0,0,0),b=0,p=T,I=C}}else d===!0&&(ve(n.BLEND),d=!1)}function Ce(T){L!==T&&(T?n.frontFace(n.CW):n.frontFace(n.CCW),L=T)}function H(T){T!==jc?(oe(n.CULL_FACE),T!==D&&(T===bo?n.cullFace(n.BACK):T===qc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),D=T}function W(T,z,x){T?(oe(n.POLYGON_OFFSET_FILL),q===z&&U===x||(q=z,U=x,i.getReversed()&&(z=-z,x=-x),n.polygonOffset(z,x))):ve(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:oe,disable:ve,bindFramebuffer:function(T,z){return l[T]!==z&&(n.bindFramebuffer(T,z),l[T]=z,T===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=z),T===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=z),!0)},drawBuffers:function(T,z){let x=u,v=!1;if(T){x=h.get(z),x===void 0&&(x=[],h.set(z,x));let R=T.textures;if(x.length!==R.length||x[0]!==n.COLOR_ATTACHMENT0){for(let G=0,N=R.length;G<N;G++)x[G]=n.COLOR_ATTACHMENT0+G;x.length=R.length,v=!0}}else x[0]!==n.BACK&&(x[0]=n.BACK,v=!0);v&&n.drawBuffers(x)},useProgram:function(T){return m!==T&&(n.useProgram(T),m=T,!0)},setBlending:Ee,setMaterial:function(T,z){T.side===ci?ve(n.CULL_FACE):oe(n.CULL_FACE);let x=T.side===Rt;z&&(x=!x),Ce(x),T.blending===Gr&&T.transparent===!1?Ee(nn):Ee(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),i.setFunc(T.depthFunc),i.setTest(T.depthTest),i.setMask(T.depthWrite),t.setMask(T.colorWrite);let v=T.stencilWrite;r.setTest(v),v&&(r.setMask(T.stencilWriteMask),r.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),r.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),W(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:Ce,setCullFace:H,setLineWidth:function(T){T!==P&&(Z&&n.lineWidth(T),P=T)},setPolygonOffset:W,setScissorTest:function(T){T?oe(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)},activeTexture:function(T){T===void 0&&(T=n.TEXTURE0+V-1),F!==T&&(n.activeTexture(T),F=T)},bindTexture:function(T,z,x){x===void 0&&(x=F===null?n.TEXTURE0+V-1:F);let v=X[x];v===void 0&&(v={type:void 0,texture:void 0},X[x]=v),v.type===T&&v.texture===z||(F!==x&&(n.activeTexture(x),F=x),n.bindTexture(T,z||he[T]),v.type=T,v.texture=z)},unbindTexture:function(){let T=X[F];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(T){Pe("WebGLState:",T)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(T){Pe("WebGLState:",T)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(T){Pe("WebGLState:",T)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(T){Pe("WebGLState:",T)}},pixelStorei:function(T,z){c[T]!==z&&(n.pixelStorei(T,z),c[T]=z)},getParameter:function(T){return c[T]!==void 0?c[T]:n.getParameter(T)},updateUBOMapping:function(T,z){let x=a.get(z);x===void 0&&(x=new WeakMap,a.set(z,x));let v=x.get(T);v===void 0&&(v=n.getUniformBlockIndex(z,T.name),n.uniformBlockBinding(z,v,v),x.set(T,v))},uniformBlockBinding:function(T,z,x){let v=a.get(z).get(T);s[v]!==x&&(n.bindBufferBase(n.UNIFORM_BUFFER,v,x),s[v]=x)},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(T){Pe("WebGLState:",T)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(T){Pe("WebGLState:",T)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(T){Pe("WebGLState:",T)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(T){Pe("WebGLState:",T)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(T){Pe("WebGLState:",T)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(T){Pe("WebGLState:",T)}},scissor:function(T){Se.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),Se.copy(T))},viewport:function(T){K.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),K.copy(T))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),o={},c={},F=null,X={},l={},s={},h=new WeakMap,u=[],m=null,d=!1,p=null,_=null,g=null,f=null,y=null,S=null,A=null,E=new Ne(0,0,0),b=0,I=!1,L=null,D=null,P=null,q=null,U=null,Se.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function T0(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new ne,h=new WeakMap,u=new Set,m,d=new WeakMap,p=new Set,_=new FinalizationRegistry(x=>p.delete(x)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(x,v){return g?new OffscreenCanvas(x,v):lr("canvas")}function y(x,v,R){let G=1,N=z(x);if((N.width>R||N.height>R)&&(G=R/Math.max(N.width,N.height)),G<1){if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let k=Math.floor(G*N.width),J=Math.floor(G*N.height);m===void 0&&(m=f(k,J));let C=v?f(k,J):m;return C.width=k,C.height=J,C.getContext("2d").drawImage(x,0,0,k,J),Re("WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+k+"x"+J+")."),C}return"data"in x&&Re("WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),x}return x}function S(x){return x.generateMipmaps}function A(x){n.generateMipmap(x)}function E(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(x,v,R,G,N,k=!1){if(x!==null){if(n[x]!==void 0)return n[x];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let J;G&&(J=e.get("EXT_texture_norm16"),J||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let C=v;if(v===n.RED&&(R===n.FLOAT&&(C=n.R32F),R===n.HALF_FLOAT&&(C=n.R16F),R===n.UNSIGNED_BYTE&&(C=n.R8),R===n.UNSIGNED_SHORT&&J&&(C=J.R16_EXT),R===n.SHORT&&J&&(C=J.R16_SNORM_EXT)),v===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(C=n.R8UI),R===n.UNSIGNED_SHORT&&(C=n.R16UI),R===n.UNSIGNED_INT&&(C=n.R32UI),R===n.BYTE&&(C=n.R8I),R===n.SHORT&&(C=n.R16I),R===n.INT&&(C=n.R32I)),v===n.RG&&(R===n.FLOAT&&(C=n.RG32F),R===n.HALF_FLOAT&&(C=n.RG16F),R===n.UNSIGNED_BYTE&&(C=n.RG8),R===n.UNSIGNED_SHORT&&J&&(C=J.RG16_EXT),R===n.SHORT&&J&&(C=J.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(C=n.RG8UI),R===n.UNSIGNED_SHORT&&(C=n.RG16UI),R===n.UNSIGNED_INT&&(C=n.RG32UI),R===n.BYTE&&(C=n.RG8I),R===n.SHORT&&(C=n.RG16I),R===n.INT&&(C=n.RG32I)),v===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(C=n.RGB8UI),R===n.UNSIGNED_SHORT&&(C=n.RGB16UI),R===n.UNSIGNED_INT&&(C=n.RGB32UI),R===n.BYTE&&(C=n.RGB8I),R===n.SHORT&&(C=n.RGB16I),R===n.INT&&(C=n.RGB32I)),v===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(C=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(C=n.RGBA16UI),R===n.UNSIGNED_INT&&(C=n.RGBA32UI),R===n.BYTE&&(C=n.RGBA8I),R===n.SHORT&&(C=n.RGBA16I),R===n.INT&&(C=n.RGBA32I)),v===n.RGB&&(R===n.UNSIGNED_SHORT&&J&&(C=J.RGB16_EXT),R===n.SHORT&&J&&(C=J.RGB16_SNORM_EXT),R===n.UNSIGNED_INT_5_9_9_9_REV&&(C=n.RGB9_E5),R===n.UNSIGNED_INT_10F_11F_11F_REV&&(C=n.R11F_G11F_B10F)),v===n.RGBA){let Q=k?bl:je.getTransfer(N);R===n.FLOAT&&(C=n.RGBA32F),R===n.HALF_FLOAT&&(C=n.RGBA16F),R===n.UNSIGNED_BYTE&&(C=Q===Qe?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT&&J&&(C=J.RGBA16_EXT),R===n.SHORT&&J&&(C=J.RGBA16_SNORM_EXT),R===n.UNSIGNED_SHORT_4_4_4_4&&(C=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(C=n.RGB5_A1)}return C!==n.R16F&&C!==n.R32F&&C!==n.RG16F&&C!==n.RG32F&&C!==n.RGBA16F&&C!==n.RGBA32F||e.get("EXT_color_buffer_float"),C}function I(x,v){let R;return x?v===null||v===Hi||v===rn?R=n.DEPTH24_STENCIL8:v===wi?R=n.DEPTH32F_STENCIL8:v===Wr&&(R=n.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hi||v===rn?R=n.DEPTH_COMPONENT24:v===wi?R=n.DEPTH_COMPONENT32F:v===Wr&&(R=n.DEPTH_COMPONENT16),R}function L(x,v){return S(x)===!0||x.isFramebufferTexture&&x.minFilter!==zi&&x.minFilter!==Wt?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function D(x){let v=new WeakRef(x);i.get(x).__ref=v,p.add(v),_.register(x,v,v)}function P(x){let v=i.get(x).__ref;v!==void 0&&(p.delete(v),_.unregister(v))}function q(x){V(x.target)}function U(x){Z(x.target)}function V(x){x.removeEventListener("dispose",q),P(x),(function(v){let R=i.get(v);if(R.__webglInit===void 0)return;let G=v.source,N=d.get(G);if(N){let k=N[R.__cacheKey];k.usedTimes--,k.usedTimes===0&&te(v),Object.keys(N).length===0&&d.delete(G)}i.remove(v)})(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function Z(x){x.removeEventListener("dispose",U),P(x),(function(v){let R=i.get(v);R.__depthDisposeCallback&&R.__depthDisposeCallback();let G=v.depthTexture;if(G&&G.renderTarget===v&&V(G),v.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(R.__webglFramebuffer[k]))for(let J=0;J<R.__webglFramebuffer[k].length;J++)n.deleteFramebuffer(R.__webglFramebuffer[k][J]);else n.deleteFramebuffer(R.__webglFramebuffer[k]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[k])}else{if(Array.isArray(R.__webglFramebuffer))for(let k=0;k<R.__webglFramebuffer.length;k++)n.deleteFramebuffer(R.__webglFramebuffer[k]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let k=0;k<R.__webglColorRenderbuffer.length;k++)R.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[k]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let N=v.textures;for(let k=0,J=N.length;k<J;k++){let C=i.get(N[k]);C.__webglTexture&&(n.deleteTexture(C.__webglTexture),a.memory.textures--),i.remove(N[k])}i.remove(v)})(x)}function te(x){let v=i.get(x);n.deleteTexture(v.__webglTexture);let R=x.source;delete d.get(R)[v.__cacheKey],a.memory.textures--}let Y=0;function F(x,v){let R=i.get(x);if(x.isVideoTexture&&(function(G){let N=a.render.frame;h.get(G)!==N&&(h.set(G,N),G.update())})(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&R.__version!==x.version){let G=x.image;if(G===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else{if(G.complete!==!1)return void oe(R,x,v);Re("WebGLRenderer: Texture marked for update but image is incomplete")}}else x.isExternalTexture&&(R.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+v)}function X(x,v){let R=i.get(x);x.version>0&&R.__version!==x.version?(function(G,N,k){if(N.image.length!==6)return;let J=se(G,N),C=N.source;t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+k);let Q=i.get(C);if(C.version!==Q.__version||J===!0){t.activeTexture(n.TEXTURE0+k);let ae=je.getPrimaries(je.workingColorSpace),ce=N.colorSpace===an?null:je.getPrimaries(N.colorSpace),ie=N.colorSpace===an||ae===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,N.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,N.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Oe=N.isCompressedTexture||N.image[0].isCompressedTexture,ge=N.image[0]&&N.image[0].isDataTexture,xe=[];for(let be=0;be<6;be++)xe[be]=Oe||ge?ge?N.image[be].image:N.image[be]:y(N.image[be],!0,r.maxCubemapSize),xe[be]=T(N,xe[be]);let Ze=xe[0],qe=s.convert(N.format,N.colorSpace),pe=s.convert(N.type),we=b(N.internalFormat,qe,pe,N.normalized,N.colorSpace),ze=N.isVideoTexture!==!0,ht=Q.__version===void 0||J===!0,Ke=C.dataReady,st,at=L(N,Ze);if(K(n.TEXTURE_CUBE_MAP,N),N.isDepthTexture){if(we=I(N.format===Vi,N.type),ht)if(ze)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,we,Ze.width,Ze.height);else for(let be=0;be<6;be++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,we,Ze.width,Ze.height,0,qe,pe,null)}else if(Oe){ze&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,at,we,Ze.width,Ze.height);for(let be=0;be<6;be++){st=xe[be].mipmaps;for(let ke=0;ke<st.length;ke++){let Ve=st[ke];N.format!==Ai?qe!==null?ze?Ke&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke,0,0,Ve.width,Ve.height,qe,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke,we,Ve.width,Ve.height,0,Ve.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?Ke&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke,0,0,Ve.width,Ve.height,qe,pe,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke,we,Ve.width,Ve.height,0,qe,pe,Ve.data)}}}else{if(st=N.mipmaps,ze&&ht){st.length>0&&at++;let be=z(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,at,we,be.width,be.height)}for(let be=0;be<6;be++)if(ge){ze?Ke&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,xe[be].width,xe[be].height,qe,pe,xe[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,we,xe[be].width,xe[be].height,0,qe,pe,xe[be].data);for(let ke=0;ke<st.length;ke++){let Ve=st[ke].image[be].image;ze?Ke&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke+1,0,0,Ve.width,Ve.height,qe,pe,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke+1,we,Ve.width,Ve.height,0,qe,pe,Ve.data)}}else{ze?Ke&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,qe,pe,xe[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,we,qe,pe,xe[be]);for(let ke=0;ke<st.length;ke++){let Ve=st[ke];ze?Ke&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke+1,0,0,qe,pe,Ve.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke+1,we,qe,pe,Ve.image[be])}}}S(N)&&N.mipmapsAutoUpdate===!0&&A(n.TEXTURE_CUBE_MAP),Q.__version=C.version,N.onUpdate&&N.onUpdate(N)}G.__version=N.version})(R,x,v):t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+v)}let re={[vh]:n.REPEAT,[ga]:n.CLAMP_TO_EDGE,[xh]:n.MIRRORED_REPEAT},me={[zi]:n.NEAREST,[yh]:n.NEAREST_MIPMAP_NEAREST,[kr]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[_a]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},Se={[Ch]:n.NEVER,[wl]:n.ALWAYS,[Ih]:n.LESS,[Tl]:n.LEQUAL,[Ph]:n.EQUAL,[El]:n.GEQUAL,[Lh]:n.GREATER,[Nh]:n.NOTEQUAL};function K(x,v){if(v.type!==wi||e.has("OES_texture_float_linear")!==!1||v.magFilter!==Wt&&v.magFilter!==_a&&v.magFilter!==kr&&v.magFilter!==Gi&&v.minFilter!==Wt&&v.minFilter!==_a&&v.minFilter!==kr&&v.minFilter!==Gi||Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,re[v.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,re[v.wrapT]),x!==n.TEXTURE_3D&&x!==n.TEXTURE_2D_ARRAY||n.texParameteri(x,n.TEXTURE_WRAP_R,re[v.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===zi||v.minFilter!==kr&&v.minFilter!==Gi||v.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function se(x,v){let R=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",q),D(v));let G=v.source,N=d.get(G);N===void 0&&(N={},d.set(G,N));let k=(function(J){let C=[];return C.push(J.wrapS),C.push(J.wrapT),C.push(J.wrapR||0),C.push(J.magFilter),C.push(J.minFilter),C.push(J.anisotropy),C.push(J.internalFormat),C.push(J.format),C.push(J.type),C.push(J.generateMipmaps),C.push(J.mipmapsAutoUpdate),C.push(J.premultiplyAlpha),C.push(J.flipY),C.push(J.unpackAlignment),C.push(J.colorSpace),C.join()})(v);if(k!==x.__cacheKey){N[k]===void 0&&(N[k]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,R=!0),N[k].usedTimes++;let J=N[x.__cacheKey];J!==void 0&&(N[x.__cacheKey].usedTimes--,J.usedTimes===0&&te(v)),x.__cacheKey=k,x.__webglTexture=N[k].texture}return R}function he(x,v,R){return Math.floor(Math.floor(x/R)/v)}function oe(x,v,R){let G=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=n.TEXTURE_3D);let N=se(x,v),k=v.source;t.bindTexture(G,x.__webglTexture,n.TEXTURE0+R);let J=i.get(k);if(k.version!==J.__version||N===!0){if(t.activeTexture(n.TEXTURE0+R),!(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)){let pe=je.getPrimaries(je.workingColorSpace),we=v.colorSpace===an?null:je.getPrimaries(v.colorSpace),ze=v.colorSpace===an||pe===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let C=y(v.image,!1,r.maxTextureSize);C=T(v,C);let Q=s.convert(v.format,v.colorSpace),ae=s.convert(v.type),ce,ie=b(v.internalFormat,Q,ae,v.normalized,v.colorSpace,v.isVideoTexture);K(G,v);let Oe=v.mipmaps,ge=v.isVideoTexture!==!0,xe=J.__version===void 0||N===!0,Ze=k.dataReady,qe=L(v,C);if(v.isDepthTexture)ie=I(v.format===Vi,v.type),xe&&(ge?t.texStorage2D(n.TEXTURE_2D,1,ie,C.width,C.height):t.texImage2D(n.TEXTURE_2D,0,ie,C.width,C.height,0,Q,ae,null));else if(v.isDataTexture)if(Oe.length>0){ge&&xe&&t.texStorage2D(n.TEXTURE_2D,qe,ie,Oe[0].width,Oe[0].height);for(let pe=0,we=Oe.length;pe<we;pe++)ce=Oe[pe],ge?Ze&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ce.width,ce.height,Q,ae,ce.data):t.texImage2D(n.TEXTURE_2D,pe,ie,ce.width,ce.height,0,Q,ae,ce.data);v.generateMipmaps=!1}else ge?(xe&&t.texStorage2D(n.TEXTURE_2D,qe,ie,C.width,C.height),Ze&&(function(pe,we,ze,ht){let Ke=pe.updateRanges;if(Ke.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,we.width,we.height,ze,ht,we.data);else{Ke.sort((Ve,bt)=>Ve.start-bt.start);let st=0;for(let Ve=1;Ve<Ke.length;Ve++){let bt=Ke[st],_t=Ke[Ve],ut=bt.start+bt.count,Tt=he(_t.start,we.width,4),mi=he(bt.start,we.width,4);_t.start<=ut+1&&Tt===mi&&he(_t.start+_t.count-1,we.width,4)===Tt?bt.count=Math.max(bt.count,_t.start+_t.count-bt.start):(++st,Ke[st]=_t)}Ke.length=st+1;let at=t.getParameter(n.UNPACK_ROW_LENGTH),be=t.getParameter(n.UNPACK_SKIP_PIXELS),ke=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,we.width);for(let Ve=0,bt=Ke.length;Ve<bt;Ve++){let _t=Ke[Ve],ut=Math.floor(_t.start/4),Tt=Math.ceil(_t.count/4),mi=ut%we.width,O=Math.floor(ut/we.width),Jr=Tt;t.pixelStorei(n.UNPACK_SKIP_PIXELS,mi),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,mi,O,Jr,1,ze,ht,we.data)}pe.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,at),t.pixelStorei(n.UNPACK_SKIP_PIXELS,be),t.pixelStorei(n.UNPACK_SKIP_ROWS,ke)}})(v,C,Q,ae)):t.texImage2D(n.TEXTURE_2D,0,ie,C.width,C.height,0,Q,ae,C.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ge&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,ie,Oe[0].width,Oe[0].height,C.depth);for(let pe=0,we=Oe.length;pe<we;pe++)if(ce=Oe[pe],v.format!==Ai)if(Q!==null)if(ge){if(Ze)if(v.layerUpdates.size>0){let ze=Ol(ce.width,ce.height,v.format,v.type);for(let ht of v.layerUpdates){let Ke=ce.data.subarray(ht*ze/ce.data.BYTES_PER_ELEMENT,(ht+1)*ze/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,ht,ce.width,ce.height,1,Q,Ke)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ce.width,ce.height,C.depth,Q,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,ie,ce.width,ce.height,C.depth,0,ce.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Ze&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ce.width,ce.height,C.depth,Q,ae,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,ie,ce.width,ce.height,C.depth,0,Q,ae,ce.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ge&&xe&&t.texStorage2D(n.TEXTURE_2D,qe,ie,Oe[0].width,Oe[0].height);for(let pe=0,we=Oe.length;pe<we;pe++)ce=Oe[pe],v.format!==Ai?Q!==null?ge?Ze&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,ce.width,ce.height,Q,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,ie,ce.width,ce.height,0,ce.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Ze&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ce.width,ce.height,Q,ae,ce.data):t.texImage2D(n.TEXTURE_2D,pe,ie,ce.width,ce.height,0,Q,ae,ce.data)}else if(v.isDataArrayTexture)if(ge){if(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,ie,C.width,C.height,C.depth),Ze)if(v.layerUpdates.size>0){let pe=Ol(C.width,C.height,v.format,v.type);for(let we of v.layerUpdates){let ze=C.data.subarray(we*pe/C.data.BYTES_PER_ELEMENT,(we+1)*pe/C.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,we,C.width,C.height,1,Q,ae,ze)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,Q,ae,C.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ie,C.width,C.height,C.depth,0,Q,ae,C.data);else if(v.isData3DTexture)ge?(xe&&t.texStorage3D(n.TEXTURE_3D,qe,ie,C.width,C.height,C.depth),Ze&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,Q,ae,C.data)):t.texImage3D(n.TEXTURE_3D,0,ie,C.width,C.height,C.depth,0,Q,ae,C.data);else if(v.isFramebufferTexture){if(xe)if(ge)t.texStorage2D(n.TEXTURE_2D,qe,ie,C.width,C.height);else{let pe=C.width,we=C.height;for(let ze=0;ze<qe;ze++)t.texImage2D(n.TEXTURE_2D,ze,ie,pe,we,0,Q,ae,null),pe>>=1,we>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let pe=n.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),C.parentNode!==pe)return pe.appendChild(C),u.add(v),pe.onpaint=we=>{let ze=we.changedElements;for(let ht of u)ze.includes(ht.image)&&(ht.needsUpdate=!0)},void pe.requestPaint();if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,C);else{let ze=n.RGBA,ht=n.RGBA,Ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ze,ht,Ke,C)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(ge&&xe){let pe=z(Oe[0]);t.texStorage2D(n.TEXTURE_2D,qe,ie,pe.width,pe.height)}for(let pe=0,we=Oe.length;pe<we;pe++)ce=Oe[pe],ge?Ze&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Q,ae,ce):t.texImage2D(n.TEXTURE_2D,pe,ie,Q,ae,ce);v.generateMipmaps=!1}else if(ge){if(xe){let pe=z(C);t.texStorage2D(n.TEXTURE_2D,qe,ie,pe.width,pe.height)}Ze&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q,ae,C)}else t.texImage2D(n.TEXTURE_2D,0,ie,Q,ae,C);S(v)&&v.mipmapsAutoUpdate===!0&&A(G),J.__version=k.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function ve(x,v,R,G,N,k){let J=s.convert(R.format,R.colorSpace),C=s.convert(R.type),Q=b(R.internalFormat,J,C,R.normalized,R.colorSpace),ae=i.get(v),ce=i.get(R);if(ce.__renderTarget=v,!ae.__hasExternalTextures){let ie=Math.max(1,v.width>>k),Oe=Math.max(1,v.height>>k);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?t.texImage3D(N,k,Q,ie,Oe,v.depth,0,J,C,null):t.texImage2D(N,k,Q,ie,Oe,0,J,C,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),W(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,N,ce.__webglTexture,0,H(v)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,N,ce.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(x,v,R){if(n.bindRenderbuffer(n.RENDERBUFFER,x),v.depthBuffer){let G=v.depthTexture,N=G&&G.isDepthTexture?G.type:null,k=I(v.stencilBuffer,N),J=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;W(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,H(v),k,v.width,v.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,H(v),k,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,k,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,x)}else{let G=v.textures;for(let N=0;N<G.length;N++){let k=G[N],J=s.convert(k.format,k.colorSpace),C=s.convert(k.type),Q=b(k.internalFormat,J,C,k.normalized,k.colorSpace);W(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,H(v),Q,v.width,v.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,H(v),Q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Q,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(x,v,R){let G=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,x),!v.depthTexture||!v.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let N=i.get(v.depthTexture);N.__renderTarget=v;let k=G?v.depthTexture.image[0]:v.depthTexture.image;N.__webglTexture&&k.width===v.width&&k.height===v.height||(k.width=v.width,k.height=v.height,v.depthTexture.needsUpdate=!0),G?X(v.depthTexture,0):F(v.depthTexture,0);let J=N.__webglTexture,C=H(v),Q=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+R:n.TEXTURE_2D,ae=v.depthTexture.format===Vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===zn)W(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,Q,J,0,C):n.framebufferTexture2D(n.FRAMEBUFFER,ae,Q,J,0);else{if(v.depthTexture.format!==Vi)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");W(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,Q,J,0,C):n.framebufferTexture2D(n.FRAMEBUFFER,ae,Q,J,0)}}function Ee(x){let v=i.get(x),R=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){let G=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){let N=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",N)};G.addEventListener("dispose",N),v.__depthDisposeCallback=N}v.__boundDepthTexture=G}if(x.depthTexture&&!v.__autoAllocateDepthBuffer)if(R)for(let G=0;G<6;G++)Me(v.__webglFramebuffer[G],x,G);else x.texture.mipmaps.length>0?Me(v.__webglFramebuffer[0],x,0):Me(v.__webglFramebuffer,x,0);else if(R){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=n.createRenderbuffer(),le(v.__webglDepthbuffer[G],x,!1);else{let N=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,k)}}else if(x.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),le(v.__webglDepthbuffer,x,!1);else{let G=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,N=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,N),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,N)}t.bindFramebuffer(n.FRAMEBUFFER,null)}let Ce=[];function H(x){return Math.min(r.maxSamples,x.samples)}function W(x){let v=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function T(x,v){let R=x.colorSpace,G=x.format,N=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||R!==Ta&&R!==an&&(je.getTransfer(R)===Qe?G===Ai&&N===ti||Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",R)),v}function z(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(l.width=x.naturalWidth||x.width,l.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(l.width=x.displayWidth,l.height=x.displayHeight):(l.width=x.width,l.height=x.height),l}this.allocateTextureUnit=function(){let x=Y;return x>=r.maxTextures&&Re("WebGLTextures: Trying to use "+(x+1)+" texture units while this GPU supports only "+r.maxTextures),Y+=1,x},this.resetTextureUnits=function(){Y=0},this.getTextureUnits=function(){return Y},this.setTextureUnits=function(x){Y=x},this.setTexture2D=F,this.setTexture2DArray=function(x,v){let R=i.get(x);x.isRenderTargetTexture===!1&&x.version>0&&R.__version!==x.version?oe(R,x,v):(x.isExternalTexture&&(R.__webglTexture=x.sourceTexture?x.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+v))},this.setTexture3D=function(x,v){let R=i.get(x);x.isRenderTargetTexture===!1&&x.version>0&&R.__version!==x.version?oe(R,x,v):t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+v)},this.setTextureCube=X,this.rebindTextures=function(x,v,R){let G=i.get(x);v!==void 0&&ve(G.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Ee(x)},this.setupRenderTarget=function(x){let v=x.texture,R=i.get(x),G=i.get(v);x.addEventListener("dispose",U),D(x);let N=x.textures,k=x.isWebGLCubeRenderTarget===!0,J=N.length>1;if(J||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=v.version,a.memory.textures++),k){R.__webglFramebuffer=[];for(let C=0;C<6;C++)if(v.mipmaps.length>0){R.__webglFramebuffer[C]=[];for(let Q=0;Q<v.mipmaps.length;Q++)R.__webglFramebuffer[C][Q]=n.createFramebuffer()}else R.__webglFramebuffer[C]=n.createFramebuffer()}else{if(v.mipmaps.length>0){R.__webglFramebuffer=[];for(let C=0;C<v.mipmaps.length;C++)R.__webglFramebuffer[C]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(J)for(let C=0,Q=N.length;C<Q;C++){let ae=i.get(N[C]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&W(x)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let C=0;C<N.length;C++){let Q=N[C];R.__webglColorRenderbuffer[C]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[C]);let ae=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),ie=b(Q.internalFormat,ae,ce,Q.normalized,Q.colorSpace,x.isXRRenderTarget===!0),Oe=H(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ie,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,R.__webglColorRenderbuffer[C])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),le(R.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),K(n.TEXTURE_CUBE_MAP,v);for(let C=0;C<6;C++)if(v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)ve(R.__webglFramebuffer[C][Q],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+C,Q);else ve(R.__webglFramebuffer[C],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);S(v)?A(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(J){for(let C=0,Q=N.length;C<Q;C++){let ae=N[C],ce=i.get(ae),ie=n.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ie=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,ce.__webglTexture),K(ie,ae),ve(R.__webglFramebuffer,x,ae,n.COLOR_ATTACHMENT0+C,ie,0),S(ae)&&A(ie)}t.unbindTexture()}else{let C=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(C=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(C,G.__webglTexture),K(C,v),v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)ve(R.__webglFramebuffer[Q],x,v,n.COLOR_ATTACHMENT0,C,Q);else ve(R.__webglFramebuffer,x,v,n.COLOR_ATTACHMENT0,C,0);S(v)?A(C):v.mipmaps.length>0&&n.texParameteri(C,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}x.depthBuffer&&Ee(x)},this.updateRenderTargetMipmap=function(x){let v=x.textures;for(let R=0,G=v.length;R<G;R++){let N=v[R];if(S(N)&&N.mipmapsAutoUpdate===!0){let k=E(x),J=i.get(N).__webglTexture;t.bindTexture(k,J),A(k),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(x){if(x.samples>0){if(W(x)===!1){let v=x.textures,R=x.width,G=x.height,N=n.COLOR_BUFFER_BIT,k=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=i.get(x),C=v.length>1;if(C)for(let Q=0;Q<v.length;Q++)t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),x.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let Q=0;Q<v.length;Q++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(N|=n.STENCIL_BUFFER_BIT)),C){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,J.__webglColorRenderbuffer[Q]);let ae=i.get(v[Q]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,R,G,0,0,R,G,N,n.NEAREST),c===!0&&(Ce.length=0,Ce.push(n.COLOR_ATTACHMENT0+Q),x.depthBuffer&&x.storeMultisampledDepthBuffer===!1&&Ce.push(k),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),C)for(let Q=0;Q<v.length;Q++){t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,J.__webglColorRenderbuffer[Q]);let ae=i.get(v[Q]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.storeMultisampledDepthBuffer===!1&&c){let v=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}},this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=W,this.dispose=function(){for(let x of p){let v=x.deref();v!==void 0&&(v.isRenderTarget===!0?Z(v):V(v))}p.clear(),u.clear()}}function E0(n,e){return{convert:function(t,i=an){let r,s=je.getTransfer(i);if(t===ti)return n.UNSIGNED_BYTE;if(t===Ho)return n.UNSIGNED_SHORT_4_4_4_4;if(t===Vo)return n.UNSIGNED_SHORT_5_5_5_1;if(t===bh)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===Th)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===Sh)return n.BYTE;if(t===Mh)return n.SHORT;if(t===Wr)return n.UNSIGNED_SHORT;if(t===Go)return n.INT;if(t===Hi)return n.UNSIGNED_INT;if(t===wi)return n.FLOAT;if(t===ui)return n.HALF_FLOAT;if(t===Eh)return n.ALPHA;if(t===wh)return n.RGB;if(t===Ai)return n.RGBA;if(t===zn)return n.DEPTH_COMPONENT;if(t===Vi)return n.DEPTH_STENCIL;if(t===Ah)return n.RED;if(t===ko)return n.RED_INTEGER;if(t===sn)return n.RG;if(t===Wo)return n.RG_INTEGER;if(t===Xo)return n.RGBA_INTEGER;if(t===va||t===xa||t===ya||t===Sa)if(s===Qe){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===jo||t===qo||t===Yo||t===$o){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Zo||t===Jo||t===Ko||t===Qo||t===el||t===Ma||t===tl){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Zo||t===Jo)return s===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Ko)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===Qo)return r.COMPRESSED_R11_EAC;if(t===el)return r.COMPRESSED_SIGNED_R11_EAC;if(t===Ma)return r.COMPRESSED_RG11_EAC;if(t===tl)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===il||t===nl||t===rl||t===sl||t===al||t===ol||t===ll||t===cl||t===hl||t===ul||t===dl||t===pl||t===ml||t===fl){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===il)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===nl)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===rl)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===sl)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===al)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===ol)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===ll)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===cl)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===hl)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===ul)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===dl)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===pl)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===ml)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===fl)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===gl||t===_l||t===vl){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===gl)return s===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===_l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===xl||t===yl||t===ba||t===Sl){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(t===yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===rn?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var w0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A0=`
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

}`,Zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new yr(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new li({vertexShader:w0,fragmentShader:A0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jl=class extends si{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,m=null,d=null,p=null,_=typeof XRWebGLBinding<"u",g=new Zl,f={},y=t.getContextAttributes(),S=null,A=null,E=[],b=[],I=new ne,L=null,D=null,P=new At;P.viewport=new Je;let q=new At;q.viewport=new Je;let U=[P,q],V=new ua,Z=null,te=null;function Y(K){let se=b.indexOf(K.inputSource);if(se===-1)return;let he=E[se];he!==void 0&&(he.update(K.inputSource,K.frame,l||a),he.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",X);for(let K=0;K<E.length;K++){let se=b[K];se!==null&&(b[K]=null,E[K].disconnect(se))}Z=null,te=null,g.reset();for(let K in f)delete f[K];if(e.setRenderTarget(S),d=null,m=null,u=null,r=null,A=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),D!==null){let K=D.camera;K.fov=D.fov,K.zoom=D.zoom,K.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}function X(K){for(let se=0;se<K.removed.length;se++){let he=K.removed[se],oe=b.indexOf(he);oe>=0&&(b[oe]=null,E[oe].disconnect(he))}for(let se=0;se<K.added.length;se++){let he=K.added[se],oe=b.indexOf(he);if(oe===-1){for(let le=0;le<E.length;le++){if(le>=b.length){b.push(he),oe=le;break}if(b[le]===null){b[le]=he,oe=le;break}}if(oe===-1)break}let ve=E[oe];ve&&ve.connect(he)}}function re(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=E[K];return se===void 0&&(se=new Rn,E[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=E[K];return se===void 0&&(se=new Rn,E[K]=se),se.getGripSpace()},this.getHand=function(K){let se=E[K];return se===void 0&&(se=new Rn,E[K]=se),se.getHandSpace()},this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return m!==null?m:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",F),r.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,he=null,oe=null;y.depth&&(oe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=y.stencil?Vi:zn,he=y.stencil?rn:Hi);let ve={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};u=this.getBinding(),m=u.createProjectionLayer(ve),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),A=new Ot(m.textureWidth,m.textureHeight,{format:Ai,type:ti,depthTexture:new Ei(m.textureWidth,m.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Ot(d.framebufferWidth,d.framebufferHeight,{format:Ai,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Se.setContext(r),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()},this.updateCamera=function(K){if(r===null)return;let se=K.near,he=K.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(he=g.depthFar)),V.near=q.near=P.near=se,V.far=q.far=P.far=he,Z===V.near&&te===V.far||(r.updateRenderState({depthNear:V.near,depthFar:V.far}),Z=V.near,te=V.far),V.layers.mask=6|K.layers.mask,P.layers.mask=-5&V.layers.mask,q.layers.mask=-3&V.layers.mask;let oe=K.parent,ve=V.cameras;re(V,oe);for(let le=0;le<ve.length;le++)re(ve[le],oe);V.projectionMatrix.copy(P.projectionMatrix),V.projectionMatrixInverse.copy(P.projectionMatrixInverse),D===null&&K.isPerspectiveCamera&&(D={camera:K,fov:K.fov,zoom:K.zoom}),(function(le,Me,Ee){Ee===null?le.matrix.copy(Me.matrixWorld):(le.matrix.copy(Ee.matrixWorld),le.matrix.invert(),le.matrix.multiply(Me.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Me.projectionMatrix),le.projectionMatrixInverse.copy(Me.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=2*wn*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)})(K,V,oe)},this.getCamera=function(){return V},this.getFoveation=function(){if(m!==null||d!==null)return c},this.setFoveation=function(K){c=K,m!==null&&(m.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(K){return f[K]};let me=null,Se=new mu;Se.setAnimationLoop(function(K,se){if(h=se.getViewerPose(l||a),p=se,h!==null){let he=h.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let oe=!1;he.length!==V.cameras.length&&(V.cameras.length=0,oe=!0);for(let le=0;le<he.length;le++){let Me=he[le],Ee=null;if(d!==null)Ee=d.getViewport(Me);else{let H=u.getViewSubImage(m,Me);Ee=H.viewport,le===0&&(e.setRenderTargetTextures(A,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(A))}let Ce=U[le];Ce===void 0&&(Ce=new At,Ce.layers.enable(le),Ce.viewport=new Je,U[le]=Ce),Ce.matrix.fromArray(Me.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Me.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),le===0&&(V.matrix.copy(Ce.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),oe===!0&&V.cameras.push(Ce)}let ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let le=u.getDepthInformation(he[0]);le&&le.isValid&&le.texture&&g.init(le,r.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let le=0;le<he.length;le++){let Me=he[le].camera;if(Me){let Ee=f[Me];Ee||(Ee=new yr,f[Me]=Ee);let Ce=u.getCameraImage(Me);Ee.sourceTexture=Ce}}}}for(let he=0;he<E.length;he++){let oe=b[he],ve=E[he];oe!==null&&ve!==void 0&&ve.update(oe,se,l||a)}me&&me(K,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),p=null}),this.setAnimationLoop=function(K){me=K},this.dispose=function(){}}},R0=new Fe,Mu=new De;function C0(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Rt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Rt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(r.envMap.value=o,r.envMapRotation.value.setFromMatrix4(R0.makeRotationFromEuler(c)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&r.envMapRotation.value.premultiply(Mu),r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Dl(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,c){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?i(r,s):s.isMeshLambertMaterial?(i(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(r,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(r,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.diffuseRoughness>0&&(l.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(l.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,l.diffuseRoughnessMapTransform))),h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Rt&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.retroreflectivity>0&&(l.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,l.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(r,s,c)):s.isMeshMatcapMaterial?(i(r,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(l,h,u,m){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*m,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function I0(n,e,t,i){let r={},s={};function a(u,m,d,p){if((function(_,g,f,y){let S=_.value,A=g+"_"+f;if(Array.isArray(S)){y[A]===void 0&&(y[A]=[]);let E=y[A],b=!1;for(let I=0;I<S.length;I++)c(S[I],E,I)===!0&&(b=!0);return b}return c(S,y,A)})(u,m,d,p)===!0){let _=u.__offset,g=u.value;if(Array.isArray(g)){let f=0;for(let y=0;y<g.length;y++){let S=g[y],A=l(S,!0);o(S,u.__data,f),f+=A.storage/Float32Array.BYTES_PER_ELEMENT}}else o(g,u.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,u.__data)}}function o(u,m,d){typeof u=="number"||typeof u=="boolean"?m[d]=u:u.isMatrix3?(m[d]=u.elements[0],m[d+1]=u.elements[1],m[d+2]=u.elements[2],m[d+3]=0,m[d+4]=u.elements[3],m[d+5]=u.elements[4],m[d+6]=u.elements[5],m[d+7]=0,m[d+8]=u.elements[6],m[d+9]=u.elements[7],m[d+10]=u.elements[8],m[d+11]=0):ArrayBuffer.isView(u)?m.set(u.subarray(0,m.length-d),d):u.toArray(m,d)}function c(u,m,d){if(m[d]===void 0)return typeof u=="number"||typeof u=="boolean"?m[d]=u:ArrayBuffer.isView(u)?m[d]=u.slice():m[d]=u.clone(),!0;{let p=m[d];if(typeof u=="number"||typeof u=="boolean"){if(p!==u)return m[d]=u,!0}else{if(ArrayBuffer.isView(u))return!0;if(p.equals(u)===!1)return p.copy(u),!0}}return!1}function l(u,m){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=16,d.storage=48):u.isMatrix4?(d.boundary=16,d.storage=64):u.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(u)?(d.boundary=16,d.storage=u.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",u),m===!0&&(d.boundary=16,d.storage=16*Math.ceil(d.storage/16)),d}function h(u){let m=u.target;m.removeEventListener("dispose",h),n.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}return{bind:function(u,m){let d=m.program;i.uniformBlockBinding(u,d,r[u.id])},update:function(u,m){let d=r[u.id];d===void 0&&((function(g){let f=g.uniforms,y=0,S=16;for(let E=0,b=f.length;E<b;E++){let I=Array.isArray(f[E])?f[E]:[f[E]];for(let L=0,D=I.length;L<D;L++){let P=I[L],q=Array.isArray(P.value)?P.value:[P.value],U=Array.isArray(f[E])||Array.isArray(P.value),V=y;for(let te=0,Y=q.length;te<Y;te++){let F=l(q[te],U),X=y%S,re=X%F.boundary,me=X+re;y+=re,me!==0&&S-me<F.storage&&(y+=S-me),te===0&&(V=y),y+=F.storage}let Z=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new Z((y-V)/Float32Array.BYTES_PER_ELEMENT),P.__offset=V}}let A=y%S;A>0&&(y+=S-A),g.__size=y,g.__cache={}})(u),d=(function(g){let f=n.createBuffer(),y=g.__size,S=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,f),n.bufferData(n.UNIFORM_BUFFER,y,S),n.bindBuffer(n.UNIFORM_BUFFER,null),f})(u),r[u.id]=d,u.addEventListener("dispose",h));let p=m.program;i.updateUBOMapping(u,p);let _=e.render.frame;s[u.id]!==_&&((function(g){let f=r[g.id],y=g.uniforms,S=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,f);for(let A=0,E=y.length;A<E;A++){let b=y[A];if(Array.isArray(b))for(let I=0,L=b.length;I<L;I++)a(b[I],A,I,S);else a(b,A,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)})(u),s[u.id]=_)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);r={},s={}}}}Mu.set(-1,0,0,0,1,0,0,0,1);var P0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function L0(){return di===null&&(di=new pr(P0,16,16,sn,ui),di.name="DFG_LUT",di.minFilter=Wt,di.magFilter=Wt,di.wrapS=ga,di.wrapT=ga,di.generateMipmaps=!1,di.needsUpdate=!0),di}var Aa=class{constructor(e={}){let{canvas:t=Dh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:m=!1,outputBufferType:d=ti}=e,p;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let _=d,g=new Set([Xo,Wo,ko]),f=new Set([ti,Hi,Wr,rn,Ho,Vo]),y=new Uint32Array(4),S=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},E=null,b=null,I=[],L=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,q=!1,U=null,V=null,Z=null,te=null;this._outputColorSpace=Gn;let Y=0,F=0,X=null,re=-1,me=null,Se=new Je,K=new Je,se=null,he=new Ne(0),oe=0,ve=t.width,le=t.height,Me=1,Ee=null,Ce=null,H=new Je(0,0,ve,le),W=new Je(0,0,ve,le),T=!1,z=new Ti,x=new gr,v=!1,R=!1,G=new Fe,N=new w,k=new Je,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},C=!1;function Q(){return X===null?Me:1}let ae,ce,ie,Oe,ge,xe,Ze,qe,pe,we,ze,ht,Ke,st,at,be,ke,Ve,bt,_t,ut,Tt,mi,O=i;function Jr(M,B){return t.getContext(M,B)}try{let M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Na,!1),t.addEventListener("webglcontextrestored",Da,!1),t.addEventListener("webglcontextcreationerror",Ua,!1),O===null){let B="webgl2";if(O=Jr(B,M),O===null)throw Jr(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}La()}catch(M){throw t.removeEventListener("webglcontextlost",Na,!1),t.removeEventListener("webglcontextrestored",Da,!1),t.removeEventListener("webglcontextcreationerror",Ua,!1),Pe("WebGLRenderer: "+M.message),M}function La(){ae=new Wf(O),ae.init(),ut=new E0(O,ae),ce=new Of(O,ae,e,ut),ie=new b0(O,ae),ce.reversedDepthBuffer&&m&&ie.buffers.depth.setReversed(!0),V=O.createFramebuffer(),Z=O.createFramebuffer(),te=O.createFramebuffer(),Oe=new qf(O),ge=new c0,xe=new T0(O,ae,ie,ge,ce,ut,Oe),Ze=new kf(P),qe=new Jd(O),Tt=new Df(O,qe),pe=new Xf(O,qe,Oe,Tt),we=new $f(O,pe,qe,Tt,Oe),Ve=new Yf(O,ce,xe),at=new Ff(ge),ze=new l0(P,Ze,ae,ce,Tt,at),ht=new C0(P,ge),Ke=new u0,st=new _0(ae),ke=new Nf(P,Ze,ie,we,p,c),be=new M0(P,we,ce),mi=new I0(O,Oe,ce,ie),bt=new Uf(O,ae,Oe),_t=new jf(O,ae,Oe),Oe.programs=ze.programs,P.capabilities=ce,P.extensions=ae,P.properties=ge,P.renderLists=Ke,P.shadowMap=be,P.state=ie,P.info=Oe}_!==ti&&(D=new Jf(_,t.width,t.height,o,r,s));let pt=new Jl(P,O);function Na(M){M.preventDefault(),Cl("WebGLRenderer: Context Lost."),q=!0}function Da(){Cl("WebGLRenderer: Context Restored."),q=!1;let M=Oe.autoReset,B=be.enabled,j=be.autoUpdate,ee=be.needsUpdate,$=be.type;La(),Oe.autoReset=M,be.enabled=B,be.autoUpdate=j,be.needsUpdate=ee,be.type=$}function Ua(M){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Kl(M){let B=M.target;B.removeEventListener("dispose",Kl),(function(j){(function(ee){let $=ge.get(ee).programs;$!==void 0&&($.forEach(function(ue){ze.releaseProgram(ue)}),ee.isShaderMaterial&&ze.releaseShaderCache(ee))})(j),ge.remove(j)})(B)}function Ql(M,B,j,ee){U!==null&&M.isNodeMaterial&&U.setObject(ee,M),v===!0&&at.setState(M,j,!1),M.transparent===!0&&M.side===ci&&M.forceSinglePass===!1?(M.side=Rt,M.needsUpdate=!0,jn(M,B,ee),M.side=On,M.needsUpdate=!0,jn(M,B,ee),M.side=ci):jn(M,B,ee)}this.xr=pt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(M){M!==void 0&&(Me=M,this.setSize(ve,le,!1))},this.getSize=function(M){return M.set(ve,le)},this.setSize=function(M,B,j=!0){pt.isPresenting?Re("WebGLRenderer: Can't change size while VR device is presenting."):(ve=M,le=B,t.width=Math.floor(M*Me),t.height=Math.floor(B*Me),j===!0&&(t.style.width=M+"px",t.style.height=B+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,M,B))},this.getDrawingBufferSize=function(M){return M.set(ve*Me,le*Me).floor()},this.setDrawingBufferSize=function(M,B,j){ve=M,le=B,Me=j,t.width=Math.floor(M*j),t.height=Math.floor(B*j),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(_!==ti){if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(M||[])}else Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(M){return M.copy(Se)},this.getViewport=function(M){return M.copy(H)},this.setViewport=function(M,B,j,ee){M.isVector4?H.set(M.x,M.y,M.z,M.w):H.set(M,B,j,ee),ie.viewport(Se.copy(H).multiplyScalar(Q()).round())},this.getScissor=function(M){return M.copy(W)},this.setScissor=function(M,B,j,ee){M.isVector4?W.set(M.x,M.y,M.z,M.w):W.set(M,B,j,ee),ie.scissor(K.copy(W).multiplyScalar(Q()).round())},this.getScissorTest=function(){return T},this.setScissorTest=function(M){ie.setScissorTest(T=M)},this.setOpaqueSort=function(M){Ee=M},this.setTransparentSort=function(M){Ce=M},this.getClearColor=function(M){return M.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,j=!0){let ee=0;if(M){let $=!1;if(X!==null){let ue=X.texture.format;$=g.has(ue)}if($){let ue=X.texture.type,fe=f.has(ue),_e=ke.getClearColor(),ye=ke.getClearAlpha(),Ae=_e.r,Ye=_e.g,$e=_e.b;fe?(y[0]=Ae,y[1]=Ye,y[2]=$e,y[3]=ye,O.clearBufferuiv(O.COLOR,0,y)):(S[0]=Ae,S[1]=Ye,S[2]=$e,S[3]=ye,O.clearBufferiv(O.COLOR,0,S))}else ee|=O.COLOR_BUFFER_BIT}B&&(ee|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Na,!1),t.removeEventListener("webglcontextrestored",Da,!1),t.removeEventListener("webglcontextcreationerror",Ua,!1),ke.dispose(),Ke.dispose(),st.dispose(),xe.dispose(),ge.dispose(),Ze.dispose(),we.dispose(),pe.dispose(),Tt.dispose(),mi.dispose(),ze.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",ec),pt.removeEventListener("sessionend",tc),ki.stop()},this.renderBufferDirect=function(M,B,j,ee,$,ue){B===null&&(B=J);let fe=$.isMesh&&$.matrixWorld.determinantAffine()<0,_e=(function(Xe,it,Mt,Le,Ue){it.isScene!==!0&&(it=J),xe.resetTextureUnits();let jt=it.fog,Ba=Le.isMeshStandardMaterial||Le.isMeshLambertMaterial||Le.isMeshPhongMaterial?it.environment:null,qn=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:je.workingColorSpace,Yn=Le.isMeshStandardMaterial||Le.isMeshLambertMaterial&&!Le.envMap||Le.isMeshPhongMaterial&&!Le.envMap,ii=Ze.get(Le.envMap||Ba,Yn),cn=Le.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,fi=!!Mt.attributes.tangent&&(!!Le.normalMap||Le.anisotropy>0),za=!!Mt.morphAttributes.position,hn=!!Mt.morphAttributes.normal,Tu=!!Mt.morphAttributes.color,Ga=hi;Le.toneMapped&&(X!==null&&X.isXRRenderTarget!==!0||(Ga=P.toneMapping));let cc=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,Eu=cc!==void 0?cc.length:0,Be=ge.get(Le),gi=b.state.lights;if(v===!0&&(R===!0||Xe!==me)){let et=Xe===me&&Le.id===re;at.setState(Le,Xe,et)}let qt=!1,Ha=!1;Le.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==gi.state.version||Ue.isBatchedMesh&&Be.batching===!1?qt=!0:Ue.isBatchedMesh||Be.batching!==!0?Ue.isBatchedMesh&&Be.batchingColor===!0&&Ue._colorsTexture===null||Ue.isBatchedMesh&&Be.batchingColor===!1&&Ue._colorsTexture!==null||Ue.isInstancedMesh&&Be.instancing===!1?qt=!0:Ue.isInstancedMesh||Be.instancing!==!0?Ue.isSkinnedMesh&&Be.skinning===!1?qt=!0:Ue.isSkinnedMesh||Be.skinning!==!0?Ue.isInstancedMesh&&Be.instancingColor===!0&&Ue.instanceColor===null||Ue.isInstancedMesh&&Be.instancingColor===!1&&Ue.instanceColor!==null||Ue.isInstancedMesh&&Be.instancingMorph===!0&&Ue.morphTexture===null||Ue.isInstancedMesh&&Be.instancingMorph===!1&&Ue.morphTexture!==null||Be.envMap!==ii||Le.fog===!0&&Be.fog!==jt?qt=!0:Be.numClippingPlanes===void 0||Be.numClippingPlanes===at.numPlanes&&Be.numIntersection===at.numIntersection?Be.vertexAlphas!==cn||Be.vertexTangents!==fi||Be.morphTargets!==za||Be.morphNormals!==hn||Be.morphColors!==Tu||Be.morphTargetsCount!==Eu||Be.numLightProbeGrids!==sc(b.state.lightProbeGridArray)?qt=!0:Be.outputColorSpace===qn&&Be.toneMapping===Ga||(Ha=!0):qt=!0:qt=!0:qt=!0:qt=!0:(qt=!0,Be.__version=Le.version);let Ri=Be.currentProgram;qt!==!0&&Ha!==!0||(Ri=Ha===!0?(function(et,Gt,Yt,Zn,uc){let Wi=ge.get(et),dc=Wi.currentProgram.id+","+Zn+","+uc,Jn=Wi.programVariants.get(dc);return Jn===void 0?(Jn=jn(et,Gt,Yt),Wi.programVariants.set(dc,Jn)):(Wi.currentProgram=Jn,Wi.uniformsList=null,Wi.outputColorSpace=Zn,Wi.toneMapping=uc),Jn})(Le,it,Ue,qn,Ga):jn(Le,it,Ue),U&&Le.isNodeMaterial&&U.onUpdateProgram(Le,Ri,Be));let hc=!1,$n=!1,Va=!1,nt=Ri.getUniforms(),Bt=Be.uniforms;if(ie.useProgram(Ri.program)&&(hc=!0,$n=!0,Va=!0),Le.id!==re&&(re=Le.id,$n=!0),hc||me!==Xe){ie.buffers.depth.getReversed()&&Xe.reversedDepth!==!0&&(Xe._reversedDepth=!0,Xe.updateProjectionMatrix()),nt.setValue(O,"projectionMatrix",Xe.projectionMatrix),nt.setValue(O,"viewMatrix",Xe.matrixWorldInverse);let et=nt.map.cameraPosition;et!==void 0&&et.setValue(O,N.setFromMatrixPosition(Xe.matrixWorld)),ce.logarithmicDepthBuffer&&nt.setValue(O,"logDepthBufFC",2/(Math.log(Xe.far+1)/Math.LN2)),(Le.isMeshPhongMaterial||Le.isMeshToonMaterial||Le.isMeshLambertMaterial||Le.isMeshBasicMaterial||Le.isMeshStandardMaterial||Le.isShaderMaterial)&&nt.setValue(O,"isOrthographic",Xe.isOrthographicCamera===!0),me!==Xe&&(me=Xe,$n=!0,Va=!0)}if(Be.needsLights&&(gi.state.sunShadowMap.length>0&&nt.setValue(O,"sunShadowMap",gi.state.sunShadowMap,xe),gi.state.directionalShadowMap.length>0&&nt.setValue(O,"directionalShadowMap",gi.state.directionalShadowMap,xe),gi.state.spotShadowMap.length>0&&nt.setValue(O,"spotShadowMap",gi.state.spotShadowMap,xe),gi.state.pointShadowMap.length>0&&nt.setValue(O,"pointShadowMap",gi.state.pointShadowMap,xe)),Ue.isSkinnedMesh){nt.setOptional(O,Ue,"bindMatrix"),nt.setOptional(O,Ue,"bindMatrixInverse");let et=Ue.skeleton;et&&(et.boneTexture===null&&et.computeBoneTexture(),nt.setValue(O,"boneTexture",et.boneTexture,xe))}Ue.isBatchedMesh&&(nt.setOptional(O,Ue,"batchingTexture"),nt.setValue(O,"batchingTexture",Ue._matricesTexture,xe),nt.setOptional(O,Ue,"batchingIdTexture"),nt.setValue(O,"batchingIdTexture",Ue._indirectTexture,xe),nt.setOptional(O,Ue,"batchingColorTexture"),Ue._colorsTexture!==null&&nt.setValue(O,"batchingColorTexture",Ue._colorsTexture,xe));let ka=Mt.morphAttributes;if(ka.position===void 0&&ka.normal===void 0&&ka.color===void 0||Ve.update(Ue,Mt,Ri),($n||Be.receiveShadow!==Ue.receiveShadow)&&(Be.receiveShadow=Ue.receiveShadow,nt.setValue(O,"receiveShadow",Ue.receiveShadow)),(Le.isMeshStandardMaterial||Le.isMeshLambertMaterial||Le.isMeshPhongMaterial)&&Le.envMap===null&&it.environment!==null&&(Bt.envMapIntensity.value=it.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=L0()),$n){if(nt.setValue(O,"toneMappingExposure",P.toneMappingExposure),Be.needsLights&&(Lt=Va,(zt=Bt).ambientLightColor.needsUpdate=Lt,zt.lightProbe.needsUpdate=Lt,zt.sunLights.needsUpdate=Lt,zt.sunLightShadows.needsUpdate=Lt,zt.directionalLights.needsUpdate=Lt,zt.directionalLightShadows.needsUpdate=Lt,zt.pointLights.needsUpdate=Lt,zt.pointLightShadows.needsUpdate=Lt,zt.spotLights.needsUpdate=Lt,zt.spotLightShadows.needsUpdate=Lt,zt.rectAreaLights.needsUpdate=Lt,zt.hemisphereLights.needsUpdate=Lt),jt&&Le.fog===!0&&ht.refreshFogUniforms(Bt,jt),ht.refreshMaterialUniforms(Bt,Le,Me,le,b.state.transmissionRenderTarget[Xe.id]),Be.needsLights&&Be.numLightProbeGrids>0){let et=A,Gt=0;for(let Yt of b.state.lightProbeGridArray)Yt.texture!==null&&(et.textures[Gt]=Yt.texture,et.min[Gt]=Yt.boundingBox.min,et.max[Gt]=Yt.boundingBox.max,et.resolution[Gt]=Yt.resolution,Gt++);for(let Yt in et)et[Yt].length=Gt;Bt.probesSH.value=et.textures,Bt.probesMin.value=et.min,Bt.probesMax.value=et.max,Bt.probesResolution.value=et.resolution}Vn.upload(O,ac(Be),Bt,xe)}var zt,Lt;if(Le.isShaderMaterial&&Le.uniformsNeedUpdate===!0&&(Vn.upload(O,ac(Be),Bt,xe),Le.uniformsNeedUpdate=!1),Le.isSpriteMaterial&&nt.setValue(O,"center",Ue.center),nt.setValue(O,"modelViewMatrix",Ue.modelViewMatrix),nt.setValue(O,"normalMatrix",Ue.normalMatrix),nt.setValue(O,"modelMatrix",Ue.matrixWorld),Le.uniformsGroups!==void 0){let et=Le.uniformsGroups;for(let Gt=0,Yt=et.length;Gt<Yt;Gt++){let Zn=et[Gt];mi.update(Zn,Ri),mi.bind(Zn,Ri)}}return Ri})(M,B,j,ee,$);ie.setMaterial(ee,fe);let ye=j.index,Ae=1;if(ee.wireframe===!0){if(ye=pe.getWireframeAttribute(j),ye===void 0)return;Ae=2}let Ye=j.drawRange,$e=j.attributes.position,Te=Ye.start*Ae,We=(Ye.start+Ye.count)*Ae;ue!==null&&(Te=Math.max(Te,ue.start*Ae),We=Math.min(We,(ue.start+ue.count)*Ae)),ye!==null?(Te=Math.max(Te,0),We=Math.min(We,ye.count)):$e!=null&&(Te=Math.max(Te,0),We=Math.min(We,$e.count));let vt=We-Te;if(vt<0||vt===1/0)return;let ot;Tt.setup($,ee,_e,j,ye);let lt=bt;if(ye!==null&&(ot=qe.get(ye),lt=_t,lt.setIndex(ot)),$.isMesh)ee.wireframe===!0?(ie.setLineWidth(ee.wireframeLinewidth*Q()),lt.setMode(O.LINES)):lt.setMode(O.TRIANGLES);else if($.isLine){let Xe=ee.linewidth;Xe===void 0&&(Xe=1),ie.setLineWidth(Xe*Q()),$.isLineSegments?lt.setMode(O.LINES):$.isLineLoop?lt.setMode(O.LINE_LOOP):lt.setMode(O.LINE_STRIP)}else $.isPoints?lt.setMode(O.POINTS):$.isSprite&&lt.setMode(O.TRIANGLES);if($.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))lt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Xe=$._multiDrawStarts,it=$._multiDrawCounts,Mt=$._multiDrawCount,Le=ye?qe.get(ye).bytesPerElement:1,Ue=ge.get(ee).currentProgram.getUniforms();for(let jt=0;jt<Mt;jt++)Ue.setValue(O,"_gl_DrawID",jt),lt.render(Xe[jt]/Le,it[jt])}else if($.isInstancedMesh)lt.renderInstances(Te,vt,$.count);else if(j.isInstancedBufferGeometry){let Xe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,it=Math.min(j.instanceCount,Xe);lt.renderInstances(Te,vt,it)}else lt.render(Te,vt)},this.compile=function(M,B,j=null){j===null&&(j=M),U!==null&&U.renderStart(M,B,j),b=st.get(j),b.init(B),L.push(b),j.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),M!==j&&M.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),R=this.localClippingEnabled,v=at.init(this.clippingPlanes,R),v===!0&&at.setGlobalState(this.clippingPlanes,B),U!==null&&be.render(b.state.shadowsArray,j,B);let ee=new Set;return M.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let ue=$.material;if(ue)if(Array.isArray(ue))for(let fe=0;fe<ue.length;fe++){let _e=ue[fe];Ql(_e,j,B,$),ee.add(_e)}else Ql(ue,j,B,$),ee.add(ue)}),b=L.pop(),U!==null&&U.renderEnd(),ee},this.compileAsync=function(M,B,j=null){let ee=this.compile(M,B,j);return new Promise($=>{function ue(){ee.forEach(function(fe){let _e=ge.get(fe).currentProgram;(_e===void 0||_e.isReady())&&ee.delete(fe)}),ee.size!==0?setTimeout(ue,10):$(M)}ae.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Oa=null;function ec(){ki.stop()}function tc(){ki.start()}let ki=new mu;function Fa(M,B,j,ee){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){let ue=B.isArrayCamera?x:z;if(!M.frustumCulled||M.intersectsFrustum(ue)){ee&&k.setFromMatrixPosition(M.matrixWorld).applyMatrix4(G);let fe=we.update(M),_e=M.material;_e.visible&&E.push(M,fe,_e,j,k.z,null,B)}}else if(M.isMesh||M.isLine||M.isPoints){let ue=B.isArrayCamera?x:z;if(!M.frustumCulled||M.intersectsFrustum(ue)){let fe=we.update(M),_e=M.material;if(ee&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),k.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),k.copy(fe.boundingSphere.center)),k.applyMatrix4(M.matrixWorld).applyMatrix4(G)),Array.isArray(_e)){let ye=fe.groups;for(let Ae=0,Ye=ye.length;Ae<Ye;Ae++){let $e=ye[Ae],Te=_e[$e.materialIndex];Te&&Te.visible&&E.push(M,fe,Te,j,k.z,$e,B)}}else _e.visible&&E.push(M,fe,_e,j,k.z,null,B)}}}let $=M.children;for(let ue=0,fe=$.length;ue<fe;ue++)Fa($[ue],B,j,ee)}function ic(M,B,j,ee){let{opaque:$,transmissive:ue,transparent:fe}=M;b.setupLightsView(j),v===!0&&at.setGlobalState(P.clippingPlanes,j),ee&&ie.viewport(Se.copy(ee)),$.length>0&&Kr($,B,j),ue.length>0&&Kr(ue,B,j),fe.length>0&&Kr(fe,B,j),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function nc(M,B,j,ee){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ee.id]===void 0){let $e=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ee.id]=new Ot(1,1,{generateMipmaps:!0,type:$e?ui:ti,minFilter:Gi,samples:Math.max(4,ce.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let $=b.state.transmissionRenderTarget[ee.id],ue=ee.viewport||Se;$.setSize(ue.z*P.transmissionResolutionScale,ue.w*P.transmissionResolutionScale);let fe=P.getRenderTarget(),_e=P.getActiveCubeFace(),ye=P.getActiveMipmapLevel();P.setRenderTarget($),P.getClearColor(he),oe=P.getClearAlpha(),oe<1&&P.setClearColor(16777215,.5),P.clear(),C&&ke.render(j);let Ae=P.toneMapping;P.toneMapping=hi;let Ye=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),b.setupLightsView(ee),v===!0&&at.setGlobalState(P.clippingPlanes,ee),Kr(M,j,ee),xe.updateMultisampleRenderTarget($),xe.updateRenderTargetMipmap($),ae.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Te=0,We=B.length;Te<We;Te++){let vt=B[Te],{object:ot,geometry:lt,material:Xe,group:it}=vt;if(Xe.side===ci&&ot.layers.test(ee.layers)){let Mt=Xe.side;Xe.side=Rt,Xe.needsUpdate=!0,rc(ot,j,ee,lt,Xe,it),Xe.side=Mt,Xe.needsUpdate=!0,$e=!0}}$e===!0&&(xe.updateMultisampleRenderTarget($),xe.updateRenderTargetMipmap($))}P.setRenderTarget(fe,_e,ye),P.setClearColor(he,oe),Ye!==void 0&&(ee.viewport=Ye),P.toneMapping=Ae}function Kr(M,B,j){let ee=B.isScene===!0?B.overrideMaterial:null;for(let $=0,ue=M.length;$<ue;$++){let fe=M[$],{object:_e,geometry:ye,group:Ae}=fe,Ye=fe.material;Ye.allowOverride===!0&&ee!==null&&(Ye=ee),_e.layers.test(j.layers)&&rc(_e,B,j,ye,Ye,Ae)}}function rc(M,B,j,ee,$,ue){U!==null&&$.isNodeMaterial&&U.setObject(M,$),M.onBeforeRender(P,B,j,ee,$,ue),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(P,B,j,ee,M,ue),$.transparent===!0&&$.side===ci&&$.forceSinglePass===!1?($.side=Rt,$.needsUpdate=!0,P.renderBufferDirect(j,B,ee,$,M,ue),$.side=On,$.needsUpdate=!0,P.renderBufferDirect(j,B,ee,$,M,ue),$.side=ci):P.renderBufferDirect(j,B,ee,$,M,ue),M.onAfterRender(P,B,j,ee,$,ue)}function sc(M){let B=0;for(let j of M)j.texture!==null&&B++;return B}function jn(M,B,j){B.isScene!==!0&&(B=J);let ee=ge.get(M),$=b.state.lights,ue=b.state.shadowsArray,fe=$.state.version,_e=ze.getParameters(M,$.state,ue,B,j,b.state.lightProbeGridArray),ye=ze.getProgramCacheKey(_e),Ae=ee.programs;ee.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,ee.fog=B.fog;let Ye=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;ee.envMap=Ze.get(M.envMap||ee.environment,Ye),ee.envMapRotation=ee.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",Kl),Ae=new Map,ee.programs=Ae,ee.programVariants=new Map);let $e=Ae.get(ye);if($e!==void 0){if(ee.currentProgram===$e&&ee.lightsStateVersion===fe)return oc(M,_e),$e}else _e.uniforms=ze.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,j,_e),M.onBeforeCompile(_e,P),$e=ze.acquireProgram(_e,ye),Ae.set(ye,$e),ee.uniforms=_e.uniforms;let Te=ee.uniforms;return(M.isShaderMaterial||M.isRawShaderMaterial)&&M.clipping!==!0||(Te.clippingPlanes=at.uniform),oc(M,_e),ee.needsLights=(function(We){return We.isMeshLambertMaterial||We.isMeshToonMaterial||We.isMeshPhongMaterial||We.isMeshStandardMaterial||We.isShadowMaterial||We.isShaderMaterial&&We.lights===!0})(M),ee.lightsStateVersion=fe,ee.needsLights&&(Te.ambientLightColor.value=$.state.ambient,Te.lightProbe.value=$.state.probe,Te.sunLights.value=$.state.sun,Te.sunLightShadows.value=$.state.sunShadow,Te.directionalLights.value=$.state.directional,Te.directionalLightShadows.value=$.state.directionalShadow,Te.spotLights.value=$.state.spot,Te.spotLightShadows.value=$.state.spotShadow,Te.rectAreaLights.value=$.state.rectArea,Te.ltc_1.value=$.state.rectAreaLTC1,Te.ltc_2.value=$.state.rectAreaLTC2,Te.pointLights.value=$.state.point,Te.pointLightShadows.value=$.state.pointShadow,Te.hemisphereLights.value=$.state.hemi,Te.sunShadowMatrix.value=$.state.sunShadowMatrix,Te.sunShadowCascade.value=$.state.sunShadowCascade,Te.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Te.spotLightMatrix.value=$.state.spotLightMatrix,Te.spotLightMap.value=$.state.spotLightMap,Te.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.numLightProbeGrids=sc(b.state.lightProbeGridArray),ee.currentProgram=$e,ee.uniformsList=null,$e}function ac(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=Vn.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function oc(M,B){let j=ge.get(M);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function lc(M){let B=ge.get(M);return B.__readFormat===M.format&&B.__readType===M.type||(B.__readFormat=M.format,B.__readType=M.type,B.__formatReadable=ce.textureFormatReadable(M.format),B.__typeReadable=ce.textureTypeReadable(M.type)),B}ki.setAnimationLoop(function(M){Oa&&Oa(M)}),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(M){Oa=M,pt.setAnimationLoop(M),M===null?ki.stop():ki.start()},pt.addEventListener("sessionstart",ec),pt.addEventListener("sessionend",tc),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0)return void Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(q===!0)return;U!==null&&U.renderStart(M,B);let j=pt.enabled===!0&&pt.isPresenting===!0,ee=D!==null&&(X===null||j)&&D.begin(P,X);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),pt.enabled!==!0||pt.isPresenting!==!0||D!==null&&D.isCompositing()!==!1||(pt.cameraAutoUpdate===!0&&pt.updateCamera(B),B=pt.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,B,X),b=st.get(M,L.length),b.init(B),b.state.textureUnits=xe.getTextureUnits(),L.push(b),G.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?x.setFromArrayCamera(B):z.setFromProjectionMatrix(G,Rl,B.reversedDepth),R=this.localClippingEnabled,v=at.init(this.clippingPlanes,R),E=Ke.get(M,I.length),E.init(),I.push(E),this.info.render.frame++,pt.enabled===!0&&pt.isPresenting===!0){let ue=P.xr.getDepthSensingMesh();ue!==null&&Fa(ue,B,-1/0,P.sortObjects)}Fa(M,B,0,P.sortObjects),E.finish(),U!==null&&U.updateLights(b.state.lightsArray),P.sortObjects===!0&&E.sort(Ee,Ce),C=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,C&&ke.addToRenderList(E,M),this.info.autoReset===!0&&this.info.reset(),v===!0&&at.beginShadows();let $=b.state.shadowsArray;if(be.render($,M,B),v===!0&&at.endShadows(),(ee&&D.hasRenderPass())===!1){let ue=E.opaque,fe=E.transmissive;if(b.setupLights(),B.isArrayCamera){let _e=B.cameras;if(fe.length>0)for(let ye=0,Ae=_e.length;ye<Ae;ye++)nc(ue,fe,M,_e[ye]);C&&ke.render(M);for(let ye=0,Ae=_e.length;ye<Ae;ye++){let Ye=_e[ye];ic(E,M,Ye,Ye.viewport)}}else fe.length>0&&nc(ue,fe,M,B),C&&ke.render(M),ic(E,M,B)}X!==null&&F===0&&(xe.updateMultisampleRenderTarget(X),xe.updateRenderTargetMipmap(X)),ee&&D.end(P),M.isScene===!0&&M.onAfterRender(P,M,B),Tt.resetDefaultState(),re=-1,me=null,L.pop(),L.length>0?(b=L[L.length-1],xe.setTextureUnits(b.state.textureUnits),v===!0&&at.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,I.pop(),E=I.length>0?I[I.length-1]:null,U!==null&&U.renderEnd()},this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(M,B,j){let ee=ge.get(M);ee.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),ge.get(M.texture).__webglTexture=B,ge.get(M.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:j,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let j=ge.get(M);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,j=0){X=M,Y=B,F=j;let ee=null,$=!1,ue=!1;if(M){let fe=ge.get(M);if(fe.__useDefaultFramebuffer!==void 0)return ie.bindFramebuffer(O.FRAMEBUFFER,fe.__webglFramebuffer),Se.copy(M.viewport),K.copy(M.scissor),se=M.scissorTest,ie.viewport(Se),ie.scissor(K),ie.setScissorTest(se),void(re=-1);if(fe.__webglFramebuffer===void 0)xe.setupRenderTarget(M);else if(fe.__hasExternalTextures)xe.rebindTextures(M,ge.get(M.texture).__webglTexture,ge.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ae=M.depthTexture;if(fe.__boundDepthTexture!==Ae){if(Ae!==null&&ge.has(Ae)&&(M.width!==Ae.image.width||M.height!==Ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(M)}}let _e=M.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ue=!0);let ye=ge.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(ee=Array.isArray(ye[B])?ye[B][j]:ye[B],$=!0):ee=M.samples>0&&xe.useMultisampledRTT(M)===!1?ge.get(M).__webglMultisampledFramebuffer:Array.isArray(ye)?ye[j]:ye,Se.copy(M.viewport),K.copy(M.scissor),se=M.scissorTest}else Se.copy(H).multiplyScalar(Me).floor(),K.copy(W).multiplyScalar(Me).floor(),se=T;if(j!==0&&(ee=V),ie.bindFramebuffer(O.FRAMEBUFFER,ee)&&ie.drawBuffers(M,ee),ie.viewport(Se),ie.scissor(K),ie.setScissorTest(se),$){let fe=ge.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,fe.__webglTexture,j)}else if(ue){let fe=B;for(let _e=0;_e<M.textures.length;_e++){let ye=ge.get(M.textures[_e]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+_e,ye.__webglTexture,j,fe)}}else if(M!==null&&j!==0){let fe=ge.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,j)}re=-1},this.readRenderTargetPixels=function(M,B,j,ee,$,ue,fe,_e=0){if(!M||!M.isWebGLRenderTarget)return void Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe],Array.isArray(ye)&&(ye=ye[0])),ye){ie.bindFramebuffer(O.FRAMEBUFFER,ye);try{let Ae=M.textures[_e],Ye=Ae.format,$e=Ae.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_e);let Te=lc(Ae);if(Te.__formatReadable===!1)return void Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)return void Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");B>=0&&B<=M.width-ee&&j>=0&&j<=M.height-$&&O.readPixels(B,j,ee,$,ut.convert(Ye),ut.convert($e),ue)}finally{let Ae=X!==null?ge.get(X).__webglFramebuffer:null;ie.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,B,j,ee,$,ue,fe,_e=0){if(!M||!M.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe],Array.isArray(ye)&&(ye=ye[0])),ye){if(B>=0&&B<=M.width-ee&&j>=0&&j<=M.height-$){ie.bindFramebuffer(O.FRAMEBUFFER,ye);let Ae=M.textures[_e],Ye=Ae.format,$e=Ae.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_e);let Te=lc(Ae);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let We=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.bufferData(O.PIXEL_PACK_BUFFER,ue.byteLength,O.STREAM_READ),O.readPixels(B,j,ee,$,ut.convert(Ye),ut.convert($e),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let vt=X!==null?ge.get(X).__webglFramebuffer:null;ie.bindFramebuffer(O.FRAMEBUFFER,vt);let ot=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Oh(O,ot,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ue),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(We),O.deleteSync(ot),ue}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,B=null,j=0){let ee=Math.pow(2,-j),$=Math.floor(M.image.width*ee),ue=Math.floor(M.image.height*ee),fe=B!==null?B.x:0,_e=B!==null?B.y:0;xe.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,fe,_e,$,ue),ie.unbindTexture()},this.copyTextureToTexture=function(M,B,j=null,ee=null,$=0,ue=0){let fe,_e,ye,Ae,Ye,$e,Te,We,vt,ot=M.isCompressedTexture?M.mipmaps[ue]:M.image;if(j!==null)fe=j.max.x-j.min.x,_e=j.max.y-j.min.y,ye=j.isBox3?j.max.z-j.min.z:1,Ae=j.min.x,Ye=j.min.y,$e=j.isBox3?j.min.z:0;else{let ii=Math.pow(2,-$);fe=Math.floor(ot.width*ii),_e=Math.floor(ot.height*ii),ye=M.isDataArrayTexture?ot.depth:M.isData3DTexture?Math.floor(ot.depth*ii):1,Ae=0,Ye=0,$e=0}ee!==null?(Te=ee.x,We=ee.y,vt=ee.z):(Te=0,We=0,vt=0);let lt=ut.convert(B.format),Xe=ut.convert(B.type),it;B.isData3DTexture?(xe.setTexture3D(B,0),it=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(xe.setTexture2DArray(B,0),it=O.TEXTURE_2D_ARRAY):(xe.setTexture2D(B,0),it=O.TEXTURE_2D),ie.activeTexture(O.TEXTURE0),ie.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),ie.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),ie.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let Mt=ie.getParameter(O.UNPACK_ROW_LENGTH),Le=ie.getParameter(O.UNPACK_IMAGE_HEIGHT),Ue=ie.getParameter(O.UNPACK_SKIP_PIXELS),jt=ie.getParameter(O.UNPACK_SKIP_ROWS),Ba=ie.getParameter(O.UNPACK_SKIP_IMAGES);ie.pixelStorei(O.UNPACK_ROW_LENGTH,ot.width),ie.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot.height),ie.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),ie.pixelStorei(O.UNPACK_SKIP_ROWS,Ye),ie.pixelStorei(O.UNPACK_SKIP_IMAGES,$e);let qn=M.isDataArrayTexture||M.isData3DTexture,Yn=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let ii=ge.get(M),cn=ge.get(B),fi=ge.get(ii.__renderTarget),za=ge.get(cn.__renderTarget);ie.bindFramebuffer(O.READ_FRAMEBUFFER,fi.__webglFramebuffer),ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,za.__webglFramebuffer);for(let hn=0;hn<ye;hn++)qn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ge.get(M).__webglTexture,$,$e+hn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ge.get(B).__webglTexture,ue,vt+hn)),O.blitFramebuffer(Ae,Ye,Ae+fe,Ye+_e,Te,We,Te+fe,We+_e,O.DEPTH_BUFFER_BIT,O.NEAREST);ie.bindFramebuffer(O.READ_FRAMEBUFFER,null),ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||M.isRenderTargetTexture||ge.has(M)){let ii=ge.get(M),cn=ge.get(B);ie.bindFramebuffer(O.READ_FRAMEBUFFER,Z),ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,te);for(let fi=0;fi<ye;fi++)qn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ii.__webglTexture,$,$e+fi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ii.__webglTexture,$),Yn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,cn.__webglTexture,ue,vt+fi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,cn.__webglTexture,ue),$!==0?O.blitFramebuffer(Ae,Ye,Ae+fe,Ye+_e,Te,We,Te+fe,We+_e,O.COLOR_BUFFER_BIT,O.NEAREST):Yn?O.copyTexSubImage3D(it,ue,Te,We,vt+fi,Ae,Ye,fe,_e):O.copyTexSubImage2D(it,ue,Te,We,Ae,Ye,fe,_e);ie.bindFramebuffer(O.READ_FRAMEBUFFER,null),ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Yn?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(it,ue,Te,We,vt,fe,_e,ye,lt,Xe,ot.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(it,ue,Te,We,vt,fe,_e,ye,lt,ot.data):O.texSubImage3D(it,ue,Te,We,vt,fe,_e,ye,lt,Xe,ot):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ue,Te,We,fe,_e,lt,Xe,ot.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ue,Te,We,ot.width,ot.height,lt,ot.data):O.texSubImage2D(O.TEXTURE_2D,ue,Te,We,fe,_e,lt,Xe,ot);ie.pixelStorei(O.UNPACK_ROW_LENGTH,Mt),ie.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Le),ie.pixelStorei(O.UNPACK_SKIP_PIXELS,Ue),ie.pixelStorei(O.UNPACK_SKIP_ROWS,jt),ie.pixelStorei(O.UNPACK_SKIP_IMAGES,Ba),ue===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&O.generateMipmap(it),ie.unbindTexture()},this.initRenderTarget=function(M){ge.get(M).__webglFramebuffer===void 0&&xe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?xe.setTextureCube(M,0):M.isData3DTexture?xe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?xe.setTexture2DArray(M,0):xe.setTexture2D(M,0),ie.unbindTexture()},this.resetState=function(){Y=0,F=0,X=null,ie.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var $r=new w;function Xt(n,e,t,i,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;$r.copy(e),$r[i]=0,$r.normalize();let l=.5*a/(a+o),h=1-$r.angleTo(n)/c;return Math.sign($r[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Ia=class n extends ei{constructor(e=1,t=1,i=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new w,l=new w,h=new w(e,t,i).divideScalar(2).subScalar(s),u=this.attributes.position.array,m=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,_=new w,g=.5/a;for(let f=0,y=0;f<u.length;f+=3,y+=2)switch(c.fromArray(u,f),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[f+0]=h.x*Math.sign(c.x)+l.x*s,u[f+1]=h.y*Math.sign(c.y)+l.y*s,u[f+2]=h.z*Math.sign(c.z)+l.z*s,m[f+0]=l.x,m[f+1]=l.y,m[f+2]=l.z,Math.floor(f/p)){case 0:_.set(1,0,0),d[y+0]=Xt(_,l,"z","y",s,i),d[y+1]=1-Xt(_,l,"y","z",s,t);break;case 1:_.set(-1,0,0),d[y+0]=1-Xt(_,l,"z","y",s,i),d[y+1]=1-Xt(_,l,"y","z",s,t);break;case 2:_.set(0,1,0),d[y+0]=1-Xt(_,l,"x","z",s,e),d[y+1]=Xt(_,l,"z","x",s,i);break;case 3:_.set(0,-1,0),d[y+0]=1-Xt(_,l,"x","z",s,e),d[y+1]=1-Xt(_,l,"z","x",s,i);break;case 4:_.set(0,0,1),d[y+0]=1-Xt(_,l,"x","y",s,e),d[y+1]=1-Xt(_,l,"y","x",s,t);break;case 5:_.set(0,0,-1),d[y+0]=Xt(_,l,"x","y",s,e),d[y+1]=1-Xt(_,l,"y","x",s,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Pa=class extends Ji{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ei;e.deleteAttribute("uv");let t=new en({side:Rt}),i=new en,r=new Br(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new rt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new fr(e,i,6),o=new yt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new rt(e,Xn(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new rt(e,Xn(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new rt(e,Xn(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new rt(e,Xn(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let m=new rt(e,Xn(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let d=new rt(e,Xn(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Xn(n){return new Dr({color:0,emissive:16777215,emissiveIntensity:n})}var bu="data:image/png;base64,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";var Zr=document.getElementById("dice"),Pt;try{Pt=new Aa({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{Pt=null}if(Pt){let g=function(H){let W=document.createElement("canvas");W.width=W.height=m;let T=W.getContext("2d");T.fillStyle=H.base,T.fillRect(0,0,m,m);let z=T.createRadialGradient(m*.32,m*.28,0,m*.32,m*.28,m*.75);return z.addColorStop(0,H.hi+"55"),z.addColorStop(1,H.hi+"00"),T.fillStyle=z,T.fillRect(0,0,m,m),{cv:W,g:T}},f=function(H,W,T,z,x){H.beginPath(),H.arc(W,T+z*.08,z*1.04,0,Math.PI*2),H.fillStyle=x?"rgba(60,0,0,0.35)":"rgba(255,255,255,0.75)",H.fill();let v=H.createRadialGradient(W-z*.3,T-z*.35,z*.1,W,T,z);x?(v.addColorStop(0,"#fffdf6"),v.addColorStop(1,"#e2d4bb")):(v.addColorStop(0,"#45454c"),v.addColorStop(1,"#0b0b0e")),H.beginPath(),H.arc(W,T,z,0,Math.PI*2),H.fillStyle=v,H.fill()},y=function(H,W){let T=l[H],{cv:z,g:x}=g(T);for(let v of h[W])f(x,u[v[1]]*m,u[v[0]]*m,m*.088,T.pip==="light");return E(z)},S=function(H){let{cv:W,g:T}=g(l.event),z={blue:["#7fb2ff","#2a5fc4"],green:["#8ce8aa","#1f8c55"],yellow:["#ffe48a","#cf9512"]}[H],x=m*.2,v=m*.8,R=m*.18,G=m*.8,N=v-x,k=ce=>{T.beginPath(),T.moveTo(x+ce,G),T.lineTo(x+ce,R+N/2),T.arc(m/2,R+N/2,N/2-ce,Math.PI,0),T.lineTo(v-ce,G),T.closePath()},J=T.createLinearGradient(0,R,0,G);J.addColorStop(0,z[0]),J.addColorStop(1,z[1]),k(0),T.fillStyle=J,T.fill(),T.lineWidth=m*.018,T.strokeStyle="rgba(0,0,0,0.18)",T.stroke();let C=N*.4,Q=m/2-C/2,ae=G-N*.55;return T.beginPath(),T.moveTo(Q,G),T.lineTo(Q,ae+C/2),T.arc(m/2,ae+C/2,C/2,Math.PI,0),T.lineTo(Q+C,G),T.closePath(),T.fillStyle="rgba(0,0,0,0.45)",T.fill(),E(W)},A=function(){let{cv:H,g:W}=g(l.event),T=E(H),z=()=>{let x=m*.8;W.drawImage(p,(m-x)/2,(m-x)/2,x,x),T.needsUpdate=!0,Me()};return p.complete&&p.naturalWidth?z():_.push(z),T},E=function(H){let W=new vr(H);return W.colorSpace=Gn,W.anisotropy=d,W},U=function(H){if(q[H])return q[H];let W=H==="event"?I:b,T,z=W.map(x=>{let v;return H!=="event"?v=y(H,x):x==="ship"?v=T||(T=A()):v=S(x),new Nr({map:v,roughness:.42,metalness:0,clearcoat:.35,clearcoatRoughness:.35,envMapIntensity:.45})});return q[H]={mats:z,layout:W}},te=function(H){n.isConnected||Zr.appendChild(n);for(let W of V)e.remove(W.mesh);V=H.map((W,T)=>{let{mats:z,layout:x}=U(W),v=new rt(P,z);v.castShadow=!0;let R=new w((T-(H.length-1)/2)*Z,0,0);return v.position.copy(R),e.add(v),{mesh:v,kind:W,layout:x,home:R,anim:null}}),Ee()},me=function(H,W){let T=H.layout.map((ae,ce)=>ae===W?ce:-1).filter(ae=>ae>=0),z=T[Math.floor(Math.random()*T.length)]??4,x=X.copy(i.position).sub(H.home).normalize(),v=new St().setFromUnitVectors(L[z],x),R=re.copy(D[z]).applyQuaternion(v),G=new w(0,1,0),N=R.clone().projectOnPlane(x).normalize(),k=G.projectOnPlane(x).normalize(),J=Math.acos(Hn.clamp(N.dot(k),-1,1));new w().crossVectors(N,k).dot(x)<0&&(J=-J),F.setFromAxisAngle(x,J);let C=new St().setFromAxisAngle(new w(1,0,0),.32);return new St().setFromAxisAngle(new w(0,1,0),-Math.sign(H.home.x)*.16).multiply(C).multiply(F.clone().multiply(v))},K=function(H,W){let T=performance.now();V.forEach((z,x)=>{let v=H[x],R=me(z,v);if(!W){z.anim=null,z.mesh.quaternion.copy(R),z.mesh.position.copy(z.home);return}let G=x%2?-1:1,N=new w(1,(Math.random()-.5)*1.2,(Math.random()-.5)*1.4*G).normalize(),k=new w((Math.random()-.5)*.6,1,(Math.random()-.5)*.8).normalize();z.anim={start:T+x*70,qStart:z.mesh.quaternion.clone(),qEnd:R,axis:N,axis2:k,spin:Math.PI*2*(4.5+Math.random()*2)*(Math.random()<.5?-1:1),spin2:Math.PI*2*(1+Math.random())*(Math.random()<.5?-1:1),drift:(Math.random()-.5)*.5,hop:1+Math.random()*.25}}),Me()},oe=function(H){let W=!1;for(let T of V){let z=T.anim;if(!z)continue;let x=Hn.clamp((H-z.start)/Se,0,1);x<1&&(W=!0);let v=z.hop*Math.abs(Math.sin(x*Math.PI*2.5))*Math.pow(1-x,1.7);T.mesh.position.set(T.home.x+z.drift*(1-se(x)),T.home.y+v,T.home.z);let R=1-se(x);Y.setFromAxisAngle(z.axis,z.spin*R).multiply(F.setFromAxisAngle(z.axis2,z.spin2*R)).multiply(z.qEnd),T.mesh.quaternion.copy(z.qStart).slerp(Y,he(0,.18,x)),x>=1&&(T.mesh.quaternion.copy(z.qEnd),T.mesh.position.copy(T.home),T.anim=null)}return W},le=function(H){ve=0;let W=oe(H);Pt.render(e,i),W&&(ve=requestAnimationFrame(le))},Me=function(){ve||(ve=requestAnimationFrame(le))},Ee=function(){let H=n.clientWidth,W=n.clientHeight,T=Zr.querySelector(".die"),z=T?T.offsetWidth:100;if(!H||!W)return;Pt.setSize(H,W,!1),i.aspect=H/W;let v=W/z/(2*Math.tan(Hn.degToRad(i.fov/2)));i.position.copy(r).multiplyScalar(v),i.lookAt(0,0,0),i.updateProjectionMatrix();for(let R of V)!R.anim&&R.value!==void 0&&R.mesh.quaternion.copy(me(R,R.value));Me()};Pt.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Pt.outputColorSpace=Gn,Pt.toneMapping=Hr,Pt.toneMappingExposure=1,Pt.shadowMap.enabled=!0,Pt.shadowMap.type=tn,Pt.setClearColor(0,0);let n=Pt.domElement;n.className="dice-gl",Zr.appendChild(n);let e=new Ji,t=new kn(Pt);e.environment=t.fromScene(new Pa,.04).texture;let i=new At(22,1,.1,200),r=new w(0,.3,1).normalize(),s=new Nn(16773596,2.2);s.position.set(-3,9,6),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.5,far:30}),s.shadow.bias=-5e-4,s.shadow.radius=6,e.add(s);let a=new Nn(10476799,.6);a.position.set(5,2,-4),e.add(a),e.add(new Or(16774888,1782848,.45));let o=-.66,c=new rt(new Fi(40,40),new Lr({opacity:.32}));c.rotation.x=-Math.PI/2,c.position.y=o,c.receiveShadow=!0,e.add(c);let l={ivory:{base:"#efe7d6",hi:"#ffffff",pip:"dark"},red:{base:"#cf3b2b",hi:"#ff8a78",pip:"light"},yellow:{base:"#f0c246",hi:"#fff3b0",pip:"dark"},event:{base:"#ebe5d6",hi:"#ffffff",pip:"dark"}},h={1:["mc"],2:["tl","br"],3:["tl","mc","br"],4:["tl","tr","bl","br"],5:["tl","tr","mc","bl","br"],6:["tl","tr","ml","mr","bl","br"]},u={t:.26,m:.5,b:.74,l:.26,c:.5,r:.74},m=512,d=Pt.capabilities.getMaxAnisotropy(),p=new Image;p.src=bu;let _=[];p.onload=()=>_.splice(0).forEach(H=>H());let b=[2,5,3,4,1,6],I=["ship","blue","ship","green","ship","yellow"],L=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(H=>new w(...H)),D=[[0,1,0],[0,1,0],[0,0,-1],[0,0,1],[0,1,0],[0,1,0]].map(H=>new w(...H)),P=new Ia(1,1,1,6,.13),q={},V=[],Z=1.3,Y=new St,F=new St,X=new w,re=new w,Se=1250,se=H=>1-Math.pow(1-H,3),he=(H,W,T)=>{let z=Hn.clamp((T-H)/(W-H),0,1);return z*z*(3-2*z)},ve=0;new ResizeObserver(Ee).observe(Zr);let Ce={ready:!0,setKinds:te,show(H,W){V.forEach((T,z)=>T.value=H[z]),K(H,W)}};Zr.classList.add("gl"),window.Dice3D=Ce,window.dispatchEvent(new Event("dice3d-ready"))}})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
