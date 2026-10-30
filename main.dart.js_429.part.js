((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
epm(d,e,f,g,h,i,j,k){return new A.bbe(d,e,j,k,i,h,g,f,null)},
bbe:function bbe(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
byY:function byY(){var _=this
_.d=$
_.e=0
_.f=$
_.r=!1
_.c=_.a=null},
hY0:function hY0(d,e){this.a=d
this.b=e},
hY1:function hY1(d,e,f){this.a=d
this.b=e
this.c=f},
hY3:function hY3(){},
hY4:function hY4(d){this.a=d},
hY2:function hY2(d,e){this.a=d
this.b=e},
bAG:function bAG(d,e,f){this.c=d
this.d=e
this.a=f},
d2R:function d2R(d){var _=this
_.d=d
_.c=_.a=_.e=null},
iai:function iai(d){this.a=d},
iaj:function iaj(d){this.a=d},
iah:function iah(d){this.a=d}}
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[652],A)
A.bbe.prototype={
R(){return new A.byY()}}
A.byY.prototype={
a5(){var x,w,v=this
v.a9()
v.d=B.bF(v.a.c.length,null,!1,y.p)
x=v.a
w=x.d
v.e=w.as
v.f=x.w
w.af(0,v.gb_t())},
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
s.aY8(!1)}x=d.d
if(x!==s.a.d){w=s.gb_t()
x.a7(0,w)
s.a.d.af(0,w)}},
u(){this.a.d.a7(0,this.gb_t())
this.ak()},
d1l(){var x,w=this,v=w.a.d.f
if(v.length===0)return
v=y.x.a(C.d.gaz(v)).gc4(0)
x=v==null?null:C.m.aF(v)
if(x==null)x=w.e
v=!1
if(x!==w.e)if(x>=0){v=w.d
v===$&&B.a()
v=x<v.length}if(v)w.Y(new A.hY0(w,x))},
dD_(d,e){var x,w,v=this
if(d>=0){x=v.d
x===$&&B.a()
x=d>=x.length}else x=!0
if(x)return
x=v.d
x===$&&B.a()
w=x[d]
if(w!=null&&Math.abs(w-e)<0.5)return
v.Y(new A.hY1(v,d,e))},
aY8(d){var x,w,v=this,u=v.e
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
return B.aI8(new A.hY3(),B.ajb(!1,t,new A.hY4(r),p,null,q.r,s,q.f,C.ad),w,x,new B.bZ(v,u,y.g),y.b)}}
A.bAG.prototype={
R(){return new A.d2R(new B.b2(null,y.z))},
amg(d,e){return this.d.$1(e)}}
A.d2R.prototype={
bAP(){var x,w,v=this
if(v.c==null)return
x=$.aJ.au$.x.h(0,v.d)
w=x==null?null:x.gT(0)
if(w==null||w.q(0,v.e))return
v.e=w
v.a.amg(0,w)},
k(d){var x=this,w=null
$.aJ.ry$.push(new A.iai(x))
return new B.hB(new A.iaj(x),new B.aH7(B.at(w,x.a.c,C.p,w,w,w,w,w,x.d,w,w,w,w,w),w),w,y.e)}}
var z=a.updateTypes(["~()"])
A.hY0.prototype={
$0(){var x,w=this.a,v=this.b
w.e=v
x=w.d
x===$&&B.a()
w.aY8(x[v]!=null)},
$S:0}
A.hY1.prototype={
$0(){var x,w=this.a,v=w.d
v===$&&B.a()
x=this.b
v[x]=this.c
if(x===w.e)w.aY8(!1)},
$S:0}
A.hY3.prototype={
$3(d,e,f){return new B.n(null,e,f,null)},
$S:1147}
A.hY4.prototype={
$2(d,e){var x=this.a
return B.bj4(C.bg,new A.bAG(x.a.c[e].$0(),new A.hY2(x,e),null),1/0,null,0,null)},
$S:2843}
A.hY2.prototype={
$1(d){return this.a.dD_(this.b,d.b)},
$S:425}
A.iai.prototype={
$1(d){return this.a.bAP()},
$S:9}
A.iaj.prototype={
$1(d){$.aJ.ry$.push(new A.iah(this.a))
return!0},
$S:1148}
A.iah.prototype={
$1(d){return this.a.bAP()},
$S:9};(function installTearOffs(){var x=a._instance_0u
x(A.byY.prototype,"gb_t","d1l",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.W,[A.bbe,A.bAG])
x(B.X,[A.byY,A.d2R])
x(B.aH,[A.hY0,A.hY1])
x(B.aG,[A.hY3,A.hY2,A.iai,A.iaj,A.iah])
w(A.hY4,B.bx)})()
B.au(b.typeUniverse,JSON.parse('{"bbe":{"W":[],"f":[]},"bAG":{"W":[],"f":[]},"byY":{"X":["bbe"]},"d2R":{"X":["bAG"]}}'))
var y={z:B.t("b2<X<W>>"),e:B.t("hB<aka>"),g:B.t("bZ<al>"),x:B.t("a5F"),b:B.t("al"),p:B.t("al?")}};
(a=>{a["bpUum7GbToV/ZPIarY+KVNWlhKY="]=a.current})($__dart_deferred_initializers__);