((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,E,F,C={
iYj(d){return B.c.fd(D.cTI,new C.djU(d),new C.djV())},
a5i:function a5i(d,e,f){this.c=d
this.a=e
this.b=f},
djU:function djU(d){this.a=d},
djV:function djV(){},
j2E(d){return new C.bPY(d,null)},
bPY:function bPY(d,e){this.c=d
this.a=e},
dWF:function dWF(){},
dWE:function dWE(){},
dWD:function dWD(d){this.a=d},
cjy:function cjy(d,e){this.c=d
this.a=e},
cjz:function cjz(d,e){this.c=d
this.a=e},
cjA:function cjA(d,e){this.c=d
this.a=e},
iKI(d){var x
if(d>=1073741824)return B.l.aB(d/1073741824,1)+" GB"
if(d>=1048576)return B.l.aB(d/1048576,1)+" MB"
x=d/1024
return B.l.aB(x,x>=1?0:1)+" KB"},
iKM(d){if(d>=1048576)return B.l.aB(d/1048576,1)+" GB"
if(d>=1024)return B.l.aB(d/1024,1)+" MB"
return B.l.aB(d,d>=1?0:1)+" KB"},
jrd(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.gh7(d),x=x.gaV(x),w=0;x.H();){v=x.gac(x)
u=A.isQ(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.d8B.h(0,u)
if(s==null)s=B.aL
p.i(0,new A.iS(s,!1,A.e("fileStorageSource_"+u.c,null,null,!0),!1,C.iKI(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
jrb(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.gh7(d),x=x.gaV(x),w=0;x.H();){v=x.gac(x)
u=C.iYj(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dlS.h(0,u)
if(s==null)s=B.aL
p.i(0,new A.iS(s,!1,A.e("fileStorageType_"+u.c,null,null,!0),!1,C.iKI(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
iJV(d){var x,w
for(x=new A.c9(d,d.r,d.e,A.P(d).j("c9<2>")),w=0;x.H();)w+=x.d
return w}},D
A=c[0]
B=c[2]
E=c[534]
F=c[665]
C=a.updateHolder(c[123],C)
D=c[664]
C.a5i.prototype={
N(){return"BusinessFileStorageFileType."+this.b}}
C.bPY.prototype={
l(d){var x=null,w=$.ag?$.ea.n():x
return new A.m(w,x,new A.z(this.c,new C.dWF(),x,x,y.f),x)}}
C.cjy.prototype={
l(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.C().a.to,i=j.x?B.ci:j.a.b,h=$.dU().b,g=h.fr.h(0,i)
if(g==null)g=0
x=h.fx
j=this.c
w=j.a
v=w/1048576
u=g<=0?0:B.l.ba(v/g,0,1)
t=w>0?Math.max(0.02,u):0
s=Math.max(0,v-g)
r=A.q(d).ax
q=r.CW
r=q==null?r.y:q
q=A.v(A.cXK(w),k,!0,!1,k,!1,k,!1,k,!1,!1,!0,!1,1,k,!1,!1,!1,28,k,k,!1,"")
p=A.e("fileStorageUsageObjectsCount",k,k,!0)
j=B.i.m(j.b)
o=y.e
j=A.b([new A.m(k,6,k,k),q,new A.m(k,4,k,k),A.v(A.a3(p,"COUNT",j),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.7,k,!1,!1,!1,12,k,k,!1,"")],o)
if(g>0){n=A.q(d)
q=A.e("fileStorageLimitUsedMb",k,k,!0)
w=A.cXK(w)
w=A.v(A.a3(q,"USED",w),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.8,k,!1,!1,!1,12,k,k,!1,"")
q=A.e("fileStorageLimitAllowedMb",k,k,!0)
p=A.cXK(g*1024*1024)
m=n.ax
B.c.O(j,A.b([new A.m(k,16,k,k),A.G(A.b([A.S(A.b([w,A.v(A.a3(q,"LIMIT",p),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.8,k,!1,!1,!1,12,k,k,!1,"")],o),B.f,k,B.bl,B.j,0,k,k),new A.m(k,8,k,k),A.fV(A.cp(6),E.ifg(m.k2,k,k,10,t,new A.a3l(m.y,y.m)),B.bj)],o),B.f,k,B.d,B.j,k,B.o)],o))}else B.c.O(j,A.b([new A.m(k,12,k,k),A.v(A.e("fileStorageLimitNotConfigured",k,k,!0),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.6,k,!1,!1,!1,12,k,k,!1,"")],o))
if(s>0){w=A.q(d).ax
q=w.id
q=(q==null?w.fy:q).a0(0.3)
w=w.fy
p=A.dV(w.a0(0.3),-1,1)
m=A.e("fileStorageOverLimitCostLine",k,k,!0)
l=A.cXK(B.l.ao(s*1024*1024))
m=A.a3(m,"EXTRA_MB",l)
l=B.l.aB(s*x,2)
m=A.a3(m,"COST_ILS",l)
l=B.l.aB(x,2)
B.c.O(j,A.b([new A.m(k,16,k,k),A.a7(!0,B.q,p,B.J,k,k,new A.H(new A.x(12,12,12,12),A.S(A.b([new A.ae(B.JC,20,!1,1,!1,!1,!1,w,k),new A.m(10,k,k,k),A.au(A.v(A.a3(m,"PRICE_PER_MB",l),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,1,k,!1,!1,!1,12,k,k,!1,""),1)],o),B.f,k,B.d,B.j,0,k,k),k),q,0,"",!1,k,k,B.d,!1,k,new A.x(0,12,0,0),!1,!0,k,k,k,k,k,k,0.55,k,k,k)],o))}return A.a7(!0,B.q,k,B.J,k,k,new A.H(B.k8,A.G(j,B.f,k,B.d,B.j,k,B.o),k),r,0,"",!1,k,k,B.d,!1,k,k,!0,!0,k,k,k,k,k,k,0.55,k,k,k)}}
C.cjz.prototype={
l(d){var x,w,v,u,t,s,r,q,p=null,o=C.jrb(this.c.d)
if(o.a===0)return A.fu()
x=C.iJV(o)
w=C.iKM(x)
v=$.ag?650:$.hG()
u=$.b4.n()
t=Math.min($.b4.n()*0.03,$.ah.n()*0.06)
s=Math.min($.b4.n()*0.05,$.ah.n()*0.07)
r=A.q(d).ax
q=r.CW
r=q==null?r.y:q
return A.aa1(!0,3,r,p,o,t,!1,u*0.22,s,!1,11,p,p,p,p,!1,p,!1,!1,25,4,new A.aM(B.aG,p,p,A.G(A.b([A.v(A.e("fileStoragePieByTypeTitle",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!1,!0,1,p,!1,!1,!1,16,p,p,!1,"")],y.e),B.a7,p,B.d,B.j,p,B.o),p),p,x,w,9,p,!1,!1,v)}}
C.cjA.prototype={
l(d){var x,w,v,u,t,s,r,q,p=null,o=C.jrd(this.c.c)
if(o.a===0)return A.fu()
x=C.iJV(o)
w=C.iKM(x)
v=$.ag?650:$.hG()
u=$.b4.n()
t=Math.min($.b4.n()*0.03,$.ah.n()*0.06)
s=Math.min($.b4.n()*0.05,$.ah.n()*0.07)
r=A.q(d).ax
q=r.CW
r=q==null?r.y:q
return A.aa1(!0,3,r,p,o,t,!1,u*0.22,s,!1,11,p,p,p,p,!1,p,!1,!1,25,4,new A.aM(B.aG,p,p,A.G(A.b([A.v(A.e("fileStoragePieBySourceTitle",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!1,!0,1,p,!1,!1,!1,16,p,p,!1,"")],y.e),B.a7,p,B.d,B.j,p,B.o),p),p,x,w,9,p,!1,!1,v)}}
var z=a.updateTypes(["I(a5i)","a5i()"])
C.djU.prototype={
$1(d){return d.c===this.a},
$S:z+0}
C.djV.prototype={
$0(){return D.Vo},
$S:z+1}
C.dWF.prototype={
$3(d,e,f){var x=null
return A.G(A.b([A.eW(!1,x,B.f,A.v(A.e("fileStorageUsageTitle",x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,1,x,!1,!1,!1,16,x,x,!1,""),new C.dWD(d),new C.dWE(),!0,!0,!0,!1,x),new C.cjy(e,x),new A.m(x,24,x,x),new C.cjA(e,x),new A.m(x,24,x,x),new C.cjz(e,x),new A.m(x,30,x,x)],y.e),B.f,x,B.d,B.j,x,B.o)},
$S:2313}
C.dWE.prototype={
$0(){},
$S:4}
C.dWD.prototype={
$0(){A.Q(this.a,!1).I(null)
return null},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a5i,A.jS)
w(A.aN,[C.djU,C.dWF])
w(A.aO,[C.djV,C.dWE,C.dWD])
w(A.r,[C.bPY,C.cjy,C.cjz,C.cjA])})()
A.aG(b.typeUniverse,JSON.parse('{"bPY":{"r":[],"f":[]},"cjy":{"r":[],"f":[]},"cjz":{"r":[],"f":[]},"cjA":{"r":[],"f":[]}}'))
var y={m:A.t("a3l<w>"),l:A.t("iS"),e:A.t("F<f>"),f:A.t("z<a7h>"),b:A.t("aq")};(function constants(){var x=a.makeConstList
D.Vo=new C.a5i("other",4,"other")
D.a9R=new C.a5i("image",0,"image")
D.a9S=new C.a5i("pdf",1,"pdf")
D.a9T=new C.a5i("spreadsheet",2,"spreadsheet")
D.a9U=new C.a5i("video",3,"video")
D.cTI=x([D.a9R,D.a9S,D.a9T,D.a9U,D.Vo],A.t("F<a5i>"))
D.d8B=new A.u([B.FE,F.abT,B.tF,B.ab6],A.t("u<a9O,w>"))
D.dlS=new A.u([D.a9R,B.abq,D.a9S,B.acd,D.a9T,B.abM,D.a9U,B.abg,D.Vo,B.ac4],A.t("u<a5i,w>"))})()};
(a=>{a["qpgOXdGj4fl3YXYxZQDKBTcqfHI="]=a.current})($__dart_deferred_initializers__);