((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,F,C={
km0(d){return B.d.dG(D.da3,new C.dP9(d),new C.dPa())},
a8q:function a8q(d,e,f){this.c=d
this.a=e
this.b=f},
dP9:function dP9(d){this.a=d},
dPa:function dPa(){},
ksm(d){return new C.c8X(d,null)},
c8X:function c8X(d,e){this.c=d
this.a=e},
eAH:function eAH(){},
eAG:function eAG(){},
eAF:function eAF(d){this.a=d},
cI3:function cI3(d,e){this.c=d
this.a=e},
hfW:function hfW(d){this.a=d},
cI4:function cI4(d,e){this.c=d
this.a=e},
cI5:function cI5(d,e){this.c=d
this.a=e},
cI6:function cI6(d,e){this.c=d
this.a=e},
ddC:function ddC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
k5Z(d){var x
if(d>=1073741824)return B.m.av(d/1073741824,1)+" GB"
if(d>=1048576)return B.m.av(d/1048576,1)+" MB"
x=d/1024
return B.m.av(x,x>=1?0:1)+" KB"},
k61(d){if(d>=1048576)return B.m.av(d/1048576,1)+" GB"
if(d>=1024)return B.m.av(d/1024,1)+" MB"
return B.m.av(d,d>=1?0:1)+" KB"},
kVQ(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.gfF(d),x=x.gaE(x),w=0;x.H();){v=x.ga6(x)
u=A.jLR(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dre.h(0,u)
if(s==null)s=B.bt
p.i(0,new E.hd(s,!1,A.d("fileStorageSource_"+u.c,null,null,!0),!1,C.k5Z(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
kVG(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.o(r,q)
for(x=d.gfF(d),x=x.gaE(x),w=0;x.H();){v=x.ga6(x)
u=C.km0(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dE8.h(0,u)
if(s==null)s=B.bt
p.i(0,new E.hd(s,!1,A.d("fileStorageType_"+u.c,null,null,!0),!1,C.k5Z(t)),t/1024)}if(w<2)return A.o(r,q)
return p},
k4W(d){var x,w
for(x=new A.bP(d,d.r,d.e,A.M(d).j("bP<2>")),w=0;x.H();)w+=x.d
return w},
dsd(d){var x=0,w=A.l(y.a),v
var $async$dsd=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(A.aP(d,A.aO("storagePricingSheet","")),$async$dsd)
case 3:if(f!==!0){new A.S(A.d("thereIsProblem",null,null,!0),B.r,B.u,B.v,d).v()
x=1
break}A.az("storagePricingSheet")
x=4
return A.c(A.bK(d,null,!0,0.85,!1,0.7,!1,null,!0,!0,null,!0,!0,F.kFX(),1,!0).ba(),$async$dsd)
case 4:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$dsd,w)}},D,G,E,H
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
C.c8X.prototype={
k(d){var x=null,w=$.ag?$.dz.p():x
return new A.n(w,x,new A.w(this.c,new C.eAH(),x,x,y.f),x)}}
C.cI3.prototype={
k(d){var x,w,v,u,t,s,r,q,p=null,o=$.C().a.y1.ghr(),n=$.d8().b,m=n.k1.h(0,o)
if(m==null)m=0
x=n.k2
w=this.c
v=w.a
u=Math.max(0,v/1048576-m)
t=A.r(d).ax
s=t.CW
t=s==null?t.y:s
s=A.u(A.ayo(v,2),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,1,p,!1,!1,!1,28,p,p,!1,"")
r=A.d("fileStorageUsageObjectsCount",p,p,!0)
w=B.i.m(w.b)
q=y.e
w=A.b([new A.n(p,6,p,p),s,new A.n(p,4,p,p),A.u(A.a1(r,"COUNT",w),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,0.7,p,!1,!1,!1,12,p,p,!1,"")],q)
if(m>0)B.d.J(w,A.b([new A.n(p,16,p,p),new G.awG(v,!0,!0,!0,!1,p)],q))
else B.d.J(w,A.b([new A.n(p,12,p,p),A.u(A.d("fileStorageLimitNotConfigured",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,0.6,p,!1,!1,!1,12,p,p,!1,"")],q))
if(u>0)B.d.J(w,A.b([new A.n(p,16,p,p),this.cQH(d,u,u*x)],q))
return A.a3(!0,B.q,p,p,B.H,p,new A.F(B.fR,A.G(w,B.h,p,B.c,B.j,p,B.f),p),t,0,"",!1,p,p,B.c,!1,p,p,!0,!0,p,p,p,p,!1,p,p,0.55,p,p,p)},
cQH(d,e,f){var x=null,w=A.d("fileStorageOverLimitNoteWithCost",x,x,!1),v=A.ayo(B.m.aF(e*1024*1024),2)
w=A.a1(w,"EXTRA_MB",v)
v=B.m.av(f,2)
w=A.a1(w,"COST_ILS",v)
return A.a4(x,x,0.3,x,x,A.e8(!1,x,!0,!1,x,!1,A.d("viewPricing",x,x,!1),new C.hfW(d),!0,!1,0.7,B.b1,!1,13,w,x),B.p,x,x,0,!1,x,x,x,x,x,!1,x,x,x,x,x,!1,!1,!1,x)}}
C.cI4.prototype={
k(d){var x,w,v,u,t,s,r,q=null,p=C.kVG(this.c.d)
if(p.a===0)return A.fM()
x=C.k4W(p)
w=C.k61(x)
v=$.ag?650:$.hE()
u=Math.min($.b8.p()*0.03,$.ao.p()*0.06)
t=Math.min($.b8.p()*0.05,$.ao.p()*0.07)
s=A.r(d).ax
r=s.CW
s=r==null?s.y:r
return E.a0U(!0,3,s,q,p,u,q,t,!1,11,q,q,q,q,!0,!1,!1,q,25,4,new A.aS(B.aD,q,q,A.G(A.b([A.u(A.d("fileStoragePieByTypeTitle",q,q,!0),q,!1,!1,q,!1,q,!1,q,!1,!1,!1,!0,1,q,!1,!1,!1,16,q,q,!1,"")],y.e),B.a_,q,B.c,B.j,q,B.f),q),q,x,w,9,q,!1,!1,v)}}
C.cI5.prototype={
k(d){var x,w,v,u,t,s,r,q=null,p=C.kVQ(this.c.c)
if(p.a===0)return A.fM()
x=C.k4W(p)
w=C.k61(x)
v=$.ag?650:$.hE()
u=Math.min($.b8.p()*0.03,$.ao.p()*0.06)
t=Math.min($.b8.p()*0.05,$.ao.p()*0.07)
s=A.r(d).ax
r=s.CW
s=r==null?s.y:r
return E.a0U(!0,3,s,q,p,u,q,t,!1,11,q,q,q,q,!0,!1,!1,q,25,4,new A.aS(B.aD,q,q,A.G(A.b([A.u(A.d("fileStoragePieBySourceTitle",q,q,!0),q,!1,!1,q,!1,q,!1,q,!1,!1,!1,!0,1,q,!1,!1,!1,16,q,q,!1,"")],y.e),B.a_,q,B.c,B.j,q,B.f),q),q,x,w,9,q,!1,!1,v)}}
C.cI6.prototype={
k(d){var x,w,v,u=null,t=$.ag?650:$.hE(),s=A.r(d).ax,r=s.CW
s=r==null?s.y:r
r=A.b([A.u(A.d("fileStorageSourcesExplainTitle",u,u,!0),u,!1,!1,u,!1,u,!1,u,!1,!1,!1,!0,1,u,!1,!1,!1,16,u,u,!1,""),B.hT,A.u(A.d("fileStorageSourcesExplainSubtitle",u,u,!0),u,!1,!1,u,!1,u,!1,u,!1,!1,!1,!0,0.7,u,!1,!1,!1,13,u,u,!1,""),B.e7],y.e)
for(x=this.c,w=0;w<4;++w){v=D.d2r[w]
r.push(new C.ddC(x,v.a,v.b,u))}return A.a4(u,u,0.3,u,u,A.G(r,B.a_,u,B.c,B.j,u,B.f),B.p,s,u,0,!1,u,u,u,u,u,!1,u,u,B.Au,u,u,!1,!1,!1,t)}}
C.ddC.prototype={
k(d){var x=null,w=this.d.c,v=this.c.c.h(0,w),u=v==null?x:v.a
if(u==null)u=0
v=y.e
return new A.F(B.ih,A.U(A.b([new A.ai(this.e,20,!1,1,!1,!0,!1,x,x),B.d8,A.aq(A.G(A.b([A.u(A.d("fileStorageSource_"+w,x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,1,x,!1,!1,!1,14,x,x,!1,""),A.u(A.d("fileStorageSourceExplain_"+w,x,x,!1),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,0.75,x,!1,!1,!1,12.5,x,x,!0,"")],v),B.a_,x,B.c,B.j,x,B.f),1),B.d8,A.u(A.ayo(u,2),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,0.85,x,!1,!1,!1,13,x,x,!1,"")],v),B.a_,x,B.c,B.j,0,x,x,B.f),x)}}
var z=a.updateTypes(["D(a8q)","a8q()"])
C.dP9.prototype={
$1(d){return d.c===this.a},
$S:z+0}
C.dPa.prototype={
$0(){return D.a06},
$S:z+1}
C.eAH.prototype={
$3(d,e,f){var x=null
return A.G(A.b([A.dF(!1,x,B.h,A.u(A.d("fileStorageUsageTitle",x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,1,x,!1,!1,!1,16,x,x,!1,""),new C.eAF(d),new C.eAG(),!0,!0,!0,!1,x,x),new A.n(x,5,x,x),new A.F(B.pD,A.u(A.d("fileStorageUsageSubtitle",x,x,!0),B.B,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,0.7,x,!1,!1,!1,14,x,x,!1,""),x),new C.cI3(e,x),new A.n(x,13,x,x),new C.cI6(e,x),new A.n(x,13,x,x),new C.cI5(e,x),new A.n(x,13,x,x),new C.cI4(e,x),new A.n(x,30,x,x)],y.e),B.h,x,B.c,B.j,x,B.f)},
$S:2670}
C.eAG.prototype={
$0(){},
$S:6}
C.eAF.prototype={
$0(){A.R(this.a,!1).I(null)
return null},
$S:0}
C.hfW.prototype={
$0(){return C.dsd(this.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a8q,A.ia)
w(A.aG,[C.dP9,C.eAH])
w(A.aH,[C.dPa,C.eAG,C.eAF,C.hfW])
w(A.p,[C.c8X,C.cI3,C.cI4,C.cI5,C.cI6,C.ddC])})()
A.au(b.typeUniverse,JSON.parse('{"c8X":{"p":[],"f":[]},"cI3":{"p":[],"f":[]},"cI4":{"p":[],"f":[]},"cI5":{"p":[],"f":[]},"cI6":{"p":[],"f":[]},"ddC":{"p":[],"f":[]}}'))
var y={l:A.t("hd"),e:A.t("B<f>"),f:A.t("w<a0K>"),b:A.t("al"),a:A.t("~")};(function constants(){var x=a.makeConstList
D.a06=new C.a8q("other",4,"other")
D.e1d=new A.b3(B.u8,B.Om)
D.caq=new A.ac(62173,"MaterialIcons",null,!1)
D.e0n=new A.b3(B.En,D.caq)
D.e_N=new A.b3(B.Kw,B.AY)
D.e13=new A.b3(B.Eo,B.uS)
D.d2r=x([D.e1d,D.e0n,D.e_N,D.e13],A.t("B<+(a8r,ac)>"))
D.ah1=new C.a8q("image",0,"image")
D.ah2=new C.a8q("pdf",1,"pdf")
D.ah3=new C.a8q("spreadsheet",2,"spreadsheet")
D.ah4=new C.a8q("video",3,"video")
D.da3=x([D.ah1,D.ah2,D.ah3,D.ah4,D.a06],A.t("B<a8q>"))
D.dre=new A.x([B.En,H.ajs,B.u8,B.aiA,B.Eo,B.aiC],A.t("x<a8r,y>"))
D.dE8=new A.x([D.ah1,B.aiV,D.ah2,B.ajS,D.ah3,B.ajl,D.ah4,B.aiK,D.a06,B.ajH],A.t("x<a8q,y>"))})()};
(a=>{a["nRFd2nz8+X9q1q97YCcoi/OVVkw="]=a.current})($__dart_deferred_initializers__);