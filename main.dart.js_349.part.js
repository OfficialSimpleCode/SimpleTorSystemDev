((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cJI(d,e,f,g,h){return new B.buU(f,h,g,d,e,null)},
buU:function buU(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i},
diA:function diA(d){var _=this
_.e=_.d=null
_.r=_.f=!1
_.w=d
_.c=_.a=null},
iBp:function iBp(d,e){this.a=d
this.b=e},
iBq:function iBq(d){this.a=d},
iBr:function iBr(d){this.a=d},
iBo:function iBo(d){this.a=d},
iBn:function iBn(d){this.a=d},
jDR(d,e,f){return B.l_W(d,e,f)},
l_W(d,e,f){var x=0,w=A.l(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$jDR=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:k={}
j=e!=null
if(!j||e.length===0)p=f==null||f.length===0
else p=!1
if(p){v=null
x=1
break}u=new A.cw(new A.bu($.bY,y.m),y.x)
k.a=null
o=A.eHU()
o.muted=!0
o.setAttribute("playsinline","true")
o.setAttribute("preload","auto")
t=o
s=new B.j1L(k)
p=y.k
A.ka(t,"error",new B.j1M(u,s),!1,p)
A.ka(t,"canplay",new B.j1N(u,t,s),!1,p)
try{if(j&&!C.a1.gai(e)){if(d.length!==0)n=C.l.n(d,";")?C.l.ad(C.d.ga2(d.split(";"))):d
else n="video/mp4"
r=n
j=b.G
q=new j.Blob(A.b([e],y.h),{type:r})
m=j.URL.createObjectURL(q)
k.a=m
m.toString
t.src=m}else{f.toString
t.src=f}t.load()}catch(i){s.$0()
J.jJO(u,null)}v=u.a
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$jDR,w)},
j1L:function j1L(d){this.a=d},
j1M:function j1M(d,e){this.a=d
this.b=e},
j1N:function j1N(d,e,f){this.a=d
this.b=e
this.c=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[709],B)
D=c[1249]
B.buU.prototype={
R(){return new B.diA(new A.b2(null,y.z))}}
B.diA.prototype={
a5(){this.a9()
this.afj()},
bD(d){var x,w,v,u,t=this
t.bX(d)
x=t.a
w=!0
if(d.e==x.e){v=d.f
u=x.f
if(v==null?u==null:v===u){x=x.c
x=d.c!=x}else x=w}else x=w
if(x){t.e=null
t.r=!1
t.d=null
t.afj()}},
afj(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$afj=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.a
m=n.c
if(m!=null&&m.length!==0){x=1
break}m=n.e
if(!(m!=null&&m.length!==0)){n=n.f
p=n!=null&&!C.a1.gai(n)}else p=!0
if(!p){x=1
break}u=4
n=s.a
m=n.f
x=7
return A.c(B.jDR(n.r,m,n.e),$async$afj)
case 7:r=e
if(s.c==null){x=1
break}if(r!=null&&!C.a1.gai(r))s.Y(new B.iBp(s,r))
else s.Y(new B.iBq(s))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ay(l)
A.rh().$1("VideoPreviewThumbnail: Web thumbnail failed: "+A.T(q))
if(s.c!=null)s.Y(new B.iBr(s))
x=6
break
case 3:x=2
break
case 6:x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$afj,w)},
u(){this.f=!0
this.ak()},
k(d){var x=null,w=this.a.w,v=this.cRr(d),u=A.f3(100,C.ae.gl(0)>>>16&255,C.ae.gl(0)>>>8&255,C.ae.gl(0)&255),t=this.a.w
return A.a4(x,x,0.3,x,x,new A.bC(C.av,x,C.jD,C.R,A.b([v,A.aX(A.a4(x,x,0.3,x,x,A.bW(C.c8o,x,x,C.G,x,x,x,x,x,x,x,t*0.5,x,x),C.p,u,x,0,!1,x,x,x,x,x,!1,x,x,x,t*0.35,x,!1,!1,!1,x),x,x)],y.u),x),C.b7,x,x,0,!1,x,w,x,x,x,!1,x,x,x,8,x,!1,!1,!1,w)},
cRr(d){var x,w,v=this
v.a.toString
x=v.e
if(x!=null&&!C.a1.gai(x)){x=v.e
x.toString
return A.a4X(x,null,C.aJ,!1,1/0,1/0)}x=v.a
w=x.c
if(w!=null&&w.length!==0)return A.lx(C.q,w,$.kC().b,new B.iBn(v),C.aJ,1/0,w,null,new B.iBo(v),1/0)
if(v.r)return v.bw3(d)
w=x.e
if(!(w!=null&&w.length!==0)){x=x.f
x=x!=null&&!C.a1.gai(x)}else x=!0
if(x){x=v.aYr(d)
return new A.ho(x,v.w)}return v.aYr(d)},
bw3(d){var x=null,w=A.c6(8)
return A.at(x,A.bW(D.cck,x,x,C.e_,x,x,x,x,x,x,x,this.a.w*0.4,x,x),C.p,x,x,new A.bq(C.kF,x,x,w,x,x,x,C.ao),x,1/0,x,x,x,x,x,1/0)},
aYr(d){var x=null
return A.eN(x,A.a4(x,x,0.3,x,x,x,C.p,A.r(d).ax.k2,x,0,!1,x,1/0,x,x,x,!1,x,x,x,8,x,!1,!1,!1,1/0),x,1,x,x,x,x,x,10)}}
var z=a.updateTypes([])
B.iBp.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.iBq.prototype={
$0(){return this.a.r=!0},
$S:0}
B.iBr.prototype={
$0(){return this.a.r=!0},
$S:0}
B.iBo.prototype={
$2(d,e){return this.a.aYr(d)},
$S:150}
B.iBn.prototype={
$3(d,e,f){return this.a.bw3(d)},
$S:155}
B.j1L.prototype={
$0(){var x=this.a,w=x.a
if(w!=null){b.G.URL.revokeObjectURL(w)
x.a=null}},
$S:0}
B.j1M.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0){this.b.$0()
x.e1(0,null)}},
$S:18}
B.j1N.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.a
if((k.a&30)!==0)return
try{q=m.b
x=q.videoWidth
w=q.videoHeight
if(x<=0||w<=0){m.c.$0()
l.e1(0,null)
return}p=A.aCA()
p.width=x
p.height=w
v=p
o=v.getContext("2d")
u=o==null?A.kb(o):o
A.os(u,"drawImage",[q,0,0,x,w])
q=v.toDataURL("image/png")
t=q
m.c.$0()
s=J.en(t,",")?C.d.gae(J.bNN(t,",")):t
r=C.m3.cQ(s)
l.e1(0,new Uint8Array(A.ci(r)))}catch(n){m.c.$0()
if((k.a&30)===0)l.e1(0,null)}},
$S:18};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.buU,A.W)
x(B.diA,A.X)
w(A.aH,[B.iBp,B.iBq,B.iBr,B.j1L])
x(B.iBo,A.bx)
w(A.aG,[B.iBn,B.j1M,B.j1N])})()
A.au(b.typeUniverse,JSON.parse('{"buU":{"W":[],"f":[]},"diA":{"X":["buU"]}}'))
var y={h:A.t("B<ap>"),u:A.t("B<f>"),k:A.t("cq"),z:A.t("b2<X<W>>"),x:A.t("cw<fl?>"),m:A.t("bu<fl?>"),n:A.t("fl?"),v:A.t("~")};(function constants(){D.cck=new A.ac(983678,"MaterialIcons",null,!1)})()};
(a=>{a["4JquJOASVGyQFEWoYuxWwigf7iM="]=a.current})($__dart_deferred_initializers__);