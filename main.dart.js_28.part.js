((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
aLK(d,e,f,g,h,i,j){return new C.acG(h,g,f,j,i,d,null)},
acG:function acG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
eaj:function eaj(d){this.a=d},
eai:function eai(d,e){this.a=d
this.b=e},
eah:function eah(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eag:function eag(d,e,f){this.a=d
this.b=e
this.c=f},
eaf:function eaf(d,e,f){this.a=d
this.b=e
this.c=f}},D,E,F
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[673],C)
D=c[678]
E=c[933]
F=c[1004]
C.acG.prototype={
l(d){return new A.w($.ju().b,new C.eaj(this),null,null,y.m)},
aZM(d,e){var x,w,v=null
if(!this.gd7C()){new A.R(A.d("simpleInvoiceDocumentPdfOnCreationProcess",v,v,!0),B.r,B.u,B.v,d).A()
return}if(!$.ju().mF(this.c.b)){x=A.d("maxSelectionReached",v,v,!0)
w=B.h.m(20)
new A.R(A.a1(x,"COUNT",w),B.r,B.u,B.v,d).A()}},
gd7C(){var x,w=this.c
if(w.dx!==B.d_)return!0
x=A.a6(0,0,0,0,0,$.cV().b.k2.id)
return new A.V(Date.now(),0,!1).cl(w.c).a>=x.a},
drp(d,e){var x=null
return new A.D(B.oR,new A.m(24,24,A.fa(x,!1,x,x,x,!1,x,x,new C.eaf(this,d,e),x,x,new A.em(0,B.ac),x,x,!1,e,x),x),x)},
e5E(){var x=null,w=this.c
if(w.ax){w=A.d("invoiceCanceled",x,x,!0)
return new A.D(B.bW,A.u(w,x,!1,!1,this.d?B.aH:B.Y,!1,x,!1,x,!1,!1,!1,!1,1,x,!1,!1,!1,12.5,x,x,!1,""),x)}if(w.z&&w.dx===B.jx){w=A.d("refundInvoice",x,x,!0)
return new A.D(B.bW,A.u(w,x,!1,!1,this.d?B.aH:B.Y,!1,x,!1,x,!1,!1,!1,!1,1,x,!1,!1,!1,12.5,x,x,!1,""),x)}return new A.m(x,x,x,x)},
DG(d,e){var x,w,v,u,t,s,r=this,q=null
if(r.e)x=A.as(q,q,B.p,A.q(e).ax.k2,q,q,q,15,q,q,q,q,q,80)
else if(r.d){x=r.c
if(F.rP.p(0,x.CW)){x=x.cx
if(x==="")x=A.d("paymentForSystem",q,q,!0)}else x=x.r.a
w=r.f
w=A.u(x,q,!1,!1,q,!1,q,!1,q,!1,!1,!w,w,1,B.J,!1,!1,!1,16,q,q,!1,"")
x=w}else{x=r.c
if(x.dx===B.d_){if(x.dy===B.fy)w=A.bU(40,B.Y.gk(0)>>>16&255,B.Y.gk(0)>>>8&255,B.Y.gk(0)&255)
else if(r.f)w=A.q(e).ax.k2
else{w=A.q(e).ax
v=w.CW
w=v==null?w.y:v}v=A.d(x.dy.b,q,q,!1)
u=x.dy===B.fy?1:0.6
t=r.f
w=A.b([A.a2(q,q,0.3,q,q,A.u(v,q,!1,!1,q,!1,q,!1,q,!1,!1,t,!t,u,q,!1,!1,!1,11,q,q,!0,""),B.p,w,q,0,!1,q,q,q,q,new A.z(0,0,0,4),!1,q,q,new A.z(5,3,5,3),6,q,!1,!1,!1,q),r.cHh(e)],y.e)
if(r.gbpT()!=null){v=r.gbpT()
v.toString
w.push(v)}w=A.S(w,B.f,q,B.c,B.i,0,q,q)}else w=new A.m(q,q,q,q)
x=x.d
v=x.b
u=v===""
t=u?x.a:v
s=r.f
x=u?x.a:v
x=A.H(A.b([w,A.u(t,q,!1,!1,q,!1,q,!1,q,!1,!1,!s,s,1,B.J,!1,!1,!1,16,q,q,!1,x)],y.e),B.a2,q,B.c,B.i,q,B.o)}return A.H(A.b([x],y.e),B.a2,q,B.c,B.i,q,B.o)},
gbpT(){var x,w,v,u=null,t=this.c.k3
if(t!==B.El)return u
x=t.ge8(0)
x=A.bU(170,x.gk(0)>>>16&255,x.gk(0)>>>8&255,x.gk(0)&255)
w=A.d("assignmentNumber",u,u,!1)
v=A.d(t.b+"DocumentAssignmentRequestStatus",u,u,!1)
t=t.ge8(0).dF()>0.5?A.bx(4280229673):B.G
return A.a2(u,u,0.3,u,u,A.u(w+": "+v,u,!1,!1,t,!1,u,!1,u,!1,!1,!1,!1,1,u,!1,!1,!1,11,u,u,!1,""),B.p,x,u,0,!1,u,u,u,u,new A.cZ(6,0,0,4),!1,u,u,new A.z(5,3,5,3),6,u,!1,!1,!1,u)},
cHh(d){var x,w=null,v=this.c,u=v.ok
if(u!==B.alM&&u!==B.Ld)return new A.m(w,w,w,w)
x=u.ge8(0)
u=A.bU(60,x.gk(0)>>>16&255,x.gk(0)>>>8&255,x.gk(0)&255)
return A.a2(w,w,0.3,w,w,A.u(A.d("documentStatus_"+v.ok.b,w,w,!1),w,!1,!1,w,!1,w,!1,w,!1,!1,!0,!1,1,w,!1,!1,!1,11,w,w,!0,""),B.p,u,w,0,!1,w,w,w,w,new A.cZ(6,0,0,4),!1,w,w,new A.z(5,3,5,3),6,w,!1,!1,!1,w)}}
var z=a.updateTypes([])
C.eaj.prototype={
$3(d,e,f){return new A.w($.ju().c,new C.eai(this.a,e),null,null,y.l)},
$S:71}
C.eai.prototype={
$3(a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.c,f=a1.p(0,g.b),e=!$.af?$.an.n()*0.95:i,d=h.f
if(d){x=A.q(a0).ax
w=x.CW
x=w==null?x.y:w}else x=i
w=this.b
if(w){if(f)v=A.q(a0).ax.y
else{v=A.q(a0).ax
u=v.ry
if(u==null){u=v.I
v=u==null?v.k3:u}else v=u
v=v.a2(0.3)}v=A.dx(v,-1,f?2:1)}else v=i
u=!w
t=y.e
s=A.b([],t)
if(h.w)s.push(h.drp(a0,f))
r=h.DG(0,a0)
q=h.e
p=q?3:0
if(q)o=A.a2(i,i,0.3,i,i,i,B.p,i,i,0,!1,i,17,i,i,i,!1,i,i,i,2,i,!1,!1,!1,$.an.n()*0.6)
else{if(J.c8(g.x))o=""
else{o=J.O(g.x,0)
o=o==null?i:o.b
if(o==null)o=""
o=A.a1(o,"-"," ")}o=A.u(o,i,!1,!1,i,!1,i,!1,i,!1,!1,!0,!1,0.7,B.J,!1,!1,!1,13,i,i,!1,"")}n=g.dy
m=n===B.fx||n===B.fy?g.gwz():g.y.w
n=B.k.m(Math.abs(m))
l=$.eZ()
k=g.y.x
l=l.h(0,A.ib(k==null?"":k))
l.toString
$.b8()
k=new A.bo(l)
k.bt(n,l)
j=k.cS(0,!0)
if(q)n=A.H(A.b([A.as(i,i,B.p,A.q(a0).ax.k2,i,i,i,20,i,i,i,i,i,60)],t),B.f,i,B.c,B.i,i,B.o)
else n=A.H(A.b([A.u(g.dy===B.fy||m<0?"("+j+")":j,i,!1,!1,i,!1,i,!0,i,!1,!1,!0,!1,0.7,i,!1,!1,!1,14,i,i,!1,"")],t),B.f,i,B.c,B.i,i,B.o)
n=A.b([n],t)
if(u)B.d.J(n,A.b([new A.m(10,i,i,i),A.en(!1,!1,!1,!d,d,0.7,16,!1)],t))
r=A.aV(!1,!1,!1,B.c,B.f,i,!0,!1,!1,!1,i,i,8,!1,!0,!0,!1,!0,i,d,new A.z(0,10,0,10),i,5,i,i,!1,i,!1,i,i,o,13,A.S(n,B.f,i,B.c,B.i,0,i,i),i,i,"",15,i,p,r)
if(d){p=A.q(a0).ax
o=p.cx
p=o==null?p.z:o}else p=A.q(a0).ax.k3
p=A.dR(p.a2(0.3),i,0,i,0.3)
o=g.c
if(q)g=A.as(i,i,B.p,A.q(a0).ax.k2,i,i,i,10,i,i,i,i,i,60)
else{g=g.e
g=g!=null?B.h.m(g):"0"
g=A.u(g,B.aS,!1,!1,i,!1,i,!1,i,!1,!1,!d,d,0.7,i,!1,!1,!1,12,i,i,!1,"")}s.push(A.aq(new A.D(E.LP,A.H(A.b([r,p,new D.ayB(o,A.aq(A.S(A.b([A.aq(g,1),A.aq(h.e5E(),1)],t),B.a2,i,B.c,B.i,0,i,i),1),q,d,i)],t),B.f,i,B.c,B.i,i,B.o),i),1))
return A.aT(A.a0(!0,B.q,v,i,B.F,i,i,A.bf(A.bf(A.S(s,B.f,i,B.c,B.i,0,i,i),i,i,!1,!1,!1,i,i,i,new C.eag(h,a0,f),i,i),i,i,u,!1,!1,i,i,i,new C.eah(h,w,a0,f),i,i),x,0,"",!1,i,i,B.c,!1,i,new A.z(0,16,0,0),!1,!0,i,i,i,i,!1,i,i,0.55,i,i,e),i,i)},
$S:1103}
C.eah.prototype={
$0(){var x=this
if(x.b)x.a.aZM(x.c,x.d)},
$S:6}
C.eag.prototype={
$0(){var x=this.a,w=this.b
if($.ju().b.a)x.aZM(w,this.c)
else A.a9t(w,x.d,A.b([x.c],y.k),x.r)},
$S:6}
C.eaf.prototype={
$1(d){var x=$.ju()
if(!x.b.a)x.VP()
this.a.aZM(this.b,this.c)},
$S:19};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.acG,A.r)
w(A.aF,[C.eaj,C.eai,C.eaf])
w(A.aI,[C.eah,C.eag])})()
A.av(b.typeUniverse,JSON.parse('{"acG":{"r":[],"f":[]}}'))
var y={k:A.t("C<e5>"),e:A.t("C<f>"),l:A.t("w<aY<n>>"),m:A.t("w<E>")}};
(a=>{a["p97gwsrfOHwmNgFjfzanqbhcFl8="]=a.current})($__dart_deferred_initializers__);