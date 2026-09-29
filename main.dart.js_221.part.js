((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,F,G,C={
jSK(d){return B.d.dR(D.d5u,new C.dDL(d),new C.dDM())},
a7w:function a7w(d,e,f){this.c=d
this.a=e
this.b=f},
dDL:function dDL(d){this.a=d},
dDM:function dDM(){},
jYO(d){return new C.c2o(d,null)},
c2o:function c2o(d,e){this.c=d
this.a=e},
enV:function enV(){},
enU:function enU(){},
enT:function enT(d){this.a=d},
cz7:function cz7(d,e){this.c=d
this.a=e},
fYD:function fYD(d){this.a=d},
cz8:function cz8(d,e){this.c=d
this.a=e},
cz9:function cz9(d,e){this.c=d
this.a=e},
cza:function cza(d,e){this.c=d
this.a=e},
d3_:function d3_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
jDy(d){var x
if(d>=1073741824)return B.k.av(d/1073741824,1)+" GB"
if(d>=1048576)return B.k.av(d/1048576,1)+" MB"
x=d/1024
return B.k.av(x,x>=1?0:1)+" KB"},
jDB(d){if(d>=1048576)return B.k.av(d/1048576,1)+" GB"
if(d>=1024)return B.k.av(d/1024,1)+" MB"
return B.k.av(d,d>=1?0:1)+" KB"},
koR(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.p(r,q)
for(x=d.gfu(d),x=x.gaK(x),w=0;x.G();){v=x.ga8(x)
u=A.jku(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dmC.h(0,u)
if(s==null)s=B.aV
p.i(0,new E.hw(s,!1,A.d("fileStorageSource_"+u.c,null,null,!0),!1,C.jDy(t)),t/1024)}if(w<2)return A.p(r,q)
return p},
koI(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.p(r,q)
for(x=d.gfu(d),x=x.gaK(x),w=0;x.G();){v=x.ga8(x)
u=C.jSK(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dyX.h(0,u)
if(s==null)s=B.aV
p.i(0,new E.hw(s,!1,A.d("fileStorageType_"+u.c,null,null,!0),!1,C.jDy(t)),t/1024)}if(w<2)return A.p(r,q)
return p},
jCB(d){var x,w
for(x=new A.c7(d,d.r,d.e,A.P(d).j("c7<2>")),w=0;x.G();)w+=x.d
return w},
dh7(d){var x=0,w=A.l(y.a),v
var $async$dh7=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(A.aQ(d,A.aP("storagePricingSheet","")),$async$dh7)
case 3:if(f!==!0){new A.R(A.d("thereIsProblem",null,null,!0),B.r,B.u,B.v,d).A()
x=1
break}A.ay("storagePricingSheet")
x=4
return A.c(A.bR(d,null,!0,0.85,!1,0.7,!1,null,!0,!0,null,!0,!0,G.kaA(),1,!0).b7(),$async$dh7)
case 4:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$dh7,w)}},D,H,E,I
A=c[0]
B=c[2]
F=c[701]
G=c[278]
C=a.updateHolder(c[140],C)
D=c[868]
H=c[546]
E=c[665]
I=c[869]
C.a7w.prototype={
L(){return"BusinessFileStorageFileType."+this.b}}
C.c2o.prototype={
l(d){var x=null,w=$.af?$.dW.n():x
return new A.m(w,x,new A.w(this.c,new C.enV(),x,x,y.f),x)}}
C.cz7.prototype={
l(d){var x,w,v,u,t,s,r,q,p=null,o=$.B().a.x1.ghy(),n=$.cV().b,m=n.go.h(0,o)
if(m==null)m=0
x=n.id
w=this.c
v=w.a
u=Math.max(0,v/1048576-m)
t=A.q(d).ax
s=t.CW
t=s==null?t.y:s
s=A.u(A.awc(v,2),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,1,p,!1,!1,!1,28,p,p,!1,"")
r=A.d("fileStorageUsageObjectsCount",p,p,!0)
w=B.h.m(w.b)
q=y.e
w=A.b([new A.m(p,6,p,p),s,new A.m(p,4,p,p),A.u(A.a1(r,"COUNT",w),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,0.7,p,!1,!1,!1,12,p,p,!1,"")],q)
if(m>0)B.d.J(w,A.b([new A.m(p,16,p,p),new H.auw(v,!0,!0,!0,!1,p)],q))
else B.d.J(w,A.b([new A.m(p,12,p,p),A.u(A.d("fileStorageLimitNotConfigured",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,0.6,p,!1,!1,!1,12,p,p,!1,"")],q))
if(u>0)B.d.J(w,A.b([new A.m(p,16,p,p),this.cIg(d,u,u*x)],q))
return A.a0(!0,B.q,p,p,B.F,p,p,new A.D(B.h0,A.H(w,B.f,p,B.c,B.i,p,B.o),p),t,0,"",!1,p,p,B.c,!1,p,p,!0,!0,p,p,p,p,!1,p,p,0.55,p,p,p)},
cIg(d,e,f){var x=null,w=A.d("fileStorageOverLimitNoteWithCost",x,x,!1),v=A.awc(B.k.ap(e*1024*1024),2)
w=A.a1(w,"EXTRA_MB",v)
v=B.k.av(f,2)
w=A.a1(w,"COST_ILS",v)
return A.a2(x,x,0.3,x,x,A.e4(!1,x,!0,!1,x,!1,A.d("viewPricing",x,x,!1),new C.fYD(d),!0,!1,0.7,B.aX,!1,13,w,x),B.p,x,x,0,!1,x,x,x,x,x,!1,x,x,x,x,x,!1,!1,!1,x)}}
C.cz8.prototype={
l(d){var x,w,v,u,t,s,r,q=null,p=C.koI(this.c.d)
if(p.a===0)return A.fs()
x=C.jCB(p)
w=C.jDB(x)
v=$.af?650:$.hv()
u=Math.min($.b6.n()*0.03,$.an.n()*0.06)
t=Math.min($.b6.n()*0.05,$.an.n()*0.07)
s=A.q(d).ax
r=s.CW
s=r==null?s.y:r
return E.a2w(!0,3,s,q,p,u,!1,q,t,!1,11,q,q,q,q,!0,!1,!1,q,!1,25,4,new A.aN(B.aF,q,q,A.H(A.b([A.u(A.d("fileStoragePieByTypeTitle",q,q,!0),q,!1,!1,q,!1,q,!1,q,!1,!1,!1,!0,1,q,!1,!1,!1,16,q,q,!1,"")],y.e),B.a2,q,B.c,B.i,q,B.o),q),q,x,w,9,q,!1,!1,v)}}
C.cz9.prototype={
l(d){var x,w,v,u,t,s,r,q=null,p=C.koR(this.c.c)
if(p.a===0)return A.fs()
x=C.jCB(p)
w=C.jDB(x)
v=$.af?650:$.hv()
u=Math.min($.b6.n()*0.03,$.an.n()*0.06)
t=Math.min($.b6.n()*0.05,$.an.n()*0.07)
s=A.q(d).ax
r=s.CW
s=r==null?s.y:r
return E.a2w(!0,3,s,q,p,u,!1,q,t,!1,11,q,q,q,q,!0,!1,!1,q,!1,25,4,new A.aN(B.aF,q,q,A.H(A.b([A.u(A.d("fileStoragePieBySourceTitle",q,q,!0),q,!1,!1,q,!1,q,!1,q,!1,!1,!1,!0,1,q,!1,!1,!1,16,q,q,!1,"")],y.e),B.a2,q,B.c,B.i,q,B.o),q),q,x,w,9,q,!1,!1,v)}}
C.cza.prototype={
l(d){var x,w,v,u=null,t=$.af?650:$.hv(),s=A.q(d).ax,r=s.CW
s=r==null?s.y:r
r=A.b([A.u(A.d("fileStorageSourcesExplainTitle",u,u,!0),u,!1,!1,u,!1,u,!1,u,!1,!1,!1,!0,1,u,!1,!1,!1,16,u,u,!1,""),B.k3,A.u(A.d("fileStorageSourcesExplainSubtitle",u,u,!0),u,!1,!1,u,!1,u,!1,u,!1,!1,!1,!0,0.7,u,!1,!1,!1,13,u,u,!1,""),B.hb],y.e)
for(x=this.c,w=0;w<4;++w){v=D.cYu[w]
r.push(new C.d3_(x,v.a,v.b,u))}return A.a2(u,u,0.3,u,u,A.H(r,B.a2,u,B.c,B.i,u,B.o),B.p,s,u,0,!1,u,u,u,u,u,!1,u,u,B.zr,u,u,!1,!1,!1,t)}}
C.d3_.prototype={
l(d){var x=null,w=this.d.c,v=this.c.c.h(0,w),u=v==null?x:v.a
if(u==null)u=0
v=y.e
return new A.D(B.iS,A.S(A.b([new A.ad(this.e,20,!1,1,!1,!0,!1,x,x),B.dB,A.aq(A.H(A.b([A.u(A.d("fileStorageSource_"+w,x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,1,x,!1,!1,!1,14,x,x,!1,""),A.u(A.d("fileStorageSourceExplain_"+w,x,x,!1),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,0.75,x,!1,!1,!1,12.5,x,x,!0,"")],v),B.a2,x,B.c,B.i,x,B.o),1),B.dB,A.u(A.awc(u,2),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,0.85,x,!1,!1,!1,13,x,x,!1,"")],v),B.a2,x,B.c,B.i,0,x,x),x)}}
var z=a.updateTypes(["E(a7w)","a7w()"])
C.dDL.prototype={
$1(d){return d.c===this.a},
$S:z+0}
C.dDM.prototype={
$0(){return D.Z6},
$S:z+1}
C.enV.prototype={
$3(d,e,f){var x=null
return A.H(A.b([F.e0(!1,x,B.f,A.u(A.d("fileStorageUsageTitle",x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,1,x,!1,!1,!1,16,x,x,!1,""),new C.enT(d),new C.enU(),!0,!0,!0,!1,x),new A.m(x,5,x,x),new A.D(B.nE,A.u(A.d("fileStorageUsageSubtitle",x,x,!0),B.B,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,0.7,x,!1,!1,!1,14,x,x,!1,""),x),new C.cz7(e,x),new A.m(x,13,x,x),new C.cza(e,x),new A.m(x,13,x,x),new C.cz9(e,x),new A.m(x,13,x,x),new C.cz8(e,x),new A.m(x,30,x,x)],y.e),B.f,x,B.c,B.i,x,B.o)},
$S:2426}
C.enU.prototype={
$0(){},
$S:6}
C.enT.prototype={
$0(){A.Q(this.a,!1).H(null)
return null},
$S:0}
C.fYD.prototype={
$0(){return C.dh7(this.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a7w,A.iJ)
w(A.aF,[C.dDL,C.enV])
w(A.aI,[C.dDM,C.enU,C.enT,C.fYD])
w(A.r,[C.c2o,C.cz7,C.cz8,C.cz9,C.cza,C.d3_])})()
A.av(b.typeUniverse,JSON.parse('{"c2o":{"r":[],"f":[]},"cz7":{"r":[],"f":[]},"cz8":{"r":[],"f":[]},"cz9":{"r":[],"f":[]},"cza":{"r":[],"f":[]},"d3_":{"r":[],"f":[]}}'))
var y={l:A.t("hw"),e:A.t("C<f>"),f:A.t("w<a_U>"),b:A.t("ao"),a:A.t("~")};(function constants(){var x=a.makeConstList
D.Z6=new C.a7w("other",4,"other")
D.dWt=new A.b4(B.tc,B.MT)
D.c66=new A.ag(62173,"MaterialIcons",null,!1)
D.dVz=new A.b4(B.D4,D.c66)
D.dV1=new A.b4(B.IV,B.zZ)
D.dWi=new A.b4(B.D5,B.wV)
D.cYu=x([D.dWt,D.dVz,D.dV1,D.dWi],A.t("C<+(a7x,ag)>"))
D.aeo=new C.a7w("image",0,"image")
D.aep=new C.a7w("pdf",1,"pdf")
D.aeq=new C.a7w("spreadsheet",2,"spreadsheet")
D.aer=new C.a7w("video",3,"video")
D.d5u=x([D.aeo,D.aep,D.aeq,D.aer,D.Z6],A.t("C<a7w>"))
D.dmC=new A.x([B.D4,I.agI,B.tc,B.afO,B.D5,B.afQ],A.t("x<a7x,y>"))
D.dyX=new A.x([D.aeo,B.ag8,D.aep,B.ah7,D.aeq,B.agA,D.aer,B.afY,D.Z6,B.agX],A.t("x<a7w,y>"))})()};
(a=>{a["dxELUVMcej7SU2gIDHAPrVVdO+s="]=a.current})($__dart_deferred_initializers__);