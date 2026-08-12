((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,D,E,C={
k0e(d){return new C.ce5(d,null)},
ce5:function ce5(d,e){this.c=d
this.a=e},
eYa:function eYa(d){this.a=d},
eYb:function eYb(d){this.a=d},
eYc:function eYc(d,e){this.a=d
this.b=e},
jqQ(d){var x=null
if(d.f!==B.j6)return x
switch(d.r.a){case 0:return A.e("orderPaidByWorker",x,x,!0)
case 1:return A.e("orderPaidByCustomer",x,x,!0)
case 2:case 3:return x}},
jqR(d){var x=null,w=d.Q
if(w==null||w.length===0)return x
switch(w){case"booking_deleted":return A.e("orderReasonBookingDeleted",x,x,!0)
case"online_refund":return A.e("orderReasonOnlineRefund",x,x,!0)
case"manual_refund":return A.e("orderReasonManualRefund",x,x,!0)
default:return w}}}
A=c[0]
B=c[2]
D=c[676]
E=c[823]
C=a.updateHolder(c[268],C)
C.ce5.prototype={
l(d){var x,w,v=null,u=this.c.y,t=A.an(u).j("dB<1>"),s=A.U(new A.dB(u,t),t.j("aD.E"))
u=$.b8.n()
t=$.ag?$.dW.n():v
x=D.eb(!1,v,v,new A.D(B.ts,A.u(A.e("orderActionsHistory",v,v,!1),v,!1,!1,v,!1,v,!1,v,!1,!1,!0,!1,1,v,!1,!1,!1,18,v,v,!1,""),v),new C.eYa(d),new C.eYb(d),!0,!0,!0,!1,v)
w=s.length
return new A.n(t,u*0.6,A.H(A.b([B.eh,x,A.aq(w===0?A.aS(A.u(A.e("noOrderActions",v,v,!1),v,!1,!1,v,!1,v,!1,v,!1,!1,!1,!1,0.6,v,!1,!1,!1,13,v,v,!1,""),v,v):A.j1(v,v,new C.eYc(this,s),w,v,v,v,B.oM,v,v,B.R,!1),1)],y.a),B.f,v,B.c,B.i,v,B.o),v)},
bI3(d,e,f,g){var x=null,w=y.a,v=A.b([],w)
if(g!=null&&f!=null)B.d.J(v,A.b([new A.a88(g,f,x),E.aRH],w))
v.push(new A.a88(e,d,x))
return new A.D(B.eI,A.R(v,B.f,x,B.c,B.i,0,x,x),x)}}
var z=a.updateTypes([])
C.eYa.prototype={
$0(){A.Q(this.a,!1).H(null)
return null},
$S:0}
C.eYb.prototype={
$0(){A.Q(this.a,!1).H(null)
return null},
$S:0}
C.eYc.prototype={
$2(d,e){var x,w,v,u,t,s=null,r=this.a,q=this.b[e],p=A.p(d).ax,o=p.CW
p=o==null?p.y:o
o=y.a
x=A.b([A.u(A.e(q.b.ghP(),s,s,!1),s,!1,!1,s,!1,s,!1,s,!1,!1,!1,!0,1,s,!1,!1,!1,14,s,s,!1,"")],o)
w=q.as
if(w!=null){new A.T(Date.now(),0,!1).bW()
w=new A.m8(w,"Etc/UTC").gf_().a
x.push(A.u(B.m.fi(B.h.m(w.gaD()),2,"0")+"/"+B.m.fi(B.h.m(w.ga3()),2,"0")+"/"+w.gU()+" "+B.m.fi(B.h.m(w.gbx()),2,"0")+":"+B.m.fi(B.h.m(w.gc1()),2,"0"),s,!1,!1,s,!1,s,!1,s,!1,!1,!1,!0,0.6,s,!1,!1,!1,12,s,s,!1,""))}x=A.b([A.R(x,B.f,s,B.bl,B.i,0,s,s)],o)
if(C.jqR(q)!=null){w=A.p(d).ax
v=w.cx
w=A.bG(B.ik,s,s,v==null?w.z:v,s,s,s,s,s,s,s,14,s,s)
v=C.jqR(q)
v.toString
B.d.J(x,A.b([B.WH,A.R(A.b([w,B.hd,new A.d2(1,B.aS,A.u(v,s,!1,!1,s,!1,s,!1,s,!1,!1,!1,!0,0.7,s,!1,!1,!1,12,s,s,!1,""),s)],o),B.f,s,B.c,B.P,0,s,s)],o))}if(C.jqQ(q)!=null){w=A.p(d).ax
v=w.cx
w=A.bG(B.l3,s,s,v==null?w.z:v,s,s,s,s,s,s,s,14,s,s)
v=C.jqQ(q)
v.toString
B.d.J(x,A.b([B.he,A.R(A.b([w,B.hd,new A.d2(1,B.aS,A.u(v,s,!1,!1,s,!1,s,!1,s,!1,!1,!1,!0,0.7,s,!1,!1,!1,12,s,s,!1,""),s)],o),B.f,s,B.c,B.P,0,s,s)],o))}w=q.d
if(w!=null){v=q.c
u=v==null
t=u?s:A.e(v.ghP(),s,s,!1)
v=u?s:B.ec[B.h.al(v.gn_(),23)]
u=A.e(w.ghP(),s,s,!1)
x.push(r.bI3(B.ec[B.h.al(w.gn_(),23)],u,v,t))}w=q.f
if(w!=null){v=q.e
u=v==null
t=u?s:A.e(v.ghP(),s,s,!1)
v=u?s:B.ec[B.h.al(v.gn_(),23)]
u=A.e(w.ghP(),s,s,!1)
x.push(r.bI3(B.ec[B.h.al(w.gn_(),23)],u,v,t))}x.push(B.he)
r=A.p(d).ax
w=r.cx
r=A.bG(B.nG,s,s,w==null?r.z:w,s,s,s,s,s,s,s,14,s,s)
w=q.x
x.push(A.R(A.b([r,B.hd,new A.d2(1,B.aS,A.u(w.length!==0?w:A.e(q.r.ghP(),s,s,!0),B.f5,!1,!1,s,!1,s,!1,s,!1,!1,!1,!0,0.7,s,!1,!1,!1,12,s,s,!1,""),s)],o),B.f,s,B.cP,B.i,0,s,s))
return A.a2(!0,B.q,s,s,B.H,s,s,new A.D(B.ny,A.H(x,B.a2,s,B.c,B.i,s,B.o),s),p,0,"",!1,s,s,B.c,!1,s,B.eW,!1,!0,s,s,s,s,!1,s,s,0.55,s,s,s)},
$S:17};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.ce5,A.r)
w(A.aK,[C.eYa,C.eYb])
x(C.eYc,A.bN)})()
A.aw(b.typeUniverse,JSON.parse('{"ce5":{"r":[],"h":[]}}'))
var y={a:A.t("C<h>")}};
(a=>{a["P6063xu8csuYjUhRDawrYI8TU6s="]=a.current})($__dart_deferred_initializers__);