((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,F,C={
km1(d){return B.d.dG(D.dad,new C.dPa(d),new C.dPb())},
a8q:function a8q(d,e,f){this.c=d
this.a=e
this.b=f},
dPa:function dPa(d){this.a=d},
dPb:function dPb(){},
kso(d){return new C.c8Y(d,null)},
c8Y:function c8Y(d,e){this.c=d
this.a=e},
eAI:function eAI(){},
eAH:function eAH(){},
eAG:function eAG(d){this.a=d},
cI4:function cI4(d,e){this.c=d
this.a=e},
hfX:function hfX(d){this.a=d},
cI5:function cI5(d,e){this.c=d
this.a=e},
cI6:function cI6(d,e){this.c=d
this.a=e},
cI7:function cI7(d,e){this.c=d
this.a=e},
ddD:function ddD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
k6_(d){var x
if(d>=1073741824)return B.m.av(d/1073741824,1)+" GB"
if(d>=1048576)return B.m.av(d/1048576,1)+" MB"
x=d/1024
return B.m.av(x,x>=1?0:1)+" KB"},
k62(d){if(d>=1048576)return B.m.av(d/1048576,1)+" GB"
if(d>=1024)return B.m.av(d/1024,1)+" MB"
return B.m.av(d,d>=1?0:1)+" KB"},
kVS(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.gfG(d),x=x.gaE(x),w=0;x.H();){v=x.ga6(x)
u=A.jLS(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dro.h(0,u)
if(s==null)s=B.bt
p.i(0,new E.hd(s,!1,A.d("fileStorageSource_"+u.c,null,null,!0),!1,C.k6_(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
kVI(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.gfG(d),x=x.gaE(x),w=0;x.H();){v=x.ga6(x)
u=C.km1(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dEi.h(0,u)
if(s==null)s=B.bt
p.i(0,new E.hd(s,!1,A.d("fileStorageType_"+u.c,null,null,!0),!1,C.k6_(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
k4X(d){var x,w
for(x=new A.bP(d,d.r,d.e,A.M(d).j("bP<2>")),w=0;x.H();)w+=x.d
return w},
dse(d){var x=0,w=A.l(y.a),v
var $async$dse=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(A.aP(d,A.aO("storagePricingSheet","")),$async$dse)
case 3:if(f!==!0){new A.S(A.d("thereIsProblem",null,null,!0),B.r,B.u,B.v,d).v()
x=1
break}A.az("storagePricingSheet")
x=4
return A.c(A.bK(d,null,!0,0.85,!1,0.7,!1,null,!0,!0,null,!0,!0,F.kFZ(),1,!0).ba(),$async$dse)
case 4:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$dse,w)}},D,G,E,H
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
C.c8Y.prototype={
k(d){var x=null,w=$.ag?$.dz.p():x
return new A.n(w,x,new A.w(this.c,new C.eAI(),x,x,y.f),x)}}
C.cI4.prototype={
k(d){var x,w,v,u,t,s,r,q,p=null,o=$.C().a.y1.ghr(),n=$.d8().b,m=n.k1.h(0,o)
if(m==null)m=0
x=n.k2
w=this.c
v=w.a
u=Math.max(0,v/1048576-m)
t=A.r(d).ax
s=t.CW
t=s==null?t.y:s
s=A.u(A.ayp(v,2),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,1,p,!1,!1,!1,28,p,p,!1,"")
r=A.d("fileStorageUsageObjectsCount",p,p,!0)
w=B.i.m(w.b)
q=y.e
w=A.b([new A.n(p,6,p,p),s,new A.n(p,4,p,p),A.u(A.a1(r,"COUNT",w),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,0.7,p,!1,!1,!1,12,p,p,!1,"")],q)
if(m>0)B.d.J(w,A.b([new A.n(p,16,p,p),new G.awH(v,!0,!0,!0,!1,p)],q))
else B.d.J(w,A.b([new A.n(p,12,p,p),A.u(A.d("fileStorageLimitNotConfigured",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,0.6,p,!1,!1,!1,12,p,p,!1,"")],q))
if(u>0)B.d.J(w,A.b([new A.n(p,16,p,p),this.cQH(d,u,u*x)],q))
return A.a3(!0,B.q,p,p,B.H,p,new A.F(B.fR,A.G(w,B.h,p,B.c,B.j,p,B.f),p),t,0,"",!1,p,p,B.c,!1,p,p,!0,!0,p,p,p,p,!1,p,p,0.55,p,p,p)},
cQH(d,e,f){var x=null,w=A.d("fileStorageOverLimitNoteWithCost",x,x,!1),v=A.ayp(B.m.aF(e*1024*1024),2)
w=A.a1(w,"EXTRA_MB",v)
v=B.m.av(f,2)
w=A.a1(w,"COST_ILS",v)
return A.a4(x,x,0.3,x,x,A.e8(!1,x,!0,!1,x,!1,A.d("viewPricing",x,x,!1),new C.hfX(d),!0,!1,0.7,B.b1,!1,13,w,x),B.p,x,x,0,!1,x,x,x,x,x,!1,x,x,x,x,x,!1,!1,!1,x)}}
C.cI5.prototype={
k(d){var x,w,v,u,t,s,r,q=null,p=C.kVI(this.c.d)
if(p.a===0)return A.fM()
x=C.k4X(p)
w=C.k62(x)
v=$.ag?650:$.hE()
u=Math.min($.b8.p()*0.03,$.ao.p()*0.06)
t=Math.min($.b8.p()*0.05,$.ao.p()*0.07)
s=A.r(d).ax
r=s.CW
s=r==null?s.y:r
return E.a0U(!0,3,s,q,p,u,q,t,!1,11,q,q,q,q,!0,!1,!1,q,25,4,new A.aS(B.aD,q,q,A.G(A.b([A.u(A.d("fileStoragePieByTypeTitle",q,q,!0),q,!1,!1,q,!1,q,!1,q,!1,!1,!1,!0,1,q,!1,!1,!1,16,q,q,!1,"")],y.e),B.a_,q,B.c,B.j,q,B.f),q),q,x,w,9,q,!1,!1,v)}}
C.cI6.prototype={
k(d){var x,w,v,u,t,s,r,q=null,p=C.kVS(this.c.c)
if(p.a===0)return A.fM()
x=C.k4X(p)
w=C.k62(x)
v=$.ag?650:$.hE()
u=Math.min($.b8.p()*0.03,$.ao.p()*0.06)
t=Math.min($.b8.p()*0.05,$.ao.p()*0.07)
s=A.r(d).ax
r=s.CW
s=r==null?s.y:r
return E.a0U(!0,3,s,q,p,u,q,t,!1,11,q,q,q,q,!0,!1,!1,q,25,4,new A.aS(B.aD,q,q,A.G(A.b([A.u(A.d("fileStoragePieBySourceTitle",q,q,!0),q,!1,!1,q,!1,q,!1,q,!1,!1,!1,!0,1,q,!1,!1,!1,16,q,q,!1,"")],y.e),B.a_,q,B.c,B.j,q,B.f),q),q,x,w,9,q,!1,!1,v)}}
C.cI7.prototype={
k(d){var x,w,v,u=null,t=$.ag?650:$.hE(),s=A.r(d).ax,r=s.CW
s=r==null?s.y:r
r=A.b([A.u(A.d("fileStorageSourcesExplainTitle",u,u,!0),u,!1,!1,u,!1,u,!1,u,!1,!1,!1,!0,1,u,!1,!1,!1,16,u,u,!1,""),B.hT,A.u(A.d("fileStorageSourcesExplainSubtitle",u,u,!0),u,!1,!1,u,!1,u,!1,u,!1,!1,!1,!0,0.7,u,!1,!1,!1,13,u,u,!1,""),B.e7],y.e)
for(x=this.c,w=0;w<4;++w){v=D.d2B[w]
r.push(new C.ddD(x,v.a,v.b,u))}return A.a4(u,u,0.3,u,u,A.G(r,B.a_,u,B.c,B.j,u,B.f),B.p,s,u,0,!1,u,u,u,u,u,!1,u,u,B.Au,u,u,!1,!1,!1,t)}}
C.ddD.prototype={
k(d){var x=null,w=this.d.c,v=this.c.c.h(0,w),u=v==null?x:v.a
if(u==null)u=0
v=y.e
return new A.F(B.ih,A.U(A.b([new A.ai(this.e,20,!1,1,!1,!0,!1,x,x),B.d8,A.aq(A.G(A.b([A.u(A.d("fileStorageSource_"+w,x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,1,x,!1,!1,!1,14,x,x,!1,""),A.u(A.d("fileStorageSourceExplain_"+w,x,x,!1),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,0.75,x,!1,!1,!1,12.5,x,x,!0,"")],v),B.a_,x,B.c,B.j,x,B.f),1),B.d8,A.u(A.ayp(u,2),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,0.85,x,!1,!1,!1,13,x,x,!1,"")],v),B.a_,x,B.c,B.j,0,x,x,B.f),x)}}
var z=a.updateTypes(["D(a8q)","a8q()"])
C.dPa.prototype={
$1(d){return d.c===this.a},
$S:z+0}
C.dPb.prototype={
$0(){return D.a06},
$S:z+1}
C.eAI.prototype={
$3(d,e,f){var x=null
return A.G(A.b([A.dF(!1,x,B.h,A.u(A.d("fileStorageUsageTitle",x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,1,x,!1,!1,!1,16,x,x,!1,""),new C.eAG(d),new C.eAH(),!0,!0,!0,!1,x,x),new A.n(x,5,x,x),new A.F(B.pD,A.u(A.d("fileStorageUsageSubtitle",x,x,!0),B.B,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,0.7,x,!1,!1,!1,14,x,x,!1,""),x),new C.cI4(e,x),new A.n(x,13,x,x),new C.cI7(e,x),new A.n(x,13,x,x),new C.cI6(e,x),new A.n(x,13,x,x),new C.cI5(e,x),new A.n(x,30,x,x)],y.e),B.h,x,B.c,B.j,x,B.f)},
$S:2670}
C.eAH.prototype={
$0(){},
$S:6}
C.eAG.prototype={
$0(){A.R(this.a,!1).I(null)
return null},
$S:0}
C.hfX.prototype={
$0(){return C.dse(this.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a8q,A.ia)
w(A.aG,[C.dPa,C.eAI])
w(A.aH,[C.dPb,C.eAH,C.eAG,C.hfX])
w(A.p,[C.c8Y,C.cI4,C.cI5,C.cI6,C.cI7,C.ddD])})()
A.au(b.typeUniverse,JSON.parse('{"c8Y":{"p":[],"f":[]},"cI4":{"p":[],"f":[]},"cI5":{"p":[],"f":[]},"cI6":{"p":[],"f":[]},"cI7":{"p":[],"f":[]},"ddD":{"p":[],"f":[]}}'))
var y={l:A.t("hd"),e:A.t("B<f>"),f:A.t("w<a0K>"),b:A.t("al"),a:A.t("~")};(function constants(){var x=a.makeConstList
D.a06=new C.a8q("other",4,"other")
D.e1n=new A.b3(B.u8,B.Om)
D.caA=new A.ac(62173,"MaterialIcons",null,!1)
D.e0x=new A.b3(B.En,D.caA)
D.e_X=new A.b3(B.Kw,B.AY)
D.e1d=new A.b3(B.Eo,B.uS)
D.d2B=x([D.e1n,D.e0x,D.e_X,D.e1d],A.t("B<+(a8r,ac)>"))
D.aha=new C.a8q("image",0,"image")
D.ahb=new C.a8q("pdf",1,"pdf")
D.ahc=new C.a8q("spreadsheet",2,"spreadsheet")
D.ahd=new C.a8q("video",3,"video")
D.dad=x([D.aha,D.ahb,D.ahc,D.ahd,D.a06],A.t("B<a8q>"))
D.dro=new A.x([B.En,H.ajB,B.u8,B.aiJ,B.Eo,B.aiL],A.t("x<a8r,y>"))
D.dEi=new A.x([D.aha,B.aj3,D.ahb,B.ak0,D.ahc,B.aju,D.ahd,B.aiT,D.a06,B.ajQ],A.t("x<a8q,y>"))})()};
(a=>{a["fbR9z6UvYeU9gZupjq4dGgUes7s="]=a.current})($__dart_deferred_initializers__);