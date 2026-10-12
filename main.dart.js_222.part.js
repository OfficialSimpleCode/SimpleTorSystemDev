((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={
koF(){var x,w,v=A.p(y.e,y.y)
$.cV().b.go.v(0,new C.io_(v,$.B().a.x1.ghy()))
x=v.$ti.j("aa<2>")
w=A.T(new A.aa(v,x),x.j("X.E"))
B.d.aU(w,new C.io0())
return w},
kl6(d,e){if(e<=0)return 0.09
return 0.09+B.k.aV(d/e,0,1)*0.8200000000000001},
jG2(d){var x,w,v,u,t,s,r,q
if(d.length===0)return B.xa
x=A.b([],y.h)
for(w=d.length,v=0;u=d.length,v<u;d.length===w||(0,A.ai)(d),++v){t=d[v]
s=u===0?0:B.d.gad(d).b
x.push(C.kl6(t.b,s))}for(w=x.length,r=1;r<w;++r){u=x[r]
q=x[r-1]
if(u-q<0.2)x[r]=q+0.2}return x},
l2S(d,e){var x,w,v,u,t,s,r,q,p,o
if(e.length===0||d<=0)return 0
x=C.jG2(e)
for(w=e.length,v=0,u=0,t=0;t<w;++t,v=s){s=e[t].b
if(d<=s){r=s-v
q=r<=0?1:(d-v)/r
return u+q*(x[t]-u)}u=x[t]}p=B.d.gad(e).b
o=p<=0?1:B.k.aV((d-p)/p,0,1)
return u+o*(1-u)},
aiv:function aiv(d,e){this.a=d
this.b=e},
io_:function io_(d,e){this.a=d
this.b=e},
io0:function io0(){},
aut:function aut(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fIY:function fIY(d){this.a=d},
fIZ:function fIZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fIX:function fIX(){}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[546],C)
D=c[1139]
C.aiv.prototype={}
C.aut.prototype={
l(d){var x,w,v,u,t,s,r,q=A.q(d),p=C.koF()
if(p.length===0)return B.cj
x=this.c
w=x/1048576
v=$.B().a.x1.ghy()
u=B.d.mh(p,new C.fIY(v))
t=C.l2S(w,p)
s=$.cV().b.go.h(0,v)
if(s==null)s=0
r=u>=0&&s>0&&w>s
return A.j_(new C.fIZ(this,p,u,q,t,r,s>0?A.aw9(x,2)+" / "+A.aw9(s*1024*1024,0):A.d("fileStorageLimitNotConfigured",null,null,!0)))},
cG4(d,e,f,g,h,i,j){var x,w,v,u,t,s=null,r=d.ax
if(this.e)x=r.k2
else{x=r.CW
if(x==null)x=r.y}x=A.jm(0,new A.rg(x,s,s),0)
w=j?h:i
w=A.b([x,new A.aN(B.aF,s,s,A.c3E(B.q,new A.rg(r.y,s,s),1,w),s)],y.u)
if(j)w.push(A.nk(0,A.as(s,s,B.p,B.ZA,s,s,s,s,s,s,s,s,s,(i-h)*e),s,s,h*e,0,s))
for(r=r.k3,x=this.d,v=0;v<f.length;++v){u=f[v]
t=v===g||x?1:0
w.push(new A.aDi(u*e-1,0,s,0,s,s,new A.ak0(A.as(s,s,B.p,r.a2(0.35),s,s,s,s,s,s,s,s,s,2),t,B.am,B.M,s,s),s))}return new A.m(s,10,new A.bM(B.ay,s,B.al,B.U,w,s),s)},
dwb(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n=null
if(this.d){x=y.u
w=A.b([],x)
for(v=d.ax.y,u=0;u<g.length;++u){t=f[u]
s=g[u]
r=u===h
q=this.dvw(s.a)
p=r?v:n
o=r?1:0.65
w.push(new A.aDi(t*e-20,0,n,n,n,n,A.H(A.b([q,new A.m(n,5,n,n),new A.l0(o,10,!1,!1,!1,!r,!1,""+s.b+" MB",n,p,n,!1,n,n,!1,!1,!1,"",!1,!1,!1,n,n)],x),B.f,n,B.c,B.O,n,B.o),n))}x=new A.D(B.et,new A.m(n,42,new A.bM(B.ay,n,B.al,B.p,w,n),n),D.ebM)}else x=D.e1j
return A.ZT(B.bn,A.lw(x,B.M,A.mn(),n,B.dn,B.f7,new C.fIX()),B.ce,D.bQP,n)},
dvw(d){var x,w=null
switch(d.a){case 5:return new A.aDr(9,w,w)
case 4:return new A.agM(9,w)
case 1:return new A.aQu(9,w)
default:x=$.rP().h(0,d)
return A.u(A.d(x==null?"":x,w,w,!0),w,!1,!1,w,!1,w,!1,w,!1,!1,!0,!1,1,w,!1,!1,!1,10,w,w,!1,"")}}}
var z=a.updateTypes(["A(aiv,aiv)","E(aiv)"])
C.io_.prototype={
$2(d,e){var x,w,v,u
if(e<=0)return
x=this.a
w=x.h(0,e)
v=!0
if(w!=null){u=this.b
if(d!==u){v=w.a
if(v!==u){u=B.dN.h(0,d)
if(u==null)u=1
v=B.dN.h(0,v)
v=u<(v==null?1:v)}else v=!1}}if(v)x.i(0,e,new C.aiv(d,e))},
$S:3204}
C.io0.prototype={
$2(d,e){return B.h.aw(d.b,e.b)},
$S:z+0}
C.fIY.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fIZ.prototype={
$2(d,e){var x,w,v,u=this,t=null,s=e.b,r=u.b,q=C.jG2(r),p=u.c,o=p>=0?q[p]:0,n=u.a,m=u.d,l=u.f,k=n.cG4(m,s,q,p,o,u.e,l),j=y.u,i=A.b([],j)
if(n.r&&l){l=m.ax
x=l.CW
w=x==null
v=w?l.y:x
if(w)x=l.y
i.push(A.a2(t,t,0.3,t,t,A.H(A.b([A.a2(t,t,0.3,new A.jr(B.ac,B.ac,new A.cO(l.k2,1,B.aM,-1),B.ac),t,A.S(A.b([new A.ad(B.hY,13,!1,1,!1,!1,!1,B.ZA,t),B.i9,new A.dc(1,B.aU,A.u(A.d("fileStorageOverLimitNote",t,t,!1),t,!1,!1,t,!1,t,!1,t,!1,!1,!1,!0,1,t,!1,!1,!1,11,t,t,!1,""),t)],j),B.f,t,B.c,B.i,0,t,t),B.p,x,t,0,!1,t,t,t,t,t,!1,t,t,B.ww,0,t,!1,!1,!1,t),k],j),B.bU,t,B.c,B.O,t,B.o),B.b7,v,t,0,!1,t,t,t,t,t,!1,t,t,t,10,t,!1,!1,!1,t))}else i.push(A.fu(A.c4(6),k,B.b7))
i.push(n.dwb(m,s,q,r,p))
i.push(A.ZT(B.bn,A.lw(n.d&&!n.f?D.e1k:new A.D(B.et,A.aT(A.u(u.r,t,!1,!1,t,!1,t,!0,t,!1,!1,!0,!1,1,t,!1,!1,!1,13,t,t,!1,""),t,t),D.ebv),D.bQG,A.mn(),t,B.am,B.am,A.ts()),B.ce,B.M,t))
return A.H(i,B.bU,t,B.c,B.O,t,B.o)},
$S:367}
C.fIX.prototype={
$2(d,e){var x=y.A
return new A.eW(e,!1,A.lH(d,new A.bl(e,new A.bY(D.dMS,B.P,x),x.j("bl<c_.T>")),null,!0),null)},
$S:155};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.aiv,A.ap)
w(A.bF,[C.io_,C.io0,C.fIZ,C.fIX])
x(C.aut,A.r)
x(C.fIY,A.aF)})()
A.av(b.typeUniverse,JSON.parse('{"aut":{"r":[],"f":[]}}'))
var y={u:A.t("C<f>"),h:A.t("C<ao>"),y:A.t("aiv"),A:A.t("bY<N>"),q:A.t("bB<n>"),e:A.t("A")};(function constants(){D.bQG=new A.bv(16e4)
D.bQP=new A.bv(24e4)
D.dMS=new A.N(0,-0.1)
D.ebp=new A.bB("no-tags",y.q)
D.e1j=new A.m(1/0,null,null,D.ebp)
D.ebg=new A.bB("usage-text-hidden",y.q)
D.e1k=new A.m(1/0,null,null,D.ebg)
D.ebv=new A.bB("usage-text-shown",y.q)
D.ebM=new A.bB("tags",y.q)})()};
(a=>{a["PtmbplPbhXzDV3e+YShcYYx0rcA="]=a.current})($__dart_deferred_initializers__);