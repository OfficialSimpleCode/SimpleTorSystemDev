((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
itb(d,e,f,g,h,i,j){return new B.bDK(d,j,h,i,e,f,g,null)},
bDK:function bDK(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bDG:function bDG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
drY:function drY(d,e){this.a=d
this.b=e},
drZ:function drZ(d,e){this.a=d
this.b=e},
bDH:function bDH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ds_:function ds_(d,e){this.a=d
this.b=e},
ds0:function ds0(d,e){this.a=d
this.b=e},
ds3:function ds3(d,e,f){this.a=d
this.b=e
this.c=f},
ds2:function ds2(d,e,f){this.a=d
this.b=e
this.c=f},
ds1:function ds1(d,e,f){this.a=d
this.b=e
this.c=f}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[455],B)
D=c[834]
B.bDK.prototype={
l(d){var x,w,v,u,t,s,r,q,p=this,o=null
A.bS(d,!0,y.j)
x=!p.f
w=x?new A.m(o,o,o,o):new B.bDG(p.e,p.d,p.x,o)
x=x?new A.m(o,o,o,o):new B.bDH(p.e,p.d,p.x,o)
v=p.x
if(v)u=A.q(d).ax.k2
else{u=A.q(d).ax
t=u.CW
u=t==null?u.y:t}t=p.d
s=t.to
if(s!=null&&p.r)s="\n\n"+s
else{s=t.ry
s=s!=null&&p.e===C.f0?"\n\n"+s:""}s=A.a3(p.c,"CUSTOM_TEXT",s)
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
if(p.gc8Z()){r=A.e("atAdrees",o,o,!0)
t=t.ch
q=$.C().a.k1
t=(t.d?q:t).a.a
t=A.a3(r,"ADRESS",t)+" "}else t=""
t=A.a3(s,"ADRESS",t)
if(p.gc9e()){s=A.e("toDetails",o,o,!0)
r=A.ig(p.gdSs(0))
s=" "+A.a3(s,"PHONE",r)}else s=""
t=A.a3(t,"PHONE",s)
s=$.C().a.k3
t=A.a3(t,"BUSINESSNAME",s)
s=A.ox().gaHD()
t=A.a3(t,"LINK","https://simpletor.app/"+s+"...")
s=p.w
if(s==null)s=A.e("client",o,o,!0)
return A.G(A.b([w,x,A.a4(o,o,o,o,A.v(A.a3(t,"NAME",s),C.C,!1,!1,o,!1,o,!1,o,!1,!1,v,!v,1,o,!1,!1,!1,15,o,o,!1,""),C.p,u,o,0,!1,o,o,o,new A.x(10,10,10,10),!1,o,o,new A.x(10,10,10,10),15,o,!1,!1,!1,o)],y.e),C.f,o,C.d,C.j,o,C.o)},
gc9e(){if(!this.f)return!1
var x=this.d.bt
if(this.e!=null)return x.c
else return x.d},
gc8Z(){if(!this.f)return!1
var x=this.d.bt
if(this.e!=null)return x.a
else return x.b},
gdSs(d){var x=this.d,w=x.bt
switch((this.e!=null?w.cx:w.cy).a){case 1:return x.b
case 0:return $.C().a.cy}}}
B.bDG.prototype={
l(d){var x=this,w=null,v=x.d,u=v.ch,t=$.C().a.k1
u=(u.d?t:u).a.a===""?0.6:1
v=v.bt
v=x.c!=null?v.a:v.b
return A.e4(new A.cR(A.aj(w,!0,!0,!0,!1,C.E,w,!0,!1,C.iK,75,!0,w,!1,!1,w,w,w,"adress",!1,!1,!1,!0,w,w,w,new B.drY(x,d),x.e,w,w,!0,!1,w,w,!0,w,w,w,w,!0,!0,w,new A.cX(v,new B.drZ(x,d),w),w,w,!0,w,0.3),w,!1,w),u)},
avd(d){return this.dgk(d)},
dgk(d){var x=0,w=A.l(y.f),v,u=this,t,s,r,q,p,o
var $async$avd=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=u.d
q=r.ch
p=$.C().a
o=p.k1
if((q.d?o:q).a.a===""){r=p.Z
q=$.bc().b3$.a.gbm()
new A.U(A.e(r.b.p(0,q)?"firstPutAdressManager":"firstPutAdress",null,null,!0),C.t,C.v,C.aE,d).D()
x=1
break}q=r.bt
if(u.c!=null){t=A.a0m(q.L())
t.a=!A.a0m(r.bt.L()).a
s=t}else{t=A.a0m(q.L())
t.b=!A.a0m(r.bt.L()).b
s=t}A.cx()
$.bR().aJJ(d,s,r)
case 1:return A.j(v,w)}})
return A.k($async$avd,w)}}
B.bDH.prototype={
l(d){var x=this,w=null,v=x.c!=null,u=x.d.bt,t=v?u.c:u.d
t=A.aj(w,!0,!0,!0,!1,C.E,w,!0,!1,C.kc,74,!0,w,!1,!1,w,w,w,"phoneNumber",!1,!1,!1,!0,w,w,w,new B.ds_(x,d),x.e,w,w,!0,!1,w,w,!0,w,w,w,w,!0,!0,w,new A.cX(t,new B.ds0(x,d),w),w,w,!0,w,0.3)
v=v?u.c:u.d
u=y.e
return A.G(A.b([new A.cR(t,w,!1,w),A.d5(C.T,A.G(A.b([new A.m(w,10,w,w),new A.H(C.k6,A.v(A.e("choosePhoneDestination",w,w,!0),w,!1,!1,w,!1,w,!1,w,!1,!1,!0,!1,0.7,w,!1,!1,!1,13,w,w,!1,""),w),new A.m(w,10,w,w),A.em(C.aw,x.dSH(d),C.b9,C.ai,C.aw,0,0,w),new A.m(w,4,w,w),new A.df(!1,0.5,w,w,w,w)],u),C.a8,w,C.d,C.j,w,C.o),!1,w,v)],u),C.f,w,C.d,C.j,w,C.o)},
dSH(d){var x=A.b([],y.e)
C.c.u(D.cQr,new B.ds3(this,x,d))
return x},
dSG(d,e){var x=this,w=null,v=A.q(d).ax,u=v.CW
v=u==null?v.y:u
u=x.d.bt
u=x.c!=null?u.cx===e:u.cy===e
return new A.mm(A.a4(w,w,w,w,A.ep(C.q,A.S(A.b([new A.m(25,25,A.fn(A.q(d).ax.y,!1,w,w,w,!1,w,w,new B.ds1(x,d,e),w,w,new A.eb(0,C.ab),w,w,!1,u,w),w),new A.m(2,w,w,w),new A.df(!0,0.5,0,w,w,w),new A.m(2,w,w,w),A.v(A.e(e.b+"PhoneNumber",w,w,!0),w,!1,!1,w,!1,w,!1,w,!1,!1,!1,!0,1,w,!1,!1,!1,14,w,w,!1,"")],y.e),C.f,w,C.d,C.j,0,w,w),C.p,C.aH),C.p,v,w,0,!1,w,w,w,new A.cW(8,0,0,6),!1,new B.ds2(x,d,e),w,new A.x(10,2,10,2),5,w,!1,!1,!1,w),w)},
avs(d,e){return this.dgA(d,e)},
dgA(d,e){var x=0,w=A.l(y.f),v=this,u,t,s,r
var $async$avs=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:s=v.d
r=s.bt
if(v.c!=null){u=A.a0m(r.L())
u.cx=e
t=u}else{u=A.a0m(r.L())
u.cy=e
t=u}A.cx()
$.bR().aJJ(d,t,s)
return A.j(null,w)}})
return A.k($async$avs,w)},
avr(d){return this.dgz(d)},
dgz(d){var x=0,w=A.l(y.f),v=this,u,t,s,r
var $async$avr=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=v.d
r=s.bt
if(v.c!=null){u=A.a0m(r.L())
u.c=!A.a0m(s.bt.L()).c
t=u}else{u=A.a0m(r.L())
u.d=!A.a0m(s.bt.L()).d
t=u}A.cx()
$.bR().aJJ(d,t,s)
return A.j(null,w)}})
return A.k($async$avr,w)}}
var z=a.updateTypes([])
B.drY.prototype={
$0(){return this.a.avd(this.b)},
$S:2}
B.drZ.prototype={
$2(d,e){return this.bRn(d,e)},
bRn(d,e){var x=0,w=A.l(y.f),v,u=this
var $async$$2=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.avd(u.b),$async$$2)
case 3:v=g
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$2,w)},
$S:14}
B.ds_.prototype={
$0(){return this.a.avr(this.b)},
$S:2}
B.ds0.prototype={
$2(d,e){return this.bRo(d,e)},
bRo(d,e){var x=0,w=A.l(y.f),v,u=this
var $async$$2=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.avr(u.b),$async$$2)
case 3:v=g
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$2,w)},
$S:14}
B.ds3.prototype={
$1(d){this.b.push(this.a.dSG(this.c,d))},
$S:2931}
B.ds2.prototype={
$0(){return this.a.avs(this.b,this.c)},
$S:2}
B.ds1.prototype={
$1(d){return this.a.avs(this.b,this.c)},
$S:17};(function inheritance(){var x=a.inheritMany
x(A.r,[B.bDK,B.bDG,B.bDH])
x(A.aN,[B.drY,B.ds_,B.ds2])
x(A.bY,[B.drZ,B.ds0])
x(A.aO,[B.ds3,B.ds1])})()
A.aG(b.typeUniverse,JSON.parse('{"bDK":{"r":[],"f":[]},"bDG":{"r":[],"f":[]},"bDH":{"r":[],"f":[]}}'))
var y={e:A.t("F<f>"),j:A.t("iM"),f:A.t("~")};(function constants(){var x=a.makeConstList
D.cQr=x([C.aKg,C.t0],A.t("F<apc>"))})()};
(a=>{a["8rR8Gh0I/Ev6zIXH6BbC0tvJkGU="]=a.current})($__dart_deferred_initializers__);