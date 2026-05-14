((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,E,F,C={
iWz(d){return B.c.fc(D.cSV,new C.djd(d),new C.dje())},
a5a:function a5a(d,e,f){this.c=d
this.a=e
this.b=f},
djd:function djd(d){this.a=d},
dje:function dje(){},
j0V(d){return new C.bPp(d,null)},
bPp:function bPp(d,e){this.c=d
this.a=e},
dVY:function dVY(){},
dVX:function dVX(){},
dVW:function dVW(d){this.a=d},
ciW:function ciW(d,e){this.c=d
this.a=e},
ciX:function ciX(d,e){this.c=d
this.a=e},
ciY:function ciY(d,e){this.c=d
this.a=e},
iIX(d){var x
if(d>=1073741824)return B.l.aB(d/1073741824,1)+" GB"
if(d>=1048576)return B.l.aB(d/1048576,1)+" MB"
x=d/1024
return B.l.aB(x,x>=1?0:1)+" KB"},
iJ0(d){if(d>=1048576)return B.l.aB(d/1048576,1)+" GB"
if(d>=1024)return B.l.aB(d/1024,1)+" MB"
return B.l.aB(d,d>=1?0:1)+" KB"},
jpq(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.ghj(d),x=x.gaU(x),w=0;x.H();){v=x.gab(x)
u=A.irj(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.d7O.h(0,u)
if(s==null)s=B.aL
p.i(0,new A.iT(s,!1,A.e("fileStorageSource_"+u.c,null,null,!0),!1,C.iIX(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
jpo(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.ghj(d),x=x.gaU(x),w=0;x.H();){v=x.gab(x)
u=C.iWz(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dl3.h(0,u)
if(s==null)s=B.aL
p.i(0,new A.iT(s,!1,A.e("fileStorageType_"+u.c,null,null,!0),!1,C.iIX(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
iIb(d){var x,w
for(x=new A.ca(d,d.r,d.e,A.P(d).j("ca<2>")),w=0;x.H();)w+=x.d
return w}},D
A=c[0]
B=c[2]
E=c[533]
F=c[657]
C=a.updateHolder(c[123],C)
D=c[656]
C.a5a.prototype={
N(){return"BusinessFileStorageFileType."+this.b}}
C.bPp.prototype={
l(d){var x=null,w=$.ag?$.ed.n():x
return new A.m(w,x,new A.z(this.c,new C.dVY(),x,x,y.f),x)}}
C.ciW.prototype={
l(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.C().a.to,i=j.x?B.ci:j.a.b,h=$.dW().b,g=h.fr.h(0,i)
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
q=A.v(A.cX6(w),k,!0,!1,k,!1,k,!1,k,!1,!1,!0,!1,1,k,!1,!1,!1,28,k,k,!1,"")
p=A.e("fileStorageUsageObjectsCount",k,k,!0)
j=B.i.m(j.b)
o=y.e
j=A.b([new A.m(k,6,k,k),q,new A.m(k,4,k,k),A.v(A.a3(p,"COUNT",j),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.7,k,!1,!1,!1,12,k,k,!1,"")],o)
if(g>0){n=A.q(d)
q=A.e("fileStorageLimitUsedMb",k,k,!0)
w=A.cX6(w)
w=A.v(A.a3(q,"USED",w),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.8,k,!1,!1,!1,12,k,k,!1,"")
q=A.e("fileStorageLimitAllowedMb",k,k,!0)
p=A.cX6(g*1024*1024)
m=n.ax
B.c.O(j,A.b([new A.m(k,16,k,k),A.G(A.b([A.T(A.b([w,A.v(A.a3(q,"LIMIT",p),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.8,k,!1,!1,!1,12,k,k,!1,"")],o),B.f,k,B.bl,B.j,0,k,k),new A.m(k,8,k,k),A.hd(A.ct(6),E.idO(m.k2,k,k,10,t,new A.a3f(m.y,y.m)),B.bk)],o),B.f,k,B.d,B.j,k,B.o)],o))}else B.c.O(j,A.b([new A.m(k,12,k,k),A.v(A.e("fileStorageLimitNotConfigured",k,k,!0),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.6,k,!1,!1,!1,12,k,k,!1,"")],o))
if(s>0){w=A.q(d).ax
q=w.id
q=(q==null?w.fy:q).a0(0.3)
w=w.fy
p=A.dX(w.a0(0.3),-1,1)
m=A.e("fileStorageOverLimitCostLine",k,k,!0)
l=A.cX6(B.l.ap(s*1024*1024))
m=A.a3(m,"EXTRA_MB",l)
l=B.l.aB(s*x,2)
m=A.a3(m,"COST_ILS",l)
l=B.l.aB(x,2)
B.c.O(j,A.b([new A.m(k,16,k,k),A.a7(!0,B.q,p,B.J,k,k,new A.H(new A.x(12,12,12,12),A.T(A.b([new A.ae(B.Jo,20,!1,1,!1,!1,!1,w,k),new A.m(10,k,k,k),A.av(A.v(A.a3(m,"PRICE_PER_MB",l),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,1,k,!1,!1,!1,12,k,k,!1,""),1)],o),B.f,k,B.d,B.j,0,k,k),k),q,0,"",!1,k,k,B.d,!1,k,new A.x(0,12,0,0),!1,!0,k,k,k,k,k,k,0.55,k,k,k)],o))}return A.a7(!0,B.q,k,B.J,k,k,new A.H(B.k6,A.G(j,B.f,k,B.d,B.j,k,B.o),k),r,0,"",!1,k,k,B.d,!1,k,k,!0,!0,k,k,k,k,k,k,0.55,k,k,k)}}
C.ciX.prototype={
l(d){var x,w,v,u,t,s,r,q,p=null,o=C.jpo(this.c.d)
if(o.a===0)return A.fu()
x=C.iIb(o)
w=C.iJ0(x)
v=$.ag?650:$.hF()
u=$.b4.n()
t=Math.min($.b4.n()*0.03,$.ah.n()*0.06)
s=Math.min($.b4.n()*0.05,$.ah.n()*0.07)
r=A.q(d).ax
q=r.CW
r=q==null?r.y:q
return A.a9T(!0,3,r,p,o,t,!1,u*0.22,s,!1,11,p,p,p,p,!1,p,!1,!1,25,4,new A.aM(B.aG,p,p,A.G(A.b([A.v(A.e("fileStoragePieByTypeTitle",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!1,!0,1,p,!1,!1,!1,16,p,p,!1,"")],y.e),B.a8,p,B.d,B.j,p,B.o),p),p,x,w,9,p,!1,!1,v)}}
C.ciY.prototype={
l(d){var x,w,v,u,t,s,r,q,p=null,o=C.jpq(this.c.c)
if(o.a===0)return A.fu()
x=C.iIb(o)
w=C.iJ0(x)
v=$.ag?650:$.hF()
u=$.b4.n()
t=Math.min($.b4.n()*0.03,$.ah.n()*0.06)
s=Math.min($.b4.n()*0.05,$.ah.n()*0.07)
r=A.q(d).ax
q=r.CW
r=q==null?r.y:q
return A.a9T(!0,3,r,p,o,t,!1,u*0.22,s,!1,11,p,p,p,p,!1,p,!1,!1,25,4,new A.aM(B.aG,p,p,A.G(A.b([A.v(A.e("fileStoragePieBySourceTitle",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!1,!0,1,p,!1,!1,!1,16,p,p,!1,"")],y.e),B.a8,p,B.d,B.j,p,B.o),p),p,x,w,9,p,!1,!1,v)}}
var z=a.updateTypes(["J(a5a)","a5a()"])
C.djd.prototype={
$1(d){return d.c===this.a},
$S:z+0}
C.dje.prototype={
$0(){return D.V6},
$S:z+1}
C.dVY.prototype={
$3(d,e,f){var x=null
return A.G(A.b([A.eU(!1,x,B.f,A.v(A.e("fileStorageUsageTitle",x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,1,x,!1,!1,!1,16,x,x,!1,""),new C.dVW(d),new C.dVX(),!0,!0,!0,!1,x),new C.ciW(e,x),new A.m(x,24,x,x),new C.ciY(e,x),new A.m(x,24,x,x),new C.ciX(e,x),new A.m(x,30,x,x)],y.e),B.f,x,B.d,B.j,x,B.o)},
$S:2307}
C.dVX.prototype={
$0(){},
$S:4}
C.dVW.prototype={
$0(){A.Q(this.a,!1).I(null)
return null},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a5a,A.jQ)
w(A.aO,[C.djd,C.dVY])
w(A.aN,[C.dje,C.dVX,C.dVW])
w(A.r,[C.bPp,C.ciW,C.ciX,C.ciY])})()
A.aG(b.typeUniverse,JSON.parse('{"bPp":{"r":[],"f":[]},"ciW":{"r":[],"f":[]},"ciX":{"r":[],"f":[]},"ciY":{"r":[],"f":[]}}'))
var y={m:A.t("a3f<w>"),l:A.t("iT"),e:A.t("F<f>"),f:A.t("z<a75>"),b:A.t("ar")};(function constants(){var x=a.makeConstList
D.V6=new C.a5a("other",4,"other")
D.a9u=new C.a5a("image",0,"image")
D.a9v=new C.a5a("pdf",1,"pdf")
D.a9w=new C.a5a("spreadsheet",2,"spreadsheet")
D.a9x=new C.a5a("video",3,"video")
D.cSV=x([D.a9u,D.a9v,D.a9w,D.a9x,D.V6],A.t("F<a5a>"))
D.d7O=new A.u([B.Fr,F.abw,B.tD,B.aaK],A.t("u<a9F,w>"))
D.dl3=new A.u([D.a9u,B.ab3,D.a9v,B.abR,D.a9w,B.abp,D.a9x,B.aaU,D.V6,B.abI],A.t("u<a5a,w>"))})()};
(a=>{a["RCzfVqHA6q4hyc7BRY3QVR33QRo="]=a.current})($__dart_deferred_initializers__);