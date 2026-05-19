((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D,E,F,C={bJp:function bJp(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},dAX:function dAX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
iJl(d,e,f,g){var x,w,v,u=f.b,t=u===""
if((t?f.a:u).length!==0)x=t?f.a:u
else{u=f.a
x=u.length!==0?u:"customer"}w=g.f
w=w.length!==0?w:"files"
v=C.jmX(d.e)
return C.iID(x)+"_"+C.iID(w)+"_file_"+(e+1)+"."+v},
jmX(d){var x=d.toLowerCase()
if(B.m.p(x,"jpeg")||B.m.p(x,"jpg"))return"jpg"
if(B.m.p(x,"png"))return"png"
if(B.m.p(x,"gif"))return"gif"
if(B.m.p(x,"webp"))return"webp"
if(B.m.p(x,"bmp"))return"bmp"
if(B.m.p(x,"svg"))return"svg"
if(B.m.p(x,"pdf"))return"pdf"
if(B.m.p(x,"msword")||B.m.p(x,"document"))return"doc"
if(B.m.p(x,"spreadsheet")||B.m.p(x,"excel"))return"xlsx"
if(B.m.p(x,"presentation")||B.m.p(x,"powerpoint"))return"pptx"
if(B.m.p(x,"zip"))return"zip"
if(B.m.p(x,"rar"))return"rar"
if(B.m.p(x,"7z"))return"7z"
if(B.m.p(x,"tar"))return"tar"
if(B.m.p(x,"gzip"))return"gz"
if(B.m.p(x,"csv"))return"csv"
if(B.m.p(x,"plain"))return"txt"
if(B.m.p(x,"json"))return"json"
if(B.m.p(x,"xml"))return"xml"
if(B.m.p(x,"html"))return"html"
if(B.m.p(x,"mp3")||B.m.p(x,"mpeg"))return"mp3"
if(B.m.p(x,"mp4"))return"mp4"
if(B.m.p(x,"wav"))return"wav"
return"bin"},
iID(d){var x,w=A.ch('[/\\\\:*?"<>|]',!0,!1,!1)
w=A.a3(d,w,"")
x=A.ch("\\s+",!0,!1,!1)
return B.m.b7(A.a3(w,x,"_"))},
bvf(d,e,f,g,h,i,j){return C.k38(d,e,f,g,h,i,j)},
k38(d,e,f,g,h,i,j){var x=0,w=A.l(y.f),v,u=2,t=[],s,r,q,p,o,n
var $async$bvf=A.h(function(k,l){if(k===1){t.push(l)
x=u}for(;;)switch(x){case 0:o=C.iJl(d,e,h,i)
x=f!=null?3:4
break
case 3:x=5
return A.d(E.bve(f,g,o),$async$bvf)
case 5:x=1
break
case 4:x=j.length!==0?6:7
break
case 6:u=9
r={}
r.a=null
q=A.Q(g,!1)
x=12
return A.d(A.aS("assets/animations/success_animation.json.zip",g,!1,B.V,F.cWb(j).T(new C.i4s(r),y.e),"",null,q,!0,!1,!0,null,!1,B.a_,!1).aq(),$async$bvf)
case 12:r=r.a
x=r!=null?13:15
break
case 13:x=16
return A.d(E.bve(r,g,o),$async$bvf)
case 16:x=14
break
case 15:if(g.e!=null)new A.U(A.e("failedToDownloadFile",null,null,!0),B.t,B.v,B.A,g).D()
case 14:u=2
x=11
break
case 9:u=8
n=t.pop()
s=A.aH(n)
$.b3().bp(0,"Error fetching file: "+A.T(s))
if(g.e!=null)new A.U(A.e("failedToDownloadFile",null,null,!0),B.t,B.v,B.A,g).D()
x=11
break
case 8:x=2
break
case 11:x=1
break
case 7:new A.U(A.e("fileNotAvailable",null,null,!0),B.t,B.v,B.A,g).D()
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$bvf,w)},
i4s:function i4s(d){this.a=d},
aSg(d,e,f,g,h,i,j){var x=0,w=A.l(y.b),v,u,t
var $async$aSg=A.h(function(k,l){if(k===1)return A.i(l,w)
for(;;)switch(x){case 0:t=i.Q.a
if(t===0){v=null
x=1
break}u=new C.bJp(f,i,B.i.ba(g,0,t-1),d,h,j,null)
t=A.eZ($.ag,y.e)
x=6
return A.d(t,$async$aSg)
case 6:x=l?3:5
break
case 3:x=7
return A.d(A.fl(null,u,e,null),$async$aSg)
case 7:x=4
break
case 5:x=8
return A.d(A.fm(u,e,null,null,null),$async$aSg)
case 8:case 4:v=l
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aSg,w)}}
J=c[1]
A=c[0]
B=c[2]
D=c[523]
E=c[505]
F=c[502]
C=a.updateHolder(c[405],C)
C.bJp.prototype={
l(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.b([],y.a),a1=e.d,a2=a1.gF3()
for(x=e.w,w=e.c,v=e.r,u=e.f,t=0;t<a2.length;++t){s=a2[t]
r=u==null?d:u.h(0,t)
q=v.h(0,t)
if(q==null)q=s.x
p=s.gFo(0)
o=C.iJl(s,t,w,a1)
n=r!=null||q.length!==0
m=x==null?d:x.h(0,t)
if(m==null)m=s.as
l=p.length!==0
k=l?p:o
j=s.e
i=s.f
l=l?p:o
a0.push(new D.YI(k,j,i,r,q,l,n,n?new C.dAX(e,s,t,r,q):d,m))}h=$.aC()
g=h.q5(B.wB)
a1=J.bI(h.a.a)
for(;;){if(!a1.H()){f=!0
break}if(g.p(0,a1.gab(a1))){f=!1
break}}return new D.av1(a0,e.e,f,!0,d)},
arT(d,e,f,g,h){return this.d1U(d,e,f,g,h)},
d1U(d,e,f,g,h){var x=0,w=A.l(y.f),v=1,u=[],t=this,s,r,q
var $async$arT=A.h(function(i,j){if(i===1){u.push(j)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.d(C.bvf(e,f,g,d,t.c,t.d,h),$async$arT)
case 6:v=1
x=5
break
case 3:v=2
q=u.pop()
s=A.aH(q)
$.b3().bp(0,"Error in share/download: "+A.T(s))
if(d.e!=null)new A.U(A.e("failedToShareFile",null,null,!0),B.t,B.v,B.A,d).D()
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$arT,w)}}
var z=a.updateTypes([])
C.dAX.prototype={
$1(d){var x=this
return x.a.arT(d,x.b,x.c,x.d,x.e)},
$S:80}
C.i4s.prototype={
$1(d){this.a.a=d
return!0},
$S:1066};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bJp,A.r)
w(A.aO,[C.dAX,C.i4s])})()
A.aG(b.typeUniverse,JSON.parse('{"bJp":{"r":[],"f":[]}}'))
var y={a:A.t("F<YI>"),e:A.t("J"),b:A.t("@"),f:A.t("~")}};
(a=>{a["vxWBfvjxzYs7Wlpyp4sFsOquLUw="]=a.current})($__dart_deferred_initializers__);