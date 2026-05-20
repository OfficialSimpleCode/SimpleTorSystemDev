((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
itu(d,e,f,g,h,i,j){return new B.bDL(d,j,h,i,e,f,g,null)},
bDL:function bDL(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bDH:function bDH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
drZ:function drZ(d,e){this.a=d
this.b=e},
ds_:function ds_(d,e){this.a=d
this.b=e},
bDI:function bDI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ds0:function ds0(d,e){this.a=d
this.b=e},
ds1:function ds1(d,e){this.a=d
this.b=e},
ds4:function ds4(d,e,f){this.a=d
this.b=e
this.c=f},
ds3:function ds3(d,e,f){this.a=d
this.b=e
this.c=f},
ds2:function ds2(d,e,f){this.a=d
this.b=e
this.c=f}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[454],B)
D=c[840]
B.bDL.prototype={
l(d){var x,w,v,u,t,s,r,q,p=this,o=null
A.bS(d,!0,y.j)
x=!p.f
w=x?new A.m(o,o,o,o):new B.bDH(p.e,p.d,p.x,o)
x=x?new A.m(o,o,o,o):new B.bDI(p.e,p.d,p.x,o)
v=p.x
if(v)u=A.q(d).ax.k2
else{u=A.q(d).ax
t=u.CW
u=t==null?u.y:t}t=p.d
s=t.to
if(s!=null&&p.r)s="\n\n"+s
else{s=t.ry
s=s!=null&&p.e===C.f1?"\n\n"+s:""}s=A.a3(p.c,"CUSTOM_TEXT",s)
r=A.qk(new A.R(Date.now(),0,!1),!0)
s=A.a3(s,"OLDDATE",r)
r=A.qk(A.dB(new A.R(Date.now(),0,!1),A.a0(0,2,0,0,0,0)),!0)
s=A.a3(s,"NEWDATE",r)
r=A.qk(new A.R(Date.now(),0,!1),!0)
s=A.a3(s,"DATE",r)
r=t.fy
s=A.a3(s,"WORKERNAME",r)
r=A.e("example",o,o,!0)
s=A.a3(s,"TREATMENTNAME",r)
if(p.gc96()){r=A.e("atAdrees",o,o,!0)
t=t.ch
q=$.C().a.k1
t=(t.d?q:t).a.a
t=A.a3(r,"ADRESS",t)+" "}else t=""
t=A.a3(s,"ADRESS",t)
if(p.gc9m()){s=A.e("toDetails",o,o,!0)
r=A.ig(p.gdSM(0))
s=" "+A.a3(s,"PHONE",r)}else s=""
t=A.a3(t,"PHONE",s)
s=$.C().a.k3
t=A.a3(t,"BUSINESSNAME",s)
s=A.oy().gaHH()
t=A.a3(t,"LINK","https://simpletor.app/"+s+"...")
s=p.w
if(s==null)s=A.e("client",o,o,!0)
return A.G(A.b([w,x,A.a4(o,o,o,o,A.v(A.a3(t,"NAME",s),C.C,!1,!1,o,!1,o,!1,o,!1,!1,v,!v,1,o,!1,!1,!1,15,o,o,!1,""),C.p,u,o,0,!1,o,o,o,new A.x(10,10,10,10),!1,o,o,new A.x(10,10,10,10),15,o,!1,!1,!1,o)],y.e),C.f,o,C.d,C.j,o,C.o)},
gc9m(){if(!this.f)return!1
var x=this.d.bs
if(this.e!=null)return x.c
else return x.d},
gc96(){if(!this.f)return!1
var x=this.d.bs
if(this.e!=null)return x.a
else return x.b},
gdSM(d){var x=this.d,w=x.bs
switch((this.e!=null?w.cx:w.cy).a){case 1:return x.b
case 0:return $.C().a.cy}}}
B.bDH.prototype={
l(d){var x=this,w=null,v=x.d,u=v.ch,t=$.C().a.k1
u=(u.d?t:u).a.a===""?0.6:1
v=v.bs
v=x.c!=null?v.a:v.b
return A.e4(new A.cT(A.ak(w,!0,!0,!0,!1,C.E,w,!0,!1,C.iL,75,!0,w,!1,!1,w,w,w,"adress",!1,!1,!1,!0,w,w,w,new B.drZ(x,d),x.e,w,w,!0,!1,w,w,!0,w,w,w,w,!0,!0,w,new A.cX(v,new B.ds_(x,d),w),w,w,!0,w,0.3),w,!1,w),u)},
avj(d){return this.dgE(d)},
dgE(d){var x=0,w=A.l(y.f),v,u=this,t,s,r,q,p,o
var $async$avj=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=u.d
q=r.ch
p=$.C().a
o=p.k1
if((q.d?o:q).a.a===""){r=p.Z
q=$.bc().b3$.a.gbm()
new A.U(A.e(r.b.p(0,q)?"firstPutAdressManager":"firstPutAdress",null,null,!0),C.t,C.v,C.aE,d).D()
x=1
break}q=r.bs
if(u.c!=null){t=A.a0m(q.M())
t.a=!A.a0m(r.bs.M()).a
s=t}else{t=A.a0m(q.M())
t.b=!A.a0m(r.bs.M()).b
s=t}A.cx()
$.bR().aJN(d,s,r)
case 1:return A.j(v,w)}})
return A.k($async$avj,w)}}
B.bDI.prototype={
l(d){var x=this,w=null,v=x.c!=null,u=x.d.bs,t=v?u.c:u.d
t=A.ak(w,!0,!0,!0,!1,C.E,w,!0,!1,C.kc,74,!0,w,!1,!1,w,w,w,"phoneNumber",!1,!1,!1,!0,w,w,w,new B.ds0(x,d),x.e,w,w,!0,!1,w,w,!0,w,w,w,w,!0,!0,w,new A.cX(t,new B.ds1(x,d),w),w,w,!0,w,0.3)
v=v?u.c:u.d
u=y.e
return A.G(A.b([new A.cT(t,w,!1,w),A.d5(C.T,A.G(A.b([new A.m(w,10,w,w),new A.H(C.k6,A.v(A.e("choosePhoneDestination",w,w,!0),w,!1,!1,w,!1,w,!1,w,!1,!1,!0,!1,0.7,w,!1,!1,!1,13,w,w,!1,""),w),new A.m(w,10,w,w),A.ej(C.av,x.dT0(d),C.b8,C.aj,C.av,0,0,w),new A.m(w,4,w,w),new A.dh(!1,0.5,w,w,w,w)],u),C.a7,w,C.d,C.j,w,C.o),!1,w,v)],u),C.f,w,C.d,C.j,w,C.o)},
dT0(d){var x=A.b([],y.e)
C.c.u(D.cQD,new B.ds4(this,x,d))
return x},
dT_(d,e){var x=this,w=null,v=A.q(d).ax,u=v.CW
v=u==null?v.y:u
u=x.d.bs
u=x.c!=null?u.cx===e:u.cy===e
return new A.nJ(A.a4(w,w,w,w,A.ev(C.q,A.S(A.b([new A.m(25,25,A.fn(A.q(d).ax.y,!1,w,w,w,!1,w,w,new B.ds2(x,d,e),w,w,new A.ec(0,C.ab),w,w,!1,u,w),w),new A.m(2,w,w,w),new A.dh(!0,0.5,0,w,w,w),new A.m(2,w,w,w),A.v(A.e(e.b+"PhoneNumber",w,w,!0),w,!1,!1,w,!1,w,!1,w,!1,!1,!1,!0,1,w,!1,!1,!1,14,w,w,!1,"")],y.e),C.f,w,C.d,C.j,0,w,w),C.p,C.aI),C.p,v,w,0,!1,w,w,w,new A.cV(8,0,0,6),!1,new B.ds3(x,d,e),w,new A.x(10,2,10,2),5,w,!1,!1,!1,w),w)},
avx(d,e){return this.dgU(d,e)},
dgU(d,e){var x=0,w=A.l(y.f),v=this,u,t,s,r
var $async$avx=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:s=v.d
r=s.bs
if(v.c!=null){u=A.a0m(r.M())
u.cx=e
t=u}else{u=A.a0m(r.M())
u.cy=e
t=u}A.cx()
$.bR().aJN(d,t,s)
return A.j(null,w)}})
return A.k($async$avx,w)},
avw(d){return this.dgT(d)},
dgT(d){var x=0,w=A.l(y.f),v=this,u,t,s,r
var $async$avw=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=v.d
r=s.bs
if(v.c!=null){u=A.a0m(r.M())
u.c=!A.a0m(s.bs.M()).c
t=u}else{u=A.a0m(r.M())
u.d=!A.a0m(s.bs.M()).d
t=u}A.cx()
$.bR().aJN(d,t,s)
return A.j(null,w)}})
return A.k($async$avw,w)}}
var z=a.updateTypes([])
B.drZ.prototype={
$0(){return this.a.avj(this.b)},
$S:2}
B.ds_.prototype={
$2(d,e){return this.bRu(d,e)},
bRu(d,e){var x=0,w=A.l(y.f),v,u=this
var $async$$2=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.avj(u.b),$async$$2)
case 3:v=g
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$2,w)},
$S:14}
B.ds0.prototype={
$0(){return this.a.avw(this.b)},
$S:2}
B.ds1.prototype={
$2(d,e){return this.bRv(d,e)},
bRv(d,e){var x=0,w=A.l(y.f),v,u=this
var $async$$2=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.avw(u.b),$async$$2)
case 3:v=g
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$2,w)},
$S:14}
B.ds4.prototype={
$1(d){this.b.push(this.a.dT_(this.c,d))},
$S:2931}
B.ds3.prototype={
$0(){return this.a.avx(this.b,this.c)},
$S:2}
B.ds2.prototype={
$1(d){return this.a.avx(this.b,this.c)},
$S:17};(function inheritance(){var x=a.inheritMany
x(A.r,[B.bDL,B.bDH,B.bDI])
x(A.aO,[B.drZ,B.ds0,B.ds3])
x(A.bZ,[B.ds_,B.ds1])
x(A.aN,[B.ds4,B.ds2])})()
A.aG(b.typeUniverse,JSON.parse('{"bDL":{"r":[],"f":[]},"bDH":{"r":[],"f":[]},"bDI":{"r":[],"f":[]}}'))
var y={e:A.t("F<f>"),j:A.t("iM"),f:A.t("~")};(function constants(){var x=a.makeConstList
D.cQD=x([C.aKo,C.t1],A.t("F<apc>"))})()};
(a=>{a["0TNOL+EZNpwAEI8mOIYJ8zzY3EY="]=a.current})($__dart_deferred_initializers__);