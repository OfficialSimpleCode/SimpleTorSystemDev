((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
j1A(d,e,f,g,h,i,j){return new C.bZ1(e,f,i,j,g,h,null)},
bZ1:function bZ1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.x=i
_.a=j},
eam:function eam(d){this.a=d},
eal:function eal(d,e){this.a=d
this.b=e},
eai:function eai(d,e,f){this.a=d
this.b=e
this.c=f},
eah:function eah(d,e){this.a=d
this.b=e},
eaj:function eaj(d,e){this.a=d
this.b=e},
eak:function eak(d,e,f){this.a=d
this.b=e
this.c=f},
byo:function byo(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[620],C)
D=c[979]
C.bZ1.prototype={
l(d){return new A.w($.jt().b,new C.eam(this),null,null,y.m)},
cQY(d,e,f){var x,w,v,u=this,t=null
if(f)x=A.p(d).ax.y.dt(30)
else if(u.r){x=A.p(d).ax
w=x.CW
x=w==null?x.y:w}else x=A.p(d).ax.k2
if(f)w=A.p(d).ax.y
else if(u.r){w=A.p(d).ax
v=w.cx
w=(v==null?w.z:v).a0(0.2)}else w=A.p(d).ax.k3.a0(0.05)
return A.a3(t,t,0.3,A.dw(w,-1,1),t,A.bi(new A.D(new A.z(16,12,16,12),A.jT(new A.jL(new C.eah(u,f),t),B.br),t),t,t,!1,!1,!1,t,t,t,new C.eai(u,d,e),8,t),B.p,x,t,0,!1,t,t,t,t,new A.z(16,8,16,8),!1,t,t,t,8,t,!1,!1,!1,t)},
au_(d,e){return this.deR(d,e)},
deR(d,e){var x=0,w=A.m(y.v),v=this,u,t
var $async$au_=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:t=v.c
x=e?2:4
break
case 2:v.bZE(d,J.dX($.jt().c.a,t.b))
x=3
break
case 4:u=A.b([t],y.A)
t=!D.rF.p(0,t.CW)&&v.d
x=5
return A.c(A.a9c(d,t,u,v.e),$async$au_)
case 5:case 3:return A.k(null,w)}})
return A.l($async$au_,w)},
cLg(d,e){var x,w,v=null
if(this.r){x=A.p(d).ax
w=x.CW
x=w==null?x.y:w}else x=A.p(d).ax.z
return new A.n(20,20,A.fg(v,!1,x,new A.ew(new C.eaj(this,d),y.d),v,!1,v,v,new C.eak(this,d,e),v,v,new A.ep(0,B.ac),v,v,!1,e,v),v)},
bZE(d,e){var x,w,v=null,u=!e
if(u&&!this.gcQZ()){new A.S(A.e("simpleInvoiceDocumentPdfOnCreationProcess",v,v,!0),B.t,B.u,B.w,d).A()
return}if(u){x=$.jt()
if(!x.b.a)x.VN()
u=x}else{x=$.jt()
if(J.av(x.c.a)===1&&x.b.a){x.m1()
return}u=x}if(!u.mU(this.c.b)){u=A.e("maxSelectionReached",v,v,!0)
w=B.h.m(20)
new A.S(A.a1(u,"COUNT",w),B.t,B.u,B.w,d).A()}},
gcQZ(){var x,w=this.c
if(w.dx!==B.cW)return!0
x=A.a6(0,0,0,0,0,$.dc().b.k1.fr)
return new A.T(Date.now(),0,!1).cq(w.c).a>=x.a},
cZa(){var x=null,w=this.c
if(w.ax)return new C.byo(A.e("invoiceCanceled",x,x,!0),B.Y)
if(w.z&&w.dx===B.km){w=A.e("refundInvoice",x,x,!0)
return new C.byo(w,this.d?B.aH:B.Y)}return new C.byo(A.e("documentStatus_"+w.ok.b,x,x,!0),w.ok.ges(0))}}
C.byo.prototype={}
var z=a.updateTypes([])
C.eam.prototype={
$3(d,e,f){return new A.w($.jt().c,new C.eal(this.a,e),null,null,y.e)},
$S:71}
C.eal.prototype={
$3(d,e,f){var x=this.a
return x.cQY(d,this.b,e.p(0,x.c.b))},
$S:453}
C.eai.prototype={
$0(){var x=0,w=A.m(y.v),v,u=this
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=3
return A.c(u.a.au_(u.b,u.c),$async$$0)
case 3:v=e
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:2}
C.eah.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=!k.x&&A.cI(d,B.dk,y.x).w.a.a>=1300,i=y.u,h=A.b([],i)
if(!k.w)h.push(k.cLg(d,this.b))
x=k.cZa()
w=x.b
v=A.bS(40,w.gk(0)>>>16&255,w.gk(0)>>>8&255,w.gk(0)&255)
u=k.r
h.push(A.aq(A.H(A.b([A.a3(l,l,0.3,l,l,A.u(x.a,l,!1,!1,w,!1,l,!1,l,!1,!1,!1,!1,1,B.J,!1,!1,!1,11,l,l,!1,""),B.p,v,l,0,!1,l,l,l,l,l,!1,l,l,new A.z(6,3,6,3),4,l,!1,!1,!1,l)],i),B.a2,l,B.c,B.i,l,B.o),1))
w=k.c
v=w.e
v=v==null?l:B.h.m(v)
if(v==null)v="-"
t=!u
h.push(A.aq(A.u(v,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,1,l,!1,!1,!1,12,l,l,!1,""),1))
h.push(A.aq(new A.aL(B.aE,l,l,A.u(A.J("dd/MM/yyyy",l).C(w.c),l,!1,!1,l,!1,l,!0,l,!1,!1,t,u,0.7,B.J,!1,!1,!1,12,l,l,!1,""),l),2))
if(w.dy===B.fD)v=A.bS(40,B.Y.gk(0)>>>16&255,B.Y.gk(0)>>>8&255,B.Y.gk(0)&255)
else if(u)v=A.p(d).ax.k2
else{v=A.p(d).ax
s=v.CW
v=s==null?v.y:s}s=A.e(w.dy.b,l,l,!1)
r=w.dy===B.fD
q=r?1:0.6
h.push(A.aq(A.H(A.b([A.a3(l,l,0.3,l,l,A.u(s,l,!1,!1,l,!1,l,!1,l,!1,!1,u,t&&!r,q,B.J,!1,!1,!1,11,l,l,!0,""),B.p,v,l,0,!1,l,l,l,l,l,!1,l,l,new A.z(6,3,6,3),4,l,!1,!1,!1,l)],i),B.a2,l,B.c,B.i,l,B.o),2))
if(k.d)if(D.rF.p(0,w.CW)){k=w.cx
if(k.length===0)k=A.e("paymentForSystem",l,l,!0)
p=k}else{k=w.r.a
p=k}else{k=w.d
i=k.b
p=i===""?k.a:i}h.push(A.aq(A.u(p,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,1,B.J,!1,!1,!1,12,l,l,!1,""),2))
if(j){o=w.cx
h.push(A.aq(A.u(o.length===0?"-":o,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,0.7,B.J,!1,!1,!1,12,l,l,!1,""),2))}k=w.dy
n=k===B.fC||k===B.fD?w.gAp():w.y.w
k=B.k.m(Math.abs(n))
i=$.f4()
v=w.y.x
i=i.h(0,A.id(v==null?"":v))
i.toString
$.b9()
v=new A.bp(i)
v.bs(k,i)
m=v.cT(0,!0)
h.push(A.aq(new A.aL(B.aE,l,l,A.u(w.dy===B.fD||n<0?"("+m+")":m,l,!1,!1,l,!1,l,!0,l,!1,!1,t,u,1,B.J,!1,!1,!1,12,l,l,!1,""),l),1))
return A.R(h,B.f,l,B.c,B.i,6,l,l)},
$S:3015}
C.eaj.prototype={
$1(d){var x,w
if(d.p(0,B.bs))return A.p(this.b).ax.y
if(this.a.r){x=A.p(this.b).ax
w=x.cx
return(w==null?x.z:w).a0(0.6)}return null},
$S:88}
C.eak.prototype={
$1(d){return this.a.bZE(this.b,this.c)},
$S:19};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bZ1,A.r)
w(A.aJ,[C.eam,C.eal,C.eah,C.eaj,C.eak])
x(C.eai,A.aK)
x(C.byo,A.ap)})()
A.aw(b.typeUniverse,JSON.parse('{"bZ1":{"r":[],"h":[]}}'))
var y={A:A.t("C<e3>"),u:A.t("C<h>"),x:A.t("lW"),e:A.t("w<aX<o>>"),m:A.t("w<E>"),d:A.t("ew<y?>"),v:A.t("~")}};
(a=>{a["cWIhR/ireZT2r88I4yOR1ZiypeQ="]=a.current})($__dart_deferred_initializers__);