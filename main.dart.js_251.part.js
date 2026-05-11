((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cjv(d,e,f,g,h){return new B.bfH(f,h,g,d,e,null)},
bfH:function bfH(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i},
cQQ:function cQQ(d){var _=this
_.e=_.d=null
_.r=_.f=!1
_.w=d
_.c=_.a=null},
hrt:function hrt(d,e){this.a=d
this.b=e},
hru:function hru(d){this.a=d},
hrv:function hrv(d){this.a=d},
hrs:function hrs(d){this.a=d},
hrr:function hrr(d){this.a=d},
iit(d,e,f){return B.jrz(d,e,f)},
jrz(d,e,f){var x=0,w=A.l(y.n),v,u,t,s,r,q,p,o,n,m,l,k
var $async$iit=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:l={}
k=e!=null
if(!k||e.length===0)p=f==null||f.length===0
else p=!1
if(p){v=null
x=1
break}u=new A.ck(new A.bq($.bP,y.m),y.x)
l.a=null
o=document.createElement("video")
o.muted=!0
o.setAttribute("playsinline","true")
o.setAttribute("preload","auto")
t=o
s=new B.hN1(l)
p=y.c.c
A.lF(t,"error",new B.hN2(u,s),!1,p)
A.lF(t,"canplay",new B.hN3(u,t,s),!1,p)
try{if(k&&!C.Y.gal(e)){if(d.length!==0)n=C.m.p(d,";")?C.m.b8(C.c.ga5(d.split(";"))):d
else n="video/mp4"
r=n
q=A.aE9([e],r)
k=(self.URL||self.webkitURL).createObjectURL(q)
k.toString
l.a=k
t.src=k}else{f.toString
t.src=f}J.inN(t)}catch(j){s.$0()
J.inz(u,null)}v=u.a
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$iit,w)},
hN1:function hN1(d){this.a=d},
hN2:function hN2(d,e){this.a=d
this.b=e},
hN3:function hN3(d,e,f){this.a=d
this.b=e
this.c=f},
bul(d,e,f){var x=0,w=A.l(y.v),v,u
var $async$bul=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:u=(self.URL||self.webkitURL).createObjectURL(A.aE9([d],null))
u.toString
v=A.i8G(u)
v.setAttribute("download",f)
v.click();(self.URL||self.webkitURL).revokeObjectURL(u)
return A.j(null,w)}})
return A.k($async$bul,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[503],B)
D=c[830]
B.bfH.prototype={
V(){return new B.cQQ(new A.b2(null,y.z))}}
B.cQQ.prototype={
ab(){this.ag()
this.a8R()},
bP(d){var x,w,v,u,t=this
t.c7(d)
x=t.a
w=!0
if(d.e==x.e){v=d.f
u=x.f
if(v==null?u==null:v===u){x=x.c
x=d.c!=x}else x=w}else x=w
if(x){t.e=null
t.r=!1
t.d=null
t.a8R()}},
a8R(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a8R=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.a
m=n.c
if(m!=null&&m.length!==0){x=1
break}m=n.e
if(!(m!=null&&m.length!==0)){n=n.f
p=n!=null&&!C.Y.gal(n)}else p=!0
if(!p){x=1
break}u=4
n=s.a
m=n.f
x=7
return A.d(B.iit(n.r,m,n.e),$async$a8R)
case 7:r=e
if(s.c==null){x=1
break}if(r!=null&&!C.Y.gal(r))s.a3(new B.hrt(s,r))
else s.a3(new B.hru(s))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aH(l)
A.Xs().$1("VideoPreviewThumbnail: Web thumbnail failed: "+A.R(q))
if(s.c!=null)s.a3(new B.hrv(s))
x=6
break
case 3:x=2
break
case 6:x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a8R,w)},
v(){this.f=!0
this.aJ()},
l(d){var x=null,w=this.a.w,v=this.cpc(d),u=A.bF(100,C.a9.gk(0)>>>16&255,C.a9.gk(0)>>>8&255,C.a9.gk(0)&255),t=this.a.w
return A.a4(x,x,x,x,new A.bS(C.aB,x,C.t6,C.X,A.b([v,A.aY(A.a4(x,x,x,x,A.bO(C.bTO,C.H,x,x,t*0.5),C.p,u,x,0,!1,x,x,x,x,!1,x,x,x,t*0.35,x,!1,!1,!1,x),x,x)],y.u),x),C.bk,x,x,0,!1,x,w,x,x,!1,x,x,x,8,x,!1,!1,!1,w)},
cpc(d){var x,w,v=this
v.a.toString
x=v.e
if(x!=null&&!C.Y.gal(x)){x=v.e
x.toString
return A.a7t(x,null,C.aN,1/0,1/0)}x=v.a
w=x.c
if(w!=null&&w.length!==0)return A.o2(w,$.ms().b,new B.hrr(v),C.aN,1/0,w,null,new B.hrs(v),1/0)
if(v.r)return v.beH(d)
w=x.e
if(!(w!=null&&w.length!==0)){x=x.f
x=x!=null&&!C.Y.gal(x)}else x=!0
if(x){x=v.aLn(d)
return new A.ip(x,v.w)}return v.aLn(d)},
beH(d){var x=null,w=A.cw(8)
return A.ar(x,A.bO(D.bWj,C.dt,x,x,this.a.w*0.4),C.p,x,x,new A.bx(C.jV,x,x,w,x,x,x,C.aw),x,1/0,x,x,x,x,x,1/0)},
aLn(d){var x=null
return A.f_(x,A.a4(x,x,x,x,x,C.p,A.q(d).ax.k2,x,0,!1,x,1/0,x,x,!1,x,x,x,8,x,!1,!1,!1,1/0),x,1,x,x,x,x,x,10)}}
var z=a.updateTypes([])
B.hrt.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.hru.prototype={
$0(){return this.a.r=!0},
$S:0}
B.hrv.prototype={
$0(){return this.a.r=!0},
$S:0}
B.hrs.prototype={
$2(d,e){return this.a.aLn(d)},
$S:189}
B.hrr.prototype={
$3(d,e,f){return this.a.beH(d)},
$S:182}
B.hN1.prototype={
$0(){var x=this.a,w=x.a
if(w!=null){(self.URL||self.webkitURL).revokeObjectURL(w)
x.a=null}},
$S:0}
B.hN2.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0){this.b.$0()
x.eu(0,null)}},
$S:74}
B.hN3.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.a,l=m.a
if((l.a&30)!==0)return
try{q=n.b
p=q.videoWidth
p.toString
x=p
p=q.videoHeight
p.toString
w=p
if(x<=0||w<=0){n.c.$0()
m.eu(0,null)
return}v=A.i9q(w,x)
p=v.getContext("2d")
p.toString
u=p
J.iSc(u,q,0,0,x,w)
t=J.iS3(v,"image/png",null)
n.c.$0()
s=J.dU(t,",")?C.c.ga7(J.i8u(t,",")):t
r=C.jP.cm(s)
m.eu(0,new Uint8Array(A.ch(r)))}catch(o){n.c.$0()
if((l.a&30)===0)m.eu(0,null)}},
$S:74};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bfH,A.X)
x(B.cQQ,A.Y)
w(A.aN,[B.hrt,B.hru,B.hrv,B.hN1])
x(B.hrs,A.bZ)
w(A.aO,[B.hrr,B.hN2,B.hN3])})()
A.aG(b.typeUniverse,JSON.parse('{"bfH":{"X":[],"f":[]},"cQQ":{"Y":["bfH"]}}'))
var y={u:A.t("F<f>"),z:A.t("b2<Y<X>>"),x:A.t("ck<eJ?>"),c:A.t("aP_<ey>"),m:A.t("bq<eJ?>"),n:A.t("eJ?"),v:A.t("~")};(function constants(){D.bWj=new A.am(983678,"MaterialIcons",null,!1)})()};
(a=>{a["uFMoPamsDADC9koVYEKg68NqXm0="]=a.current})($__dart_deferred_initializers__);