((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cjX(d,e,f,g,h){return new B.bfX(f,h,g,d,e,null)},
bfX:function bfX(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i},
cRl:function cRl(d){var _=this
_.e=_.d=null
_.r=_.f=!1
_.w=d
_.c=_.a=null},
hsY:function hsY(d,e){this.a=d
this.b=e},
hsZ:function hsZ(d){this.a=d},
ht_:function ht_(d){this.a=d},
hsX:function hsX(d){this.a=d},
hsW:function hsW(d){this.a=d},
iki(d,e,f){return B.jtC(d,e,f)},
jtC(d,e,f){var x=0,w=A.l(y.n),v,u,t,s,r,q,p,o,n,m,l,k
var $async$iki=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:l={}
k=e!=null
if(!k||e.length===0)p=f==null||f.length===0
else p=!1
if(p){v=null
x=1
break}u=new A.cj(new A.bn($.bO,y.m),y.x)
l.a=null
o=document.createElement("video")
o.muted=!0
o.setAttribute("playsinline","true")
o.setAttribute("preload","auto")
t=o
s=new B.hOO(l)
p=y.c.c
A.kL(t,"error",new B.hOP(u,s),!1,p)
A.kL(t,"canplay",new B.hOQ(u,t,s),!1,p)
try{if(k&&!C.Y.gal(e)){if(d.length!==0)n=C.m.p(d,";")?C.m.b7(C.c.ga5(d.split(";"))):d
else n="video/mp4"
r=n
q=A.asU([e],r)
k=(self.URL||self.webkitURL).createObjectURL(q)
k.toString
l.a=k
t.src=k}else{f.toString
t.src=f}J.ipF(t)}catch(j){s.$0()
J.ipp(u,null)}v=u.a
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$iki,w)},
hOO:function hOO(d){this.a=d},
hOP:function hOP(d,e){this.a=d
this.b=e},
hOQ:function hOQ(d,e,f){this.a=d
this.b=e
this.c=f},
buQ(d,e,f){var x=0,w=A.l(y.v),v,u
var $async$buQ=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:u=(self.URL||self.webkitURL).createObjectURL(A.asU([d],null))
u.toString
v=A.iq_(u)
v.setAttribute("download",f)
v.click();(self.URL||self.webkitURL).revokeObjectURL(u)
return A.j(null,w)}})
return A.k($async$buQ,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[504],B)
D=c[836]
B.bfX.prototype={
U(){return new B.cRl(new A.b3(null,y.z))}}
B.cRl.prototype={
aa(){this.ag()
this.a8X()},
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
t.a8X()}},
a8X(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a8X=A.h(function(d,e){if(d===1){t.push(e)
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
return A.d(B.iki(n.r,m,n.e),$async$a8X)
case 7:r=e
if(s.c==null){x=1
break}if(r!=null&&!C.Y.gal(r))s.a3(new B.hsY(s,r))
else s.a3(new B.hsZ(s))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aH(l)
A.Xu().$1("VideoPreviewThumbnail: Web thumbnail failed: "+A.S(q))
if(s.c!=null)s.a3(new B.ht_(s))
x=6
break
case 3:x=2
break
case 6:x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a8X,w)},
v(){this.f=!0
this.aG()},
l(d){var x=null,w=this.a.w,v=this.cpS(d),u=A.bL(100,C.a9.gk(0)>>>16&255,C.a9.gk(0)>>>8&255,C.a9.gk(0)&255),t=this.a.w
return A.a4(x,x,x,x,new A.bS(C.aB,x,C.ta,C.W,A.b([v,A.aZ(A.a4(x,x,x,x,A.bP(C.bTU,C.H,x,x,t*0.5),C.p,u,x,0,!1,x,x,x,x,!1,x,x,x,t*0.35,x,!1,!1,!1,x),x,x)],y.u),x),C.bk,x,x,0,!1,x,w,x,x,!1,x,x,x,8,x,!1,!1,!1,w)},
cpS(d){var x,w,v=this
v.a.toString
x=v.e
if(x!=null&&!C.Y.gal(x)){x=v.e
x.toString
return A.a7x(x,null,C.aN,1/0,1/0)}x=v.a
w=x.c
if(w!=null&&w.length!==0)return A.o7(w,$.mw().b,new B.hsW(v),C.aN,1/0,w,null,new B.hsX(v),1/0)
if(v.r)return v.bf5(d)
w=x.e
if(!(w!=null&&w.length!==0)){x=x.f
x=x!=null&&!C.Y.gal(x)}else x=!0
if(x){x=v.aLF(d)
return new A.ir(x,v.w)}return v.aLF(d)},
bf5(d){var x=null,w=A.ct(8)
return A.aq(x,A.bP(D.bWr,C.du,x,x,this.a.w*0.4),C.p,x,x,new A.bu(C.k0,x,x,w,x,x,x,C.av),x,1/0,x,x,x,x,x,1/0)},
aLF(d){var x=null
return A.f0(x,A.a4(x,x,x,x,x,C.p,A.q(d).ax.k2,x,0,!1,x,1/0,x,x,!1,x,x,x,8,x,!1,!1,!1,1/0),x,1,x,x,x,x,x,10)}}
var z=a.updateTypes([])
B.hsY.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.hsZ.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ht_.prototype={
$0(){return this.a.r=!0},
$S:0}
B.hsX.prototype={
$2(d,e){return this.a.aLF(d)},
$S:181}
B.hsW.prototype={
$3(d,e,f){return this.a.bf5(d)},
$S:182}
B.hOO.prototype={
$0(){var x=this.a,w=x.a
if(w!=null){(self.URL||self.webkitURL).revokeObjectURL(w)
x.a=null}},
$S:0}
B.hOP.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0){this.b.$0()
x.eg(0,null)}},
$S:71}
B.hOQ.prototype={
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
return}v=A.dpj(w,x)
p=v.getContext("2d")
p.toString
u=p
J.iU9(u,q,0,0,x,w)
t=J.iU_(v,"image/png",null)
n.c.$0()
s=J.dN(t,",")?C.c.ga8(J.iaj(t,",")):t
r=C.jW.ck(s)
m.eg(0,new Uint8Array(A.ci(r)))}catch(o){n.c.$0()
if((l.a&30)===0)m.eg(0,null)}},
$S:71};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bfX,A.W)
x(B.cRl,A.Y)
w(A.aN,[B.hsY,B.hsZ,B.ht_,B.hOO])
x(B.hsX,A.bZ)
w(A.aO,[B.hsW,B.hOP,B.hOQ])})()
A.aG(b.typeUniverse,JSON.parse('{"bfX":{"W":[],"f":[]},"cRl":{"Y":["bfX"]}}'))
var y={u:A.t("F<f>"),z:A.t("b3<Y<W>>"),x:A.t("cj<eJ?>"),c:A.t("aP2<ez>"),m:A.t("bn<eJ?>"),n:A.t("eJ?"),v:A.t("~")};(function constants(){D.bWr=new A.an(983678,"MaterialIcons",null,!1)})()};
(a=>{a["BQ2Vnmm/3kyHPVuRnz+qo0NdZHA="]=a.current})($__dart_deferred_initializers__);