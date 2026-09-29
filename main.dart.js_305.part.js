((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
j7X(d,e,f,g,h,i){return new B.bky(g,f,d,i,h,e)},
jyf(d,e,f){var x,w,v,u,t,s,r=d.a,q=e.a,p=r-q,o=d.b,n=e.b,m=o-n,l=f.a,k=q-l,j=f.b,i=n-j
r=(r+q)/2
o=(o+n)/2
l=(q+l)/2
j=(n+j)/2
x=Math.sqrt(p*p+m*m)
w=Math.sqrt(k*k+i*i)
v=w/(x+w)
if(isNaN(v))v=0
u=q-(l+(r-l)*v)
t=n-(j+(o-j)*v)
s=A.b([],y.R)
s.push(new B.aoJ(r+u,o+t,null))
s.push(new B.aoJ(l+u,j+t,null))
return s},
bky:function bky(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.x=h
_.a=i},
aEn:function aEn(){this.c=this.a=null},
d19:function d19(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.a=k},
atR:function atR(d,e,f,g,h,i,j,k,l,m){var _=this
_.I=d
_.ag=0
_.ac=!1
_.b2=_.ak=_.S=_.Y=_.c2=_.bo=_.ba=_.bc=_.aR=_.au=_.aM=_.aB=_.ar=_.am=$
_.cd=e
_.cI=f
_.ce=g
_.cj=h
_.ca=i
_.dq=j
_.cO=k
_.dy=l
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=m
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
foL:function foL(d){this.a=d},
cGL:function cGL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cJD:function cJD(){},
aoJ:function aoJ(d,e,f){this.a=d
this.b=e
this.c=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[694],B)
D=c[921]
B.bky.prototype={
P(){return new B.aEn()}}
B.aEn.prototype={
Yb(d){var x=this.c.gb8()
x.toString
return y.b.a(x).Yb(d)},
ab(d){var x,w=this.c.gb8()
if(w instanceof B.atR){x=w.ba
x===$&&A.a()
C.d.ab(x)
x=w.bo
x===$&&A.a()
C.d.ab(x)
x=w.c2
x===$&&A.a()
C.d.ab(x)
x=w.Y
x===$&&A.a()
C.d.ab(x)
w.azn()
w.b2=A.ec($.b9().w)
w.aF()}},
l(d){var x,w,v
A.q(d)
x=this.a
w=x.e
if(w==null)w=C.a5
v=x.f
return new B.d19(x.c,x.d,w,v,null,null,x.x,null)}}
B.d19.prototype={
bX(d){var x,w,v,u=this,t=null,s=u.f,r=A.cT(d,t,y.w).w,q=new A.aA3(A.p(y.S,y.y)),p=new B.atR(q,u.d,u.e,u.r,s,u.y,u.x,u.w,new A.d2(),A.c6(y.v))
p.bZ()
x=A.cgQ(t,t)
x.w=q
x.ch=p.gdto()
x.CW=p.gdtq()
x.cx=p.gdtm()
r=x.b=r.cx
x.at=C.ty
p.aM=x
w=A.cAd(t,t)
w.w=q
w.b=r
v=p.gcSu()
w.ch=v
p.ar=w
w=A.arB(t,t)
w.w=q
w.b=r
w.ch=v
p.aB=w
w=A.jT(t,-1,t)
w.ag=p.gdts()
p.am=w
q.b=x
x=$.b9()
q=A.bI()
w=p.ce
q.r=w.gk(w)
q.c=5
q.d=C.hO
q.b=C.bB
q.f=!0
p.au=q
q=A.bI()
q.r=s.gk(0)
q.b=C.bB
q.f=!0
p.aR=q
p.ac=p.cd===p.cI
p.ba=A.b([],y.D)
p.c2=A.b([],y.h)
p.bc=A.b([],y.R)
p.bo=A.b([],y.g)
p.Y=A.b([],y.p)
p.b2=A.ec(x.w)
p.azn()
return p},
c9(d,e){var x=this
e.secm(x.d)
e.sec0(x.e)
e.sep(0,x.f)
e.scsR(x.r)
e.seez(x.y)
e.seey(x.x)
e.seeC(x.w)}}
B.atR.prototype={
secm(d){var x=this
if(x.cd===d)return
x.cd=d
x.bIP()
x.aF()},
sec0(d){var x=this
if(x.cI===d)return
x.cI=d
x.bIP()
x.aF()},
scsR(d){var x,w=this
if(w.ce.q(0,d))return
w.ce=d
x=w.au
x===$&&A.a()
x.r=d.gk(d)
w.aF()},
sep(d,e){var x,w=this
if(w.cj.q(0,e))return
w.cj=e
x=w.aR
x===$&&A.a()
x.r=e.gk(0)
w.aF()},
seez(d){if(J.I(this.ca,d))return
this.ca=d},
seey(d){return},
seeC(d){return},
glR(){return!0},
dl(){var x,w=this,v=y.k,u=v.a(A.aA.prototype.gaP.call(w)).b<1/0?v.a(A.aA.prototype.gaP.call(w)).b:250
if(v.a(A.aA.prototype.gaP.call(w)).a>250)u=v.a(A.aA.prototype.gaP.call(w)).a
x=v.a(A.aA.prototype.gaP.call(w)).d<1/0?v.a(A.aA.prototype.gaP.call(w)).d:250
w.fy=new A.aC(u,v.a(A.aA.prototype.gaP.call(w)).c>250?v.a(A.aA.prototype.gaP.call(w)).c:x)},
dtp(d){this.bqf(d.b)},
cSv(d){},
dtr(d){this.bI7(0,d.b)},
dtn(d){var x=this.ca
if(x!=null)x.$0()},
dtt(d){var x=d.b,w=new B.aoJ(x.a,x.b,null),v=A.b([w],y.R)
x=this.ba
x===$&&A.a()
x.push(v)
this.cT5(w)
x=this.ca
if(x!=null)x.$0()},
lf(d){return!0},
rR(d,e){var x,w=this
if(y.Z.b(d)&&w.ag===0){w.ag=d.gez()
x=w.aM
x===$&&A.a()
x.kk(d)
x=w.ar
x===$&&A.a()
x.kk(d)
x=w.aB
x===$&&A.a()
x.kk(d)
x=w.am
x===$&&A.a()
x.kk(d)}else if(y.E.b(d)&&w.ag===d.gez())w.ag=0
else if(y.n.b(d))w.ag=0},
bqf(d){var x,w=this,v=A.b([],y.R),u=w.ba
u===$&&A.a()
u.push(v)
u=A.ec($.b9().w)
w.b2=u
x=w.Y
x===$&&A.a()
x.push(u)
w.azn()
w.bI7(0,d)},
bI7(d,e){var x,w,v,u=this,t=u.ba
t===$&&A.a()
if(t.length===0){u.bqf(e)
return}x=new B.aoJ(e.a,e.b,Date.now())
t=u.ba
w=t[t.length-1]
t=w.length
if((t!==0?u.buE(w[t-1],x):1)>0){if(!u.ac){v=u.brh(x)
if(v!=null)u.bv4(v)}w.push(x)
u.aF()}},
cT5(d){var x
this.azn()
x=this.bo
x===$&&A.a()
x.push(new A.N(d.a,d.b))
this.aF()},
brh(d){var x,w,v,u,t,s,r,q,p=this,o=p.bc
o===$&&A.a()
o.push(d)
o=p.bc
x=o.length
if(x>2){if(x===3)C.d.ds(o,0,o[0])
o=p.bc
w=o[1]
v=o[2]
o=p.buE(w,v)
x=v.c
x.toString
u=w.c
u.toString
t=o/(x-u)
if(x===u)t=0
o=p.S
o===$&&A.a()
t=0.2*t+0.8*o
s=Math.max(p.cI/(t+1),p.cd)
o=p.bc
x=p.ak
x===$&&A.a()
r=B.jyf(o[0],o[1],o[2])[1]
q=B.jyf(o[1],o[2],o[3])[0]
u=o[1]
o=o[2]
C.d.cG(p.bc,0)
p.S=t
p.ak=s
return new B.cGL(u,r,q,o,x,s)}return null},
bv4(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.e,a0=a2.f-d,a1=C.k.cq(a2.rY(0))*2
if(a1===0)a1=1
for(x=a2.a,w=x.a,v=a2.c,u=v.a,t=a2.b,s=t.a,r=a2.d,q=r.a,x=x.b,v=v.b,t=t.b,r=r.b,p=0;p<a1;++p){o=p/a1
n=o*o
m=n*o
l=1-o
k=l*l
j=k*l
i=3*k*o
h=3*l*n
g=j*w+i*u+h*s+m*q
f=j*x+i*v+h*t+m*r
e=Math.min(d+m*a0,this.cI)
h=this.c2
h===$&&A.a()
h.push(new B.cJD())
h=this.b2
h===$&&A.a()
i=new A.afr(new A.aj(g,f,g+e,f+e),0,180)
h.e.push(i)
h=h.d
if(h!=null)i.fb(h)}},
buE(d,e){return Math.sqrt(Math.pow(e.a-d.a,2)+Math.pow(e.b-d.b,2))},
Yb(d){return this.evy(d)},
evy(d){var x=0,w=A.l(y.I),v,u=this,t,s
var $async$Yb=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=u.ch.a
s.toString
y.o.a(s)
t=u.gM(0)
v=s.aNy(new A.aj(0,0,0+t.a,0+t.b),d)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$Yb,w)},
bIP(){var x,w=this
w.ac=w.cI===w.cd
x=w.bo
x===$&&A.a()
C.d.ab(x)
x=w.c2
x===$&&A.a()
C.d.ab(x)
x=w.Y
x===$&&A.a()
C.d.ab(x)
w.b2=A.ec($.b9().w)
w.dnj()
w.aF()},
dnj(){var x,w,v,u,t,s,r,q,p=this,o=p.ba
o===$&&A.a()
x=o.length
w=0
for(;w<o.length;o.length===x||(0,A.ai)(o),++w){v=o[w]
if(v.length>1)for(u=0;u<v.length;++u){t=v[u]
if(u===0){s=p.bc
s===$&&A.a()
C.d.ab(s)
p.ak=(p.cd+p.cI)/2
p.S=0
s=A.ec($.b9().w)
p.b2=s
r=p.Y
r===$&&A.a()
r.push(s)}q=p.brh(new B.aoJ(t.a,t.b,t.c))
if(q!=null)p.bv4(q)}else{s=v[0]
r=p.bc
r===$&&A.a()
C.d.ab(r)
p.ak=(p.cd+p.cI)/2
p.S=0
r=p.bo
r===$&&A.a()
r.push(new A.N(s.a,s.b))
p.aF()}}},
azn(){var x=this,w=x.bc
w===$&&A.a()
C.d.ab(w)
x.ak=(x.cd+x.cI)/2
x.S=0},
b5(d,e){var x=this,w=x.cx
w===$&&A.a()
d.aLV(w,e,new A.aj(0,0,0+x.gM(0).a,0+x.gM(0).b),new B.foL(x))},
km(d){this.nz(d)
d.sCa(!0)}}
B.cGL.prototype={
rY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.a,v=g.c,u=v.a,t=g.b,s=t.a,r=g.d,q=r.a,x=x.b,v=v.b,t=t.b,r=r.b,p=0,o=0,n=0,m=0;m<=10;++m,n=j,o=k){l=m/10
k=g.c0h(l,w,u,s,q)
j=g.c0h(l,x,v,t,r)
if(m>0){i=k-o
h=j-n
p+=Math.sqrt(i*i+h*h)}}if(isNaN(p)||p==1/0||p==-1/0)return 0
return p},
c0h(d,e,f,g,h){var x=1-d
return e*x*x*x+3*f*x*x*d+3*g*x*d*d+h*d*d*d}}
B.cJD.prototype={}
B.aoJ.prototype={}
var z=a.updateTypes(["~(a05)","~(a4_)","~(q4)","~(a1E)","ao()"])
B.foL.prototype={
$2(d,e){var x,w,v,u,t=d.gd7(0),s=e.a,r=e.b,q=this.a,p=q.gM(0),o=q.gM(0),n=q.aR
n===$&&A.a()
t.hF(new A.aj(s,r,s+p.a,r+o.b),n)
if(q.ac){s=q.au
s===$&&A.a()
s.c=q.cd
s=t.a
x=0
for(;;){r=q.ba
r===$&&A.a()
if(!(x<r.length))break
r=r[x]
if(r.length===1){w=r[0]
r=q.cd
p=q.cI
v=q.au.cZ()
s.drawCircle(w.a,w.b,(r+p)/2,v)
v.delete()}else for(u=0;p=r.length,u<p;++u)if(u<p-1){p=r[u]
o=r[u+1]
v=q.au.cZ()
s.drawLine.apply(s,[p.a,p.b,o.a,o.b,v])
v.delete()}++x}}else{s=q.bo
s===$&&A.a()
if(s.length!==0){r=q.au
r===$&&A.a()
r.c=(q.cd+q.cI)/2
t.dWk(D.dTe,s,r)}s=q.Y
s===$&&A.a()
if(s.length!==0){s=q.au
s===$&&A.a()
s.c=q.cI
for(s=t.a,x=0;r=q.Y,x<r.length;++x){r=r[x]
v=q.au.cZ()
r=r.ghQ().a
r===$&&A.a()
r=r.a
r.toString
s.drawPath(r,v)
v.delete()}}}},
$S:47};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0i
var v
x(v=B.atR.prototype,"gdto","dtp",0)
x(v,"gcSu","cSv",0)
x(v,"gdtq","dtr",1)
x(v,"gdtm","dtn",2)
x(v,"gdts","dtt",3)
w(B.cGL.prototype,"gE","rY",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bky,A.W)
x(B.aEn,A.Y)
x(B.d19,A.as6)
x(B.atR,A.at)
x(B.foL,A.bF)
w(A.ap,[B.cGL,B.cJD,B.aoJ])})()
A.av(b.typeUniverse,JSON.parse('{"bky":{"W":[],"f":[]},"aEn":{"Y":["bky"]},"d19":{"c2":[],"f":[]},"atR":{"at":[],"aA":[],"cp":[]}}'))
var y=(function rtii(){var x=A.t
return{k:x("b_"),v:x("mu"),I:x("a2L"),D:x("C<Z<aoJ>>"),g:x("C<N>"),p:x("C<a1o>"),h:x("C<cJD>"),R:x("C<aoJ>"),w:x("mi"),o:x("aaK"),n:x("ahS"),Z:x("a4u"),E:x("aaZ"),b:x("atR"),y:x("aj1"),S:x("A")}})();(function constants(){D.ar5=new A.ag(984557,"MaterialIcons",null,!1)
D.dTe=new A.fdo(0,"points")})()};
(a=>{a["1W9PeobdSwJun/2JERbtFbwoLXw="]=a.current})($__dart_deferred_initializers__);