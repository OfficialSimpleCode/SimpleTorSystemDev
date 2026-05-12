((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
aGo(d,e,f,g,h,i){return new C.a9Z(g,f,e,i,h,d,null)},
a9Z:function a9Z(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dLJ:function dLJ(d){this.a=d},
dLI:function dLI(d,e){this.a=d
this.b=e},
dLH:function dLH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLG:function dLG(d,e){this.a=d
this.b=e},
dLF:function dLF(d,e,f){this.a=d
this.b=e
this.c=f}},D,E
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[526],C)
D=c[532]
E=c[698]
C.a9Z.prototype={
l(d){return new A.z($.jm().w,new C.dLJ(this),null,null,y.m)},
bpF(d,e){var x,w,v,u,t=null,s=this.c
if(s.cy!==B.ee){new A.U(A.e("onlySimpleInvoiceCanBeSelected",t,t,!0),B.t,B.v,B.A,d).D()
return}x=A.a0(0,0,0,0,0,$.dW().b.fy.db)
if(new A.R(Date.now(),0,!1).cA(s.c).a<x.a){new A.U(A.e("simpleInvoiceDocumentPdfOnCreationProcess",t,t,!0),B.t,B.v,B.A,d).D()
return}w=$.jm()
v=J.az(w.x.a)
if(!e&&v>=30){s=A.e("maxSelectionReached",t,t,!0)
u=B.i.m(30)
new A.U(A.a3(s,"COUNT",u),B.t,B.v,B.A,d).D()
return}w.bNx(s.b)},
cLL(d,e){var x=null
return new A.H(B.nv,new A.m(24,24,A.fn(x,!1,x,x,x,!1,x,x,new C.dLF(this,d,e),x,x,new A.ea(0,B.ab),x,x,!1,e,x),x),x)},
dAC(){var x=null,w=this.c
if(w.as){w=A.e("invoiceCanceled",x,x,!0)
return new A.H(B.c4,A.v(w,x,!1,!1,this.d?B.aI:B.X,!1,x,!1,x,!1,!1,!1,!1,1,x,!1,!1,!1,12.5,x,x,!1,""),x)}if(w.z){w=A.e("refundInvoice",x,x,!0)
return new A.H(B.c4,A.v(w,x,!1,!1,this.d?B.aI:B.X,!1,x,!1,x,!1,!1,!1,!1,1,x,!1,!1,!1,12.5,x,x,!1,""),x)}return new A.m(x,x,x,x)},
CK(d,e){var x,w,v,u,t,s,r=this,q=null
if(r.e)x=A.aq(q,q,B.p,A.q(e).ax.k2,q,q,q,15,q,q,q,q,q,80)
else if(r.d){x=r.c
if(B.lY.p(0,x.ay)){x=x.ch
if(x==="")x=A.e("paymentForSystem",q,q,!0)}else x=x.r.a
w=r.f
w=A.v(x,q,!1,!1,q,!1,q,!1,q,!1,!1,!w,w,1,B.L,!1,!1,!1,16,q,q,!1,"")
x=w}else{x=r.c
if(x.cy===B.ee){if(x.db===B.f2)w=A.bL(40,B.X.gk(0)>>>16&255,B.X.gk(0)>>>8&255,B.X.gk(0)&255)
else if(r.f)w=A.q(e).ax.k2
else{w=A.q(e).ax
v=w.CW
w=v==null?w.y:v}v=A.e(x.db.b,q,q,!1)
u=x.db===B.f2?1:0.6
t=r.f
w=A.b([A.a4(q,q,q,q,A.v(v,q,!1,!1,q,!1,q,!1,q,!1,!1,t,!t,u,q,!1,!1,!1,11,q,q,!0,""),B.p,w,q,0,!1,q,q,q,new A.x(0,0,0,4),!1,q,q,new A.x(5,3,5,3),6,q,!1,!1,!1,q),r.cos(e)],y.e)
if(r.gben()!=null){v=r.gben()
v.toString
w.push(v)}w=A.T(w,B.f,q,B.d,B.j,0,q,q)}else w=new A.m(q,q,q,q)
x=x.d
v=x.b
u=v===""
t=u?x.a:v
s=r.f
x=u?x.a:v
x=A.G(A.b([w,A.v(t,q,!1,!1,q,!1,q,!1,q,!1,!1,!s,s,1,B.L,!1,!1,!1,16,q,q,!1,x)],y.e),B.a8,q,B.d,B.j,q,B.o)}return A.G(A.b([x],y.e),B.a8,q,B.d,B.j,q,B.o)},
gben(){var x,w,v,u=null,t=this.c.k1
if(t!==B.Bp)return u
x=t.gdO(0)
x=A.bL(170,x.gk(0)>>>16&255,x.gk(0)>>>8&255,x.gk(0)&255)
w=A.e("assignmentNumber",u,u,!1)
v=A.e(t.b+"DocumentAssignmentRequestStatus",u,u,!1)
t=t.gdO(0).dw()>0.5?A.bo(4280229673):B.H
return A.a4(u,u,u,u,A.v(w+": "+v,u,!1,!1,t,!1,u,!1,u,!1,!1,!1,!1,1,u,!1,!1,!1,11,u,u,!1,""),B.p,x,u,0,!1,u,u,u,new A.cV(6,0,0,4),!1,u,u,new A.x(5,3,5,3),6,u,!1,!1,!1,u)},
cos(d){var x,w=null,v=this.c,u=v.k3
if(u!==B.acD&&u!==B.WW)return new A.m(w,w,w,w)
x=u.gdO(0)
u=A.bL(60,x.gk(0)>>>16&255,x.gk(0)>>>8&255,x.gk(0)&255)
return A.a4(w,w,w,w,A.v(A.e("documentStatus_"+v.k3.b,w,w,!1),w,!1,!1,w,!1,w,!1,w,!1,!1,!0,!1,1,w,!1,!1,!1,11,w,w,!0,""),B.p,u,w,0,!1,w,w,w,new A.cV(6,0,0,4),!1,w,w,new A.x(5,3,5,3),6,w,!1,!1,!1,w)}}
var z=a.updateTypes([])
C.dLJ.prototype={
$3(d,e,f){return new A.z($.jm().x,new C.dLI(this.a,e),null,null,y.l)},
$S:39}
C.dLI.prototype={
$3(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.a,d=e.c,a0=a2.p(0,d.b)
if(e.w)x=d.cy===B.ee
else x=!1
w=!$.ag?$.ah.n()*0.95:f
v=e.f
if(v){u=A.q(a1).ax
t=u.CW
u=t==null?u.y:t}else u=f
t=this.b
if(t){if(a0)s=A.q(a1).ax.y
else{s=A.q(a1).ax
r=s.ry
if(r==null){r=s.G
s=r==null?s.k3:r}else s=r
s=s.a0(0.3)}s=A.dX(s,-1,a0?2:1)}else s=f
r=!t
q=y.e
p=A.b([],q)
if(x)p.push(e.cLL(a1,a0))
o=e.CK(0,a1)
n=e.e
m=n?3:0
if(n)l=A.a4(f,f,f,f,f,B.p,f,f,0,!1,f,17,f,f,!1,f,f,f,2,f,!1,!1,!1,$.ah.n()*0.6)
else{if(J.cd(d.x))l=""
else{l=J.N(d.x,0)
l=l==null?f:l.b
if(l==null)l=""
l=A.a3(l,"-"," ")}l=A.v(l,f,!1,!1,f,!1,f,!1,f,!1,!1,!0,!1,0.7,B.L,!1,!1,!1,13,f,f,!1,"")}k=d.db
j=k===B.fm||k===B.f2?d.gzk():d.y.w
k=B.l.m(Math.abs(j))
i=$.fF()
h=d.y.x
i=i.h(0,A.lQ(h==null?"":h))
i.toString
$.bc()
h=new A.bB(i)
h.c_(k,i)
g=h.e7(0,!0)
if(n)k=A.G(A.b([A.aq(f,f,B.p,A.q(a1).ax.k2,f,f,f,20,f,f,f,f,f,60)],q),B.f,f,B.d,B.j,f,B.o)
else k=A.G(A.b([A.v(d.db===B.f2||j<0?"("+g+")":g,f,!1,!1,f,!1,f,!0,f,!1,!1,!0,!1,0.7,f,!1,!1,!1,14,f,f,!1,"")],q),B.f,f,B.d,B.j,f,B.o)
k=A.b([k],q)
if(r)B.c.O(k,A.b([new A.m(10,f,f,f),A.en(!1,!1,!1,!v,v,0.7,16,!1)],q))
o=A.aP(!1,!1,!1,B.d,B.f,f,!0,!1,!1,!1,f,f,!1,!0,!0,!1,!0,f,v,new A.x(0,10,0,10),f,5,f,f,!1,f,!1,f,f,l,13,A.T(k,B.f,f,B.d,B.j,0,f,f),f,f,"",15,f,m,o)
if(v){m=A.q(a1).ax
l=m.cx
m=l==null?m.z:l}else m=A.q(a1).ax.k3
m=A.dA(m.a0(0.3),f,0,f,0.3)
l=d.c
if(n)d=A.aq(f,f,B.p,A.q(a1).ax.k2,f,f,f,10,f,f,f,f,f,60)
else{d=d.e
d=d!=null?B.i.m(d):"0"
d=A.v(d,B.aU,!1,!1,f,!1,f,!1,f,!1,!1,!v,v,0.7,f,!1,!1,!1,12,f,f,!1,"")}p.push(A.av(A.mk(A.bI(new A.H(E.Xt,A.G(A.b([o,m,new D.atZ(l,A.av(A.T(A.b([A.av(d,1),A.av(e.dAC(),1)],q),B.a8,f,B.d,B.j,0,f,f),1),n,v,f)],q),B.f,f,B.d,B.j,f,B.o),f),f,!1,!1,!1,f,f,new C.dLG(e,a1),f,f),t,f),1))
return A.aZ(A.a7(!0,B.q,s,B.J,f,f,A.bI(A.T(p,B.f,f,B.d,B.j,0,f,f),f,r,!1,!1,f,f,new C.dLH(e,t,a1,a0),f,f),u,0,"",!1,f,f,B.d,!1,f,new A.x(0,10,0,0),!1,!0,f,f,f,f,f,f,0.55,f,f,w),f,f)},
$S:577}
C.dLH.prototype={
$0(){var x=this
if(x.b)x.a.bpF(x.c,x.d)},
$S:4}
C.dLG.prototype={
$0(){var x=this.a,w=x.c,v=A.b([w],y.k)
w=!B.lY.p(0,w.ay)&&x.d
return A.a6R(this.b,w,v,x.r)},
$S:2}
C.dLF.prototype={
$1(d){var x=$.jm()
if(!x.w.a)x.a_Q()
this.a.bpF(this.b,this.c)},
$S:17};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a9Z,A.r)
w(A.aO,[C.dLJ,C.dLI,C.dLF])
w(A.aN,[C.dLH,C.dLG])})()
A.aG(b.typeUniverse,JSON.parse('{"a9Z":{"r":[],"f":[]}}'))
var y={k:A.t("F<dO>"),e:A.t("F<f>"),l:A.t("z<aX<n>>"),m:A.t("z<J>")}};
(a=>{a["S5Ix8IJiJh53a8suYcsns6fZFb4="]=a.current})($__dart_deferred_initializers__);