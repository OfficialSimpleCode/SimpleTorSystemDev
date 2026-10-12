((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
j7N(d,e,f,g,h,i){return new B.bku(g,f,d,i,h,e)},
jy0(d,e,f){var x,w,v,u,t,s,r=d.a,q=e.a,p=r-q,o=d.b,n=e.b,m=o-n,l=f.a,k=q-l,j=f.b,i=n-j
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
s.push(new B.aoG(r+u,o+t,null))
s.push(new B.aoG(l+u,j+t,null))
return s},
bku:function bku(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.x=h
_.a=i},
aEj:function aEj(){this.c=this.a=null},
d17:function d17(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.a=k},
atP:function atP(d,e,f,g,h,i,j,k,l,m){var _=this
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
foG:function foG(d){this.a=d},
cGI:function cGI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cJA:function cJA(){},
aoG:function aoG(d,e,f){this.a=d
this.b=e
this.c=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[694],B)
D=c[921]
B.bku.prototype={
P(){return new B.aEj()}}
B.aEj.prototype={
Yb(d){var x=this.c.gb8()
x.toString
return y.b.a(x).Yb(d)},
ab(d){var x,w=this.c.gb8()
if(w instanceof B.atP){x=w.ba
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
w.azj()
w.b2=A.ec($.b9().w)
w.aF()}},
l(d){var x,w,v
A.q(d)
x=this.a
w=x.e
if(w==null)w=C.a5
v=x.f
return new B.d17(x.c,x.d,w,v,null,null,x.x,null)}}
B.d17.prototype={
bW(d){var x,w,v,u=this,t=null,s=u.f,r=A.cT(d,t,y.w).w,q=new A.aA0(A.p(y.S,y.y)),p=new B.atP(q,u.d,u.e,u.r,s,u.y,u.x,u.w,new A.d2(),A.c6(y.v))
p.bZ()
x=A.cgM(t,t)
x.w=q
x.ch=p.gdtb()
x.CW=p.gdtd()
x.cx=p.gdt9()
r=x.b=r.cx
x.at=C.ty
p.aM=x
w=A.cAa(t,t)
w.w=q
w.b=r
v=p.gcSj()
w.ch=v
p.ar=w
w=A.ary(t,t)
w.w=q
w.b=r
w.ch=v
p.aB=w
w=A.jT(t,-1,t)
w.ag=p.gdtf()
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
p.azj()
return p},
c9(d,e){var x=this
e.seca(x.d)
e.sebP(x.e)
e.sep(0,x.f)
e.scsI(x.r)
e.seen(x.y)
e.seem(x.x)
e.seeq(x.w)}}
B.atP.prototype={
seca(d){var x=this
if(x.cd===d)return
x.cd=d
x.bIJ()
x.aF()},
sebP(d){var x=this
if(x.cI===d)return
x.cI=d
x.bIJ()
x.aF()},
scsI(d){var x,w=this
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
seen(d){if(J.I(this.ca,d))return
this.ca=d},
seem(d){return},
seeq(d){return},
glR(){return!0},
dl(){var x,w=this,v=y.k,u=v.a(A.aA.prototype.gaP.call(w)).b<1/0?v.a(A.aA.prototype.gaP.call(w)).b:250
if(v.a(A.aA.prototype.gaP.call(w)).a>250)u=v.a(A.aA.prototype.gaP.call(w)).a
x=v.a(A.aA.prototype.gaP.call(w)).d<1/0?v.a(A.aA.prototype.gaP.call(w)).d:250
w.fy=new A.aC(u,v.a(A.aA.prototype.gaP.call(w)).c>250?v.a(A.aA.prototype.gaP.call(w)).c:x)},
dtc(d){this.bq9(d.b)},
cSk(d){},
dte(d){this.bI1(0,d.b)},
dta(d){var x=this.ca
if(x!=null)x.$0()},
dtg(d){var x=d.b,w=new B.aoG(x.a,x.b,null),v=A.b([w],y.R)
x=this.ba
x===$&&A.a()
x.push(v)
this.cSV(w)
x=this.ca
if(x!=null)x.$0()},
ld(d){return!0},
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
bq9(d){var x,w=this,v=A.b([],y.R),u=w.ba
u===$&&A.a()
u.push(v)
u=A.ec($.b9().w)
w.b2=u
x=w.Y
x===$&&A.a()
x.push(u)
w.azj()
w.bI1(0,d)},
bI1(d,e){var x,w,v,u=this,t=u.ba
t===$&&A.a()
if(t.length===0){u.bq9(e)
return}x=new B.aoG(e.a,e.b,Date.now())
t=u.ba
w=t[t.length-1]
t=w.length
if((t!==0?u.buy(w[t-1],x):1)>0){if(!u.ac){v=u.brb(x)
if(v!=null)u.buZ(v)}w.push(x)
u.aF()}},
cSV(d){var x
this.azj()
x=this.bo
x===$&&A.a()
x.push(new A.N(d.a,d.b))
this.aF()},
brb(d){var x,w,v,u,t,s,r,q,p=this,o=p.bc
o===$&&A.a()
o.push(d)
o=p.bc
x=o.length
if(x>2){if(x===3)C.d.ds(o,0,o[0])
o=p.bc
w=o[1]
v=o[2]
o=p.buy(w,v)
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
r=B.jy0(o[0],o[1],o[2])[1]
q=B.jy0(o[1],o[2],o[3])[0]
u=o[1]
o=o[2]
C.d.cG(p.bc,0)
p.S=t
p.ak=s
return new B.cGI(u,r,q,o,x,s)}return null},
buZ(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.e,a0=a2.f-d,a1=C.k.cq(a2.rY(0))*2
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
h.push(new B.cJA())
h=this.b2
h===$&&A.a()
i=new A.afq(new A.aj(g,f,g+e,f+e),0,180)
h.e.push(i)
h=h.d
if(h!=null)i.fb(h)}},
buy(d,e){return Math.sqrt(Math.pow(e.a-d.a,2)+Math.pow(e.b-d.b,2))},
Yb(d){return this.evm(d)},
evm(d){var x=0,w=A.l(y.I),v,u=this,t,s
var $async$Yb=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=u.ch.a
s.toString
y.o.a(s)
t=u.gN(0)
v=s.aNt(new A.aj(0,0,0+t.a,0+t.b),d)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$Yb,w)},
bIJ(){var x,w=this
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
w.dn6()
w.aF()},
dn6(){var x,w,v,u,t,s,r,q,p=this,o=p.ba
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
r.push(s)}q=p.brb(new B.aoG(t.a,t.b,t.c))
if(q!=null)p.buZ(q)}else{s=v[0]
r=p.bc
r===$&&A.a()
C.d.ab(r)
p.ak=(p.cd+p.cI)/2
p.S=0
r=p.bo
r===$&&A.a()
r.push(new A.N(s.a,s.b))
p.aF()}}},
azj(){var x=this,w=x.bc
w===$&&A.a()
C.d.ab(w)
x.ak=(x.cd+x.cI)/2
x.S=0},
b5(d,e){var x=this,w=x.cx
w===$&&A.a()
d.aLQ(w,e,new A.aj(0,0,0+x.gN(0).a,0+x.gN(0).b),new B.foG(x))},
km(d){this.nz(d)
d.sCa(!0)}}
B.cGI.prototype={
rY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.a,v=g.c,u=v.a,t=g.b,s=t.a,r=g.d,q=r.a,x=x.b,v=v.b,t=t.b,r=r.b,p=0,o=0,n=0,m=0;m<=10;++m,n=j,o=k){l=m/10
k=g.c0a(l,w,u,s,q)
j=g.c0a(l,x,v,t,r)
if(m>0){i=k-o
h=j-n
p+=Math.sqrt(i*i+h*h)}}if(isNaN(p)||p==1/0||p==-1/0)return 0
return p},
c0a(d,e,f,g,h){var x=1-d
return e*x*x*x+3*f*x*x*d+3*g*x*d*d+h*d*d*d}}
B.cJA.prototype={}
B.aoG.prototype={}
var z=a.updateTypes(["~(a05)","~(a4_)","~(q4)","~(a1E)","ao()"])
B.foG.prototype={
$2(d,e){var x,w,v,u,t=d.gd7(0),s=e.a,r=e.b,q=this.a,p=q.gN(0),o=q.gN(0),n=q.aR
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
t.dW7(D.dTe,s,r)}s=q.Y
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
x(v=B.atP.prototype,"gdtb","dtc",0)
x(v,"gcSj","cSk",0)
x(v,"gdtd","dte",1)
x(v,"gdt9","dta",2)
x(v,"gdtf","dtg",3)
w(B.cGI.prototype,"gE","rY",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bku,A.W)
x(B.aEj,A.Y)
x(B.d17,A.as3)
x(B.atP,A.at)
x(B.foG,A.bF)
w(A.ap,[B.cGI,B.cJA,B.aoG])})()
A.av(b.typeUniverse,JSON.parse('{"bku":{"W":[],"f":[]},"aEj":{"Y":["bku"]},"d17":{"c2":[],"f":[]},"atP":{"at":[],"aA":[],"cp":[]}}'))
var y=(function rtii(){var x=A.t
return{k:x("b_"),v:x("mu"),I:x("a2L"),D:x("C<Z<aoG>>"),g:x("C<N>"),p:x("C<a1o>"),h:x("C<cJA>"),R:x("C<aoG>"),w:x("mi"),o:x("aaK"),n:x("ahR"),Z:x("a4u"),E:x("aaZ"),b:x("atP"),y:x("aj0"),S:x("A")}})();(function constants(){D.ar2=new A.ag(984557,"MaterialIcons",null,!1)
D.dTe=new A.fdj(0,"points")})()};
(a=>{a["50Y/uadcpOIXZ4HLvVMZ4rKzvqk="]=a.current})($__dart_deferred_initializers__);