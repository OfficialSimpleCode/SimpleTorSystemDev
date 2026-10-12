((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,F,G,C={
jSv(d){return B.d.dR(D.d5t,new C.dDI(d),new C.dDJ())},
a7v:function a7v(d,e,f){this.c=d
this.a=e
this.b=f},
dDI:function dDI(d){this.a=d},
dDJ:function dDJ(){},
jYz(d){return new C.c2k(d,null)},
c2k:function c2k(d,e){this.c=d
this.a=e},
enS:function enS(){},
enR:function enR(){},
enQ:function enQ(d){this.a=d},
cz4:function cz4(d,e){this.c=d
this.a=e},
fYx:function fYx(d){this.a=d},
cz5:function cz5(d,e){this.c=d
this.a=e},
cz6:function cz6(d,e){this.c=d
this.a=e},
cz7:function cz7(d,e){this.c=d
this.a=e},
d2Y:function d2Y(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
jDj(d){var x
if(d>=1073741824)return B.k.av(d/1073741824,1)+" GB"
if(d>=1048576)return B.k.av(d/1048576,1)+" MB"
x=d/1024
return B.k.av(x,x>=1?0:1)+" KB"},
jDm(d){if(d>=1048576)return B.k.av(d/1048576,1)+" GB"
if(d>=1024)return B.k.av(d/1024,1)+" MB"
return B.k.av(d,d>=1?0:1)+" KB"},
koE(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.p(r,q)
for(x=d.gfB(d),x=x.gaK(x),w=0;x.G();){v=x.ga8(x)
u=A.jkh(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dmC.h(0,u)
if(s==null)s=B.aV
p.i(0,new E.hw(s,!1,A.d("fileStorageSource_"+u.c,null,null,!0),!1,C.jDj(t)),t/1024)}if(w<2)return A.p(r,q)
return p},
kov(d){var x,w,v,u,t,s,r=y.l,q=y.b,p=A.p(r,q)
for(x=d.gfB(d),x=x.gaK(x),w=0;x.G();){v=x.ga8(x)
u=C.jSv(v.a)
t=v.b.a
if(t<=0)continue;++w
s=D.dyX.h(0,u)
if(s==null)s=B.aV
p.i(0,new E.hw(s,!1,A.d("fileStorageType_"+u.c,null,null,!0),!1,C.jDj(t)),t/1024)}if(w<2)return A.p(r,q)
return p},
jCm(d){var x,w
for(x=new A.c7(d,d.r,d.e,A.P(d).j("c7<2>")),w=0;x.G();)w+=x.d
return w},
dh4(d){var x=0,w=A.l(y.a),v
var $async$dh4=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(A.aQ(d,A.aP("storagePricingSheet","")),$async$dh4)
case 3:if(f!==!0){new A.R(A.d("thereIsProblem",null,null,!0),B.r,B.u,B.v,d).A()
x=1
break}A.ay("storagePricingSheet")
x=4
return A.c(A.bR(d,null,!0,0.85,!1,0.7,!1,null,!0,!0,null,!0,!0,G.kam(),1,!0).b7(),$async$dh4)
case 4:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$dh4,w)}},D,H,E,I
A=c[0]
B=c[2]
F=c[701]
G=c[278]
C=a.updateHolder(c[140],C)
D=c[868]
H=c[546]
E=c[665]
I=c[869]
C.a7v.prototype={
L(){return"BusinessFileStorageFileType."+this.b}}
C.c2k.prototype={
l(d){var x=null,w=$.af?$.dW.n():x
return new A.m(w,x,new A.w(this.c,new C.enS(),x,x,y.f),x)}}
C.cz4.prototype={
l(d){var x,w,v,u,t,s,r,q,p=null,o=$.B().a.x1.ghy(),n=$.cV().b,m=n.go.h(0,o)
if(m==null)m=0
x=n.id
w=this.c
v=w.a
u=Math.max(0,v/1048576-m)
t=A.q(d).ax
s=t.CW
t=s==null?t.y:s
s=A.u(A.aw9(v,2),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,1,p,!1,!1,!1,28,p,p,!1,"")
r=A.d("fileStorageUsageObjectsCount",p,p,!0)
w=B.h.m(w.b)
q=y.e
w=A.b([new A.m(p,6,p,p),s,new A.m(p,4,p,p),A.u(A.a1(r,"COUNT",w),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,0.7,p,!1,!1,!1,12,p,p,!1,"")],q)
if(m>0)B.d.J(w,A.b([new A.m(p,16,p,p),new H.aut(v,!0,!0,!0,!1,p)],q))
else B.d.J(w,A.b([new A.m(p,12,p,p),A.u(A.d("fileStorageLimitNotConfigured",p,p,!0),p,!1,!1,p,!1,p,!1,p,!1,!1,!0,!1,0.6,p,!1,!1,!1,12,p,p,!1,"")],q))
if(u>0)B.d.J(w,A.b([new A.m(p,16,p,p),this.cI7(d,u,u*x)],q))
return A.a0(!0,B.q,p,p,B.F,p,p,new A.D(B.h0,A.H(w,B.f,p,B.c,B.i,p,B.o),p),t,0,"",!1,p,p,B.c,!1,p,p,!0,!0,p,p,p,p,!1,p,p,0.55,p,p,p)},
cI7(d,e,f){var x=null,w=A.d("fileStorageOverLimitNoteWithCost",x,x,!1),v=A.aw9(B.k.ap(e*1024*1024),2)
w=A.a1(w,"EXTRA_MB",v)
v=B.k.av(f,2)
w=A.a1(w,"COST_ILS",v)
return A.a2(x,x,0.3,x,x,A.e4(!1,x,!0,!1,x,!1,A.d("viewPricing",x,x,!1),new C.fYx(d),!0,!1,0.7,B.aX,!1,13,w,x),B.p,x,x,0,!1,x,x,x,x,x,!1,x,x,x,x,x,!1,!1,!1,x)}}
C.cz5.prototype={
l(d){var x,w,v,u,t,s,r,q=null,p=C.kov(this.c.d)
if(p.a===0)return A.fs()
x=C.jCm(p)
w=C.jDm(x)
v=$.af?650:$.hv()
u=Math.min($.b6.n()*0.03,$.an.n()*0.06)
t=Math.min($.b6.n()*0.05,$.an.n()*0.07)
s=A.q(d).ax
r=s.CW
s=r==null?s.y:r
return E.a2w(!0,3,s,q,p,u,!1,q,t,!1,11,q,q,q,q,!0,!1,!1,q,!1,25,4,new A.aN(B.aF,q,q,A.H(A.b([A.u(A.d("fileStoragePieByTypeTitle",q,q,!0),q,!1,!1,q,!1,q,!1,q,!1,!1,!1,!0,1,q,!1,!1,!1,16,q,q,!1,"")],y.e),B.a2,q,B.c,B.i,q,B.o),q),q,x,w,9,q,!1,!1,v)}}
C.cz6.prototype={
l(d){var x,w,v,u,t,s,r,q=null,p=C.koE(this.c.c)
if(p.a===0)return A.fs()
x=C.jCm(p)
w=C.jDm(x)
v=$.af?650:$.hv()
u=Math.min($.b6.n()*0.03,$.an.n()*0.06)
t=Math.min($.b6.n()*0.05,$.an.n()*0.07)
s=A.q(d).ax
r=s.CW
s=r==null?s.y:r
return E.a2w(!0,3,s,q,p,u,!1,q,t,!1,11,q,q,q,q,!0,!1,!1,q,!1,25,4,new A.aN(B.aF,q,q,A.H(A.b([A.u(A.d("fileStoragePieBySourceTitle",q,q,!0),q,!1,!1,q,!1,q,!1,q,!1,!1,!1,!0,1,q,!1,!1,!1,16,q,q,!1,"")],y.e),B.a2,q,B.c,B.i,q,B.o),q),q,x,w,9,q,!1,!1,v)}}
C.cz7.prototype={
l(d){var x,w,v,u=null,t=$.af?650:$.hv(),s=A.q(d).ax,r=s.CW
s=r==null?s.y:r
r=A.b([A.u(A.d("fileStorageSourcesExplainTitle",u,u,!0),u,!1,!1,u,!1,u,!1,u,!1,!1,!1,!0,1,u,!1,!1,!1,16,u,u,!1,""),B.k3,A.u(A.d("fileStorageSourcesExplainSubtitle",u,u,!0),u,!1,!1,u,!1,u,!1,u,!1,!1,!1,!0,0.7,u,!1,!1,!1,13,u,u,!1,""),B.hb],y.e)
for(x=this.c,w=0;w<4;++w){v=D.cYt[w]
r.push(new C.d2Y(x,v.a,v.b,u))}return A.a2(u,u,0.3,u,u,A.H(r,B.a2,u,B.c,B.i,u,B.o),B.p,s,u,0,!1,u,u,u,u,u,!1,u,u,B.zr,u,u,!1,!1,!1,t)}}
C.d2Y.prototype={
l(d){var x=null,w=this.d.c,v=this.c.c.h(0,w),u=v==null?x:v.a
if(u==null)u=0
v=y.e
return new A.D(B.iS,A.S(A.b([new A.ad(this.e,20,!1,1,!1,!0,!1,x,x),B.dB,A.aq(A.H(A.b([A.u(A.d("fileStorageSource_"+w,x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,1,x,!1,!1,!1,14,x,x,!1,""),A.u(A.d("fileStorageSourceExplain_"+w,x,x,!1),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,0.75,x,!1,!1,!1,12.5,x,x,!0,"")],v),B.a2,x,B.c,B.i,x,B.o),1),B.dB,A.u(A.aw9(u,2),x,!1,!1,x,!1,x,!1,x,!1,!1,!1,!0,0.85,x,!1,!1,!1,13,x,x,!1,"")],v),B.a2,x,B.c,B.i,0,x,x),x)}}
var z=a.updateTypes(["E(a7v)","a7v()"])
C.dDI.prototype={
$1(d){return d.c===this.a},
$S:z+0}
C.dDJ.prototype={
$0(){return D.Z6},
$S:z+1}
C.enS.prototype={
$3(d,e,f){var x=null
return A.H(A.b([F.e0(!1,x,B.f,A.u(A.d("fileStorageUsageTitle",x,x,!0),x,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,1,x,!1,!1,!1,16,x,x,!1,""),new C.enQ(d),new C.enR(),!0,!0,!0,!1,x),new A.m(x,5,x,x),new A.D(B.nE,A.u(A.d("fileStorageUsageSubtitle",x,x,!0),B.B,!1,!1,x,!1,x,!1,x,!1,!1,!0,!1,0.7,x,!1,!1,!1,14,x,x,!1,""),x),new C.cz4(e,x),new A.m(x,13,x,x),new C.cz7(e,x),new A.m(x,13,x,x),new C.cz6(e,x),new A.m(x,13,x,x),new C.cz5(e,x),new A.m(x,30,x,x)],y.e),B.f,x,B.c,B.i,x,B.o)},
$S:2423}
C.enR.prototype={
$0(){},
$S:6}
C.enQ.prototype={
$0(){A.Q(this.a,!1).H(null)
return null},
$S:0}
C.fYx.prototype={
$0(){return C.dh4(this.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a7v,A.iJ)
w(A.aF,[C.dDI,C.enS])
w(A.aI,[C.dDJ,C.enR,C.enQ,C.fYx])
w(A.r,[C.c2k,C.cz4,C.cz5,C.cz6,C.cz7,C.d2Y])})()
A.av(b.typeUniverse,JSON.parse('{"c2k":{"r":[],"f":[]},"cz4":{"r":[],"f":[]},"cz5":{"r":[],"f":[]},"cz6":{"r":[],"f":[]},"cz7":{"r":[],"f":[]},"d2Y":{"r":[],"f":[]}}'))
var y={l:A.t("hw"),e:A.t("C<f>"),f:A.t("w<a_U>"),b:A.t("ao"),a:A.t("~")};(function constants(){var x=a.makeConstList
D.Z6=new C.a7v("other",4,"other")
D.dWt=new A.b4(B.tc,B.MT)
D.c65=new A.ag(62173,"MaterialIcons",null,!1)
D.dVz=new A.b4(B.D4,D.c65)
D.dV1=new A.b4(B.IV,B.zZ)
D.dWi=new A.b4(B.D5,B.wV)
D.cYt=x([D.dWt,D.dVz,D.dV1,D.dWi],A.t("C<+(a7w,ag)>"))
D.ael=new C.a7v("image",0,"image")
D.aem=new C.a7v("pdf",1,"pdf")
D.aen=new C.a7v("spreadsheet",2,"spreadsheet")
D.aeo=new C.a7v("video",3,"video")
D.d5t=x([D.ael,D.aem,D.aen,D.aeo,D.Z6],A.t("C<a7v>"))
D.dmC=new A.x([B.D4,I.agF,B.tc,B.afL,B.D5,B.afN],A.t("x<a7w,y>"))
D.dyX=new A.x([D.ael,B.ag5,D.aem,B.ah4,D.aen,B.agx,D.aeo,B.afV,D.Z6,B.agU],A.t("x<a7v,y>"))})()};
(a=>{a["w9CbxbQI9Rtc1HF4a1aP3sxPYN4="]=a.current})($__dart_deferred_initializers__);