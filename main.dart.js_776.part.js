((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,E,F,C={
iUD(d){return B.c.fb(D.cSK,new C.dj0(d),new C.dj1())},
a56:function a56(d,e,f){this.c=d
this.a=e
this.b=f},
dj0:function dj0(d){this.a=d},
dj1:function dj1(){},
iZZ(d){return new C.bOX(d,null)},
bOX:function bOX(d,e){this.c=d
this.a=e},
dVB:function dVB(){},
dVA:function dVA(){},
dVz:function dVz(d){this.a=d},
ciu:function ciu(d,e){this.c=d
this.a=e},
civ:function civ(d,e){this.c=d
this.a=e},
ciw:function ciw(d,e){this.c=d
this.a=e},
iH3(d){var x
if(d>=1073741824)return B.l.aC(d/1073741824,1)+" GB"
if(d>=1048576)return B.l.aC(d/1048576,1)+" MB"
x=d/1024
return B.l.aC(x,x>=1?0:1)+" KB"},
iH7(d){if(d>=1048576)return B.l.aC(d/1048576,1)+" GB"
if(d>=1024)return B.l.aC(d/1024,1)+" MB"
return B.l.aC(d,d>=1?0:1)+" KB"},
jnr(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.ghi(d),x=x.gaV(x),w=0;x.H();){v=x.gaa(x)
u=A.ipq(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.d7D.h(0,u)
if(s==null)s=B.aL
p.i(0,new A.iP(s,!1,A.e("fileStorageSource_"+u.c,null,null,!0),!1,C.iH3(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
jnp(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.ghi(d),x=x.gaV(x),w=0;x.H();){v=x.gaa(x)
u=C.iUD(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dkS.h(0,u)
if(s==null)s=B.aL
p.i(0,new A.iP(s,!1,A.e("fileStorageType_"+u.c,null,null,!0),!1,C.iH3(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
iGi(d){var x,w
for(x=new A.ca(d,d.r,d.e,A.P(d).j("ca<2>")),w=0;x.H();)w+=x.d
return w}},D
A=c[0]
B=c[2]
E=c[532]
F=c[654]
C=a.updateHolder(c[123],C)
D=c[653]
C.a56.prototype={
N(){return"BusinessFileStorageFileType."+this.b}}
C.bOX.prototype={
l(d){var x=null,w=$.af?$.ea.n():x
return new A.m(w,x,new A.z(this.c,new C.dVB(),x,x,y.f),x)}}
C.ciu.prototype={
l(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.C().a.to,i=j.x?B.ci:j.a.b,h=$.dX().b,g=h.fr.h(0,i)
if(g==null)g=0
x=h.fx
j=this.c
w=j.a
v=w/1048576
u=g<=0?0:B.l.be(v/g,0,1)
t=w>0?Math.max(0.02,u):0
s=Math.max(0,v-g)
r=A.q(d).ax
q=r.CW
r=q==null?r.y:q
q=A.w(A.cWy(w),k,!0,!1,k,!1,k,!1,k,!1,!1,!0,!1,1,k,!1,!1,!1,28,k,k,!1,"")
p=A.e("fileStorageUsageObjectsCount",k,k,!0)
j=B.i.m(j.b)
o=y.e
j=A.b([new A.m(k,6,k,k),q,new A.m(k,4,k,k),A.w(A.a2(p,"COUNT",j),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.7,k,!1,!1,!1,12,k,k,!1,"")],o)
if(g>0){n=A.q(d)
q=A.e("fileStorageLimitUsedMb",k,k,!0)
w=A.cWy(w)
w=A.w(A.a2(q,"USED",w),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.8,k,!1,!1,!1,12,k,k,!1,"")
q=A.e("fileStorageLimitAllowedMb",k,k,!0)
p=A.cWy(g*1024*1024)
m=n.ax
B.c.O(j,A.b([new A.m(k,16,k,k),A.G(A.b([A.T(A.b([w,A.w(A.a2(q,"LIMIT",p),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.8,k,!1,!1,!1,12,k,k,!1,"")],o),B.f,k,B.bl,B.j,0,k,k),new A.m(k,8,k,k),A.ha(A.cw(6),E.ic1(m.k2,k,k,10,t,new A.a3c(m.y,y.m)),B.bk)],o),B.f,k,B.d,B.j,k,B.o)],o))}else B.c.O(j,A.b([new A.m(k,12,k,k),A.w(A.e("fileStorageLimitNotConfigured",k,k,!0),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.6,k,!1,!1,!1,12,k,k,!1,"")],o))
if(s>0){w=A.q(d).ax
q=w.id
q=(q==null?w.fy:q).a0(0.3)
w=w.fy
p=A.dV(w.a0(0.3),-1,1)
m=A.e("fileStorageOverLimitCostLine",k,k,!0)
l=A.cWy(B.l.ao(s*1024*1024))
m=A.a2(m,"EXTRA_MB",l)
l=B.l.aC(s*x,2)
m=A.a2(m,"COST_ILS",l)
l=B.l.aC(x,2)
B.c.O(j,A.b([new A.m(k,16,k,k),A.a6(!0,B.q,p,B.J,k,k,new A.I(new A.x(12,12,12,12),A.T(A.b([new A.ag(B.Jl,20,!1,1,!1,!1,!1,w,k),new A.m(10,k,k,k),A.aw(A.w(A.a2(m,"PRICE_PER_MB",l),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,1,k,!1,!1,!1,12,k,k,!1,""),1)],o),B.f,k,B.d,B.j,0,k,k),k),q,0,"",!1,k,k,B.d,!1,k,new A.x(0,12,0,0),!1,!0,k,k,k,k,k,k,0.55,k,k,k)],o))}return A.a6(!0,B.q,k,B.J,k,k,new A.I(B.k_,A.G(j,B.f,k,B.d,B.j,k,B.o),k),r,0,"",!1,k,k,B.d,!1,k,k,!0,!0,k,k,k,k,k,k,0.55,k,k,k)}}
C.civ.prototype={
l(d){var x,w,v,u,t,s,r,q,p=null,o=C.jnp(this.c.d)
if(o.a===0)return A.fz()
x=C.iGi(o)
w=C.iH7(x)
v=$.af?650:$.hD()
u=$.b3.n()
t=Math.min($.b3.n()*0.03,$.ah.n()*0.06)
s=Math.min($.b3.n()*0.05,$.ah.n()*0.07)
r=A.q(d).ax
q=r.CW
r=q==null?r.y:q
return A.a9O(!0,3,r,p,o,t,!1,u*0.22,s,!1,11,p,p,p,p,!1,p,!1,!1,25,4,new A.aM(B.aH,p,p,A.G(A.b([A.w(A.e("fileStoragePieByTypeTitle",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!1,!0,1,p,!1,!1,!1,16,p,p,!1,"")],y.e),B.a7,p,B.d,B.j,p,B.o),p),p,x,w,9,p,!1,!1,v)}}
C.ciw.prototype={
l(d){var x,w,v,u,t,s,r,q,p=null,o=C.jnr(this.c.c)
if(o.a===0)return A.fz()
x=C.iGi(o)
w=C.iH7(x)
v=$.af?650:$.hD()
u=$.b3.n()
t=Math.min($.b3.n()*0.03,$.ah.n()*0.06)
s=Math.min($.b3.n()*0.05,$.ah.n()*0.07)
r=A.q(d).ax
q=r.CW
r=q==null?r.y:q
return A.a9O(!0,3,r,p,o,t,!1,u*0.22,s,!1,11,p,p,p,p,!1,p,!1,!1,25,4,new A.aM(B.aH,p,p,A.G(A.b([A.w(A.e("fileStoragePieBySourceTitle",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!1,!0,1,p,!1,!1,!1,16,p,p,!1,"")],y.e),B.a7,p,B.d,B.j,p,B.o),p),p,x,w,9,p,!1,!1,v)}}
var z=a.updateTypes(["J(a56)","a56()"])
C.dj0.prototype={
$1(d){return d.c===this.a},
$S:z+0}
C.dj1.prototype={
$0(){return D.V1},
$S:z+1}
C.dVB.prototype={
$3(d,e,f){var x=null
return A.G(A.b([A.eW(!1,x,B.f,A.w(A.e("fileStorageUsageTitle",x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,1,x,!1,!1,!1,16,x,x,!1,""),new C.dVz(d),new C.dVA(),!0,!0,!0,!1,x),new C.ciu(e,x),new A.m(x,24,x,x),new C.ciw(e,x),new A.m(x,24,x,x),new C.civ(e,x),new A.m(x,30,x,x)],y.e),B.f,x,B.d,B.j,x,B.o)},
$S:2297}
C.dVA.prototype={
$0(){},
$S:4}
C.dVz.prototype={
$0(){A.Q(this.a,!1).I(null)
return null},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a56,A.ki)
w(A.aO,[C.dj0,C.dVB])
w(A.aN,[C.dj1,C.dVA,C.dVz])
w(A.r,[C.bOX,C.ciu,C.civ,C.ciw])})()
A.aG(b.typeUniverse,JSON.parse('{"bOX":{"r":[],"f":[]},"ciu":{"r":[],"f":[]},"civ":{"r":[],"f":[]},"ciw":{"r":[],"f":[]}}'))
var y={m:A.t("a3c<v>"),l:A.t("iP"),e:A.t("F<f>"),f:A.t("z<a71>"),b:A.t("aq")};(function constants(){var x=a.makeConstList
D.V1=new C.a56("other",4,"other")
D.a9t=new C.a56("image",0,"image")
D.a9u=new C.a56("pdf",1,"pdf")
D.a9v=new C.a56("spreadsheet",2,"spreadsheet")
D.a9w=new C.a56("video",3,"video")
D.cSK=x([D.a9t,D.a9u,D.a9v,D.a9w,D.V1],A.t("F<a56>"))
D.d7D=new A.u([B.Fk,F.abv,B.tz,B.aaJ],A.t("u<a9A,v>"))
D.dkS=new A.u([D.a9t,B.ab2,D.a9u,B.abQ,D.a9v,B.abo,D.a9w,B.aaT,D.V1,B.abH],A.t("u<a56,v>"))})()};
(a=>{a["TrCAdXO142vwg9y7T4wf4Obein0="]=a.current})($__dart_deferred_initializers__);