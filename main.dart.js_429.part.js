((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
epd(d,e,f,g,h,i,j,k){return new A.bba(d,e,j,k,i,h,g,f,null)},
bba:function bba(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
byT:function byT(){var _=this
_.d=$
_.e=0
_.f=$
_.r=!1
_.c=_.a=null},
hXR:function hXR(d,e){this.a=d
this.b=e},
hXS:function hXS(d,e,f){this.a=d
this.b=e
this.c=f},
hXU:function hXU(){},
hXV:function hXV(d){this.a=d},
hXT:function hXT(d,e){this.a=d
this.b=e},
bAB:function bAB(d,e,f){this.c=d
this.d=e
this.a=f},
d2M:function d2M(d){var _=this
_.d=d
_.c=_.a=_.e=null},
ia8:function ia8(d){this.a=d},
ia9:function ia9(d){this.a=d},
ia7:function ia7(d){this.a=d}}
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[652],A)
A.bba.prototype={
R(){return new A.byT()}}
A.byT.prototype={
a5(){var x,w,v=this
v.a9()
v.d=B.bF(v.a.c.length,null,!1,y.p)
x=v.a
w=x.d
v.e=w.as
v.f=x.w
w.af(0,v.gb_m())},
bD(d){var x,w,v,u,t,s=this
s.bX(d)
x=d.c.length
w=s.a.c.length
if(x!==w){x=s.d
x===$&&B.a()
v=J.fx(w,y.p)
for(u=x.length,t=0;t<w;++t)v[t]=t<u?x[t]:null
s.d=v
x=s.e
w=s.a.c.length-1
if(x>w)s.e=C.i.aT(w,0,v.length)
s.aY1(!1)}x=d.d
if(x!==s.a.d){w=s.gb_m()
x.a6(0,w)
s.a.d.af(0,w)}},
u(){this.a.d.a6(0,this.gb_m())
this.ak()},
d1e(){var x,w=this,v=w.a.d.f
if(v.length===0)return
v=y.x.a(C.d.gaz(v)).gc4(0)
x=v==null?null:C.m.aE(v)
if(x==null)x=w.e
v=!1
if(x!==w.e)if(x>=0){v=w.d
v===$&&B.a()
v=x<v.length}if(v)w.Y(new A.hXR(w,x))},
dCU(d,e){var x,w,v=this
if(d>=0){x=v.d
x===$&&B.a()
x=d>=x.length}else x=!0
if(x)return
x=v.d
x===$&&B.a()
w=x[d]
if(w!=null&&Math.abs(w-e)<0.5)return
v.Y(new A.hXS(v,d,e))},
aY1(d){var x,w,v=this,u=v.e
if(u>=0){x=v.d
x===$&&B.a()
x=u>=x.length}else x=!0
if(x)return
x=v.d
x===$&&B.a()
w=x[u]
if(w!=null){v.f=w
v.r=d}else v.r=!1},
k(d){var x,w,v,u,t,s,r=this,q=r.a,p=q.c.length
if(p===0)return C.aE
x=r.r?q.x:C.aW
w=q.y
v=q.w
u=r.f
u===$&&B.a()
t=q.d
s=q.e
return B.aI6(new A.hXU(),B.ajb(!1,t,new A.hXV(r),p,null,q.r,s,q.f,C.ad),w,x,new B.bZ(v,u,y.g),y.b)}}
A.bAB.prototype={
R(){return new A.d2M(new B.b2(null,y.z))},
amd(d,e){return this.d.$1(e)}}
A.d2M.prototype={
bAJ(){var x,w,v=this
if(v.c==null)return
x=$.aJ.au$.x.h(0,v.d)
w=x==null?null:x.gT(0)
if(w==null||w.q(0,v.e))return
v.e=w
v.a.amd(0,w)},
k(d){var x=this,w=null
$.aJ.ry$.push(new A.ia8(x))
return new B.hB(new A.ia9(x),new B.aH5(B.at(w,x.a.c,C.p,w,w,w,w,w,x.d,w,w,w,w,w),w),w,y.e)}}
var z=a.updateTypes(["~()"])
A.hXR.prototype={
$0(){var x,w=this.a,v=this.b
w.e=v
x=w.d
x===$&&B.a()
w.aY1(x[v]!=null)},
$S:0}
A.hXS.prototype={
$0(){var x,w=this.a,v=w.d
v===$&&B.a()
x=this.b
v[x]=this.c
if(x===w.e)w.aY1(!1)},
$S:0}
A.hXU.prototype={
$3(d,e,f){return new B.n(null,e,f,null)},
$S:1147}
A.hXV.prototype={
$2(d,e){var x=this.a
return B.bj_(C.bg,new A.bAB(x.a.c[e].$0(),new A.hXT(x,e),null),1/0,null,0,null)},
$S:2843}
A.hXT.prototype={
$1(d){return this.a.dCU(this.b,d.b)},
$S:425}
A.ia8.prototype={
$1(d){return this.a.bAJ()},
$S:9}
A.ia9.prototype={
$1(d){$.aJ.ry$.push(new A.ia7(this.a))
return!0},
$S:1148}
A.ia7.prototype={
$1(d){return this.a.bAJ()},
$S:9};(function installTearOffs(){var x=a._instance_0u
x(A.byT.prototype,"gb_m","d1e",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.W,[A.bba,A.bAB])
x(B.X,[A.byT,A.d2M])
x(B.aH,[A.hXR,A.hXS])
x(B.aG,[A.hXU,A.hXT,A.ia8,A.ia9,A.ia7])
w(A.hXV,B.bx)})()
B.au(b.typeUniverse,JSON.parse('{"bba":{"W":[],"f":[]},"bAB":{"W":[],"f":[]},"byT":{"X":["bba"]},"d2M":{"X":["bAB"]}}'))
var y={z:B.t("b2<X<W>>"),e:B.t("hB<aka>"),g:B.t("bZ<al>"),x:B.t("a5F"),b:B.t("al"),p:B.t("al?")}};
(a=>{a["WXZCdt2msctt3Sz5bAK/EbVUjN4="]=a.current})($__dart_deferred_initializers__);