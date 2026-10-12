((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D,E,F,C={bVL:function bVL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},dYH:function dYH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
jC0(d,e,f,g){var x,w,v,u=f.b,t=u===""
if((t?f.a:u).length!==0)x=t?f.a:u
else{u=f.a
x=u.length!==0?u:"customer"}w=g.f
w=w.length!==0?w:"files"
v=C.kjU(d.e)
return C.jBd(x)+"_"+C.jBd(w)+"_file_"+(e+1)+"."+v},
kjU(d){var x=d.toLowerCase()
if(B.l.p(x,"jpeg")||B.l.p(x,"jpg"))return"jpg"
if(B.l.p(x,"png"))return"png"
if(B.l.p(x,"gif"))return"gif"
if(B.l.p(x,"webp"))return"webp"
if(B.l.p(x,"bmp"))return"bmp"
if(B.l.p(x,"svg"))return"svg"
if(B.l.p(x,"pdf"))return"pdf"
if(B.l.p(x,"msword")||B.l.p(x,"document"))return"doc"
if(B.l.p(x,"spreadsheet")||B.l.p(x,"excel"))return"xlsx"
if(B.l.p(x,"presentation")||B.l.p(x,"powerpoint"))return"pptx"
if(B.l.p(x,"zip"))return"zip"
if(B.l.p(x,"rar"))return"rar"
if(B.l.p(x,"7z"))return"7z"
if(B.l.p(x,"tar"))return"tar"
if(B.l.p(x,"gzip"))return"gz"
if(B.l.p(x,"csv"))return"csv"
if(B.l.p(x,"plain"))return"txt"
if(B.l.p(x,"json"))return"json"
if(B.l.p(x,"xml"))return"xml"
if(B.l.p(x,"html"))return"html"
if(B.l.p(x,"mp3")||B.l.p(x,"mpeg"))return"mp3"
if(B.l.p(x,"mp4"))return"mp4"
if(B.l.p(x,"wav"))return"wav"
return"bin"},
jBd(d){var x,w=A.b5('[/\\\\:*?"<>|]',!0,!1,!1)
w=A.a1(d,w,"")
x=A.b5("\\s+",!0,!1,!1)
return B.l.aq(A.a1(w,x,"_"))},
aZ9(d,e,f,g,h,i,j){return C.l25(d,e,f,g,h,i,j)},
l25(d,e,f,g,h,i,j){var x=0,w=A.l(y.f),v,u=2,t=[],s,r,q,p,o,n
var $async$aZ9=A.h(function(k,l){if(k===1){t.push(l)
x=u}for(;;)switch(x){case 0:o=C.jC0(d,e,h,i)
x=f!=null?3:4
break
case 3:x=5
return A.c(E.aZ8(f,g,o),$async$aZ9)
case 5:x=1
break
case 4:x=j.length!==0?6:7
break
case 6:u=9
r={}
r.a=null
q=A.Q(g,!1)
x=12
return A.c(A.aO("assets/animations/success_animation.json.zip",g,!1,B.N,F.dcl(j).U(new C.iUD(r),y.e),"",null,q,!0,null,!1,!0,null,!1,B.Q,!1).ai(),$async$aZ9)
case 12:x=r.a!=null?13:15
break
case 13:x=16
return A.c($.aH.gKF(),$async$aZ9)
case 16:if(g.e==null){x=1
break}r=r.a
r.toString
x=17
return A.c(E.aZ8(r,g,o),$async$aZ9)
case 17:x=14
break
case 15:if(g.e!=null)new A.R(A.d("failedToDownloadFile",null,null,!0),B.r,B.u,B.v,g).A()
case 14:u=2
x=11
break
case 9:u=8
n=t.pop()
s=A.aD(n)
$.aM().b6(0,"Error fetching file: "+A.U(s))
if(g.e!=null)new A.R(A.d("failedToDownloadFile",null,null,!0),B.r,B.u,B.v,g).A()
x=11
break
case 8:x=2
break
case 11:x=1
break
case 7:new A.R(A.d("fileNotAvailable",null,null,!0),B.r,B.u,B.v,g).A()
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$aZ9,w)},
iUD:function iUD(d){this.a=d},
aHW(d,e,f,g,h,i,j){var x=0,w=A.l(y.b),v,u,t
var $async$aHW=A.h(function(k,l){if(k===1)return A.i(l,w)
for(;;)switch(x){case 0:t=i.Q.a
if(t===0){v=null
x=1
break}u=new C.bVL(f,i,B.h.aV(g,0,t-1),d,h,j,null)
t=A.eQ($.af,y.e)
x=6
return A.c(t,$async$aHW)
case 6:x=l?3:5
break
case 3:x=7
return A.c(A.eE(null,u,e,null),$async$aHW)
case 7:x=4
break
case 5:x=8
return A.c(A.eP(u,e,null,null,null),$async$aHW)
case 8:case 4:v=l
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aHW,w)}}
J=c[1]
A=c[0]
B=c[2]
D=c[679]
E=c[669]
F=c[655]
C=a.updateHolder(c[567],C)
C.bVL.prototype={
l(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.b([],y.a),a1=e.d,a2=a1.gG9()
for(x=e.w,w=e.c,v=e.r,u=e.f,t=0;t<a2.length;++t){s=a2[t]
r=u==null?d:u.h(0,t)
q=v.h(0,t)
if(q==null)q=s.x
p=s.gms(0)
o=C.jC0(s,t,w,a1)
n=r!=null||q.length!==0
m=x==null?d:x.h(0,t)
if(m==null)m=s.at
l=p.length!==0
k=l?p:o
j=s.e
i=s.f
l=l?p:o
a0.push(new D.Ye(k,j,i,r,q,l,n,n?new C.dYH(e,s,t,r,q):d,d,m))}h=$.aK()
g=h.pW(B.wa)
a1=J.bt(h.a.a)
for(;;){if(!a1.G()){f=!0
break}if(g.p(0,a1.ga8(a1))){f=!1
break}}return new D.azB(a0,e.e,f,!0,d)},
az8(d,e,f,g,h){return this.dsn(d,e,f,g,h)},
dsn(d,e,f,g,h){var x=0,w=A.l(y.f),v=1,u=[],t=this,s,r,q
var $async$az8=A.h(function(i,j){if(i===1){u.push(j)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(C.aZ9(e,f,g,d,t.c,t.d,h),$async$az8)
case 6:v=1
x=5
break
case 3:v=2
q=u.pop()
s=A.aD(q)
$.aM().b6(0,"Error in share/download: "+A.U(s))
if(d.e!=null)new A.R(A.d("failedToShareFile",null,null,!0),B.r,B.u,B.v,d).A()
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$az8,w)}}
var z=a.updateTypes([])
C.dYH.prototype={
$1(d){var x=this
return x.a.az8(d,x.b,x.c,x.d,x.e)},
$S:58}
C.iUD.prototype={
$1(d){this.a.a=d
return!0},
$S:1204};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bVL,A.r)
w(A.aF,[C.dYH,C.iUD])})()
A.av(b.typeUniverse,JSON.parse('{"bVL":{"r":[],"f":[]}}'))
var y={a:A.t("C<Ye>"),e:A.t("E"),b:A.t("@"),f:A.t("~")}};
(a=>{a["LO09+4xmsV2fwPff2MLeDbntDss="]=a.current})($__dart_deferred_initializers__);