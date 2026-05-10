((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
iaE(d,e,f,g,h,i,j){return new C.bMi(e,f,i,j,g,h,null)},
bMi:function bMi(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.x=i
_.a=j},
dMX:function dMX(d){this.a=d},
dMW:function dMW(d,e){this.a=d
this.b=e},
dMT:function dMT(d,e,f){this.a=d
this.b=e
this.c=f},
dMS:function dMS(d,e){this.a=d
this.b=e},
dMU:function dMU(d,e){this.a=d
this.b=e},
dMV:function dMV(d,e,f){this.a=d
this.b=e
this.c=f},
bnI:function bnI(d,e){this.a=d
this.b=e}}
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[510],C)
C.bMi.prototype={
l(d){return new A.z($.jQ().w,new C.dMX(this),null,null,y.m)},
cwp(d,e,f){var x,w,v,u=this,t=null
if(f)x=A.q(d).ax.y.df(30)
else if(u.r){x=A.q(d).ax
w=x.CW
x=w==null?x.y:w}else x=A.q(d).ax.k2
if(f)w=A.q(d).ax.y
else if(u.r){w=A.q(d).ax
v=w.cx
w=(v==null?w.z:v).a0(0.2)}else w=A.q(d).ax.k3.a0(0.05)
return A.a4(t,t,A.dV(w,-1,1),t,A.bG(new A.I(new A.x(16,12,16,12),A.kO(new A.ik(new C.dMS(u,f),t),B.by),t),t,!1,!1,!1,t,t,new C.dMT(u,d,e),8,t),B.p,x,t,0,!1,t,t,t,new A.x(16,5,16,5),!1,t,t,t,8,t,!1,!1,!1,t)},
anC(d,e){return this.cR4(d,e)},
cR4(d,e){var x=0,w=A.l(y.v),v=this,u,t
var $async$anC=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:t=v.c
x=e?2:4
break
case 2:v.bJX(d,J.dU($.jQ().x.a,t.b))
x=3
break
case 4:u=A.b([t],y.A)
t=!B.lV.p(0,t.ay)&&v.d
x=5
return A.d(A.a6L(d,t,u,v.e),$async$anC)
case 5:case 3:return A.j(null,w)}})
return A.k($async$anC,w)},
crM(d,e){var x,w,v=null
if(this.r){x=A.q(d).ax
w=x.CW
x=w==null?x.y:w}else x=A.q(d).ax.z
return new A.m(20,20,A.fm(v,!1,x,new A.eP(new C.dMU(this,d),y.d),v,!1,v,v,new C.dMV(this,d,e),v,v,new A.eb(0,B.ab),v,v,!1,e,v),v)},
bJX(d,e){var x,w=!e
if(w&&!this.gcLm()){new A.U(A.e("simpleInvoiceDocumentPdfOnCreationProcess",null,null,!0),B.t,B.v,B.A,d).D()
return}if(w){x=$.jQ()
if(!x.w.a)x.a_M()
w=x}else{x=$.jQ()
if(J.av(x.x.a)===1&&x.w.a){x.IZ()
return}w=x}w.bMY(this.c.b)},
gcLm(){var x,w=this.c
if(w.cy!==B.en)return!0
x=A.a0(0,0,0,0,0,$.dX().b.fy.db)
return new A.S(Date.now(),0,!1).cz(w.c).a>=x.a},
cDy(){var x=null,w=this.c
if(w.as)return new C.bnI(A.e("invoiceCanceled",x,x,!0),B.W)
if(w.z){w=A.e("refundInvoice",x,x,!0)
return new C.bnI(w,this.d?B.aE:B.W)}return new C.bnI(A.e("documentStatus_"+w.k3.b,x,x,!0),w.k3.gdO(0))}}
C.bnI.prototype={}
var z=a.updateTypes([])
C.dMX.prototype={
$3(d,e,f){return new A.z($.jQ().x,new C.dMW(this.a,e),null,null,y.e)},
$S:40}
C.dMW.prototype={
$3(d,e,f){var x=this.a
return x.cwp(d,this.b,e.p(0,x.c.b))},
$S:415}
C.dMT.prototype={
$0(){var x=0,w=A.l(y.v),v,u=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.anC(u.b,u.c),$async$$0)
case 3:v=e
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:2}
C.dMS.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=!k.x&&A.d_(d,B.fX,y.x).w.a.a>=1300,i=y.u,h=A.b([],i)
if(!k.w)h.push(k.crM(d,this.b))
x=k.cDy()
w=x.b
v=A.bF(40,w.gk(0)>>>16&255,w.gk(0)>>>8&255,w.gk(0)&255)
u=k.r
h.push(A.aw(A.G(A.b([A.a4(l,l,l,l,A.w(x.a,l,!1,!1,w,!1,l,!1,l,!1,!1,!1,!1,1,B.L,!1,!1,!1,11,l,l,!1,""),B.p,v,l,0,!1,l,l,l,l,!1,l,l,new A.x(6,3,6,3),4,l,!1,!1,!1,l)],i),B.a7,l,B.d,B.j,l,B.o),1))
w=k.c
v=w.e
v=v==null?l:B.i.m(v)
if(v==null)v="-"
t=!u
h.push(A.aw(A.w(v,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,1,l,!1,!1,!1,12,l,l,!1,""),1))
h.push(A.aw(new A.aM(B.aH,l,l,A.w(A.E("dd/MM/yyyy",l).A(w.c),l,!1,!1,l,!1,l,!0,l,!1,!1,t,u,0.7,B.L,!1,!1,!1,12,l,l,!1,""),l),2))
if(w.db===B.fl)v=A.bF(40,B.W.gk(0)>>>16&255,B.W.gk(0)>>>8&255,B.W.gk(0)&255)
else if(u)v=A.q(d).ax.k2
else{v=A.q(d).ax
s=v.CW
v=s==null?v.y:s}s=A.e(w.db.b,l,l,!1)
r=w.db===B.fl
q=r?1:0.6
h.push(A.aw(A.G(A.b([A.a4(l,l,l,l,A.w(s,l,!1,!1,l,!1,l,!1,l,!1,!1,u,t&&!r,q,B.L,!1,!1,!1,11,l,l,!0,""),B.p,v,l,0,!1,l,l,l,l,!1,l,l,new A.x(6,3,6,3),4,l,!1,!1,!1,l)],i),B.a7,l,B.d,B.j,l,B.o),2))
if(k.d)if(B.lV.p(0,w.ay)){k=w.ch
if(k.length===0)k=A.e("paymentForSystem",l,l,!0)
p=k}else{k=w.r.a
p=k}else{k=w.d
i=k.b
p=i===""?k.a:i}h.push(A.aw(A.w(p,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,1,B.L,!1,!1,!1,12,l,l,!1,""),2))
if(j){o=w.ch
h.push(A.aw(A.w(o.length===0?"-":o,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,0.7,B.L,!1,!1,!1,12,l,l,!1,""),2))}k=w.db
n=k===B.fk||k===B.fl?w.gzk():w.y.w
k=B.l.m(Math.abs(n))
i=$.fF()
v=w.y.x
i=i.h(0,A.lO(v==null?"":v))
i.toString
$.bc()
v=new A.bC(i)
v.c0(k,i)
m=v.e8(0,!0)
h.push(A.aw(new A.aM(B.aH,l,l,A.w(w.db===B.fl||n<0?"("+m+")":m,l,!1,!1,l,!1,l,!0,l,!1,!1,t,u,1,B.L,!1,!1,!1,12,l,l,!1,""),l),1))
return A.T(h,B.f,l,B.d,B.j,6,l,l)},
$S:2729}
C.dMU.prototype={
$1(d){var x,w
if(d.p(0,B.bA))return A.q(this.b).ax.y
if(this.a.r){x=A.q(this.b).ax
w=x.cx
return(w==null?x.z:w).a0(0.6)}return null},
$S:143}
C.dMV.prototype={
$1(d){return this.a.bJX(this.b,this.c)},
$S:18};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bMi,A.r)
w(A.aO,[C.dMX,C.dMW,C.dMS,C.dMU,C.dMV])
x(C.dMT,A.aN)
x(C.bnI,A.ap)})()
A.aG(b.typeUniverse,JSON.parse('{"bMi":{"r":[],"f":[]}}'))
var y={A:A.t("F<dZ>"),u:A.t("F<f>"),x:A.t("oe"),e:A.t("z<aZ<n>>"),m:A.t("z<J>"),d:A.t("eP<v?>"),v:A.t("~")}};
(a=>{a["cD/w5fDFG+P4JXKev4Pz1UGSqsg="]=a.current})($__dart_deferred_initializers__);