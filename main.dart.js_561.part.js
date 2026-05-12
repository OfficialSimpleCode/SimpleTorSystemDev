((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
icq(d,e,f,g,h,i,j){return new C.bMK(e,f,i,j,g,h,null)},
bMK:function bMK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.x=i
_.a=j},
dNh:function dNh(d){this.a=d},
dNg:function dNg(d,e){this.a=d
this.b=e},
dNd:function dNd(d,e,f){this.a=d
this.b=e
this.c=f},
dNc:function dNc(d,e){this.a=d
this.b=e},
dNe:function dNe(d,e){this.a=d
this.b=e},
dNf:function dNf(d,e,f){this.a=d
this.b=e
this.c=f},
bo8:function bo8(d,e){this.a=d
this.b=e}}
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[511],C)
C.bMK.prototype={
l(d){return new A.z($.jm().w,new C.dNh(this),null,null,y.m)},
cx3(d,e,f){var x,w,v,u=this,t=null
if(f)x=A.q(d).ax.y.de(30)
else if(u.r){x=A.q(d).ax
w=x.CW
x=w==null?x.y:w}else x=A.q(d).ax.k2
if(f)w=A.q(d).ax.y
else if(u.r){w=A.q(d).ax
v=w.cx
w=(v==null?w.z:v).a0(0.2)}else w=A.q(d).ax.k3.a0(0.05)
return A.a4(t,t,A.dX(w,-1,1),t,A.bI(new A.H(new A.x(16,12,16,12),A.kR(new A.im(new C.dNc(u,f),t),B.by),t),t,!1,!1,!1,t,t,new C.dNd(u,d,e),8,t),B.p,x,t,0,!1,t,t,t,new A.x(16,5,16,5),!1,t,t,t,8,t,!1,!1,!1,t)},
anL(d,e){return this.cRV(d,e)},
cRV(d,e){var x=0,w=A.l(y.v),v=this,u,t
var $async$anL=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:t=v.c
x=e?2:4
break
case 2:v.bKw(d,J.dN($.jm().x.a,t.b))
x=3
break
case 4:u=A.b([t],y.A)
t=!B.lY.p(0,t.ay)&&v.d
x=5
return A.d(A.a6R(d,t,u,v.e),$async$anL)
case 5:case 3:return A.j(null,w)}})
return A.k($async$anL,w)},
css(d,e){var x,w,v=null
if(this.r){x=A.q(d).ax
w=x.CW
x=w==null?x.y:w}else x=A.q(d).ax.z
return new A.m(20,20,A.fn(v,!1,x,new A.eP(new C.dNe(this,d),y.d),v,!1,v,v,new C.dNf(this,d,e),v,v,new A.ea(0,B.ab),v,v,!1,e,v),v)},
bKw(d,e){var x,w=!e
if(w&&!this.gcM8()){new A.U(A.e("simpleInvoiceDocumentPdfOnCreationProcess",null,null,!0),B.t,B.v,B.A,d).D()
return}if(w){x=$.jm()
if(!x.w.a)x.a_Q()
w=x}else{x=$.jm()
if(J.az(x.x.a)===1&&x.w.a){x.J_()
return}w=x}w.bNx(this.c.b)},
gcM8(){var x,w=this.c
if(w.cy!==B.ee)return!0
x=A.a0(0,0,0,0,0,$.dW().b.fy.db)
return new A.R(Date.now(),0,!1).cA(w.c).a>=x.a},
cEh(){var x=null,w=this.c
if(w.as)return new C.bo8(A.e("invoiceCanceled",x,x,!0),B.X)
if(w.z){w=A.e("refundInvoice",x,x,!0)
return new C.bo8(w,this.d?B.aI:B.X)}return new C.bo8(A.e("documentStatus_"+w.k3.b,x,x,!0),w.k3.gdO(0))}}
C.bo8.prototype={}
var z=a.updateTypes([])
C.dNh.prototype={
$3(d,e,f){return new A.z($.jm().x,new C.dNg(this.a,e),null,null,y.e)},
$S:39}
C.dNg.prototype={
$3(d,e,f){var x=this.a
return x.cx3(d,this.b,e.p(0,x.c.b))},
$S:447}
C.dNd.prototype={
$0(){var x=0,w=A.l(y.v),v,u=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.anL(u.b,u.c),$async$$0)
case 3:v=e
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:2}
C.dNc.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=!k.x&&A.d0(d,B.fZ,y.x).w.a.a>=1300,i=y.u,h=A.b([],i)
if(!k.w)h.push(k.css(d,this.b))
x=k.cEh()
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
if(k.d)if(B.lY.p(0,w.ay)){k=w.ch
if(k.length===0)k=A.e("paymentForSystem",l,l,!0)
p=k}else{k=w.r.a
p=k}else{k=w.d
i=k.b
p=i===""?k.a:i}h.push(A.av(A.v(p,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,1,B.L,!1,!1,!1,12,l,l,!1,""),2))
if(j){o=w.ch
h.push(A.av(A.v(o.length===0?"-":o,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,0.7,B.L,!1,!1,!1,12,l,l,!1,""),2))}k=w.db
n=k===B.fm||k===B.f2?w.gzk():w.y.w
k=B.l.m(Math.abs(n))
i=$.fF()
v=w.y.x
i=i.h(0,A.lQ(v==null?"":v))
i.toString
$.bc()
v=new A.bB(i)
v.c_(k,i)
m=v.e7(0,!0)
h.push(A.av(new A.aM(B.aG,l,l,A.v(w.db===B.f2||n<0?"("+m+")":m,l,!1,!1,l,!1,l,!0,l,!1,!1,t,u,1,B.L,!1,!1,!1,12,l,l,!1,""),l),1))
return A.T(h,B.f,l,B.d,B.j,6,l,l)},
$S:2746}
C.dNe.prototype={
$1(d){var x,w
if(d.p(0,B.bA))return A.q(this.b).ax.y
if(this.a.r){x=A.q(this.b).ax
w=x.cx
return(w==null?x.z:w).a0(0.6)}return null},
$S:144}
C.dNf.prototype={
$1(d){return this.a.bKw(this.b,this.c)},
$S:17};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bMK,A.r)
w(A.aO,[C.dNh,C.dNg,C.dNc,C.dNe,C.dNf])
x(C.dNd,A.aN)
x(C.bo8,A.ao)})()
A.aG(b.typeUniverse,JSON.parse('{"bMK":{"r":[],"f":[]}}'))
var y={A:A.t("F<dO>"),u:A.t("F<f>"),x:A.t("oi"),e:A.t("z<aX<n>>"),m:A.t("z<J>"),d:A.t("eP<w?>"),v:A.t("~")}};
(a=>{a["NYGN/EGUB9Olpgdema4hzNZFUwU="]=a.current})($__dart_deferred_initializers__);