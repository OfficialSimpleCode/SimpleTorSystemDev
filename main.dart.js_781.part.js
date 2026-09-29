((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
k6G(d,e,f,g,h){return new B.bhb(e,h,d,f,g,null)},
bhb:function bhb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cYz:function cYz(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ckR:function ckR(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ffM:function ffM(d){this.a=d},
ffL:function ffL(d){this.a=d},
cvq:function cvq(d,e,f){this.c=d
this.d=e
this.a=f}}
A=c[0]
C=c[2]
B=a.updateHolder(c[166],B)
B.bhb.prototype={
P(){var x=$.a_()
return new B.cYz(new A.J(null,x,y.h),new A.J(!1,x,y.B))},
gf5(){return this.c}}
B.cYz.prototype={
a5(){var x,w=this
w.aa()
x=w.a.f
if(x!=null)w.d.sk(0,new A.pN(x,new A.V(Date.now(),0,!1).bx()))
else w.ay9()},
u(){var x=this.d,w=$.a_()
x.S$=w
x.Y$=0
x=this.e
x.S$=w
x.Y$=0
this.an()},
ay9(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$ay9=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=$.c3()
p=s.a
x=7
return A.c(q.Fa(p.c,p.d),$async$ay9)
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
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$ay9,w)},
l(d){var x,w,v,u=null,t=$.B().a.k4,s=$.af?$.dW.n():u,r=A.q(d)
if(t.length!==0){x=A.d("productOrderTermsOfBusiness",u,u,!1)
x=A.a1(x,"BUSINESSNAME",t)}else x=A.d("productOrderTerms",u,u,!0)
w=this.a
v=w.e
return A.as(u,A.H(A.b([new A.m(u,16,u,u),A.u(x,u,v,!1,u,!1,u,!1,u,!1,!1,!0,!1,1,u,!1,!1,!1,17,u,u,!1,""),new A.m(u,14,u,u),new B.ckR(this.d,this.e,v,w.r,u),new A.m(u,30,u,u)],y.u),C.f,u,C.c,C.O,u,C.o),C.p,r.ax.k2,u,u,u,u,u,u,new A.z(24,0,24,0),u,u,s)}}
B.ckR.prototype={
l(d){return new A.w(this.d,new B.ffM(this),null,null,y.m)},
bEP(d){var x=null
return new A.D(new A.z(0,40,0,40),A.u(d,C.B,this.e,!1,x,!1,x,!1,x,!1,!1,!0,!1,0.7,x,!1,!1,!1,14,x,x,!1,""),x)}}
B.cvq.prototype={
l(d){var x,w=null,v=this.d,u=A.jcU(v==null?$.B().a.to.p2:v)
if(u==null)return new A.m(w,w,w,w)
x=this.c
return A.H(A.b([new A.m(w,16,w,w),new A.di(!1,0.5,0.5,w,w,w),new A.m(w,14,w,w),A.u(A.d("expectedHandoverTime",w,w,!1),w,x,!1,w,!1,w,!1,w,!1,!1,!0,!1,1,w,!1,!1,!1,15,w,w,!1,""),new A.m(w,6,w,w),A.u(u,w,x,!1,w,!1,w,!1,w,!1,!1,!0,!1,0.7,w,!1,!1,!1,14,w,w,!1,"")],y.u),C.a2,w,C.c,C.i,w,C.o)}}
var z=a.updateTypes([])
B.ffM.prototype={
$3(d,e,f){var x,w=null
if(e)return this.a.bEP(A.d("thereIsProblem",w,w,!0))
x=this.a
return new A.w(x.c,new B.ffL(x),w,w,y.o)},
$S:29}
B.ffL.prototype={
$3(d,e,f){var x,w,v,u=null
if(e==null)return new A.D(new A.z(0,40,0,40),A.oN(u,u,u,u,u),u)
if(C.l.aq(e.c).length===0)return this.a.bEP(A.d("noProductOrderTermsVersions",u,u,!1))
x=this.a
w=$.af?1/0:$.b6.n()*0.55
v=x.e
return new A.dU(new A.b_(0,1/0,0,w),A.dO(A.H(A.b([A.aO8(e.c,v,u,u,u,!0,15,u),new B.cvq(v,x.f,u)],y.u),C.a2,u,C.c,C.i,u,C.o),u,C.L,u,u,u,u,C.S),u)},
$S:752};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bhb,A.W)
x(B.cYz,A.Y)
w(A.r,[B.ckR,B.cvq])
w(A.aF,[B.ffM,B.ffL])})()
A.av(b.typeUniverse,JSON.parse('{"bhb":{"W":[],"f":[]},"cYz":{"Y":["bhb"]},"ckR":{"r":[],"f":[]},"cvq":{"r":[],"f":[]}}'))
var y={u:A.t("C<f>"),m:A.t("w<E>"),o:A.t("w<pN?>"),B:A.t("J<E>"),h:A.t("J<pN?>"),v:A.t("~")}};
(a=>{a["ONd6G76moTYs33eyxxuD8jJ1xkk="]=a.current})($__dart_deferred_initializers__);