((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
idB(d,e,f,g,h,i,j){return new C.bNh(e,f,i,j,g,h,null)},
bNh:function bNh(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.x=i
_.a=j},
dNW:function dNW(d){this.a=d},
dNV:function dNV(d,e){this.a=d
this.b=e},
dNS:function dNS(d,e,f){this.a=d
this.b=e
this.c=f},
dNR:function dNR(d,e){this.a=d
this.b=e},
dNT:function dNT(d,e){this.a=d
this.b=e},
dNU:function dNU(d,e,f){this.a=d
this.b=e
this.c=f},
boz:function boz(d,e){this.a=d
this.b=e}}
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[512],C)
C.bNh.prototype={
l(d){return new A.z($.iW().w,new C.dNW(this),null,null,y.m)},
cxv(d,e,f){var x,w,v,u=this,t=null
if(f)x=A.q(d).ax.y.da(30)
else if(u.r){x=A.q(d).ax
w=x.CW
x=w==null?x.y:w}else x=A.q(d).ax.k2
if(f)w=A.q(d).ax.y
else if(u.r){w=A.q(d).ax
v=w.cx
w=(v==null?w.z:v).a0(0.2)}else w=A.q(d).ax.k3.a0(0.05)
return A.a4(t,t,A.dY(w,-1,1),t,A.bJ(new A.H(new A.x(16,12,16,12),A.kR(new A.io(new C.dNR(u,f),t),B.by),t),t,!1,!1,!1,t,t,new C.dNS(u,d,e),8,t),B.p,x,t,0,!1,t,t,t,new A.x(16,5,16,5),!1,t,t,t,8,t,!1,!1,!1,t)},
anW(d,e){return this.cSw(d,e)},
cSw(d,e){var x=0,w=A.l(y.v),v=this,u,t
var $async$anW=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:t=v.c
x=e?2:4
break
case 2:v.bKU(d,J.dQ($.iW().x.a,t.b))
x=3
break
case 4:u=A.b([t],y.A)
t=!B.m_.p(0,t.ay)&&v.d
x=5
return A.d(A.a70(d,t,u,v.e),$async$anW)
case 5:case 3:return A.j(null,w)}})
return A.k($async$anW,w)},
csT(d,e){var x,w,v=null
if(this.r){x=A.q(d).ax
w=x.CW
x=w==null?x.y:w}else x=A.q(d).ax.z
return new A.m(20,20,A.fn(v,!1,x,new A.eQ(new C.dNT(this,d),y.d),v,!1,v,v,new C.dNU(this,d,e),v,v,new A.eb(0,B.ab),v,v,!1,e,v),v)},
bKU(d,e){var x,w=!e
if(w&&!this.gcME()){new A.U(A.e("simpleInvoiceDocumentPdfOnCreationProcess",null,null,!0),B.t,B.v,B.A,d).D()
return}if(w){x=$.iW()
if(!x.w.a)x.a_Y()
w=x}else{x=$.iW()
if(J.az(x.x.a)===1&&x.w.a){x.J4()
return}w=x}w.bNT(this.c.b)},
gcME(){var x,w=this.c
if(w.cy!==B.ef)return!0
x=A.a0(0,0,0,0,0,$.dU().b.fy.db)
return new A.R(Date.now(),0,!1).cB(w.c).a>=x.a},
cEL(){var x=null,w=this.c
if(w.as)return new C.boz(A.e("invoiceCanceled",x,x,!0),B.X)
if(w.z){w=A.e("refundInvoice",x,x,!0)
return new C.boz(w,this.d?B.aI:B.X)}return new C.boz(A.e("documentStatus_"+w.k3.b,x,x,!0),w.k3.gdP(0))}}
C.boz.prototype={}
var z=a.updateTypes([])
C.dNW.prototype={
$3(d,e,f){return new A.z($.iW().x,new C.dNV(this.a,e),null,null,y.e)},
$S:39}
C.dNV.prototype={
$3(d,e,f){var x=this.a
return x.cxv(d,this.b,e.p(0,x.c.b))},
$S:370}
C.dNS.prototype={
$0(){var x=0,w=A.l(y.v),v,u=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.anW(u.b,u.c),$async$$0)
case 3:v=e
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:2}
C.dNR.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=!k.x&&A.d0(d,B.fZ,y.x).w.a.a>=1300,i=y.u,h=A.b([],i)
if(!k.w)h.push(k.csT(d,this.b))
x=k.cEL()
w=x.b
v=A.bL(40,w.gk(0)>>>16&255,w.gk(0)>>>8&255,w.gk(0)&255)
u=k.r
h.push(A.av(A.G(A.b([A.a4(l,l,l,l,A.v(x.a,l,!1,!1,w,!1,l,!1,l,!1,!1,!1,!1,1,B.L,!1,!1,!1,11,l,l,!1,""),B.p,v,l,0,!1,l,l,l,l,!1,l,l,new A.x(6,3,6,3),4,l,!1,!1,!1,l)],i),B.a8,l,B.d,B.j,l,B.o),1))
w=k.c
v=w.e
v=v==null?l:B.i.m(v)
if(v==null)v="-"
t=!u
h.push(A.av(A.v(v,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,1,l,!1,!1,!1,12,l,l,!1,""),1))
h.push(A.av(new A.aM(B.aG,l,l,A.v(A.E("dd/MM/yyyy",l).A(w.c),l,!1,!1,l,!1,l,!0,l,!1,!1,t,u,0.7,B.L,!1,!1,!1,12,l,l,!1,""),l),2))
if(w.db===B.f2)v=A.bL(40,B.X.gk(0)>>>16&255,B.X.gk(0)>>>8&255,B.X.gk(0)&255)
else if(u)v=A.q(d).ax.k2
else{v=A.q(d).ax
s=v.CW
v=s==null?v.y:s}s=A.e(w.db.b,l,l,!1)
r=w.db===B.f2
q=r?1:0.6
h.push(A.av(A.G(A.b([A.a4(l,l,l,l,A.v(s,l,!1,!1,l,!1,l,!1,l,!1,!1,u,t&&!r,q,B.L,!1,!1,!1,11,l,l,!0,""),B.p,v,l,0,!1,l,l,l,l,!1,l,l,new A.x(6,3,6,3),4,l,!1,!1,!1,l)],i),B.a8,l,B.d,B.j,l,B.o),2))
if(k.d)if(B.m_.p(0,w.ay)){k=w.ch
if(k.length===0)k=A.e("paymentForSystem",l,l,!0)
p=k}else{k=w.r.a
p=k}else{k=w.d
i=k.b
p=i===""?k.a:i}h.push(A.av(A.v(p,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,1,B.L,!1,!1,!1,12,l,l,!1,""),2))
if(j){o=w.ch
h.push(A.av(A.v(o.length===0?"-":o,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,0.7,B.L,!1,!1,!1,12,l,l,!1,""),2))}k=w.db
n=k===B.fm||k===B.f2?w.gzi():w.y.w
k=B.l.m(Math.abs(n))
i=$.fx()
v=w.y.x
i=i.h(0,A.lE(v==null?"":v))
i.toString
$.bb()
v=new A.bA(i)
v.c_(k,i)
m=v.dZ(0,!0)
h.push(A.av(new A.aM(B.aG,l,l,A.v(w.db===B.f2||n<0?"("+m+")":m,l,!1,!1,l,!1,l,!0,l,!1,!1,t,u,1,B.L,!1,!1,!1,12,l,l,!1,""),l),1))
return A.S(h,B.f,l,B.d,B.j,6,l,l)},
$S:2755}
C.dNT.prototype={
$1(d){var x,w
if(d.p(0,B.bA))return A.q(this.b).ax.y
if(this.a.r){x=A.q(this.b).ax
w=x.cx
return(w==null?x.z:w).a0(0.6)}return null},
$S:146}
C.dNU.prototype={
$1(d){return this.a.bKU(this.b,this.c)},
$S:17};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bNh,A.r)
w(A.aO,[C.dNW,C.dNV,C.dNR,C.dNT,C.dNU])
x(C.dNS,A.aN)
x(C.boz,A.ao)})()
A.aG(b.typeUniverse,JSON.parse('{"bNh":{"r":[],"f":[]}}'))
var y={A:A.t("F<dO>"),u:A.t("F<f>"),x:A.t("ol"),e:A.t("z<aZ<n>>"),m:A.t("z<J>"),d:A.t("eQ<w?>"),v:A.t("~")}};
(a=>{a["RDVzqMfewOHnCZxKwyvTiCXCaRU="]=a.current})($__dart_deferred_initializers__);