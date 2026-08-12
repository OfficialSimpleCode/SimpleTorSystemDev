((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={
kkM(){var x,w,v=A.q(y.e,y.y)
$.dc().b.fy.v(0,new C.imk(v,$.B().a.x1.ghV()))
x=v.$ti.j("aa<2>")
w=A.U(new A.aa(v,x),x.j("X.E"))
B.d.aU(w,new C.iml())
return w},
khp(d,e){if(e<=0)return 0.09
return 0.09+B.k.aX(d/e,0,1)*0.8200000000000001},
jCQ(d){var x,w,v,u,t,s,r,q
if(d.length===0)return B.xa
x=A.b([],y.h)
for(w=d.length,v=0;u=d.length,v<u;d.length===w||(0,A.aj)(d),++v){t=d[v]
s=u===0?0:B.d.gad(d).b
x.push(C.khp(t.b,s))}for(w=x.length,r=1;r<w;++r){u=x[r]
q=x[r-1]
if(u-q<0.2)x[r]=q+0.2}return x},
kZI(d,e){var x,w,v,u,t,s,r,q,p,o
if(e.length===0||d<=0)return 0
x=C.jCQ(e)
for(w=e.length,v=0,u=0,t=0;t<w;++t,v=s){s=e[t].b
if(d<=s){r=s-v
q=r<=0?1:(d-v)/r
return u+q*(x[t]-u)}u=x[t]}p=B.d.gad(e).b
o=p<=0?1:B.k.aX((d-p)/p,0,1)
return u+o*(1-u)},
aii:function aii(d,e){this.a=d
this.b=e},
imk:function imk(d,e){this.a=d
this.b=e},
iml:function iml(){},
aum:function aum(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fH7:function fH7(d){this.a=d},
fH8:function fH8(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fH6:function fH6(){}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[523],C)
D=c[1095]
C.aii.prototype={}
C.aum.prototype={
l(d){var x,w,v,u,t,s,r,q=A.p(d),p=C.kkM()
if(p.length===0)return B.cb
x=this.c
w=x/1048576
v=$.B().a.x1.ghV()
u=B.d.mL(p,new C.fH7(v))
t=C.kZI(w,p)
s=$.dc().b.fy.h(0,v)
if(s==null)s=0
r=u>=0&&s>0&&w>s
return A.j0(new C.fH8(this,p,u,q,t,r,s>0?A.aHq(x,2)+" / "+A.aHq(s*1024*1024,0):A.e("fileStorageLimitNotConfigured",null,null,!0)))},
cFe(d,e,f,g,h,i,j){var x,w,v,u,t,s=null,r=d.ax
if(this.e)x=r.k2
else{x=r.CW
if(x==null)x=r.y}x=A.jr(0,new A.rG(x,s,s),0)
w=j?h:i
w=A.b([x,new A.aL(B.aE,s,s,A.eqA(B.q,new A.rG(r.y,s,s),1,w),s)],y.u)
if(j)w.push(A.ng(0,A.as(s,s,B.p,B.Zb,s,s,s,s,s,s,s,s,s,(i-h)*e),s,s,h*e,0,s))
for(r=r.k3,x=this.d,v=0;v<f.length;++v){u=f[v]
t=v===g||x?1:0
w.push(new A.aQm(u*e-1,0,s,0,s,s,new A.ajL(A.as(s,s,B.p,r.a0(0.35),s,s,s,s,s,s,s,s,s,2),t,B.am,B.L,s,s),s))}return new A.n(s,10,new A.bO(B.ay,s,B.al,B.U,w,s),s)},
dvE(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n=null
if(this.d){x=y.u
w=A.b([],x)
for(v=d.ax.y,u=0;u<g.length;++u){t=f[u]
s=g[u]
r=u===h
q=this.duW(s.a)
p=r?v:n
o=r?1:0.65
w.push(new A.aQm(t*e-20,0,n,n,n,n,A.H(A.b([q,new A.n(n,5,n,n),new A.lI(o,10,!1,!1,!1,!r,!1,""+s.b+" MB",n,p,n,!1,n,n,!1,!1,!1,"",!1,!1,!1,n,n)],x),B.f,n,B.c,B.P,n,B.o),n))}x=new A.D(B.eI,new A.n(n,42,new A.bO(B.ay,n,B.al,B.p,w,n),n),D.eaP)}else x=D.e0k
return A.ZC(B.bo,A.lr(x,B.L,A.mi(),n,B.dl,B.eS,new C.fH6()),B.ch,D.bQe,n)},
duW(d){var x,w=null
switch(d.a){case 5:return new A.aQE(9,w,w)
case 4:return new A.agz(9,w)
case 1:return new A.aQq(9,w)
default:x=$.rz().h(0,d)
return A.u(A.e(x==null?"":x,w,w,!0),w,!1,!1,w,!1,w,!1,w,!1,!1,!0,!1,1,w,!1,!1,!1,10,w,w,!1,"")}}}
var z=a.updateTypes(["A(aii,aii)","E(aii)"])
C.imk.prototype={
$2(d,e){var x,w,v,u
if(e<=0)return
x=this.a
w=x.h(0,e)
v=!0
if(w!=null){u=this.b
if(d!==u){v=w.a
if(v!==u){u=B.dP.h(0,d)
if(u==null)u=1
v=B.dP.h(0,v)
v=u<(v==null?1:v)}else v=!1}}if(v)x.i(0,e,new C.aii(d,e))},
$S:3141}
C.iml.prototype={
$2(d,e){return B.h.aw(d.b,e.b)},
$S:z+0}
C.fH7.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fH8.prototype={
$2(d,e){var x,w,v,u=this,t=null,s=e.b,r=u.b,q=C.jCQ(r),p=u.c,o=p>=0?q[p]:0,n=u.a,m=u.d,l=u.f,k=n.cFe(m,s,q,p,o,u.e,l),j=y.u,i=A.b([],j)
if(n.r&&l){l=m.ax
x=l.CW
w=x==null
v=w?l.y:x
if(w)x=l.y
i.push(A.a3(t,t,0.3,t,t,A.H(A.b([A.a3(t,t,0.3,new A.jo(B.ac,B.ac,new A.cO(l.k2,1,B.aN,-1),B.ac),t,A.R(A.b([new A.ae(B.ik,13,!1,1,!1,!1,!1,B.Zb,t),B.hd,new A.d2(1,B.aS,A.u(A.e("fileStorageOverLimitNote",t,t,!1),t,!1,!1,t,!1,t,!1,t,!1,!1,!1,!0,1,t,!1,!1,!1,11,t,t,!1,""),t)],j),B.f,t,B.c,B.i,0,t,t),B.p,x,t,0,!1,t,t,t,t,t,!1,t,t,B.wx,0,t,!1,!1,!1,t),k],j),B.bR,t,B.c,B.P,t,B.o),B.b8,v,t,0,!1,t,t,t,t,t,!1,t,t,t,10,t,!1,!1,!1,t))}else i.push(A.fz(A.c6(6),k,B.b8))
i.push(n.dvE(m,s,q,r,p))
i.push(A.ZC(B.bo,A.lr(n.d&&!n.f?D.e0l:new A.D(B.eI,A.aS(A.u(u.r,t,!1,!1,t,!1,t,!0,t,!1,!1,!0,!1,1,t,!1,!1,!1,13,t,t,!1,""),t,t),D.eay),D.bQ6,A.mi(),t,B.am,B.am,A.tf()),B.ch,B.L,t))
return A.H(i,B.bR,t,B.c,B.P,t,B.o)},
$S:357}
C.fH6.prototype={
$2(d,e){var x=y.A
return new A.eV(e,!1,A.lB(d,new A.bl(e,new A.bW(D.dLX,B.N,x),x.j("bl<bX.T>")),null,!0),null)},
$S:158};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.aii,A.ap)
w(A.bN,[C.imk,C.iml,C.fH8,C.fH6])
x(C.aum,A.r)
x(C.fH7,A.aJ)})()
A.aw(b.typeUniverse,JSON.parse('{"aum":{"r":[],"h":[]}}'))
var y={u:A.t("C<h>"),h:A.t("C<am>"),y:A.t("aii"),A:A.t("bW<N>"),q:A.t("bK<o>"),e:A.t("A")};(function constants(){D.bQ6=new A.by(16e4)
D.bQe=new A.by(24e4)
D.dLX=new A.N(0,-0.1)
D.eas=new A.bK("no-tags",y.q)
D.e0k=new A.n(1/0,null,null,D.eas)
D.eaj=new A.bK("usage-text-hidden",y.q)
D.e0l=new A.n(1/0,null,null,D.eaj)
D.eay=new A.bK("usage-text-shown",y.q)
D.eaP=new A.bK("tags",y.q)})()};
(a=>{a["bPJ6oadEsX4Tuk558AbAnF1oGCw="]=a.current})($__dart_deferred_initializers__);