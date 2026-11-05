((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D,E,F,C={c0Y:function c0Y(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},e9q:function e9q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
k4h(d,e,f,g){var x,w,v,u=f.b,t=u===""
if((t?f.a:u).length!==0)x=t?f.a:u
else{u=f.a
x=u.length!==0?u:"customer"}w=g.f
w=w.length!==0?w:"files"
v=C.kQz(d.e)
return C.k3l(x)+"_"+C.k3l(w)+"_file_"+(e+1)+"."+v},
kQz(d){var x=d.toLowerCase()
if(B.l.n(x,"jpeg")||B.l.n(x,"jpg"))return"jpg"
if(B.l.n(x,"png"))return"png"
if(B.l.n(x,"gif"))return"gif"
if(B.l.n(x,"webp"))return"webp"
if(B.l.n(x,"bmp"))return"bmp"
if(B.l.n(x,"svg"))return"svg"
if(B.l.n(x,"pdf"))return"pdf"
if(B.l.n(x,"msword")||B.l.n(x,"document"))return"doc"
if(B.l.n(x,"spreadsheet")||B.l.n(x,"excel"))return"xlsx"
if(B.l.n(x,"presentation")||B.l.n(x,"powerpoint"))return"pptx"
if(B.l.n(x,"zip"))return"zip"
if(B.l.n(x,"rar"))return"rar"
if(B.l.n(x,"7z"))return"7z"
if(B.l.n(x,"tar"))return"tar"
if(B.l.n(x,"gzip"))return"gz"
if(B.l.n(x,"csv"))return"csv"
if(B.l.n(x,"plain"))return"txt"
if(B.l.n(x,"json"))return"json"
if(B.l.n(x,"xml"))return"xml"
if(B.l.n(x,"html"))return"html"
if(B.l.n(x,"mp3")||B.l.n(x,"mpeg"))return"mp3"
if(B.l.n(x,"mp4"))return"mp4"
if(B.l.n(x,"wav"))return"wav"
return"bin"},
k3l(d){var x,w=A.b4('[/\\\\:*?"<>|]',!0,!1,!1)
w=A.a1(d,w,"")
x=A.b4("\\s+",!0,!1,!1)
return B.l.ad(A.a1(w,x,"_"))},
b2b(d,e,f,g,h,i,j){return C.lA2(d,e,f,g,h,i,j)},
lA2(d,e,f,g,h,i,j){var x=0,w=A.l(y.f),v,u=2,t=[],s,r,q,p,o,n
var $async$b2b=A.h(function(k,l){if(k===1){t.push(l)
x=u}for(;;)switch(x){case 0:o=C.k4h(d,e,h,i)
x=f!=null?3:4
break
case 3:x=5
return A.c(E.b2a(f,g,o),$async$b2b)
case 5:x=1
break
case 4:x=j.length!==0?6:7
break
case 6:u=9
r={}
r.a=null
q=A.R(g,!1)
x=12
return A.c(A.aN("assets/animations/success_animation.json.zip",g,!1,B.N,F.dn3(j).X(new C.jjA(r),y.e),"",null,q,!0,null,!1,!0,null,!1,B.Q,!1).ag(),$async$b2b)
case 12:x=r.a!=null?13:15
break
case 13:x=16
return A.c($.aJ.gLl(),$async$b2b)
case 16:if(g.e==null){x=1
break}r=r.a
r.toString
x=17
return A.c(E.b2a(r,g,o),$async$b2b)
case 17:x=14
break
case 15:if(g.e!=null)new A.S(A.d("failedToDownloadFile",null,null,!0),B.r,B.u,B.v,g).v()
case 14:u=2
x=11
break
case 9:u=8
n=t.pop()
s=A.ay(n)
$.aK().b1(0,"Error fetching file: "+A.T(s))
if(g.e!=null)new A.S(A.d("failedToDownloadFile",null,null,!0),B.r,B.u,B.v,g).v()
x=11
break
case 8:x=2
break
case 11:x=1
break
case 7:new A.S(A.d("fileNotAvailable",null,null,!0),B.r,B.u,B.v,g).v()
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$b2b,w)},
jjA:function jjA(d){this.a=d},
aKP(d,e,f,g,h,i,j){var x=0,w=A.l(y.b),v,u,t
var $async$aKP=A.h(function(k,l){if(k===1)return A.i(l,w)
for(;;)switch(x){case 0:t=i.Q.a
if(t===0){v=null
x=1
break}u=new C.c0Y(f,i,B.i.aT(g,0,t-1),d,h,j,null)
t=A.eO($.ag,y.e)
x=6
return A.c(t,$async$aKP)
case 6:x=l?3:5
break
case 3:x=7
return A.c(A.er(null,u,e,null),$async$aKP)
case 7:x=4
break
case 5:x=8
return A.c(A.eU(u,e,null,null,null),$async$aKP)
case 8:case 4:v=l
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aKP,w)}}
J=c[1]
A=c[0]
B=c[2]
D=c[725]
E=c[716]
F=c[696]
C=a.updateHolder(c[608],C)
C.c0Y.prototype={
k(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.b([],y.a),a1=e.d,a2=a1.gGH()
for(x=e.w,w=e.c,v=e.r,u=e.f,t=0;t<a2.length;++t){s=a2[t]
r=u==null?d:u.h(0,t)
q=v.h(0,t)
if(q==null)q=s.x
p=s.gmQ(0)
o=C.k4h(s,t,w,a1)
n=r!=null||q.length!==0
m=x==null?d:x.h(0,t)
if(m==null)m=s.at
l=p.length!==0
k=l?p:o
j=s.e
i=s.f
l=l?p:o
a0.push(new D.Z1(k,j,i,r,q,l,n,n?new C.e9q(e,s,t,r,q):d,d,m))}h=$.aL()
g=h.qV(B.x6)
a1=J.bl(h.a.a)
for(;;){if(!a1.H()){f=!0
break}if(g.n(0,a1.ga7(a1))){f=!1
break}}return new D.aBV(a0,e.e,f,!0,d)},
avz(d,e,f,g,h){return this.dDx(d,e,f,g,h)},
dDx(d,e,f,g,h){var x=0,w=A.l(y.f),v=1,u=[],t=this,s,r,q
var $async$avz=A.h(function(i,j){if(i===1){u.push(j)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(C.b2b(e,f,g,d,t.c,t.d,h),$async$avz)
case 6:v=1
x=5
break
case 3:v=2
q=u.pop()
s=A.ay(q)
$.aK().b1(0,"Error in share/download: "+A.T(s))
if(d.e!=null)new A.S(A.d("failedToShareFile",null,null,!0),B.r,B.u,B.v,d).v()
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$avz,w)}}
var z=a.updateTypes([])
C.e9q.prototype={
$1(d){var x=this
return x.a.avz(d,x.b,x.c,x.d,x.e)},
$S:60}
C.jjA.prototype={
$1(d){this.a.a=d
return!0},
$S:1253};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.c0Y,A.p)
w(A.aG,[C.e9q,C.jjA])})()
A.au(b.typeUniverse,JSON.parse('{"c0Y":{"p":[],"f":[]}}'))
var y={a:A.t("B<Z1>"),e:A.t("D"),b:A.t("@"),f:A.t("~")}};
(a=>{a["y4vd+HSn12dAwocN799sRnYIMMc="]=a.current})($__dart_deferred_initializers__);