((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
aLB(d,e,f,g,h,i,j){return new C.act(h,g,f,j,i,d,null)},
act:function act(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
e92:function e92(d){this.a=d},
e91:function e91(d,e){this.a=d
this.b=e},
e90:function e90(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9_:function e9_(d,e,f){this.a=d
this.b=e
this.c=f},
e8Z:function e8Z(d,e,f){this.a=d
this.b=e
this.c=f}},D,E,F
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[647],C)
D=c[655]
E=c[907]
F=c[979]
C.act.prototype={
l(d){return new A.w($.jt().b,new C.e92(this),null,null,y.m)},
aZZ(d,e){var x,w,v=null
if(!this.gd77()){new A.S(A.e("simpleInvoiceDocumentPdfOnCreationProcess",v,v,!0),B.t,B.u,B.w,d).A()
return}if(!$.jt().mU(this.c.b)){x=A.e("maxSelectionReached",v,v,!0)
w=B.h.m(20)
new A.S(A.a1(x,"COUNT",w),B.t,B.u,B.w,d).A()}},
gd77(){var x,w=this.c
if(w.dx!==B.cW)return!0
x=A.a6(0,0,0,0,0,$.dc().b.k1.fr)
return new A.T(Date.now(),0,!1).cq(w.c).a>=x.a},
dqM(d,e){var x=null
return new A.D(B.oL,new A.n(24,24,A.fg(x,!1,x,x,x,!1,x,x,new C.e8Z(this,d,e),x,x,new A.ep(0,B.ac),x,x,!1,e,x),x),x)},
e4h(){var x=null,w=this.c
if(w.ax){w=A.e("invoiceCanceled",x,x,!0)
return new A.D(B.bY,A.u(w,x,!1,!1,this.d?B.aH:B.Y,!1,x,!1,x,!1,!1,!1,!1,1,x,!1,!1,!1,12.5,x,x,!1,""),x)}if(w.z&&w.dx===B.km){w=A.e("refundInvoice",x,x,!0)
return new A.D(B.bY,A.u(w,x,!1,!1,this.d?B.aH:B.Y,!1,x,!1,x,!1,!1,!1,!1,1,x,!1,!1,!1,12.5,x,x,!1,""),x)}return new A.n(x,x,x,x)},
DR(d,e){var x,w,v,u,t,s,r=this,q=null
if(r.e)x=A.as(q,q,B.p,A.p(e).ax.k2,q,q,q,15,q,q,q,q,q,80)
else if(r.d){x=r.c
if(F.rF.p(0,x.CW)){x=x.cx
if(x==="")x=A.e("paymentForSystem",q,q,!0)}else x=x.r.a
w=r.f
w=A.u(x,q,!1,!1,q,!1,q,!1,q,!1,!1,!w,w,1,B.J,!1,!1,!1,16,q,q,!1,"")
x=w}else{x=r.c
if(x.dx===B.cW){if(x.dy===B.fD)w=A.bS(40,B.Y.gk(0)>>>16&255,B.Y.gk(0)>>>8&255,B.Y.gk(0)&255)
else if(r.f)w=A.p(e).ax.k2
else{w=A.p(e).ax
v=w.CW
w=v==null?w.y:v}v=A.e(x.dy.b,q,q,!1)
u=x.dy===B.fD?1:0.6
t=r.f
w=A.b([A.a3(q,q,0.3,q,q,A.u(v,q,!1,!1,q,!1,q,!1,q,!1,!1,t,!t,u,q,!1,!1,!1,11,q,q,!0,""),B.p,w,q,0,!1,q,q,q,q,new A.z(0,0,0,4),!1,q,q,new A.z(5,3,5,3),6,q,!1,!1,!1,q),r.cGl(e)],y.e)
if(r.gbpx()!=null){v=r.gbpx()
v.toString
w.push(v)}w=A.R(w,B.f,q,B.c,B.i,0,q,q)}else w=new A.n(q,q,q,q)
x=x.d
v=x.b
u=v===""
t=u?x.a:v
s=r.f
x=u?x.a:v
x=A.H(A.b([w,A.u(t,q,!1,!1,q,!1,q,!1,q,!1,!1,!s,s,1,B.J,!1,!1,!1,16,q,q,!1,x)],y.e),B.a2,q,B.c,B.i,q,B.o)}return A.H(A.b([x],y.e),B.a2,q,B.c,B.i,q,B.o)},
gbpx(){var x,w,v,u=null,t=this.c.k3
if(t!==B.E7)return u
x=t.ges(0)
x=A.bS(170,x.gk(0)>>>16&255,x.gk(0)>>>8&255,x.gk(0)&255)
w=A.e("assignmentNumber",u,u,!1)
v=A.e(t.b+"DocumentAssignmentRequestStatus",u,u,!1)
t=t.ges(0).dH()>0.5?A.bv(4280229673):B.F
return A.a3(u,u,0.3,u,u,A.u(w+": "+v,u,!1,!1,t,!1,u,!1,u,!1,!1,!1,!1,1,u,!1,!1,!1,11,u,u,!1,""),B.p,x,u,0,!1,u,u,u,u,new A.cU(6,0,0,4),!1,u,u,new A.z(5,3,5,3),6,u,!1,!1,!1,u)},
cGl(d){var x,w=null,v=this.c,u=v.ok
if(u!==B.aln&&u!==B.L7)return new A.n(w,w,w,w)
x=u.ges(0)
u=A.bS(60,x.gk(0)>>>16&255,x.gk(0)>>>8&255,x.gk(0)&255)
return A.a3(w,w,0.3,w,w,A.u(A.e("documentStatus_"+v.ok.b,w,w,!1),w,!1,!1,w,!1,w,!1,w,!1,!1,!0,!1,1,w,!1,!1,!1,11,w,w,!0,""),B.p,u,w,0,!1,w,w,w,w,new A.cU(6,0,0,4),!1,w,w,new A.z(5,3,5,3),6,w,!1,!1,!1,w)}}
var z=a.updateTypes([])
C.e92.prototype={
$3(d,e,f){return new A.w($.jt().c,new C.e91(this.a,e),null,null,y.l)},
$S:71}
C.e91.prototype={
$3(a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.c,f=a1.p(0,g.b),e=!$.ag?$.al.n()*0.95:i,d=h.f
if(d){x=A.p(a0).ax
w=x.CW
x=w==null?x.y:w}else x=i
w=this.b
if(w){if(f)v=A.p(a0).ax.y
else{v=A.p(a0).ax
u=v.ry
if(u==null){u=v.I
v=u==null?v.k3:u}else v=u
v=v.a0(0.3)}v=A.dw(v,-1,f?2:1)}else v=i
u=!w
t=y.e
s=A.b([],t)
if(h.w)s.push(h.dqM(a0,f))
r=h.DR(0,a0)
q=h.e
p=q?3:0
if(q)o=A.a3(i,i,0.3,i,i,i,B.p,i,i,0,!1,i,17,i,i,i,!1,i,i,i,2,i,!1,!1,!1,$.al.n()*0.6)
else{if(J.c3(g.x))o=""
else{o=J.O(g.x,0)
o=o==null?i:o.b
if(o==null)o=""
o=A.a1(o,"-"," ")}o=A.u(o,i,!1,!1,i,!1,i,!1,i,!1,!1,!0,!1,0.7,B.J,!1,!1,!1,13,i,i,!1,"")}n=g.dy
m=n===B.fC||n===B.fD?g.gAp():g.y.w
n=B.k.m(Math.abs(m))
l=$.f4()
k=g.y.x
l=l.h(0,A.id(k==null?"":k))
l.toString
$.b9()
k=new A.bp(l)
k.bs(n,l)
j=k.cT(0,!0)
if(q)n=A.H(A.b([A.as(i,i,B.p,A.p(a0).ax.k2,i,i,i,20,i,i,i,i,i,60)],t),B.f,i,B.c,B.i,i,B.o)
else n=A.H(A.b([A.u(g.dy===B.fD||m<0?"("+j+")":j,i,!1,!1,i,!1,i,!0,i,!1,!1,!0,!1,0.7,i,!1,!1,!1,14,i,i,!1,"")],t),B.f,i,B.c,B.i,i,B.o)
n=A.b([n],t)
if(u)B.d.J(n,A.b([new A.n(10,i,i,i),A.et(!1,!1,!1,!d,d,0.7,16,!1)],t))
r=A.aW(!1,!1,!1,B.c,B.f,i,!0,!1,!1,!1,i,i,8,!1,!0,!0,!1,!0,i,d,new A.z(0,10,0,10),i,5,i,i,!1,i,!1,i,i,o,13,A.R(n,B.f,i,B.c,B.i,0,i,i),i,i,"",15,i,p,r)
if(d){p=A.p(a0).ax
o=p.cx
p=o==null?p.z:o}else p=A.p(a0).ax.k3
p=A.dO(p.a0(0.3),i,0,i,0.3)
o=g.c
if(q)g=A.as(i,i,B.p,A.p(a0).ax.k2,i,i,i,10,i,i,i,i,i,60)
else{g=g.e
g=g!=null?B.h.m(g):"0"
g=A.u(g,B.aR,!1,!1,i,!1,i,!1,i,!1,!1,!d,d,0.7,i,!1,!1,!1,12,i,i,!1,"")}s.push(A.aq(new A.D(E.LE,A.H(A.b([r,p,new D.ayr(o,A.aq(A.R(A.b([A.aq(g,1),A.aq(h.e4h(),1)],t),B.a2,i,B.c,B.i,0,i,i),1),q,d,i)],t),B.f,i,B.c,B.i,i,B.o),i),1))
return A.aS(A.a2(!0,B.q,v,i,B.H,i,i,A.bi(A.bi(A.R(s,B.f,i,B.c,B.i,0,i,i),i,i,!1,!1,!1,i,i,i,new C.e9_(h,a0,f),i,i),i,i,u,!1,!1,i,i,i,new C.e90(h,w,a0,f),i,i),x,0,"",!1,i,i,B.c,!1,i,new A.z(0,16,0,0),!1,!0,i,i,i,i,!1,i,i,0.55,i,i,e),i,i)},
$S:1160}
C.e90.prototype={
$0(){var x=this
if(x.b)x.a.aZZ(x.c,x.d)},
$S:6}
C.e9_.prototype={
$0(){var x=this.a,w=this.b
if($.jt().b.a)x.aZZ(w,this.c)
else A.a9c(w,x.d,A.b([x.c],y.k),x.r)},
$S:6}
C.e8Z.prototype={
$1(d){var x=$.jt()
if(!x.b.a)x.VN()
this.a.aZZ(this.b,this.c)},
$S:19};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.act,A.r)
w(A.aJ,[C.e92,C.e91,C.e8Z])
w(A.aK,[C.e90,C.e9_])})()
A.aw(b.typeUniverse,JSON.parse('{"act":{"r":[],"h":[]}}'))
var y={k:A.t("C<e3>"),e:A.t("C<h>"),l:A.t("w<aX<o>>"),m:A.t("w<E>")}};
(a=>{a["X/iWqwL/vpTClzFqV3QQdPqR+ts="]=a.current})($__dart_deferred_initializers__);