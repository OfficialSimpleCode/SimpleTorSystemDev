((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
jRN(d,e,f,g,h,i){return new B.bKU(i,h,d,f,e,g,null)},
bKU:function bKU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dsm:function dsm(d){this.a=d},
d8a:function d8a(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[681],B)
D=c[1164]
B.bKU.prototype={
l(d){return new A.m(null,this.r,A.j_(new B.dsm(this)),null)}}
B.d8a.prototype={
b5(d,e){var x,w,v,u,t,s=this
if(J.c8(s.b))return
x=e.b
w=x/2
v=x*0.42
$.b9()
u=A.bI()
u.b=C.bB
u.d=C.hO
x=s.d
u.r=x.gk(x)
t=A.bI()
t.b=C.bB
t.d=C.hO
t.r=s.e.gk(0)
if(s.c!=null)s.din(u,d,w,t,v,e)
else s.dio(u,d,w,v,e)},
dio(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this.f
if(k==null)k=J.aw(this.b)
x=h.a
w=x/k
for(v=this.b,u=J.a5(v),t=w/2,s=w-2,r=e.a,q=g-2,p=0;p<u.gE(v);++p){o=u.h(v,p)
n=o>0?2+o*q:2
m=A.i0(A.atG(new A.N(x-(u.gE(v)-p)*w+t,f),n*2,s),new A.aW(2,2))
l=d.cZ()
r.drawRRect(A.oE(m),l)
l.delete()}},
din(d,e,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.doL(m.b,60),k=J.a5(l),j=k.gE(l),i=a3.a,h=i/(5*j),g=3*h,f=m.c
f.toString
x=i*f
for(i=e.a,w=g+2*h,v=g/2,u=a2-2,t=0;t<j;++t){s=k.h(l,t)
r=s>0?2+s*u:2
q=t*w+v
p=A.i0(A.atG(new A.N(q,a0),r*2,g),new A.aW(2,2))
o=(q<=x?d:a1).cZ()
i.drawRRect(A.oE(p),o)
o.delete()}if(f>0&&f<1){$.b9()
n=A.bI()
k=m.d
n.r=k.gk(k)
n.c=2
e.it(new A.N(x,4),new A.N(x,a3.b-4),n)}},
doL(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=J.a5(d)
if(l.gal(d))return A.b([],y.d)
if(l.gE(d)===e)return d
x=A.b([],y.d)
if(l.gE(d)<e){w=l.gE(d)/e
for(v=0;v<e;++v){u=v*w
t=C.k.cq(u)
s=Math.min(t+1,l.gE(d)-1)
r=u-t
x.push(l.h(d,t)*(1-r)+l.h(d,s)*r)}}else{w=l.gE(d)/e
for(v=0;v<e;){q=C.k.cq(v*w);++v
p=Math.min(C.k.cq(v*w),l.gE(d))
for(o=q,n=0,m=0;o<p;++o){n+=l.h(d,o);++m}x.push(m>0?n/m:0)}}return x},
hN(d){return!0}}
var z=a.updateTypes([])
B.dsm.prototype={
$2(d,e){var x=null,w=this.a,v=w.e,u=w.f
if(u==null)u=v.a2(0.3)
return A.jG(x,x,x,new B.d8a(w.c,w.d,v,u,w.w,!0,x),new A.aC(e.b,w.r))},
$S:2551};(function inheritance(){var x=a.inherit
x(B.bKU,A.r)
x(B.dsm,A.bF)
x(B.d8a,A.agb)})()
A.av(b.typeUniverse,JSON.parse('{"bKU":{"r":[],"f":[]},"d8a":{"c1":[]}}'))
var y={d:A.t("C<ao>")};(function constants(){D.c3N=new A.ag(58492,"MaterialIcons",null,!1)})()};
(a=>{a["W9Luyhr0PvlD+riXidImEjEEG08="]=a.current})($__dart_deferred_initializers__);