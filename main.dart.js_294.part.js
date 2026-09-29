((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
j4m(d,e,f,g,h,i,j){return new C.bZV(e,f,i,j,g,h,null)},
bZV:function bZV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.x=i
_.a=j},
ebG:function ebG(d){this.a=d},
ebF:function ebF(d,e){this.a=d
this.b=e},
ebC:function ebC(d,e,f){this.a=d
this.b=e
this.c=f},
ebB:function ebB(d,e){this.a=d
this.b=e},
ebD:function ebD(d,e){this.a=d
this.b=e},
ebE:function ebE(d,e,f){this.a=d
this.b=e
this.c=f},
byV:function byV(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[648],C)
D=c[1004]
C.bZV.prototype={
l(d){return new A.w($.ju().b,new C.ebG(this),null,null,y.m)},
cS0(d,e,f){var x,w,v,u=this,t=null
if(f)x=A.q(d).ax.y.dg(30)
else if(u.r){x=A.q(d).ax
w=x.CW
x=w==null?x.y:w}else x=A.q(d).ax.k2
if(f)w=A.q(d).ax.y
else if(u.r){w=A.q(d).ax
v=w.cx
w=(v==null?w.z:v).a2(0.2)}else w=A.q(d).ax.k3.a2(0.05)
return A.a2(t,t,0.3,A.dx(w,-1,1),t,A.bf(new A.D(new A.z(16,12,16,12),A.jW(new A.jM(new C.ebB(u,f),t),B.bs),t),t,t,!1,!1,!1,t,t,t,new C.ebC(u,d,e),8,t),B.p,x,t,0,!1,t,t,t,t,new A.z(16,8,16,8),!1,t,t,t,8,t,!1,!1,!1,t)},
atQ(d,e){return this.dfE(d,e)},
dfE(d,e){var x=0,w=A.l(y.v),v=this,u,t
var $async$atQ=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:t=v.c
x=e?2:4
break
case 2:v.c_r(d,J.e9($.ju().c.a,t.b))
x=3
break
case 4:u=A.b([t],y.A)
t=!D.rP.p(0,t.CW)&&v.d
x=5
return A.c(A.a9u(d,t,u,v.e),$async$atQ)
case 5:case 3:return A.j(null,w)}})
return A.k($async$atQ,w)},
cS1(d,e){var x,w,v=null
if(this.r){x=A.q(d).ax
w=x.CW
x=w==null?x.y:w}else x=A.q(d).ax.z
return new A.m(20,20,A.fa(v,!1,x,new A.f6(new C.ebD(this,d),y.d),v,!1,v,v,new C.ebE(this,d,e),v,v,new A.em(0,B.ac),v,v,!1,e,v),v)},
c_r(d,e){var x,w,v=null,u=!e
if(u&&!this.gcS2()){new A.R(A.d("simpleInvoiceDocumentPdfOnCreationProcess",v,v,!0),B.r,B.u,B.v,d).A()
return}if(u){x=$.ju()
if(!x.b.a)x.VP()
u=x}else{x=$.ju()
if(J.aw(x.c.a)===1&&x.b.a){x.lP()
return}u=x}if(!u.mF(this.c.b)){u=A.d("maxSelectionReached",v,v,!0)
w=B.h.m(20)
new A.R(A.a1(u,"COUNT",w),B.r,B.u,B.v,d).A()}},
gcS2(){var x,w=this.c
if(w.dx!==B.d_)return!0
x=A.a6(0,0,0,0,0,$.cV().b.k2.id)
return new A.V(Date.now(),0,!1).cl(w.c).a>=x.a},
d_q(){var x=null,w=this.c
if(w.ax)return new C.byV(A.d("invoiceCanceled",x,x,!0),B.Y)
if(w.z&&w.dx===B.jx){w=A.d("refundInvoice",x,x,!0)
return new C.byV(w,this.d?B.aH:B.Y)}return new C.byV(A.d("documentStatus_"+w.ok.b,x,x,!0),w.ok.ge9(0))}}
C.byV.prototype={}
var z=a.updateTypes([])
C.ebG.prototype={
$3(d,e,f){return new A.w($.ju().c,new C.ebF(this.a,e),null,null,y.e)},
$S:72}
C.ebF.prototype={
$3(d,e,f){var x=this.a
return x.cS0(d,this.b,e.p(0,x.c.b))},
$S:387}
C.ebC.prototype={
$0(){var x=0,w=A.l(y.v),v,u=this
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=3
return A.c(u.a.atQ(u.b,u.c),$async$$0)
case 3:v=e
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:2}
C.ebB.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=!k.x&&A.cT(d,B.dl,y.x).w.a.a>=1300,i=y.u,h=A.b([],i)
if(!k.w)h.push(k.cS1(d,this.b))
x=k.d_q()
w=x.b
v=A.bU(40,w.gk(0)>>>16&255,w.gk(0)>>>8&255,w.gk(0)&255)
u=k.r
h.push(A.aq(A.H(A.b([A.a2(l,l,0.3,l,l,A.u(x.a,l,!1,!1,w,!1,l,!1,l,!1,!1,!1,!1,1,B.J,!1,!1,!1,11,l,l,!1,""),B.p,v,l,0,!1,l,l,l,l,l,!1,l,l,new A.z(6,3,6,3),4,l,!1,!1,!1,l)],i),B.a2,l,B.c,B.i,l,B.o),1))
w=k.c
v=w.e
v=v==null?l:B.h.m(v)
if(v==null)v="-"
t=!u
h.push(A.aq(A.u(v,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,1,l,!1,!1,!1,12,l,l,!1,""),1))
h.push(A.aq(new A.aN(B.aF,l,l,A.u(A.K("dd/MM/yyyy",l).D(w.c),l,!1,!1,l,!1,l,!0,l,!1,!1,t,u,0.7,B.J,!1,!1,!1,12,l,l,!1,""),l),2))
if(w.dy===B.fy)v=A.bU(40,B.Y.gk(0)>>>16&255,B.Y.gk(0)>>>8&255,B.Y.gk(0)&255)
else if(u)v=A.q(d).ax.k2
else{v=A.q(d).ax
s=v.CW
v=s==null?v.y:s}s=A.d(w.dy.b,l,l,!1)
r=w.dy===B.fy
q=r?1:0.6
h.push(A.aq(A.H(A.b([A.a2(l,l,0.3,l,l,A.u(s,l,!1,!1,l,!1,l,!1,l,!1,!1,u,t&&!r,q,B.J,!1,!1,!1,11,l,l,!0,""),B.p,v,l,0,!1,l,l,l,l,l,!1,l,l,new A.z(6,3,6,3),4,l,!1,!1,!1,l)],i),B.a2,l,B.c,B.i,l,B.o),2))
if(k.d)if(D.rP.p(0,w.CW)){k=w.cx
if(k.length===0)k=A.d("paymentForSystem",l,l,!0)
p=k}else{k=w.r.a
p=k}else{k=w.d
i=k.b
p=i===""?k.a:i}h.push(A.aq(A.u(p,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,1,B.J,!1,!1,!1,12,l,l,!1,""),2))
if(j){o=w.cx
h.push(A.aq(A.u(o.length===0?"-":o,l,!1,!1,l,!1,l,!1,l,!1,!1,t,u,0.7,B.J,!1,!1,!1,12,l,l,!1,""),2))}k=w.dy
n=k===B.fx||k===B.fy?w.gwA():w.y.w
k=B.k.m(Math.abs(n))
i=$.eZ()
v=w.y.x
i=i.h(0,A.ib(v==null?"":v))
i.toString
$.b8()
v=new A.bo(i)
v.bt(k,i)
m=v.cS(0,!0)
h.push(A.aq(new A.aN(B.aF,l,l,A.u(w.dy===B.fy||n<0?"("+m+")":m,l,!1,!1,l,!1,l,!0,l,!1,!1,t,u,1,B.J,!1,!1,!1,12,l,l,!1,""),l),1))
return A.S(h,B.f,l,B.c,B.i,6,l,l)},
$S:3060}
C.ebD.prototype={
$1(d){var x,w
if(d.p(0,B.bA))return A.q(this.b).ax.y
if(this.a.r){x=A.q(this.b).ax
w=x.cx
return(w==null?x.z:w).a2(0.6)}return null},
$S:139}
C.ebE.prototype={
$1(d){return this.a.c_r(this.b,this.c)},
$S:19};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bZV,A.r)
w(A.aF,[C.ebG,C.ebF,C.ebB,C.ebD,C.ebE])
x(C.ebC,A.aI)
x(C.byV,A.ap)})()
A.av(b.typeUniverse,JSON.parse('{"bZV":{"r":[],"f":[]}}'))
var y={A:A.t("C<e5>"),u:A.t("C<f>"),x:A.t("mi"),e:A.t("w<aY<n>>"),m:A.t("w<E>"),d:A.t("f6<y?>"),v:A.t("~")}};
(a=>{a["xGO/bjjBLBRSkK/BFZwiliSkOOE="]=a.current})($__dart_deferred_initializers__);