((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
jkZ(d,e,f,g,h,i,j){return new B.bPP(d,j,h,i,e,f,g,null)},
bPP:function bPP(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bPL:function bPL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dOx:function dOx(d,e){this.a=d
this.b=e},
dOy:function dOy(d,e){this.a=d
this.b=e},
bPM:function bPM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dOz:function dOz(d,e){this.a=d
this.b=e},
dOA:function dOA(d,e){this.a=d
this.b=e},
dOD:function dOD(d,e,f){this.a=d
this.b=e
this.c=f},
dOC:function dOC(d,e,f){this.a=d
this.b=e
this.c=f},
dOB:function dOB(d,e,f){this.a=d
this.b=e
this.c=f}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[566],B)
D=c[1145]
B.bPP.prototype={
l(d){var x,w,v,u,t,s,r,q,p=this,o=null
A.bZ(d,!0,y.j)
x=!p.f
w=x?new A.m(o,o,o,o):new B.bPL(p.e,p.d,p.x,o)
x=x?new A.m(o,o,o,o):new B.bPM(p.e,p.d,p.x,o)
v=p.x
if(v)u=A.q(d).ax.k2
else{u=A.q(d).ax
t=u.CW
u=t==null?u.y:t}t=p.d
s=t.x1
if(s!=null&&p.r)s="\n\n"+s
else{s=t.to
s=s!=null&&p.e===C.ft?"\n\n"+s:""}s=A.a1(p.c,"CUSTOM_TEXT",s)
r=A.qx(new A.V(Date.now(),0,!1),!0)
s=A.a1(s,"OLDDATE",r)
r=A.qx(A.dV(new A.V(Date.now(),0,!1),A.a6(0,2,0,0,0,0)),!0)
s=A.a1(s,"NEWDATE",r)
r=A.qx(new A.V(Date.now(),0,!1),!0)
s=A.a1(s,"DATE",r)
r=t.go
s=A.a1(s,"WORKERNAME",r)
r=A.d("example",o,o,!0)
s=A.a1(s,"TREATMENTNAME",r)
if(p.gcpL()){r=A.d("atAdrees",o,o,!0)
t=t.ch
q=$.B().a.k2
t=(t.e?q:t).a.a
t=A.a1(r,"ADRESS",t)+" "}else t=""
t=A.a1(s,"ADRESS",t)
if(p.gcq1()){s=A.d("toDetails",o,o,!0)
r=A.iz(p.geo_(0))
s=" "+A.a1(s,"PHONE",r)}else s=""
t=A.a1(t,"PHONE",s)
s=$.B().a.k4
t=A.a1(t,"BUSINESSNAME",s)
s=A.YO().gaQ8()
t=A.a1(t,"LINK","https://simpletor.app/"+s+"...")
s=p.w
if(s==null)s=A.d("client",o,o,!0)
return A.H(A.b([w,x,A.a2(o,o,0.3,o,o,A.u(A.a1(t,"NAME",s),C.B,!1,!1,o,!1,o,!1,o,!1,!1,v,!v,1,o,!1,!1,!1,15,o,o,!1,""),C.p,u,o,0,!1,o,o,o,o,new A.z(10,10,10,10),!1,o,o,new A.z(10,10,10,10),15,o,!1,!1,!1,o)],y.e),C.f,o,C.c,C.i,o,C.o)},
gcq1(){if(!this.f)return!1
var x=this.d.bE
if(this.e!=null)return x.c
else return x.d},
gcpL(){if(!this.f)return!1
var x=this.d.bE
if(this.e!=null)return x.a
else return x.b},
geo_(d){var x=this.d,w=x.bE
switch((this.e!=null?w.cy:w.db).a){case 1:return x.b
case 0:return $.B().a.db}}}
B.bPL.prototype={
l(d){var x=this,w=null,v=x.d,u=v.ch,t=$.B().a.k2
u=(u.e?t:u).a.a===""?0.6:1
v=v.bE
v=x.c!=null?v.a:v.b
return A.dq(new A.bN(A.a8(!1,w,!0,!0,!0,!1,C.C,w,!0,!1,C.jC,75,!0,w,!1,!1,w,w,w,"adress",!1,!1,!1,!0,w,w,w,new B.dOx(x,d),x.e,w,w,!0,!1,w,w,!0,w,w,w,w,!0,!0,w,new A.cQ(v,new B.dOy(x,d),w),w,w,!0,w,0.3),w,!1,w),u)},
aCE(d){return this.dJg(d)},
dJg(d){var x=0,w=A.l(y.f),v,u=this,t,s,r,q,p,o
var $async$aCE=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=u.d
q=r.ch
p=$.B().a
o=p.k2
if((q.e?o:q).a.a===""){r=p.a1
q=$.b2().aL$.a.gbe()
new A.R(A.d(r.b.p(0,q)?"firstPutAdressManager":"firstPutAdress",null,null,!0),C.r,C.u,C.ax,d).A()
x=1
break}q=r.bE
if(u.c!=null){t=A.a0J(q.K())
t.a=!A.a0J(r.bE.K()).a
s=t}else{t=A.a0J(q.K())
t.b=!A.a0J(r.bE.K()).b
s=t}A.co()
$.bW().aSj(d,s,r)
case 1:return A.j(v,w)}})
return A.k($async$aCE,w)}}
B.bPM.prototype={
l(d){var x=this,w=null,v=x.c!=null,u=x.d.bE,t=v?u.c:u.d
t=A.a8(!1,w,!0,!0,!0,!1,C.C,w,!0,!1,C.l1,74,!0,w,!1,!1,w,w,w,"phoneNumber",!1,!1,!1,!0,w,w,w,new B.dOz(x,d),x.e,w,w,!0,!1,w,w,!0,w,w,w,w,!0,!0,w,new A.cQ(t,new B.dOA(x,d),w),w,w,!0,w,0.3)
v=v?u.c:u.d
u=y.e
return A.H(A.b([new A.bN(t,w,!1,w),A.dE(C.S,0,A.H(A.b([new A.m(w,10,w,w),new A.D(C.kW,A.u(A.d("choosePhoneDestination",w,w,!0),w,!1,!1,w,!1,w,!1,w,!1,!1,!0,!1,0.7,w,!1,!1,!1,13,w,w,!1,""),w),new A.m(w,10,w,w),A.e_(C.an,x.eok(d),C.b9,C.ag,C.an,0,0,w),new A.m(w,4,w,w),new A.di(!1,0.5,w,w,w,w)],u),C.a2,w,C.c,C.i,w,C.o),!1,w,v)],u),C.f,w,C.c,C.i,w,C.o)},
eok(d){var x=A.b([],y.e)
C.d.v(D.d20,new B.dOD(this,x,d))
return x},
eoj(d,e){var x=this,w=null,v=A.q(d).ax,u=v.CW
v=u==null?v.y:u
u=x.d.bE
u=x.c!=null?u.cy===e:u.db===e
return new A.lQ(A.a2(w,w,0.3,w,w,A.eX(C.q,A.S(A.b([new A.m(25,25,A.fa(A.q(d).ax.y,!1,w,w,w,!1,w,w,new B.dOB(x,d,e),w,w,new A.em(0,C.ac),w,w,!1,u,w),w),new A.m(2,w,w,w),new A.di(!0,0.5,0,w,w,w),new A.m(2,w,w,w),A.u(A.d(e.b+"PhoneNumber",w,w,!0),w,!1,!1,w,!1,w,!1,w,!1,!1,!1,!0,1,w,!1,!1,!1,14,w,w,!1,"")],y.e),C.f,w,C.c,C.i,0,w,w),C.p,C.aN),C.p,v,w,0,!1,w,w,w,w,new A.cZ(8,0,0,6),!1,new B.dOC(x,d,e),w,new A.z(10,2,10,2),5,w,!1,!1,!1,w),w)},
aCS(d,e){return this.dJz(d,e)},
dJz(d,e){var x=0,w=A.l(y.f),v=this,u,t,s,r
var $async$aCS=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:s=v.d
r=s.bE
if(v.c!=null){u=A.a0J(r.K())
u.cy=e
t=u}else{u=A.a0J(r.K())
u.db=e
t=u}A.co()
$.bW().aSj(d,t,s)
return A.j(null,w)}})
return A.k($async$aCS,w)},
aCR(d){return this.dJy(d)},
dJy(d){var x=0,w=A.l(y.f),v=this,u,t,s,r
var $async$aCR=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=v.d
r=s.bE
if(v.c!=null){u=A.a0J(r.K())
u.c=!A.a0J(s.bE.K()).c
t=u}else{u=A.a0J(r.K())
u.d=!A.a0J(s.bE.K()).d
t=u}A.co()
$.bW().aSj(d,t,s)
return A.j(null,w)}})
return A.k($async$aCR,w)}}
var z=a.updateTypes([])
B.dOx.prototype={
$0(){return this.a.aCE(this.b)},
$S:2}
B.dOy.prototype={
$2(d,e){return this.c61(d,e)},
c61(d,e){var x=0,w=A.l(y.f),v,u=this
var $async$$2=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:x=3
return A.c(u.a.aCE(u.b),$async$$2)
case 3:v=g
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$2,w)},
$S:14}
B.dOz.prototype={
$0(){return this.a.aCR(this.b)},
$S:2}
B.dOA.prototype={
$2(d,e){return this.c62(d,e)},
c62(d,e){var x=0,w=A.l(y.f),v,u=this
var $async$$2=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:x=3
return A.c(u.a.aCR(u.b),$async$$2)
case 3:v=g
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$2,w)},
$S:14}
B.dOD.prototype={
$1(d){this.b.push(this.a.eoj(this.c,d))},
$S:3265}
B.dOC.prototype={
$0(){return this.a.aCS(this.b,this.c)},
$S:2}
B.dOB.prototype={
$1(d){return this.a.aCS(this.b,this.c)},
$S:19};(function inheritance(){var x=a.inheritMany
x(A.r,[B.bPP,B.bPL,B.bPM])
x(A.aI,[B.dOx,B.dOz,B.dOC])
x(A.bF,[B.dOy,B.dOA])
x(A.aF,[B.dOD,B.dOB])})()
A.av(b.typeUniverse,JSON.parse('{"bPP":{"r":[],"f":[]},"bPL":{"r":[],"f":[]},"bPM":{"r":[],"f":[]}}'))
var y={e:A.t("C<f>"),j:A.t("j3"),f:A.t("~")};(function constants(){var x=a.makeConstList
D.d20=x([C.aTO,C.v9],A.t("C<at5>"))})()};
(a=>{a["SI0ctOvJk3qTDncJd7cQDuqiqN0="]=a.current})($__dart_deferred_initializers__);