((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={
kVT(){var x,w,v=A.o(y.e,y.y)
$.d8().b.k1.A(0,new C.iMT(v,$.C().a.y1.ghr()))
x=v.$ti.j("a8<2>")
w=A.Q(new A.a8(v,x),x.j("V.E"))
B.d.aP(w,new C.iMU())
return w},
kS0(d,e){if(e<=0)return 0.09
return 0.09+B.m.aT(d/e,0,1)*0.8200000000000001},
k97(d){var x,w,v,u,t,s,r,q
if(d.length===0)return B.y1
x=A.b([],y.h)
for(w=d.length,v=0;u=d.length,v<u;d.length===w||(0,A.a9)(d),++v){t=d[v]
s=u===0?0:B.d.gae(d).b
x.push(C.kS0(t.b,s))}for(w=x.length,r=1;r<w;++r){u=x[r]
q=x[r-1]
if(u-q<0.2)x[r]=q+0.2}return x},
lBk(d,e){var x,w,v,u,t,s,r,q,p,o
if(e.length===0||d<=0)return 0
x=C.k97(e)
for(w=e.length,v=0,u=0,t=0;t<w;++t,v=s){s=e[t].b
if(d<=s){r=s-v
q=r<=0?1:(d-v)/r
return u+q*(x[t]-u)}u=x[t]}p=B.d.gae(e).b
o=p<=0?1:B.m.aT((d-p)/p,0,1)
return u+o*(1-u)},
akk:function akk(d,e){this.a=d
this.b=e},
iMT:function iMT(d,e){this.a=d
this.b=e},
iMU:function iMU(){},
awH:function awH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h0c:function h0c(d){this.a=d},
h0d:function h0d(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
h0b:function h0b(){}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[584],C)
D=c[1227]
C.akk.prototype={}
C.awH.prototype={
k(d){var x,w,v,u,t,s,r,q=A.r(d),p=C.kVT()
if(p.length===0)return B.bl
x=this.c
w=x/1048576
v=$.C().a.y1.ghr()
u=B.d.ma(p,new C.h0c(v))
t=C.lBk(w,p)
s=$.d8().b.k1.h(0,v)
if(s==null)s=0
r=u>=0&&s>0&&w>s
return A.iA(new C.h0d(this,p,u,q,t,r,s>0?A.ayp(x,2)+" / "+A.ayp(s*1024*1024,0):A.d("fileStorageLimitNotConfigured",null,null,!0)))},
cOA(d,e,f,g,h,i,j){var x,w,v,u,t,s=null,r=d.ax
if(this.e)x=r.k2
else{x=r.CW
if(x==null)x=r.y}x=A.i9(0,A.YW(s,x,!0),0)
w=j?h:i
w=A.b([x,new A.aS(B.aD,s,s,A.bdc(B.q,A.YW(s,r.y,!0),1,w),s)],y.u)
if(j)w.push(A.o1(0,A.at(s,s,B.p,B.a0C,s,s,s,s,s,s,s,s,s,(i-h)*e),s,s,h*e,0,s))
for(r=r.k3,x=this.d,v=0;v<f.length;++v){u=f[v]
t=v===g||x?1:0
w.push(new A.aFQ(u*e-1,0,s,0,s,s,new A.adw(A.at(s,s,B.p,r.L(0.35),s,s,s,s,s,s,s,s,s,2),t,B.ap,B.P,s,s),s))}return new A.n(s,10,new A.bC(B.av,s,B.ak,B.R,w,s),s)},
dHN(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n=null
if(this.d){x=y.u
w=A.b([],x)
for(v=d.ax.y,u=0;u<g.length;++u){t=f[u]
s=g[u]
r=u===h
q=this.dH7(s.a)
p=r?v:n
o=r?1:0.65
w.push(new A.aFQ(t*e-20,0,n,n,n,n,A.G(A.b([q,new A.n(n,5,n,n),new A.k2(o,10,!1,!1,!1,!r,!1,""+s.b+" MB",n,p,n,!1,n,n,!1,!1,!1,"",!1,!1,!1,n,n)],x),B.h,n,B.c,B.M,n,B.f),n))}x=new A.F(B.eb,new A.n(n,42,new A.bC(B.av,n,B.ak,B.p,w,n),n),D.eiS)}else x=D.e86
return A.ZC(B.bg,A.kQ(x,B.P,A.mm(),n,B.db,B.eH,new C.h0b()),B.R,B.c0,D.bVf,n)},
dH7(d){var x,w=null
switch(d.a){case 5:return new A.aoA(9,w,w)
case 4:return new A.aeh(9,w)
case 1:return new A.aFT(9,w)
default:x=$.rR().h(0,d)
return A.u(A.d(x==null?"":x,w,w,!0),w,!1,!1,w,!1,w,!1,w,!1,!1,!0,!1,1,w,!1,!1,!1,10,w,w,!1,"")}}}
var z=a.updateTypes(["z(akk,akk)","D(akk)"])
C.iMT.prototype={
$2(d,e){var x,w,v,u
if(e<=0)return
x=this.a
w=x.h(0,e)
v=!0
if(w!=null){u=this.b
if(d!==u){v=w.a
if(v!==u){u=B.dr.h(0,d)
if(u==null)u=1
v=B.dr.h(0,v)
v=u<(v==null?1:v)}else v=!1}}if(v)x.i(0,e,new C.akk(d,e))},
$S:3423}
C.iMU.prototype={
$2(d,e){return B.i.aj(d.b,e.b)},
$S:z+0}
C.h0c.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.h0d.prototype={
$2(d,e){var x,w,v,u=this,t=null,s=e.b,r=u.b,q=C.k97(r),p=u.c,o=p>=0?q[p]:0,n=u.a,m=u.d,l=u.f,k=n.cOA(m,s,q,p,o,u.e,l),j=y.u,i=A.b([],j)
if(n.r&&l){l=m.ax
x=l.CW
w=x==null
v=w?l.y:x
if(w)x=l.y
i.push(A.a4(t,t,0.3,t,t,A.G(A.b([A.a4(t,t,0.3,new A.jH(B.aa,B.aa,new A.cO(l.k2,1,B.aL,-1),B.aa),t,A.U(A.b([new A.ai(B.i0,13,!1,1,!1,!1,!1,B.a0C,t),B.fH,new A.cW(1,B.aN,A.u(A.d("fileStorageOverLimitNote",t,t,!1),t,!1,!1,t,!1,t,!1,t,!1,!1,!1,!0,1,t,!1,!1,!1,11,t,t,!1,""),t)],j),B.h,t,B.c,B.j,0,t,t,B.f),B.p,x,t,0,!1,t,t,t,t,t,!1,t,t,B.uC,0,t,!1,!1,!1,t),k],j),B.bV,t,B.c,B.M,t,B.f),B.b7,v,t,0,!1,t,t,t,t,t,!1,t,t,t,10,t,!1,!1,!1,t))}else i.push(A.fP(A.c6(6),k,B.b7))
i.push(n.dHN(m,s,q,r,p))
i.push(A.ZC(B.bg,A.kQ(n.d&&!n.f?D.e87:new A.F(B.eb,A.aX(A.u(u.r,t,!1,!1,t,!1,t,!0,t,!1,!1,!0,!1,1,t,!1,!1,!1,13,t,t,!1,""),t,t),D.eiw),D.bV6,A.mm(),t,B.ap,B.ap,A.u5()),B.R,B.c0,B.P,t))
return A.G(i,B.bV,t,B.c,B.M,t,B.f)},
$S:256}
C.h0b.prototype={
$2(d,e){var x=y.A
return new A.eI(e,!1,A.lq(d,new A.bk(e,new A.bZ(D.dSq,B.O,x),x.j("bk<c1.T>")),null,!0),null)},
$S:116};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.akk,A.ap)
w(A.bx,[C.iMT,C.iMU,C.h0d,C.h0b])
x(C.awH,A.p)
x(C.h0c,A.aG)})()
A.au(b.typeUniverse,JSON.parse('{"awH":{"p":[],"f":[]}}'))
var y={u:A.t("B<f>"),h:A.t("B<al>"),y:A.t("akk"),A:A.t("bZ<N>"),q:A.t("bo<m>"),e:A.t("z")};(function constants(){D.bV6=new A.bs(16e4)
D.bVf=new A.bs(24e4)
D.dSq=new A.N(0,-0.1)
D.eip=new A.bo("no-tags",y.q)
D.e86=new A.n(1/0,null,null,D.eip)
D.eig=new A.bo("usage-text-hidden",y.q)
D.e87=new A.n(1/0,null,null,D.eig)
D.eiw=new A.bo("usage-text-shown",y.q)
D.eiS=new A.bo("tags",y.q)})()};
(a=>{a["A5Y8D8sIKxfZQmwdI1yxUt7z/oI="]=a.current})($__dart_deferred_initializers__);