((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,E,F,C={
iY0(d){return B.c.fd(D.cTw,new C.djR(d),new C.djS())},
a5i:function a5i(d,e,f){this.c=d
this.a=e
this.b=f},
djR:function djR(d){this.a=d},
djS:function djS(){},
j2m(d){return new C.bPW(d,null)},
bPW:function bPW(d,e){this.c=d
this.a=e},
dWD:function dWD(){},
dWC:function dWC(){},
dWB:function dWB(d){this.a=d},
cjx:function cjx(d,e){this.c=d
this.a=e},
cjy:function cjy(d,e){this.c=d
this.a=e},
cjz:function cjz(d,e){this.c=d
this.a=e},
iKo(d){var x
if(d>=1073741824)return B.l.aB(d/1073741824,1)+" GB"
if(d>=1048576)return B.l.aB(d/1048576,1)+" MB"
x=d/1024
return B.l.aB(x,x>=1?0:1)+" KB"},
iKs(d){if(d>=1048576)return B.l.aB(d/1048576,1)+" GB"
if(d>=1024)return B.l.aB(d/1024,1)+" MB"
return B.l.aB(d,d>=1?0:1)+" KB"},
jqW(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.gh6(d),x=x.gaV(x),w=0;x.H();){v=x.gab(x)
u=A.isx(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.d8q.h(0,u)
if(s==null)s=B.aL
p.i(0,new A.iS(s,!1,A.e("fileStorageSource_"+u.c,null,null,!0),!1,C.iKo(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
jqU(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.gh6(d),x=x.gaV(x),w=0;x.H();){v=x.gab(x)
u=C.iY0(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dlG.h(0,u)
if(s==null)s=B.aL
p.i(0,new A.iS(s,!1,A.e("fileStorageType_"+u.c,null,null,!0),!1,C.iKo(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
iJB(d){var x,w
for(x=new A.ca(d,d.r,d.e,A.P(d).j("ca<2>")),w=0;x.H();)w+=x.d
return w}},D
A=c[0]
B=c[2]
E=c[535]
F=c[660]
C=a.updateHolder(c[123],C)
D=c[659]
C.a5i.prototype={
N(){return"BusinessFileStorageFileType."+this.b}}
C.bPW.prototype={
l(d){var x=null,w=$.ag?$.ed.n():x
return new A.m(w,x,new A.z(this.c,new C.dWD(),x,x,y.f),x)}}
C.cjx.prototype={
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
q=A.v(A.cXI(w),k,!0,!1,k,!1,k,!1,k,!1,!1,!0,!1,1,k,!1,!1,!1,28,k,k,!1,"")
p=A.e("fileStorageUsageObjectsCount",k,k,!0)
j=B.i.m(j.b)
o=y.e
j=A.b([new A.m(k,6,k,k),q,new A.m(k,4,k,k),A.v(A.a3(p,"COUNT",j),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.7,k,!1,!1,!1,12,k,k,!1,"")],o)
if(g>0){n=A.q(d)
q=A.e("fileStorageLimitUsedMb",k,k,!0)
w=A.cXI(w)
w=A.v(A.a3(q,"USED",w),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.8,k,!1,!1,!1,12,k,k,!1,"")
q=A.e("fileStorageLimitAllowedMb",k,k,!0)
p=A.cXI(g*1024*1024)
m=n.ax
B.c.O(j,A.b([new A.m(k,16,k,k),A.G(A.b([A.S(A.b([w,A.v(A.a3(q,"LIMIT",p),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.8,k,!1,!1,!1,12,k,k,!1,"")],o),B.f,k,B.bl,B.j,0,k,k),new A.m(k,8,k,k),A.fV(A.cq(6),E.ieZ(m.k2,k,k,10,t,new A.a3l(m.y,y.m)),B.bj)],o),B.f,k,B.d,B.j,k,B.o)],o))}else B.c.O(j,A.b([new A.m(k,12,k,k),A.v(A.e("fileStorageLimitNotConfigured",k,k,!0),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,0.6,k,!1,!1,!1,12,k,k,!1,"")],o))
if(s>0){w=A.q(d).ax
q=w.id
q=(q==null?w.fy:q).a0(0.3)
w=w.fy
p=A.dY(w.a0(0.3),-1,1)
m=A.e("fileStorageOverLimitCostLine",k,k,!0)
l=A.cXI(B.l.ao(s*1024*1024))
m=A.a3(m,"EXTRA_MB",l)
l=B.l.aB(s*x,2)
m=A.a3(m,"COST_ILS",l)
l=B.l.aB(x,2)
B.c.O(j,A.b([new A.m(k,16,k,k),A.a7(!0,B.q,p,B.J,k,k,new A.H(new A.x(12,12,12,12),A.S(A.b([new A.ae(B.Jy,20,!1,1,!1,!1,!1,w,k),new A.m(10,k,k,k),A.av(A.v(A.a3(m,"PRICE_PER_MB",l),k,!1,!1,k,!1,k,!1,k,!1,!1,!0,!1,1,k,!1,!1,!1,12,k,k,!1,""),1)],o),B.f,k,B.d,B.j,0,k,k),k),q,0,"",!1,k,k,B.d,!1,k,new A.x(0,12,0,0),!1,!0,k,k,k,k,k,k,0.55,k,k,k)],o))}return A.a7(!0,B.q,k,B.J,k,k,new A.H(B.k8,A.G(j,B.f,k,B.d,B.j,k,B.o),k),r,0,"",!1,k,k,B.d,!1,k,k,!0,!0,k,k,k,k,k,k,0.55,k,k,k)}}
C.cjy.prototype={
l(d){var x,w,v,u,t,s,r,q,p=null,o=C.jqU(this.c.d)
if(o.a===0)return A.fu()
x=C.iJB(o)
w=C.iKs(x)
v=$.ag?650:$.hG()
u=$.b5.n()
t=Math.min($.b5.n()*0.03,$.ah.n()*0.06)
s=Math.min($.b5.n()*0.05,$.ah.n()*0.07)
r=A.q(d).ax
q=r.CW
r=q==null?r.y:q
return A.aa0(!0,3,r,p,o,t,!1,u*0.22,s,!1,11,p,p,p,p,!1,p,!1,!1,25,4,new A.aM(B.aG,p,p,A.G(A.b([A.v(A.e("fileStoragePieByTypeTitle",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!1,!0,1,p,!1,!1,!1,16,p,p,!1,"")],y.e),B.a8,p,B.d,B.j,p,B.o),p),p,x,w,9,p,!1,!1,v)}}
C.cjz.prototype={
l(d){var x,w,v,u,t,s,r,q,p=null,o=C.jqW(this.c.c)
if(o.a===0)return A.fu()
x=C.iJB(o)
w=C.iKs(x)
v=$.ag?650:$.hG()
u=$.b5.n()
t=Math.min($.b5.n()*0.03,$.ah.n()*0.06)
s=Math.min($.b5.n()*0.05,$.ah.n()*0.07)
r=A.q(d).ax
q=r.CW
r=q==null?r.y:q
return A.aa0(!0,3,r,p,o,t,!1,u*0.22,s,!1,11,p,p,p,p,!1,p,!1,!1,25,4,new A.aM(B.aG,p,p,A.G(A.b([A.v(A.e("fileStoragePieBySourceTitle",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!1,!0,1,p,!1,!1,!1,16,p,p,!1,"")],y.e),B.a8,p,B.d,B.j,p,B.o),p),p,x,w,9,p,!1,!1,v)}}
var z=a.updateTypes(["J(a5i)","a5i()"])
C.djR.prototype={
$1(d){return d.c===this.a},
$S:z+0}
C.djS.prototype={
$0(){return D.Vi},
$S:z+1}
C.dWD.prototype={
$3(d,e,f){var x=null
return A.G(A.b([A.eW(!1,x,B.f,A.v(A.e("fileStorageUsageTitle",x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,1,x,!1,!1,!1,16,x,x,!1,""),new C.dWB(d),new C.dWC(),!0,!0,!0,!1,x),new C.cjx(e,x),new A.m(x,24,x,x),new C.cjz(e,x),new A.m(x,24,x,x),new C.cjy(e,x),new A.m(x,30,x,x)],y.e),B.f,x,B.d,B.j,x,B.o)},
$S:2313}
C.dWC.prototype={
$0(){},
$S:4}
C.dWB.prototype={
$0(){A.Q(this.a,!1).I(null)
return null},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a5i,A.jR)
w(A.aO,[C.djR,C.dWD])
w(A.aN,[C.djS,C.dWC,C.dWB])
w(A.r,[C.bPW,C.cjx,C.cjy,C.cjz])})()
A.aG(b.typeUniverse,JSON.parse('{"bPW":{"r":[],"f":[]},"cjx":{"r":[],"f":[]},"cjy":{"r":[],"f":[]},"cjz":{"r":[],"f":[]}}'))
var y={m:A.t("a3l<w>"),l:A.t("iS"),e:A.t("F<f>"),f:A.t("z<a7g>"),b:A.t("aq")};(function constants(){var x=a.makeConstList
D.Vi=new C.a5i("other",4,"other")
D.a9Q=new C.a5i("image",0,"image")
D.a9R=new C.a5i("pdf",1,"pdf")
D.a9S=new C.a5i("spreadsheet",2,"spreadsheet")
D.a9T=new C.a5i("video",3,"video")
D.cTw=x([D.a9Q,D.a9R,D.a9S,D.a9T,D.Vi],A.t("F<a5i>"))
D.d8q=new A.u([B.FA,F.abS,B.tF,B.ab5],A.t("u<a9N,w>"))
D.dlG=new A.u([D.a9Q,B.abp,D.a9R,B.acc,D.a9S,B.abL,D.a9T,B.abf,D.Vi,B.ac3],A.t("u<a5i,w>"))})()};
(a=>{a["G1TjM/zBVnOMf8DqmJqgNsGnLCc="]=a.current})($__dart_deferred_initializers__);