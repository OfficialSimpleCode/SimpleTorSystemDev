((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ckz(d,e,f,g,h){return new B.bgk(f,h,g,d,e,null)},
bgk:function bgk(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i},
cRX:function cRX(d){var _=this
_.e=_.d=null
_.r=_.f=!1
_.w=d
_.c=_.a=null},
hu7:function hu7(d,e){this.a=d
this.b=e},
hu8:function hu8(d){this.a=d},
hu9:function hu9(d){this.a=d},
hu6:function hu6(d){this.a=d},
hu5:function hu5(d){this.a=d},
ilt(d,e,f){return B.jv5(d,e,f)},
jv5(d,e,f){var x=0,w=A.l(y.n),v,u,t,s,r,q,p,o,n,m,l,k
var $async$ilt=A.h(function(g,h){if(g===1)return A.i(h,w)
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
s=new B.hQ_(l)
p=y.c.c
A.kK(t,"error",new B.hQ0(u,s),!1,p)
A.kK(t,"canplay",new B.hQ1(u,t,s),!1,p)
try{if(k&&!C.Y.gal(e)){if(d.length!==0)n=C.m.p(d,";")?C.m.b7(C.c.ga5(d.split(";"))):d
else n="video/mp4"
r=n
q=A.at4([e],r)
k=(self.URL||self.webkitURL).createObjectURL(q)
k.toString
l.a=k
t.src=k}else{f.toString
t.src=f}J.iqR(t)}catch(j){s.$0()
J.iqB(u,null)}v=u.a
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$ilt,w)},
hQ_:function hQ_(d){this.a=d},
hQ0:function hQ0(d,e){this.a=d
this.b=e},
hQ1:function hQ1(d,e,f){this.a=d
this.b=e
this.c=f},
bve(d,e,f){var x=0,w=A.l(y.v),v,u
var $async$bve=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:u=(self.URL||self.webkitURL).createObjectURL(A.at4([d],null))
u.toString
v=A.irb(u)
v.setAttribute("download",f)
v.click();(self.URL||self.webkitURL).revokeObjectURL(u)
return A.j(null,w)}})
return A.k($async$bve,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[505],B)
D=c[840]
B.bgk.prototype={
U(){return new B.cRX(new A.b2(null,y.z))}}
B.cRX.prototype={
aa(){this.ai()
this.a94()},
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
t.a94()}},
a94(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a94=A.h(function(d,e){if(d===1){t.push(e)
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
return A.d(B.ilt(n.r,m,n.e),$async$a94)
case 7:r=e
if(s.c==null){x=1
break}if(r!=null&&!C.Y.gal(r))s.a3(new B.hu7(s,r))
else s.a3(new B.hu8(s))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aH(l)
A.Xw().$1("VideoPreviewThumbnail: Web thumbnail failed: "+A.T(q))
if(s.c!=null)s.a3(new B.hu9(s))
x=6
break
case 3:x=2
break
case 6:x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a94,w)},
v(){this.f=!0
this.aG()},
l(d){var x=null,w=this.a.w,v=this.cqi(d),u=A.bL(100,C.a9.gk(0)>>>16&255,C.a9.gk(0)>>>8&255,C.a9.gk(0)&255),t=this.a.w
return A.a4(x,x,x,x,new A.bQ(C.aB,x,C.tc,C.W,A.b([v,A.aX(A.a4(x,x,x,x,A.bN(C.bUu,C.H,x,x,t*0.5),C.p,u,x,0,!1,x,x,x,x,!1,x,x,x,t*0.35,x,!1,!1,!1,x),x,x)],y.u),x),C.bj,x,x,0,!1,x,w,x,x,!1,x,x,x,8,x,!1,!1,!1,w)},
cqi(d){var x,w,v=this
v.a.toString
x=v.e
if(x!=null&&!C.Y.gal(x)){x=v.e
x.toString
return A.a3T(x,null,C.aN,1/0,1/0)}x=v.a
w=x.c
if(w!=null&&w.length!==0)return A.oa(w,$.lL().b,new B.hu5(v),C.aN,1/0,w,null,new B.hu6(v),1/0)
if(v.r)return v.bfi(d)
w=x.e
if(!(w!=null&&w.length!==0)){x=x.f
x=x!=null&&!C.Y.gal(x)}else x=!0
if(x){x=v.aLT(d)
return new A.is(x,v.w)}return v.aLT(d)},
bfi(d){var x=null,w=A.cq(8)
return A.ar(x,A.bN(D.bX1,C.du,x,x,this.a.w*0.4),C.p,x,x,new A.bt(C.k2,x,x,w,x,x,x,C.au),x,1/0,x,x,x,x,x,1/0)},
aLT(d){var x=null
return A.f1(x,A.a4(x,x,x,x,x,C.p,A.q(d).ax.k2,x,0,!1,x,1/0,x,x,!1,x,x,x,8,x,!1,!1,!1,1/0),x,1,x,x,x,x,x,10)}}
var z=a.updateTypes([])
B.hu7.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.hu8.prototype={
$0(){return this.a.r=!0},
$S:0}
B.hu9.prototype={
$0(){return this.a.r=!0},
$S:0}
B.hu6.prototype={
$2(d,e){return this.a.aLT(d)},
$S:180}
B.hu5.prototype={
$3(d,e,f){return this.a.bfi(d)},
$S:181}
B.hQ_.prototype={
$0(){var x=this.a,w=x.a
if(w!=null){(self.URL||self.webkitURL).revokeObjectURL(w)
x.a=null}},
$S:0}
B.hQ0.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0){this.b.$0()
x.eg(0,null)}},
$S:69}
B.hQ1.prototype={
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
return}v=A.dpX(w,x)
p=v.getContext("2d")
p.toString
u=p
J.iVC(u,q,0,0,x,w)
t=J.iVs(v,"image/png",null)
n.c.$0()
s=J.dQ(t,",")?C.c.ga9(J.ibt(t,",")):t
r=C.jY.cl(s)
m.eg(0,new Uint8Array(A.ci(r)))}catch(o){n.c.$0()
if((l.a&30)===0)m.eg(0,null)}},
$S:69};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bgk,A.W)
x(B.cRX,A.Y)
w(A.aN,[B.hu7,B.hu8,B.hu9,B.hQ_])
x(B.hu6,A.bY)
w(A.aO,[B.hu5,B.hQ0,B.hQ1])})()
A.aG(b.typeUniverse,JSON.parse('{"bgk":{"W":[],"f":[]},"cRX":{"Y":["bgk"]}}'))
var y={u:A.t("F<f>"),z:A.t("b2<Y<W>>"),x:A.t("cj<ey?>"),c:A.t("aPm<eC>"),m:A.t("bl<ey?>"),n:A.t("ey?"),v:A.t("~")};(function constants(){D.bX1=new A.an(983678,"MaterialIcons",null,!1)})()};
(a=>{a["djgagHSMPWmbB8p8Q5Jfkg7rbW8="]=a.current})($__dart_deferred_initializers__);