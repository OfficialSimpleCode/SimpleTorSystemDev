((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
iBf(d,e,f,g,h,i){return new B.bbc(g,f,d,i,h,e)},
iE8(d,e,f){var x,w,v,u,t,s,r=d.a,q=e.a,p=r-q,o=d.b,n=e.b,m=o-n,l=f.a,k=q-l,j=f.b,i=n-j
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
s.push(new B.al2(r+u,o+t,null))
s.push(new B.al2(l+u,j+t,null))
return s},
bbc:function bbc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.x=h
_.a=i},
aM6:function aM6(){this.c=this.a=null},
cKW:function cKW(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.a=k},
apJ:function apJ(d,e,f,g,h,i,j,k,l,m){var _=this
_.G=d
_.ac=0
_.a6=!1
_.ba=_.aC=_.W=_.af=_.bF=_.bC=_.b9=_.aW=_.aN=_.aO=_.ai=_.az=_.an=_.ad=$
_.c1=e
_.ca=f
_.cd=g
_.ce=h
_.bs=i
_.c8=j
_.dc=k
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
eRS:function eRS(d){this.a=d},
cq8:function cq8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
csM:function csM(){},
al2:function al2(d,e,f){this.a=d
this.b=e
this.c=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[528],B)
D=c[687]
B.bbc.prototype={
U(){return new B.aM6()}}
B.aM6.prototype={
a2k(d){var x=this.c.gb5()
x.toString
return y.b.a(x).a2k(d)},
a9(d){var x,w=this.c.gb5()
if(w instanceof B.apJ){x=w.b9
x===$&&A.a()
C.c.a9(x)
x=w.bC
x===$&&A.a()
C.c.a9(x)
x=w.bF
x===$&&A.a()
C.c.a9(x)
x=w.af
x===$&&A.a()
C.c.a9(x)
w.arS()
w.ba=A.dQ($.b0().w)
w.aD()}},
l(d){var x,w,v
A.q(d)
x=this.a
w=x.e
if(w==null)w=C.a5
v=x.f
return new B.cKW(x.c,x.d,w,v,null,null,x.x,null)}}
B.cKW.prototype={
bP(d){var x,w,v,u=this,t=null,s=u.f,r=A.d0(d,t,y.w).w,q=new A.avd(A.o(y.S,y.y)),p=new B.apJ(q,u.d,u.e,u.r,s,u.y,u.x,u.w,new A.cM(),A.bU(y.v))
p.bR()
x=A.c1F(t,t)
x.w=q
x.ch=p.gd1X()
x.CW=p.gd1Z()
x.cx=p.gd1V()
r=x.b=r.cx
x.at=C.qy
p.ai=x
w=A.cjT(t,t)
w.w=q
w.b=r
v=p.gcxo()
w.ch=v
p.an=w
w=A.anB(t,t)
w.w=q
w.b=r
w.ch=v
p.az=w
w=A.kJ(t,-1,t)
w.ac=p.gd20()
p.ad=w
q.b=x
x=$.b0()
q=A.bv()
w=p.cd
q.r=w.gk(w)
q.c=5
q.d=C.hd
q.b=C.bx
q.f=!0
p.aO=q
q=A.bv()
q.r=s.gk(0)
q.b=C.bx
q.f=!0
p.aN=q
p.a6=p.c1===p.ca
p.b9=A.b([],y.D)
p.bF=A.b([],y.h)
p.aW=A.b([],y.R)
p.bC=A.b([],y.g)
p.af=A.b([],y.p)
p.ba=A.dQ(x.w)
p.arS()
return p},
c0(d,e){var x=this
e.sdGB(x.d)
e.sdGi(x.e)
e.sef(0,x.f)
e.scbl(x.r)
e.sdIH(x.y)
e.sdIG(x.x)
e.sdIK(x.w)}}
B.apJ.prototype={
sdGB(d){var x=this
if(x.c1===d)return
x.c1=d
x.buj()
x.aD()},
sdGi(d){var x=this
if(x.ca===d)return
x.ca=d
x.buj()
x.aD()},
scbl(d){var x,w=this
if(w.cd.q(0,d))return
w.cd=d
x=w.aO
x===$&&A.a()
x.r=d.gk(d)
w.aD()},
sef(d,e){var x,w=this
if(w.ce.q(0,e))return
w.ce=e
x=w.aN
x===$&&A.a()
x.r=e.gk(0)
w.aD()},
sdIH(d){if(J.M(this.bs,d))return
this.bs=d},
sdIG(d){return},
sdIK(d){return},
glt(){return!0},
d8(){var x,w=this,v=y.k,u=v.a(A.ax.prototype.gaL.call(w)).b<1/0?v.a(A.ax.prototype.gaL.call(w)).b:250
if(v.a(A.ax.prototype.gaL.call(w)).a>250)u=v.a(A.ax.prototype.gaL.call(w)).a
x=v.a(A.ax.prototype.gaL.call(w)).d<1/0?v.a(A.ax.prototype.gaL.call(w)).d:250
w.fy=new A.ay(u,v.a(A.ax.prototype.gaL.call(w)).c>250?v.a(A.ax.prototype.gaL.call(w)).c:x)},
d1Y(d){this.bex(d.b)},
cxp(d){},
d2_(d){this.btT(0,d.b)},
d1W(d){var x=this.bs
if(x!=null)x.$0()},
d21(d){var x=d.b,w=new B.al2(x.a,x.b,null),v=A.b([w],y.R)
x=this.b9
x===$&&A.a()
x.push(v)
this.cy_(w)
x=this.bs
if(x!=null)x.$0()},
l0(d){return!0},
ra(d,e){var x,w=this
if(y.Z.b(d)&&w.ac===0){w.ac=d.geo()
x=w.ai
x===$&&A.a()
x.ke(d)
x=w.an
x===$&&A.a()
x.ke(d)
x=w.az
x===$&&A.a()
x.ke(d)
x=w.ad
x===$&&A.a()
x.ke(d)}else if(y.E.b(d)&&w.ac===d.geo())w.ac=0
else if(y.n.b(d))w.ac=0},
bex(d){var x,w=this,v=A.b([],y.R),u=w.b9
u===$&&A.a()
u.push(v)
u=A.dQ($.b0().w)
w.ba=u
x=w.af
x===$&&A.a()
x.push(u)
w.arS()
w.btT(0,d)},
btT(d,e){var x,w,v,u=this,t=u.b9
t===$&&A.a()
if(t.length===0){u.bex(e)
return}x=new B.al2(e.a,e.b,Date.now())
t=u.b9
w=t[t.length-1]
t=w.length
if((t!==0?u.bil(w[t-1],x):1)>0){if(!u.a6){v=u.bfk(x)
if(v!=null)u.biL(v)}w.push(x)
u.aD()}},
cy_(d){var x
this.arS()
x=this.bC
x===$&&A.a()
x.push(new A.L(d.a,d.b))
this.aD()},
bfk(d){var x,w,v,u,t,s,r,q,p=this,o=p.aW
o===$&&A.a()
o.push(d)
o=p.aW
x=o.length
if(x>2){if(x===3)C.c.dM(o,0,o[0])
o=p.aW
w=o[1]
v=o[2]
o=p.bil(w,v)
x=v.c
x.toString
u=w.c
u.toString
t=o/(x-u)
if(x===u)t=0
o=p.W
o===$&&A.a()
t=0.2*t+0.8*o
s=Math.max(p.ca/(t+1),p.c1)
o=p.aW
x=p.aC
x===$&&A.a()
r=B.iE8(o[0],o[1],o[2])[1]
q=B.iE8(o[1],o[2],o[3])[0]
u=o[1]
o=o[2]
C.c.cK(p.aW,0)
p.W=t
p.aC=s
return new B.cq8(u,r,q,o,x,s)}return null},
biL(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.e,a0=a2.f-d,a1=C.l.ci(a2.ri(0))*2
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
e=Math.min(d+m*a0,this.ca)
h=this.bF
h===$&&A.a()
h.push(new B.csM())
h=this.ba
h===$&&A.a()
i=new A.acB(new A.ab(g,f,g+e,f+e),0,180)
h.e.push(i)
h=h.d
if(h!=null)i.fa(h)}},
bil(d,e){return Math.sqrt(Math.pow(e.a-d.a,2)+Math.pow(e.b-d.b,2))},
a2k(d){return this.dY0(d)},
dY0(d){var x=0,w=A.l(y.I),v,u=this,t,s
var $async$a2k=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=u.ch.a
s.toString
y.o.a(s)
t=u.gK(0)
v=s.aEZ(new A.ab(0,0,0+t.a,0+t.b),d)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$a2k,w)},
buj(){var x,w=this
w.a6=w.ca===w.c1
x=w.bC
x===$&&A.a()
C.c.a9(x)
x=w.bF
x===$&&A.a()
C.c.a9(x)
x=w.af
x===$&&A.a()
C.c.a9(x)
w.ba=A.dQ($.b0().w)
w.cY4()
w.aD()},
cY4(){var x,w,v,u,t,s,r,q,p=this,o=p.b9
o===$&&A.a()
x=o.length
w=0
for(;w<o.length;o.length===x||(0,A.ak)(o),++w){v=o[w]
if(v.length>1)for(u=0;u<v.length;++u){t=v[u]
if(u===0){s=p.aW
s===$&&A.a()
C.c.a9(s)
p.aC=(p.c1+p.ca)/2
p.W=0
s=A.dQ($.b0().w)
p.ba=s
r=p.af
r===$&&A.a()
r.push(s)}q=p.bfk(new B.al2(t.a,t.b,t.c))
if(q!=null)p.biL(q)}else{s=v[0]
r=p.aW
r===$&&A.a()
C.c.a9(r)
p.aC=(p.c1+p.ca)/2
p.W=0
r=p.bC
r===$&&A.a()
r.push(new A.L(s.a,s.b))
p.aD()}}},
arS(){var x=this,w=x.aW
w===$&&A.a()
C.c.a9(w)
x.aC=(x.c1+x.ca)/2
x.W=0},
aZ(d,e){var x=this,w=x.cx
w===$&&A.a()
d.aDx(w,e,new A.ab(0,0,0+x.gK(0).a,0+x.gK(0).b),new B.eRS(x))},
kg(d){this.n2(d)
d.sB8(!0)}}
B.cq8.prototype={
ri(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.a,v=g.c,u=v.a,t=g.b,s=t.a,r=g.d,q=r.a,x=x.b,v=v.b,t=t.b,r=r.b,p=0,o=0,n=0,m=0;m<=10;++m,n=j,o=k){l=m/10
k=g.bLi(l,w,u,s,q)
j=g.bLi(l,x,v,t,r)
if(m>0){i=k-o
h=j-n
p+=Math.sqrt(i*i+h*h)}}if(isNaN(p)||p==1/0||p==-1/0)return 0
return p},
bLi(d,e,f,g,h){var x=1-d
return e*x*x*x+3*f*x*x*d+3*g*x*d*d+h*d*d*d}}
B.csM.prototype={}
B.al2.prototype={}
var z=a.updateTypes(["~(Zu)","~(a5s)","~(p3)","~(a04)","ar()"])
B.eRS.prototype={
$2(d,e){var x,w,v,u,t=d.gd4(0),s=e.a,r=e.b,q=this.a,p=q.gK(0),o=q.gK(0),n=q.aN
n===$&&A.a()
t.hu(new A.ab(s,r,s+p.a,r+o.b),n)
if(q.a6){s=q.aO
s===$&&A.a()
s.c=q.c1
s=t.a
x=0
for(;;){r=q.b9
r===$&&A.a()
if(!(x<r.length))break
r=r[x]
if(r.length===1){w=r[0]
r=q.c1
p=q.ca
v=q.aO.cP()
s.drawCircle(w.a,w.b,(r+p)/2,v)
v.delete()}else for(u=0;p=r.length,u<p;++u)if(u<p-1){p=r[u]
o=r[u+1]
v=q.aO.cP()
s.drawLine.apply(s,[p.a,p.b,o.a,o.b,v])
v.delete()}++x}}else{s=q.bC
s===$&&A.a()
if(s.length!==0){r=q.aO
r===$&&A.a()
r.c=(q.c1+q.ca)/2
t.dr6(D.dE3,s,r)}s=q.af
s===$&&A.a()
if(s.length!==0){s=q.aO
s===$&&A.a()
s.c=q.ca
for(s=t.a,x=0;r=q.af,x<r.length;++x){r=r[x]
v=q.aO.cP()
r=r.ghy().a
r===$&&A.a()
r=r.a
r.toString
s.drawPath(r,v)
v.delete()}}}},
$S:50};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0i
var v
x(v=B.apJ.prototype,"gd1X","d1Y",0)
x(v,"gcxo","cxp",0)
x(v,"gd1Z","d2_",1)
x(v,"gd1V","d1W",2)
x(v,"gd20","d21",3)
w(B.cq8.prototype,"gF","ri",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bbc,A.W)
x(B.aM6,A.Y)
x(B.cKW,A.aw2)
x(B.apJ,A.ap)
x(B.eRS,A.bZ)
w(A.ao,[B.cq8,B.csM,B.al2])})()
A.aG(b.typeUniverse,JSON.parse('{"bbc":{"W":[],"f":[]},"aM6":{"Y":["bbc"]},"cKW":{"bW":[],"f":[]},"apJ":{"ap":[],"ax":[],"c9":[]}}'))
var y=(function rtii(){var x=A.t
return{k:x("aU"),v:x("mU"),I:x("a3O"),D:x("F<Z<al2>>"),g:x("F<L>"),p:x("F<a_O>"),h:x("F<csM>"),R:x("F<al2>"),w:x("oi"),o:x("a7V"),n:x("ab8"),Z:x("a1k"),E:x("a6b"),b:x("apJ"),y:x("afG"),S:x("B")}})();(function constants(){D.ahq=new A.an(984557,"MaterialIcons",null,!1)
D.dE3=new A.eIl(0,"points")})()};
(a=>{a["5JrlwDC+LvjAkPOTGDTupqPsDNY="]=a.current})($__dart_deferred_initializers__);