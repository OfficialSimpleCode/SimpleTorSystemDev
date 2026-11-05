((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,F,C={
klP(d){return B.d.dG(D.daa,new C.dP0(d),new C.dP1())},
a8q:function a8q(d,e,f){this.c=d
this.a=e
this.b=f},
dP0:function dP0(d){this.a=d},
dP1:function dP1(){},
ksb(d){return new C.c8T(d,null)},
c8T:function c8T(d,e){this.c=d
this.a=e},
eAy:function eAy(){},
eAx:function eAx(){},
eAw:function eAw(d){this.a=d},
cHZ:function cHZ(d,e){this.c=d
this.a=e},
hfM:function hfM(d){this.a=d},
cI_:function cI_(d,e){this.c=d
this.a=e},
cI0:function cI0(d,e){this.c=d
this.a=e},
cI1:function cI1(d,e){this.c=d
this.a=e},
ddx:function ddx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
k5M(d){var x
if(d>=1073741824)return B.m.av(d/1073741824,1)+" GB"
if(d>=1048576)return B.m.av(d/1048576,1)+" MB"
x=d/1024
return B.m.av(x,x>=1?0:1)+" KB"},
k5P(d){if(d>=1048576)return B.m.av(d/1048576,1)+" GB"
if(d>=1024)return B.m.av(d/1024,1)+" MB"
return B.m.av(d,d>=1?0:1)+" KB"},
kVE(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.gfG(d),x=x.gaF(x),w=0;x.H();){v=x.ga7(x)
u=A.jLD(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.drl.h(0,u)
if(s==null)s=B.bt
p.i(0,new E.hd(s,!1,A.d("fileStorageSource_"+u.c,null,null,!0),!1,C.k5M(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
kVu(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.gfG(d),x=x.gaF(x),w=0;x.H();){v=x.ga7(x)
u=C.klP(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dEf.h(0,u)
if(s==null)s=B.bt
p.i(0,new E.hd(s,!1,A.d("fileStorageType_"+u.c,null,null,!0),!1,C.k5M(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
k4J(d){var x,w
for(x=new A.bP(d,d.r,d.e,A.M(d).j("bP<2>")),w=0;x.H();)w+=x.d
return w},
ds8(d){var x=0,w=A.l(y.a),v
var $async$ds8=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(A.aP(d,A.aO("storagePricingSheet","")),$async$ds8)
case 3:if(f!==!0){new A.S(A.d("thereIsProblem",null,null,!0),B.r,B.u,B.v,d).v()
x=1
break}A.az("storagePricingSheet")
x=4
return A.c(A.bK(d,null,!0,0.85,!1,0.7,!1,null,!0,!0,null,!0,!0,F.kFL(),1,!0).ba(),$async$ds8)
case 4:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$ds8,w)}},D,G,E,H
A=c[0]
B=c[2]
F=c[293]
C=a.updateHolder(c[148],C)
D=c[924]
G=c[584]
E=c[711]
H=c[925]
C.a8q.prototype={
M(){return"BusinessFileStorageFileType."+this.b}}
C.c8T.prototype={
k(d){var x=null,w=$.ag?$.dz.p():x
return new A.n(w,x,new A.w(this.c,new C.eAy(),x,x,y.f),x)}}
C.cHZ.prototype={
k(d){var x,w,v,u,t,s,r,q,p=null,o=$.C().a.y1.ghr(),n=$.d8().b,m=n.k1.h(0,o)
if(m==null)m=0
x=n.k2
w=this.c
v=w.a
u=Math.max(0,v/1048576-m)
t=A.r(d).ax
s=t.CW
t=s==null?t.y:s
s=A.u(A.ayl(v,2),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,1,p,!1,!1,!1,28,p,p,!1,"")
r=A.d("fileStorageUsageObjectsCount",p,p,!0)
w=B.i.m(w.b)
q=y.e
w=A.b([new A.n(p,6,p,p),s,new A.n(p,4,p,p),A.u(A.a1(r,"COUNT",w),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,0.7,p,!1,!1,!1,12,p,p,!1,"")],q)
if(m>0)B.d.J(w,A.b([new A.n(p,16,p,p),new G.awD(v,!0,!0,!0,!1,p)],q))
else B.d.J(w,A.b([new A.n(p,12,p,p),A.u(A.d("fileStorageLimitNotConfigured",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,0.6,p,!1,!1,!1,12,p,p,!1,"")],q))
if(u>0)B.d.J(w,A.b([new A.n(p,16,p,p),this.cQA(d,u,u*x)],q))
return A.a3(!0,B.q,p,p,B.H,p,new A.F(B.fR,A.G(w,B.h,p,B.c,B.j,p,B.f),p),t,0,"",!1,p,p,B.c,!1,p,p,!0,!0,p,p,p,p,!1,p,p,0.55,p,p,p)},
cQA(d,e,f){var x=null,w=A.d("fileStorageOverLimitNoteWithCost",x,x,!1),v=A.ayl(B.m.aE(e*1024*1024),2)
w=A.a1(w,"EXTRA_MB",v)
v=B.m.av(f,2)
w=A.a1(w,"COST_ILS",v)
return A.a4(x,x,0.3,x,x,A.e8(!1,x,!0,!1,x,!1,A.d("viewPricing",x,x,!1),new C.hfM(d),!0,!1,0.7,B.b1,!1,13,w,x),B.p,x,x,0,!1,x,x,x,x,x,!1,x,x,x,x,x,!1,!1,!1,x)}}
C.cI_.prototype={
k(d){var x,w,v,u,t,s,r,q=null,p=C.kVu(this.c.d)
if(p.a===0)return A.fM()
x=C.k4J(p)
w=C.k5P(x)
v=$.ag?650:$.hE()
u=Math.min($.b8.p()*0.03,$.ao.p()*0.06)
t=Math.min($.b8.p()*0.05,$.ao.p()*0.07)
s=A.r(d).ax
r=s.CW
s=r==null?s.y:r
return E.a0U(!0,3,s,q,p,u,q,t,!1,11,q,q,q,q,!0,!1,!1,q,25,4,new A.aS(B.aD,q,q,A.G(A.b([A.u(A.d("fileStoragePieByTypeTitle",q,q,!0),q,!1,!1,q,!1,q,!1,q,!1,!1,!1,!0,1,q,!1,!1,!1,16,q,q,!1,"")],y.e),B.a_,q,B.c,B.j,q,B.f),q),q,x,w,9,q,!1,!1,v)}}
C.cI0.prototype={
k(d){var x,w,v,u,t,s,r,q=null,p=C.kVE(this.c.c)
if(p.a===0)return A.fM()
x=C.k4J(p)
w=C.k5P(x)
v=$.ag?650:$.hE()
u=Math.min($.b8.p()*0.03,$.ao.p()*0.06)
t=Math.min($.b8.p()*0.05,$.ao.p()*0.07)
s=A.r(d).ax
r=s.CW
s=r==null?s.y:r
return E.a0U(!0,3,s,q,p,u,q,t,!1,11,q,q,q,q,!0,!1,!1,q,25,4,new A.aS(B.aD,q,q,A.G(A.b([A.u(A.d("fileStoragePieBySourceTitle",q,q,!0),q,!1,!1,q,!1,q,!1,q,!1,!1,!1,!0,1,q,!1,!1,!1,16,q,q,!1,"")],y.e),B.a_,q,B.c,B.j,q,B.f),q),q,x,w,9,q,!1,!1,v)}}
C.cI1.prototype={
k(d){var x,w,v,u=null,t=$.ag?650:$.hE(),s=A.r(d).ax,r=s.CW
s=r==null?s.y:r
r=A.b([A.u(A.d("fileStorageSourcesExplainTitle",u,u,!0),u,!1,!1,u,!1,u,!1,u,!1,!1,!1,!0,1,u,!1,!1,!1,16,u,u,!1,""),B.hT,A.u(A.d("fileStorageSourcesExplainSubtitle",u,u,!0),u,!1,!1,u,!1,u,!1,u,!1,!1,!1,!0,0.7,u,!1,!1,!1,13,u,u,!1,""),B.e7],y.e)
for(x=this.c,w=0;w<4;++w){v=D.d2z[w]
r.push(new C.ddx(x,v.a,v.b,u))}return A.a4(u,u,0.3,u,u,A.G(r,B.a_,u,B.c,B.j,u,B.f),B.p,s,u,0,!1,u,u,u,u,u,!1,u,u,B.Au,u,u,!1,!1,!1,t)}}
C.ddx.prototype={
k(d){var x=null,w=this.d.c,v=this.c.c.h(0,w),u=v==null?x:v.a
if(u==null)u=0
v=y.e
return new A.F(B.ih,A.U(A.b([new A.ai(this.e,20,!1,1,!1,!0,!1,x,x),B.d8,A.aq(A.G(A.b([A.u(A.d("fileStorageSource_"+w,x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,1,x,!1,!1,!1,14,x,x,!1,""),A.u(A.d("fileStorageSourceExplain_"+w,x,x,!1),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,0.75,x,!1,!1,!1,12.5,x,x,!0,"")],v),B.a_,x,B.c,B.j,x,B.f),1),B.d8,A.u(A.ayl(u,2),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,0.85,x,!1,!1,!1,13,x,x,!1,"")],v),B.a_,x,B.c,B.j,0,x,x,B.f),x)}}
var z=a.updateTypes(["D(a8q)","a8q()"])
C.dP0.prototype={
$1(d){return d.c===this.a},
$S:z+0}
C.dP1.prototype={
$0(){return D.a05},
$S:z+1}
C.eAy.prototype={
$3(d,e,f){var x=null
return A.G(A.b([A.dF(!1,x,B.h,A.u(A.d("fileStorageUsageTitle",x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,1,x,!1,!1,!1,16,x,x,!1,""),new C.eAw(d),new C.eAx(),!0,!0,!0,!1,x,x),new A.n(x,5,x,x),new A.F(B.pD,A.u(A.d("fileStorageUsageSubtitle",x,x,!0),B.B,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,0.7,x,!1,!1,!1,14,x,x,!1,""),x),new C.cHZ(e,x),new A.n(x,13,x,x),new C.cI1(e,x),new A.n(x,13,x,x),new C.cI0(e,x),new A.n(x,13,x,x),new C.cI_(e,x),new A.n(x,30,x,x)],y.e),B.h,x,B.c,B.j,x,B.f)},
$S:2670}
C.eAx.prototype={
$0(){},
$S:6}
C.eAw.prototype={
$0(){A.R(this.a,!1).I(null)
return null},
$S:0}
C.hfM.prototype={
$0(){return C.ds8(this.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a8q,A.ia)
w(A.aG,[C.dP0,C.eAy])
w(A.aH,[C.dP1,C.eAx,C.eAw,C.hfM])
w(A.p,[C.c8T,C.cHZ,C.cI_,C.cI0,C.cI1,C.ddx])})()
A.au(b.typeUniverse,JSON.parse('{"c8T":{"p":[],"f":[]},"cHZ":{"p":[],"f":[]},"cI_":{"p":[],"f":[]},"cI0":{"p":[],"f":[]},"cI1":{"p":[],"f":[]},"ddx":{"p":[],"f":[]}}'))
var y={l:A.t("hd"),e:A.t("B<f>"),f:A.t("w<a0K>"),b:A.t("al"),a:A.t("~")};(function constants(){var x=a.makeConstList
D.a05=new C.a8q("other",4,"other")
D.e1i=new A.b3(B.u8,B.Ol)
D.cay=new A.ac(62173,"MaterialIcons",null,!1)
D.e0s=new A.b3(B.En,D.cay)
D.e_S=new A.b3(B.Kv,B.AY)
D.e18=new A.b3(B.Eo,B.uS)
D.d2z=x([D.e1i,D.e0s,D.e_S,D.e18],A.t("B<+(a8r,ac)>"))
D.aha=new C.a8q("image",0,"image")
D.ahb=new C.a8q("pdf",1,"pdf")
D.ahc=new C.a8q("spreadsheet",2,"spreadsheet")
D.ahd=new C.a8q("video",3,"video")
D.daa=x([D.aha,D.ahb,D.ahc,D.ahd,D.a05],A.t("B<a8q>"))
D.drl=new A.x([B.En,H.ajB,B.u8,B.aiJ,B.Eo,B.aiL],A.t("x<a8r,y>"))
D.dEf=new A.x([D.aha,B.aj3,D.ahb,B.ak0,D.ahc,B.aju,D.ahd,B.aiT,D.a05,B.ajQ],A.t("x<a8q,y>"))})()};
(a=>{a["BzH5rqMPJ0Y7hAcpgDGiRDnWab0="]=a.current})($__dart_deferred_initializers__);