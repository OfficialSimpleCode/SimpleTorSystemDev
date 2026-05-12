((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
irX(d,e,f,g,h,i,j){return new B.bDh(d,j,h,i,e,f,g,null)},
bDh:function bDh(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bDd:function bDd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
drj:function drj(d,e){this.a=d
this.b=e},
drk:function drk(d,e){this.a=d
this.b=e},
bDe:function bDe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
drl:function drl(d,e){this.a=d
this.b=e},
drm:function drm(d,e){this.a=d
this.b=e},
drp:function drp(d,e,f){this.a=d
this.b=e
this.c=f},
dro:function dro(d,e,f){this.a=d
this.b=e
this.c=f},
drn:function drn(d,e,f){this.a=d
this.b=e
this.c=f}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[454],B)
D=c[830]
B.bDh.prototype={
l(d){var x,w,v,u,t,s,r,q,p=this,o=null
A.bR(d,!0,y.j)
x=!p.f
w=x?new A.m(o,o,o,o):new B.bDd(p.e,p.d,p.x,o)
x=x?new A.m(o,o,o,o):new B.bDe(p.e,p.d,p.x,o)
v=p.x
if(v)u=A.q(d).ax.k2
else{u=A.q(d).ax
t=u.CW
u=t==null?u.y:t}t=p.d
s=t.to
if(s!=null&&p.r)s="\n\n"+s
else{s=t.ry
s=s!=null&&p.e===C.f0?"\n\n"+s:""}s=A.a3(p.c,"CUSTOM_TEXT",s)
r=A.qh(new A.R(Date.now(),0,!1),!0)
s=A.a3(s,"OLDDATE",r)
r=A.qh(A.dB(new A.R(Date.now(),0,!1),A.a0(0,2,0,0,0,0)),!0)
s=A.a3(s,"NEWDATE",r)
r=A.qh(new A.R(Date.now(),0,!1),!0)
s=A.a3(s,"DATE",r)
r=t.fy
s=A.a3(s,"WORKERNAME",r)
r=A.e("example",o,o,!0)
s=A.a3(s,"TREATMENTNAME",r)
if(p.gc8z()){r=A.e("atAdrees",o,o,!0)
t=t.ch
q=$.C().a.k1
t=(t.d?q:t).a.a
t=A.a3(r,"ADRESS",t)+" "}else t=""
t=A.a3(s,"ADRESS",t)
if(p.gc8P()){s=A.e("toDetails",o,o,!0)
r=A.ig(p.gdRM(0))
s=" "+A.a3(s,"PHONE",r)}else s=""
t=A.a3(t,"PHONE",s)
s=$.C().a.k3
t=A.a3(t,"BUSINESSNAME",s)
s=A.ov().gaHq()
t=A.a3(t,"LINK","https://simpletor.app/"+s+"...")
s=p.w
if(s==null)s=A.e("client",o,o,!0)
return A.G(A.b([w,x,A.a4(o,o,o,o,A.v(A.a3(t,"NAME",s),C.C,!1,!1,o,!1,o,!1,o,!1,!1,v,!v,1,o,!1,!1,!1,15,o,o,!1,""),C.p,u,o,0,!1,o,o,o,new A.x(10,10,10,10),!1,o,o,new A.x(10,10,10,10),15,o,!1,!1,!1,o)],y.e),C.f,o,C.d,C.j,o,C.o)},
gc8P(){if(!this.f)return!1
var x=this.d.bw
if(this.e!=null)return x.c
else return x.d},
gc8z(){if(!this.f)return!1
var x=this.d.bw
if(this.e!=null)return x.a
else return x.b},
gdRM(d){var x=this.d,w=x.bw
switch((this.e!=null?w.cx:w.cy).a){case 1:return x.b
case 0:return $.C().a.cy}}}
B.bDd.prototype={
l(d){var x=this,w=null,v=x.d,u=v.ch,t=$.C().a.k1
u=(u.d?t:u).a.a===""?0.6:1
v=v.bw
v=x.c!=null?v.a:v.b
return A.ec(new A.cR(A.aj(w,!0,!0,!0,!1,C.E,w,!0,!1,C.iK,75,!0,w,!1,!1,w,w,w,"adress",!1,!1,!1,!0,w,w,w,new B.drj(x,d),x.e,w,w,!0,!1,w,w,!0,w,w,w,w,!0,!0,w,new A.cW(v,new B.drk(x,d),w),w,w,!0,w,0.3),w,!1,w),u)},
auZ(d){return this.dfE(d)},
dfE(d){var x=0,w=A.l(y.f),v,u=this,t,s,r,q,p,o
var $async$auZ=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=u.d
q=r.ch
p=$.C().a
o=p.k1
if((q.d?o:q).a.a===""){r=p.Z
q=$.bb().b2$.a.gbl()
new A.U(A.e(r.b.p(0,q)?"firstPutAdressManager":"firstPutAdress",null,null,!0),C.t,C.v,C.aE,d).D()
x=1
break}q=r.bw
if(u.c!=null){t=A.a0i(q.L())
t.a=!A.a0i(r.bw.L()).a
s=t}else{t=A.a0i(q.L())
t.b=!A.a0i(r.bw.L()).b
s=t}A.cx()
$.bQ().aJv(d,s,r)
case 1:return A.j(v,w)}})
return A.k($async$auZ,w)}}
B.bDe.prototype={
l(d){var x=this,w=null,v=x.c!=null,u=x.d.bw,t=v?u.c:u.d
t=A.aj(w,!0,!0,!0,!1,C.E,w,!0,!1,C.ka,74,!0,w,!1,!1,w,w,w,"phoneNumber",!1,!1,!1,!0,w,w,w,new B.drl(x,d),x.e,w,w,!0,!1,w,w,!0,w,w,w,w,!0,!0,w,new A.cW(t,new B.drm(x,d),w),w,w,!0,w,0.3)
v=v?u.c:u.d
u=y.e
return A.G(A.b([new A.cR(t,w,!1,w),A.d5(C.U,A.G(A.b([new A.m(w,10,w,w),new A.H(C.k4,A.v(A.e("choosePhoneDestination",w,w,!0),w,!1,!1,w,!1,w,!1,w,!1,!1,!0,!1,0.7,w,!1,!1,!1,13,w,w,!1,""),w),new A.m(w,10,w,w),A.es(C.ax,x.dS0(d),C.b9,C.ai,C.ax,0,0,w),new A.m(w,4,w,w),new A.dh(!1,0.5,w,w,w,w)],u),C.a8,w,C.d,C.j,w,C.o),!1,w,v)],u),C.f,w,C.d,C.j,w,C.o)},
dS0(d){var x=A.b([],y.e)
C.c.u(D.cPQ,new B.drp(this,x,d))
return x},
dS_(d,e){var x=this,w=null,v=A.q(d).ax,u=v.CW
v=u==null?v.y:u
u=x.d.bw
u=x.c!=null?u.cx===e:u.cy===e
return new A.ml(A.a4(w,w,w,w,A.eo(C.q,A.T(A.b([new A.m(25,25,A.fn(A.q(d).ax.y,!1,w,w,w,!1,w,w,new B.drn(x,d,e),w,w,new A.ea(0,C.ab),w,w,!1,u,w),w),new A.m(2,w,w,w),new A.dh(!0,0.5,0,w,w,w),new A.m(2,w,w,w),A.v(A.e(e.b+"PhoneNumber",w,w,!0),w,!1,!1,w,!1,w,!1,w,!1,!1,!1,!0,1,w,!1,!1,!1,14,w,w,!1,"")],y.e),C.f,w,C.d,C.j,0,w,w),C.p,C.aH),C.p,v,w,0,!1,w,w,w,new A.cV(8,0,0,6),!1,new B.dro(x,d,e),w,new A.x(10,2,10,2),5,w,!1,!1,!1,w),w)},
avc(d,e){return this.dfU(d,e)},
dfU(d,e){var x=0,w=A.l(y.f),v=this,u,t,s,r
var $async$avc=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:s=v.d
r=s.bw
if(v.c!=null){u=A.a0i(r.L())
u.cx=e
t=u}else{u=A.a0i(r.L())
u.cy=e
t=u}A.cx()
$.bQ().aJv(d,t,s)
return A.j(null,w)}})
return A.k($async$avc,w)},
avb(d){return this.dfT(d)},
dfT(d){var x=0,w=A.l(y.f),v=this,u,t,s,r
var $async$avb=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=v.d
r=s.bw
if(v.c!=null){u=A.a0i(r.L())
u.c=!A.a0i(s.bw.L()).c
t=u}else{u=A.a0i(r.L())
u.d=!A.a0i(s.bw.L()).d
t=u}A.cx()
$.bQ().aJv(d,t,s)
return A.j(null,w)}})
return A.k($async$avb,w)}}
var z=a.updateTypes([])
B.drj.prototype={
$0(){return this.a.auZ(this.b)},
$S:2}
B.drk.prototype={
$2(d,e){return this.bR1(d,e)},
bR1(d,e){var x=0,w=A.l(y.f),v,u=this
var $async$$2=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.auZ(u.b),$async$$2)
case 3:v=g
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$2,w)},
$S:14}
B.drl.prototype={
$0(){return this.a.avb(this.b)},
$S:2}
B.drm.prototype={
$2(d,e){return this.bR2(d,e)},
bR2(d,e){var x=0,w=A.l(y.f),v,u=this
var $async$$2=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:x=3
return A.d(u.a.avb(u.b),$async$$2)
case 3:v=g
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$2,w)},
$S:14}
B.drp.prototype={
$1(d){this.b.push(this.a.dS_(this.c,d))},
$S:2922}
B.dro.prototype={
$0(){return this.a.avc(this.b,this.c)},
$S:2}
B.drn.prototype={
$1(d){return this.a.avc(this.b,this.c)},
$S:17};(function inheritance(){var x=a.inheritMany
x(A.r,[B.bDh,B.bDd,B.bDe])
x(A.aN,[B.drj,B.drl,B.dro])
x(A.bZ,[B.drk,B.drm])
x(A.aO,[B.drp,B.drn])})()
A.aG(b.typeUniverse,JSON.parse('{"bDh":{"r":[],"f":[]},"bDd":{"r":[],"f":[]},"bDe":{"r":[],"f":[]}}'))
var y={e:A.t("F<f>"),j:A.t("iM"),f:A.t("~")};(function constants(){var x=a.makeConstList
D.cPQ=x([C.aJI,C.rZ],A.t("F<ap2>"))})()};
(a=>{a["JYiW8XeVJ+DnLXe93joEDbJntYc="]=a.current})($__dart_deferred_initializers__);