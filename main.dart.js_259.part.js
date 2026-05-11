((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
izm(d,e,f,g,h,i){return new B.bb_(g,f,d,i,h,e)},
iCf(d,e,f){var x,w,v,u,t,s,r=d.a,q=e.a,p=r-q,o=d.b,n=e.b,m=o-n,l=f.a,k=q-l,j=f.b,i=n-j
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
s.push(new B.akW(r+u,o+t,null))
s.push(new B.akW(l+u,j+t,null))
return s},
bb_:function bb_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.x=h
_.a=i},
aM1:function aM1(){this.c=this.a=null},
cKr:function cKr(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.a=k},
ayR:function ayR(d,e,f,g,h,i,j,k,l,m){var _=this
_.G=d
_.ac=0
_.a6=!1
_.bb=_.aE=_.Y=_.ah=_.bO=_.bz=_.b7=_.aU=_.aN=_.aQ=_.af=_.az=_.an=_.ad=$
_.c1=e
_.cf=f
_.cc=g
_.cd=h
_.br=i
_.c3=j
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
eRt:function eRt(d){this.a=d},
cpI:function cpI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
csl:function csl(){},
akW:function akW(d,e,f){this.a=d
this.b=e
this.c=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[527],B)
D=c[682]
B.bb_.prototype={
V(){return new B.aM1()}}
B.aM1.prototype={
a2h(d){var x=this.c.gb5()
x.toString
return y.b.a(x).a2h(d)},
a9(d){var x,w=this.c.gb5()
if(w instanceof B.ayR){x=w.b7
x===$&&A.a()
C.c.a9(x)
x=w.bz
x===$&&A.a()
C.c.a9(x)
x=w.bO
x===$&&A.a()
C.c.a9(x)
x=w.ah
x===$&&A.a()
C.c.a9(x)
w.arF()
w.bb=A.dP($.b_().w)
w.aB()}},
l(d){var x,w,v
A.q(d)
x=this.a
w=x.e
if(w==null)w=C.a5
v=x.f
return new B.cKr(x.c,x.d,w,v,null,null,x.x,null)}}
B.cKr.prototype={
bN(d){var x,w,v,u=this,t=null,s=u.f,r=A.d_(d,t,y.w).w,q=new A.ava(A.o(y.S,y.y)),p=new B.ayR(q,u.d,u.e,u.r,s,u.y,u.x,u.w,new A.cM(),A.bU(y.v))
p.bR()
x=A.c1c(t,t)
x.w=q
x.ch=p.gd13()
x.CW=p.gd15()
x.cx=p.gd11()
r=x.b=r.cx
x.at=C.qt
p.af=x
w=A.cjr(t,t)
w.w=q
w.b=r
v=p.gcwK()
w.ch=v
p.an=w
w=A.any(t,t)
w.w=q
w.b=r
w.ch=v
p.az=w
w=A.kH(t,-1,t)
w.ac=p.gd17()
p.ad=w
q.b=x
x=$.b_()
q=A.bu()
w=p.cc
q.r=w.gk(w)
q.c=5
q.d=C.hb
q.b=C.bx
q.f=!0
p.aQ=q
q=A.bu()
q.r=s.gk(0)
q.b=C.bx
q.f=!0
p.aN=q
p.a6=p.c1===p.cf
p.b7=A.b([],y.D)
p.bO=A.b([],y.h)
p.aU=A.b([],y.R)
p.bz=A.b([],y.g)
p.ah=A.b([],y.p)
p.bb=A.dP(x.w)
p.arF()
return p},
c_(d,e){var x=this
e.sdFE(x.d)
e.sdFm(x.e)
e.seg(0,x.f)
e.scaG(x.r)
e.sdHK(x.y)
e.sdHJ(x.x)
e.sdHN(x.w)}}
B.ayR.prototype={
sdFE(d){var x=this
if(x.c1===d)return
x.c1=d
x.btR()
x.aB()},
sdFm(d){var x=this
if(x.cf===d)return
x.cf=d
x.btR()
x.aB()},
scaG(d){var x,w=this
if(w.cc.q(0,d))return
w.cc=d
x=w.aQ
x===$&&A.a()
x.r=d.gk(d)
w.aB()},
seg(d,e){var x,w=this
if(w.cd.q(0,e))return
w.cd=e
x=w.aN
x===$&&A.a()
x.r=e.gk(0)
w.aB()},
sdHK(d){if(J.M(this.br,d))return
this.br=d},
sdHJ(d){return},
sdHN(d){return},
glu(){return!0},
d9(){var x,w=this,v=y.k,u=v.a(A.ay.prototype.gaM.call(w)).b<1/0?v.a(A.ay.prototype.gaM.call(w)).b:250
if(v.a(A.ay.prototype.gaM.call(w)).a>250)u=v.a(A.ay.prototype.gaM.call(w)).a
x=v.a(A.ay.prototype.gaM.call(w)).d<1/0?v.a(A.ay.prototype.gaM.call(w)).d:250
w.fy=new A.az(u,v.a(A.ay.prototype.gaM.call(w)).c>250?v.a(A.ay.prototype.gaM.call(w)).c:x)},
d14(d){this.bea(d.b)},
cwL(d){},
d16(d){this.btp(0,d.b)},
d12(d){var x=this.br
if(x!=null)x.$0()},
d18(d){var x=d.b,w=new B.akW(x.a,x.b,null),v=A.b([w],y.R)
x=this.b7
x===$&&A.a()
x.push(v)
this.cxl(w)
x=this.br
if(x!=null)x.$0()},
l0(d){return!0},
r8(d,e){var x,w=this
if(y.Z.b(d)&&w.ac===0){w.ac=d.geo()
x=w.af
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
bea(d){var x,w=this,v=A.b([],y.R),u=w.b7
u===$&&A.a()
u.push(v)
u=A.dP($.b_().w)
w.bb=u
x=w.ah
x===$&&A.a()
x.push(u)
w.arF()
w.btp(0,d)},
btp(d,e){var x,w,v,u=this,t=u.b7
t===$&&A.a()
if(t.length===0){u.bea(e)
return}x=new B.akW(e.a,e.b,Date.now())
t=u.b7
w=t[t.length-1]
t=w.length
if((t!==0?u.bhW(w[t-1],x):1)>0){if(!u.a6){v=u.beW(x)
if(v!=null)u.bim(v)}w.push(x)
u.aB()}},
cxl(d){var x
this.arF()
x=this.bz
x===$&&A.a()
x.push(new A.K(d.a,d.b))
this.aB()},
beW(d){var x,w,v,u,t,s,r,q,p=this,o=p.aU
o===$&&A.a()
o.push(d)
o=p.aU
x=o.length
if(x>2){if(x===3)C.c.dM(o,0,o[0])
o=p.aU
w=o[1]
v=o[2]
o=p.bhW(w,v)
x=v.c
x.toString
u=w.c
u.toString
t=o/(x-u)
if(x===u)t=0
o=p.Y
o===$&&A.a()
t=0.2*t+0.8*o
s=Math.max(p.cf/(t+1),p.c1)
o=p.aU
x=p.aE
x===$&&A.a()
r=B.iCf(o[0],o[1],o[2])[1]
q=B.iCf(o[1],o[2],o[3])[0]
u=o[1]
o=o[2]
C.c.cJ(p.aU,0)
p.Y=t
p.aE=s
return new B.cpI(u,r,q,o,x,s)}return null},
bim(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.e,a0=a2.f-d,a1=C.l.cj(a2.rg(0))*2
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
e=Math.min(d+m*a0,this.cf)
h=this.bO
h===$&&A.a()
h.push(new B.csl())
h=this.bb
h===$&&A.a()
i=new A.acw(new A.ab(g,f,g+e,f+e),0,180)
h.e.push(i)
h=h.d
if(h!=null)i.f9(h)}},
bhW(d,e){return Math.sqrt(Math.pow(e.a-d.a,2)+Math.pow(e.b-d.b,2))},
a2h(d){return this.dX0(d)},
dX0(d){var x=0,w=A.l(y.I),v,u=this,t,s
var $async$a2h=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=u.ch.a
s.toString
y.o.a(s)
t=u.gK(0)
v=s.aEL(new A.ab(0,0,0+t.a,0+t.b),d)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$a2h,w)},
btR(){var x,w=this
w.a6=w.cf===w.c1
x=w.bz
x===$&&A.a()
C.c.a9(x)
x=w.bO
x===$&&A.a()
C.c.a9(x)
x=w.ah
x===$&&A.a()
C.c.a9(x)
w.bb=A.dP($.b_().w)
w.cXc()
w.aB()},
cXc(){var x,w,v,u,t,s,r,q,p=this,o=p.b7
o===$&&A.a()
x=o.length
w=0
for(;w<o.length;o.length===x||(0,A.aj)(o),++w){v=o[w]
if(v.length>1)for(u=0;u<v.length;++u){t=v[u]
if(u===0){s=p.aU
s===$&&A.a()
C.c.a9(s)
p.aE=(p.c1+p.cf)/2
p.Y=0
s=A.dP($.b_().w)
p.bb=s
r=p.ah
r===$&&A.a()
r.push(s)}q=p.beW(new B.akW(t.a,t.b,t.c))
if(q!=null)p.bim(q)}else{s=v[0]
r=p.aU
r===$&&A.a()
C.c.a9(r)
p.aE=(p.c1+p.cf)/2
p.Y=0
r=p.bz
r===$&&A.a()
r.push(new A.K(s.a,s.b))
p.aB()}}},
arF(){var x=this,w=x.aU
w===$&&A.a()
C.c.a9(w)
x.aE=(x.c1+x.cf)/2
x.Y=0},
aZ(d,e){var x=this,w=x.cx
w===$&&A.a()
d.aDh(w,e,new A.ab(0,0,0+x.gK(0).a,0+x.gK(0).b),new B.eRt(x))},
kg(d){this.n0(d)
d.sB9(!0)}}
B.cpI.prototype={
rg(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.a,v=g.c,u=v.a,t=g.b,s=t.a,r=g.d,q=r.a,x=x.b,v=v.b,t=t.b,r=r.b,p=0,o=0,n=0,m=0;m<=10;++m,n=j,o=k){l=m/10
k=g.bKJ(l,w,u,s,q)
j=g.bKJ(l,x,v,t,r)
if(m>0){i=k-o
h=j-n
p+=Math.sqrt(i*i+h*h)}}if(isNaN(p)||p==1/0||p==-1/0)return 0
return p},
bKJ(d,e,f,g,h){var x=1-d
return e*x*x*x+3*f*x*x*d+3*g*x*d*d+h*d*d*d}}
B.csl.prototype={}
B.akW.prototype={}
var z=a.updateTypes(["~(Zs)","~(a5o)","~(p1)","~(a00)","aq()"])
B.eRt.prototype={
$2(d,e){var x,w,v,u,t=d.gd4(0),s=e.a,r=e.b,q=this.a,p=q.gK(0),o=q.gK(0),n=q.aN
n===$&&A.a()
t.hs(new A.ab(s,r,s+p.a,r+o.b),n)
if(q.a6){s=q.aQ
s===$&&A.a()
s.c=q.c1
s=t.a
x=0
for(;;){r=q.b7
r===$&&A.a()
if(!(x<r.length))break
r=r[x]
if(r.length===1){w=r[0]
r=q.c1
p=q.cf
v=q.aQ.cP()
s.drawCircle(w.a,w.b,(r+p)/2,v)
v.delete()}else for(u=0;p=r.length,u<p;++u)if(u<p-1){p=r[u]
o=r[u+1]
v=q.aQ.cP()
s.drawLine.apply(s,[p.a,p.b,o.a,o.b,v])
v.delete()}++x}}else{s=q.bz
s===$&&A.a()
if(s.length!==0){r=q.aQ
r===$&&A.a()
r.c=(q.c1+q.cf)/2
t.dqd(D.dDS,s,r)}s=q.ah
s===$&&A.a()
if(s.length!==0){s=q.aQ
s===$&&A.a()
s.c=q.cf
for(s=t.a,x=0;r=q.ah,x<r.length;++x){r=r[x]
v=q.aQ.cP()
r=r.ghx().a
r===$&&A.a()
r=r.a
r.toString
s.drawPath(r,v)
v.delete()}}}},
$S:47};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0i
var v
x(v=B.ayR.prototype,"gd13","d14",0)
x(v,"gcwK","cwL",0)
x(v,"gd15","d16",1)
x(v,"gd11","d12",2)
x(v,"gd17","d18",3)
w(B.cpI.prototype,"gF","rg",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bb_,A.X)
x(B.aM1,A.Y)
x(B.cKr,A.aw0)
x(B.ayR,A.ao)
x(B.eRt,A.bZ)
w(A.ap,[B.cpI,B.csl,B.akW])})()
A.aG(b.typeUniverse,JSON.parse('{"bb_":{"X":[],"f":[]},"aM1":{"Y":["bb_"]},"cKr":{"bW":[],"f":[]},"ayR":{"ao":[],"ay":[],"c9":[]}}'))
var y=(function rtii(){var x=A.t
return{k:x("aV"),v:x("mS"),I:x("a3L"),D:x("F<Z<akW>>"),g:x("F<K>"),p:x("F<a2n>"),h:x("F<csl>"),R:x("F<akW>"),w:x("oe"),o:x("a7S"),n:x("ab4"),Z:x("a1k"),E:x("a65"),b:x("ayR"),y:x("afD"),S:x("B")}})();(function constants(){D.aho=new A.am(984557,"MaterialIcons",null,!1)
D.dDS=new A.eHV(0,"points")})()};
(a=>{a["0mxy4jFl3+CazCI8DILnZHQSrWo="]=a.current})($__dart_deferred_initializers__);