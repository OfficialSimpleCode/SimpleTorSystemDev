((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
k2Y(d,e,f,g,h){return new B.bgx(e,h,d,f,g,null)},
bgx:function bgx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cXp:function cXp(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cj8:function cj8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fdQ:function fdQ(d){this.a=d},
fdP:function fdP(d){this.a=d},
ctE:function ctE(d,e,f){this.c=d
this.d=e
this.a=f}}
A=c[0]
C=c[2]
B=a.updateHolder(c[163],B)
B.bgx.prototype={
P(){var x=$.a_()
return new B.cXp(new A.K(null,x,y.h),new A.K(!1,x,y.B))},
gfw(){return this.c}}
B.cXp.prototype={
a5(){var x,w=this
w.a9()
x=w.a.f
if(x!=null)w.d.sk(0,new A.pM(x,new A.T(Date.now(),0,!1).bW()))
else w.ayf()},
u(){var x=this.d,w=$.a_()
x.Z$=w
x.V$=0
x=this.e
x.Z$=w
x.V$=0
this.ao()},
ayf(){var x=0,w=A.m(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$ayf=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=$.c4()
p=s.a
x=7
return A.c(q.Fl(p.c,p.d),$async$ayf)
case 7:r=e
if(s.c==null){x=1
break}if(r==null){s.e.sk(0,!0)
x=1
break}s.d.sk(0,r)
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}s.e.sk(0,!0)
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$ayf,w)},
l(d){var x,w,v,u=null,t=$.B().a.k4,s=$.ag?$.dW.n():u,r=A.p(d)
if(t.length!==0){x=A.e("productOrderTermsOfBusiness",u,u,!1)
x=A.a1(x,"BUSINESSNAME",t)}else x=A.e("productOrderTerms",u,u,!0)
w=this.a
v=w.e
return A.as(u,A.H(A.b([new A.n(u,16,u,u),A.u(x,u,v,!1,u,!1,u,!1,u,!1,!1,!0,!1,1,u,!1,!1,!1,17,u,u,!1,""),new A.n(u,14,u,u),new B.cj8(this.d,this.e,v,w.r,u),new A.n(u,30,u,u)],y.u),C.f,u,C.c,C.P,u,C.o),C.p,r.ax.k2,u,u,u,u,u,u,new A.z(24,0,24,0),u,u,s)}}
B.cj8.prototype={
l(d){return new A.w(this.d,new B.fdQ(this),null,null,y.m)},
bEd(d){var x=null
return new A.D(new A.z(0,40,0,40),A.u(d,C.B,this.e,!1,x,!1,x,!1,x,!1,!1,!0,!1,0.7,x,!1,!1,!1,14,x,x,!1,""),x)}}
B.ctE.prototype={
l(d){var x,w=null,v=this.d,u=A.ja0(v==null?$.B().a.to.p1:v)
if(u==null)return new A.n(w,w,w,w)
x=this.c
return A.H(A.b([new A.n(w,16,w,w),new A.de(!1,0.5,0.5,w,w,w),new A.n(w,14,w,w),A.u(A.e("expectedHandoverTime",w,w,!1),w,x,!1,w,!1,w,!1,w,!1,!1,!0,!1,1,w,!1,!1,!1,15,w,w,!1,""),new A.n(w,6,w,w),A.u(u,w,x,!1,w,!1,w,!1,w,!1,!1,!0,!1,0.7,w,!1,!1,!1,14,w,w,!1,"")],y.u),C.a2,w,C.c,C.i,w,C.o)}}
var z=a.updateTypes([])
B.fdQ.prototype={
$3(d,e,f){var x,w=null
if(e)return this.a.bEd(A.e("thereIsProblem",w,w,!0))
x=this.a
return new A.w(x.c,new B.fdP(x),w,w,y.o)},
$S:29}
B.fdP.prototype={
$3(d,e,f){var x,w,v,u=null
if(e==null)return new A.D(new A.z(0,40,0,40),A.pc(u,u,u,u,u),u)
if(C.m.aA(e.c).length===0)return this.a.bEd(A.e("noProductOrderTermsVersions",u,u,!1))
x=this.a
w=$.ag?1/0:$.b8.n()*0.55
v=x.e
return new A.e2(new A.b_(0,1/0,0,w),A.dR(A.H(A.b([A.aNX(e.c,v,u,u,u,!0,15,u),new B.ctE(v,x.f,u)],y.u),C.a2,u,C.c,C.i,u,C.o),u,C.M,u,u,u,u,C.R),u)},
$S:1118};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bgx,A.V)
x(B.cXp,A.Y)
w(A.r,[B.cj8,B.ctE])
w(A.aJ,[B.fdQ,B.fdP])})()
A.aw(b.typeUniverse,JSON.parse('{"bgx":{"V":[],"h":[]},"cXp":{"Y":["bgx"]},"cj8":{"r":[],"h":[]},"ctE":{"r":[],"h":[]}}'))
var y={u:A.t("C<h>"),m:A.t("w<E>"),o:A.t("w<pM?>"),B:A.t("K<E>"),h:A.t("K<pM?>"),v:A.t("~")}};
(a=>{a["OmDIYIFPoM4hS+R73A/xd95mmcc="]=a.current})($__dart_deferred_initializers__);