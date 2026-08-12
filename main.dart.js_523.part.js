((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,F,E,G,B={
jPe(d){return C.d.e1(D.d4B,new B.dCS(d),new B.dCT())},
a7h:function a7h(d,e,f){this.c=d
this.a=e
this.b=f},
dCS:function dCS(d){this.a=d},
dCT:function dCT(){},
jVh(d){return new B.c1q(d,null)},
c1q:function c1q(d,e){this.c=d
this.a=e},
emA:function emA(){},
emz:function emz(){},
emy:function emy(d){this.a=d},
cxi:function cxi(d,e){this.c=d
this.a=e},
fWp:function fWp(d){this.a=d},
cxj:function cxj(d,e){this.c=d
this.a=e},
cxk:function cxk(d,e){this.c=d
this.a=e},
jAf(d){var x
if(d>=1073741824)return C.k.au(d/1073741824,1)+" GB"
if(d>=1048576)return C.k.au(d/1048576,1)+" MB"
x=d/1024
return C.k.au(x,x>=1?0:1)+" KB"},
jAi(d){if(d>=1048576)return C.k.au(d/1048576,1)+" GB"
if(d>=1024)return C.k.au(d/1024,1)+" MB"
return C.k.au(d,d>=1?0:1)+" KB"},
kkL(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.q(r,q)
for(x=d.gfQ(d),x=x.gaK(x),w=0;x.G();){v=x.ga7(x)
u=A.jhn(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dkG.h(0,u)
if(s==null)s=C.aU
p.i(0,new E.hw(s,!1,A.e("fileStorageSource_"+u.c,null,null,!0),!1,B.jAf(t)),t/1024)}if(w<2)return A.q(r,q)
return p},
kkE(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.q(r,q)
for(x=d.gfQ(d),x=x.gaK(x),w=0;x.G();){v=x.ga7(x)
u=B.jPe(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dy3.h(0,u)
if(s==null)s=C.aU
p.i(0,new E.hw(s,!1,A.e("fileStorageType_"+u.c,null,null,!0),!1,B.jAf(t)),t/1024)}if(w<2)return A.q(r,q)
return p},
jzk(d){var x,w
for(x=new A.c9(d,d.r,d.e,A.P(d).j("c9<2>")),w=0;x.G();)w+=x.d
return w},
dg2(d){var x=0,w=A.m(y.a),v
var $async$dg2=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.c(A.aP(d,A.aO("storagePricingSheet","")),$async$dg2)
case 3:if(f!==!0){new A.S(A.e("thereIsProblem",null,null,!0),C.t,C.u,C.w,d).A()
x=1
break}A.aC("storagePricingSheet")
x=4
return A.c(A.bT(d,null,!0,0.85,!1,0.7,!1,null,!0,!0,null,!0,!0,G.k6O(),1,!0).bc(),$async$dg2)
case 4:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$dg2,w)}},D,H,I
A=c[0]
C=c[2]
F=c[676]
E=c[638]
G=c[273]
B=a.updateHolder(c[137],B)
D=c[843]
H=c[523]
I=c[844]
B.a7h.prototype={
M(){return"BusinessFileStorageFileType."+this.b}}
B.c1q.prototype={
l(d){var x=null,w=$.ag?$.dW.n():x
return new A.n(w,x,new A.w(this.c,new B.emA(),x,x,y.f),x)}}
B.cxi.prototype={
l(d){var x,w,v,u,t,s,r,q,p=null,o=$.B().a.x1.ghV(),n=$.dc().b,m=n.fy.h(0,o)
if(m==null)m=0
x=n.go
w=this.c
v=w.a
u=Math.max(0,v/1048576-m)
t=A.p(d).ax
s=t.CW
t=s==null?t.y:s
s=A.u(A.aHq(v,2),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,1,p,!1,!1,!1,28,p,p,!1,"")
r=A.e("fileStorageUsageObjectsCount",p,p,!0)
w=C.h.m(w.b)
q=y.e
w=A.b([new A.n(p,6,p,p),s,new A.n(p,4,p,p),A.u(A.a1(r,"COUNT",w),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,0.7,p,!1,!1,!1,12,p,p,!1,"")],q)
if(m>0)C.d.J(w,A.b([new A.n(p,16,p,p),new H.aum(v,!0,!0,!0,!1,p)],q))
else C.d.J(w,A.b([new A.n(p,12,p,p),A.u(A.e("fileStorageLimitNotConfigured",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,0.6,p,!1,!1,!1,12,p,p,!1,"")],q))
if(u>0)C.d.J(w,A.b([new A.n(p,16,p,p),this.cHc(d,u,u*x)],q))
return A.a2(!0,C.q,p,p,C.H,p,p,new A.D(C.fR,A.H(w,C.f,p,C.c,C.i,p,C.o),p),t,0,"",!1,p,p,C.c,!1,p,p,!0,!0,p,p,p,p,!1,p,p,0.55,p,p,p)},
cHc(d,e,f){var x=null,w=A.e("fileStorageOverLimitNoteWithCost",x,x,!1),v=A.aHq(C.k.ap(e*1024*1024),2)
w=A.a1(w,"EXTRA_MB",v)
v=C.k.au(f,2)
w=A.a1(w,"COST_ILS",v)
return A.a3(x,x,0.3,x,x,A.dY(!1,x,!0,!1,x,!1,A.e("viewPricing",x,x,!1),new B.fWp(d),!0,!1,0.7,C.aZ,!1,13,w,x),C.p,x,x,0,!1,x,x,x,x,x,!1,x,x,x,x,x,!1,!1,!1,x)}}
B.cxj.prototype={
l(d){var x,w,v,u,t,s,r,q=null,p=B.kkE(this.c.d)
if(p.a===0)return A.fs()
x=B.jzk(p)
w=B.jAi(x)
v=$.ag?650:$.hI()
u=Math.min($.b8.n()*0.03,$.al.n()*0.06)
t=Math.min($.b8.n()*0.05,$.al.n()*0.07)
s=A.p(d).ax
r=s.CW
s=r==null?s.y:r
return E.a2k(!0,3,s,q,p,u,!1,q,t,!1,11,q,q,q,q,!0,!1,!1,q,!1,25,4,new A.aL(C.aE,q,q,A.H(A.b([A.u(A.e("fileStoragePieByTypeTitle",q,q,!0),q,!1,!1,q,!1,q,!1,q,!1,!1,!1,!0,1,q,!1,!1,!1,16,q,q,!1,"")],y.e),C.a2,q,C.c,C.i,q,C.o),q),q,x,w,9,q,!1,!1,v)}}
B.cxk.prototype={
l(d){var x,w,v,u,t,s,r,q=null,p=B.kkL(this.c.c)
if(p.a===0)return A.fs()
x=B.jzk(p)
w=B.jAi(x)
v=$.ag?650:$.hI()
u=Math.min($.b8.n()*0.03,$.al.n()*0.06)
t=Math.min($.b8.n()*0.05,$.al.n()*0.07)
s=A.p(d).ax
r=s.CW
s=r==null?s.y:r
return E.a2k(!0,3,s,q,p,u,!1,q,t,!1,11,q,q,q,q,!0,!1,!1,q,!1,25,4,new A.aL(C.aE,q,q,A.H(A.b([A.u(A.e("fileStoragePieBySourceTitle",q,q,!0),q,!1,!1,q,!1,q,!1,q,!1,!1,!1,!0,1,q,!1,!1,!1,16,q,q,!1,"")],y.e),C.a2,q,C.c,C.i,q,C.o),q),q,x,w,9,q,!1,!1,v)}}
var z=a.updateTypes(["E(a7h)","a7h()"])
B.dCS.prototype={
$1(d){return d.c===this.a},
$S:z+0}
B.dCT.prototype={
$0(){return D.YG},
$S:z+1}
B.emA.prototype={
$3(d,e,f){var x=null
return A.H(A.b([F.eb(!1,x,C.f,A.u(A.e("fileStorageUsageTitle",x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,1,x,!1,!1,!1,16,x,x,!1,""),new B.emy(d),new B.emz(),!0,!0,!0,!1,x),new A.n(x,5,x,x),new A.D(C.mk,A.u(A.e("fileStorageUsageSubtitle",x,x,!0),C.B,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,0.7,x,!1,!1,!1,14,x,x,!1,""),x),new B.cxi(e,x),new A.n(x,13,x,x),new B.cxk(e,x),new A.n(x,13,x,x),new B.cxj(e,x),new A.n(x,30,x,x)],y.e),C.f,x,C.c,C.i,x,C.o)},
$S:2409}
B.emz.prototype={
$0(){},
$S:6}
B.emy.prototype={
$0(){A.Q(this.a,!1).H(null)
return null},
$S:0}
B.fWp.prototype={
$0(){return B.dg2(this.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a7h,A.iE)
w(A.aJ,[B.dCS,B.emA])
w(A.aK,[B.dCT,B.emz,B.emy,B.fWp])
w(A.r,[B.c1q,B.cxi,B.cxj,B.cxk])})()
A.aw(b.typeUniverse,JSON.parse('{"c1q":{"r":[],"h":[]},"cxi":{"r":[],"h":[]},"cxj":{"r":[],"h":[]},"cxk":{"r":[],"h":[]}}'))
var y={l:A.t("hw"),e:A.t("C<h>"),f:A.t("w<a_K>"),b:A.t("am"),a:A.t("~")};(function constants(){var x=a.makeConstList
D.YG=new B.a7h("other",4,"other")
D.adU=new B.a7h("image",0,"image")
D.adV=new B.a7h("pdf",1,"pdf")
D.adW=new B.a7h("spreadsheet",2,"spreadsheet")
D.adX=new B.a7h("video",3,"video")
D.d4B=x([D.adU,D.adV,D.adW,D.adX,D.YG],A.t("C<a7h>"))
D.dkG=new A.x([C.IO,I.age,C.vQ,C.afk],A.t("x<aca,y>"))
D.dy3=new A.x([D.adU,C.afE,D.adV,C.agE,D.adW,C.ag5,D.adX,C.aft,D.YG,C.agt],A.t("x<a7h,y>"))})()};
(a=>{a["UnUxNv2wrn0TyA4qEMtdlNZvRTA="]=a.current})($__dart_deferred_initializers__);