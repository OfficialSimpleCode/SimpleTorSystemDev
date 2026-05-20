((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ckA(d,e,f,g,h){return new B.bgj(f,h,g,d,e,null)},
bgj:function bgj(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i},
cRZ:function cRZ(d){var _=this
_.e=_.d=null
_.r=_.f=!1
_.w=d
_.c=_.a=null},
huo:function huo(d,e){this.a=d
this.b=e},
hup:function hup(d){this.a=d},
huq:function huq(d){this.a=d},
hun:function hun(d){this.a=d},
hum:function hum(d){this.a=d},
ilN(d,e,f){return B.jvn(d,e,f)},
jvn(d,e,f){var x=0,w=A.l(y.n),v,u,t,s,r,q,p,o,n,m,l,k
var $async$ilN=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:l={}
k=e!=null
if(!k||e.length===0)p=f==null||f.length===0
else p=!1
if(p){v=null
x=1
break}u=new A.cj(new A.bl($.bO,y.m),y.x)
l.a=null
o=document.createElement("video")
o.muted=!0
o.setAttribute("playsinline","true")
o.setAttribute("preload","auto")
t=o
s=new B.hQg(l)
p=y.c.c
A.kL(t,"error",new B.hQh(u,s),!1,p)
A.kL(t,"canplay",new B.hQi(u,t,s),!1,p)
try{if(k&&!C.Y.gal(e)){if(d.length!==0)n=C.m.p(d,";")?C.m.b8(C.c.ga7(d.split(";"))):d
else n="video/mp4"
r=n
q=A.at8([e],r)
k=(self.URL||self.webkitURL).createObjectURL(q)
k.toString
l.a=k
t.src=k}else{f.toString
t.src=f}J.ir9(t)}catch(j){s.$0()
J.iqV(u,null)}v=u.a
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$ilN,w)},
hQg:function hQg(d){this.a=d},
hQh:function hQh(d,e){this.a=d
this.b=e},
hQi:function hQi(d,e,f){this.a=d
this.b=e
this.c=f},
bvf(d,e,f){var x=0,w=A.l(y.v),v,u
var $async$bvf=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:u=(self.URL||self.webkitURL).createObjectURL(A.at8([d],null))
u.toString
v=A.iru(u)
v.setAttribute("download",f)
v.click();(self.URL||self.webkitURL).revokeObjectURL(u)
return A.j(null,w)}})
return A.k($async$bvf,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[504],B)
D=c[846]
B.bgj.prototype={
U(){return new B.cRZ(new A.b2(null,y.z))}}
B.cRZ.prototype={
ab(){this.ah()
this.a97()},
bO(d){var x,w,v,u,t=this
t.c6(d)
x=t.a
w=!0
if(d.e==x.e){v=d.f
u=x.f
if(v==null?u==null:v===u){x=x.c
x=d.c!=x}else x=w}else x=w
if(x){t.e=null
t.r=!1
t.d=null
t.a97()}},
a97(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a97=A.h(function(d,e){if(d===1){t.push(e)
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
return A.d(B.ilN(n.r,m,n.e),$async$a97)
case 7:r=e
if(s.c==null){x=1
break}if(r!=null&&!C.Y.gal(r))s.a3(new B.huo(s,r))
else s.a3(new B.hup(s))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aH(l)
A.Xw().$1("VideoPreviewThumbnail: Web thumbnail failed: "+A.T(q))
if(s.c!=null)s.a3(new B.huq(s))
x=6
break
case 3:x=2
break
case 6:x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a97,w)},
v(){this.f=!0
this.aF()},
l(d){var x=null,w=this.a.w,v=this.cqu(d),u=A.bL(100,C.a9.gk(0)>>>16&255,C.a9.gk(0)>>>8&255,C.a9.gk(0)&255),t=this.a.w
return A.a4(x,x,x,x,new A.bQ(C.aB,x,C.q0,C.X,A.b([v,A.aX(A.a4(x,x,x,x,A.bN(C.bUI,C.H,x,x,t*0.5),C.p,u,x,0,!1,x,x,x,x,!1,x,x,x,t*0.35,x,!1,!1,!1,x),x,x)],y.u),x),C.bj,x,x,0,!1,x,w,x,x,!1,x,x,x,8,x,!1,!1,!1,w)},
cqu(d){var x,w,v=this
v.a.toString
x=v.e
if(x!=null&&!C.Y.gal(x)){x=v.e
x.toString
return A.a3T(x,null,C.aN,1/0,1/0)}x=v.a
w=x.c
if(w!=null&&w.length!==0)return A.od(w,$.lx().b,new B.hum(v),C.aN,1/0,w,null,new B.hun(v),1/0)
if(v.r)return v.bfn(d)
w=x.e
if(!(w!=null&&w.length!==0)){x=x.f
x=x!=null&&!C.Y.gal(x)}else x=!0
if(x){x=v.aLX(d)
return new A.is(x,v.w)}return v.aLX(d)},
bfn(d){var x=null,w=A.cp(8)
return A.ar(x,A.bN(D.bXe,C.du,x,x,this.a.w*0.4),C.p,x,x,new A.bs(C.k2,x,x,w,x,x,x,C.au),x,1/0,x,x,x,x,x,1/0)},
aLX(d){var x=null
return A.f1(x,A.a4(x,x,x,x,x,C.p,A.q(d).ax.k2,x,0,!1,x,1/0,x,x,!1,x,x,x,8,x,!1,!1,!1,1/0),x,1,x,x,x,x,x,10)}}
var z=a.updateTypes([])
B.huo.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.hup.prototype={
$0(){return this.a.r=!0},
$S:0}
B.huq.prototype={
$0(){return this.a.r=!0},
$S:0}
B.hun.prototype={
$2(d,e){return this.a.aLX(d)},
$S:185}
B.hum.prototype={
$3(d,e,f){return this.a.bfn(d)},
$S:183}
B.hQg.prototype={
$0(){var x=this.a,w=x.a
if(w!=null){(self.URL||self.webkitURL).revokeObjectURL(w)
x.a=null}},
$S:0}
B.hQh.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0){this.b.$0()
x.eg(0,null)}},
$S:71}
B.hQi.prototype={
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
m.eg(0,null)
return}v=A.dq_(w,x)
p=v.getContext("2d")
p.toString
u=p
J.iVV(u,q,0,0,x,w)
t=J.iVL(v,"image/png",null)
n.c.$0()
s=J.dQ(t,",")?C.c.gaa(J.ibL(t,",")):t
r=C.jY.ck(s)
m.eg(0,new Uint8Array(A.ci(r)))}catch(o){n.c.$0()
if((l.a&30)===0)m.eg(0,null)}},
$S:71};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bgj,A.W)
x(B.cRZ,A.Y)
w(A.aO,[B.huo,B.hup,B.huq,B.hQg])
x(B.hun,A.bZ)
w(A.aN,[B.hum,B.hQh,B.hQi])})()
A.aG(b.typeUniverse,JSON.parse('{"bgj":{"W":[],"f":[]},"cRZ":{"Y":["bgj"]}}'))
var y={u:A.t("F<f>"),z:A.t("b2<Y<W>>"),x:A.t("cj<ey?>"),c:A.t("aPl<eB>"),m:A.t("bl<ey?>"),n:A.t("ey?"),v:A.t("~")};(function constants(){D.bXe=new A.an(983678,"MaterialIcons",null,!1)})()};
(a=>{a["5D8zKsPXmDpQK75LpYAWVhRud7M="]=a.current})($__dart_deferred_initializers__);