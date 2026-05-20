((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={av3:function av3(d,e){this.a=d
this.b=e},a9Y:function a9Y(d,e){this.a=d
this.b=e},dWt:function dWt(){},fuZ:function fuZ(){},av2:function av2(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p},cyx:function cyx(){},
hGa(d){return B.jrY(d)},
jrY(d){var x=0,w=A.l(y.R),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$hGa=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:k={}
j=d.length
if(j===0){v=null
x=1
break}if(!B.j6A("video/mp4")){$.b3().eA(0,"VideoCompress: browser does not support MP4 output, skipping compression")
v=null
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.at8([d],"video/mp4"))
u.toString
t=document.createElement("video")
t.src=u
t.muted=!0
t.setAttribute("playsinline","true")
s=new A.bl($.bO,y.A)
r=new A.cj(s,y.B)
q=A.b([],y.w)
k.a=null
u=new B.hGh(u)
p=y.E.c
A.kL(t,"error",new B.hGi(r,u),!1,p)
k.b=null
o=new B.hGm(k)
A.kL(t,"canplay",new B.hGj(k,r,t,q,o,u),!1,p)
A.kL(t,"ended",new B.hGk(k,o),!1,p)
t.load()
x=3
return A.d(s,$async$hGa)
case 3:n=f
m=j/1024|0
if(n==null)$.b3().fB("VideoCompress: failed | input: "+m+" KB")
else{k=n.a.length
l=j>0?C.l.aB(100*k/j,0):"0"
$.b3().fB("VideoCompress: input "+m+" KB -> output "+(k/1024|0)+" KB ("+l+"%), mimeType: "+n.b)}v=n
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$hGa,w)},
hGh:function hGh(d){this.a=d},
hGi:function hGi(d,e){this.a=d
this.b=e},
hGm:function hGm(d){this.a=d},
hGj:function hGj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hGl:function hGl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hGg:function hGg(d){this.a=d},
hGd:function hGd(d){this.a=d},
hGe:function hGe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hGb:function hGb(d,e,f){this.a=d
this.b=e
this.c=f},
hGc:function hGc(d){this.a=d},
hGf:function hGf(d,e,f){this.a=d
this.b=e
this.c=f},
hGk:function hGk(d,e){this.a=d
this.b=e},
iyP(d,e){var x=new MediaRecorder(d,A.il5(e))
x.toString
return x},
j6A(d){var x=MediaRecorder.isTypeSupported(d)
x.toString
return x},
aCQ(d){switch(d.toLowerCase()){case"jpg":case"jpeg":return"image/jpeg"
case"png":return"image/png"
case"gif":return"image/gif"
case"webp":return"image/webp"
case"mp4":return"video/mp4"
case"mov":return"video/quicktime"
case"avi":return"video/x-msvideo"
case"webm":return"video/webm"
case"mkv":return"video/x-matroska"
case"m4v":return"video/x-m4v"
case"3gp":return"video/3gpp"
case"m4a":return"audio/mp4"
case"aac":return"audio/aac"
case"mp3":return"audio/mpeg"
case"wav":return"audio/wav"
case"ogg":return"audio/ogg"
case"pdf":return"application/pdf"
case"doc":return"application/msword"
case"docx":return"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
case"xls":return"application/vnd.ms-excel"
case"xlsx":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
case"csv":return"text/csv"
case"txt":return"text/plain"
default:return"application/octet-stream"}}},E
J=c[1]
A=c[0]
C=c[2]
D=c[472]
B=a.updateHolder(c[442],B)
E=c[635]
B.av3.prototype={
N(){return"FilePickerSource."+this.b}}
B.a9Y.prototype={
gml(){return this.a}}
B.dWt.prototype={
Gd(d,e){return this.dSR(d,e)},
dSR(b6,b7){var x=0,w=A.l(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Gd=A.h(function(b8,b9){if(b8===1){t.push(b9)
x=u}for(;;)switch(x){case 0:u=4
a0=b7.a
x=a0===C.bSn?7:8
break
case 7:a1=b7.x
if(a1==null)a1=b7.c?20:1
r=a1
a0=$.a3g()
a2=A.e("addImagesAndFiles",null,null,!1)
a3=b7.d?b7.e:null
x=9
return A.d(a0.dSW(!0,b6,r,a3,a2),$async$Gd)
case 9:q=b9
if(J.cc(q)){v=null
x=1
break}p=A.b([],y.i)
o=0,a0=b7.r,a2=b7.z,a3=b7.Q,a4=b7.w
case 10:if(!(o<J.ax(q))){x=12
break}a5=J.N(q,o)
a6=a4==null?0:a4
x=13
return A.d(s.atf(a5,!0,b7,b6,a0,a6+o,a3,a2),$async$Gd)
case 13:n=b9
if(n!=null)J.cl(p,n)
case 11:++o
x=10
break
case 12:a0=J.ax(p)===0?null:p
v=a0
x=1
break
case 8:if(!b7.c){a2=b7.x
a2=a2!=null&&a2>1
a7=a2}else a7=!0
m=a7
x=14
return A.d($.ivX.n().aDl(m,b7.b,a0,!0),$async$Gd)
case 14:l=b9
if(l==null||J.cc(l.a)){v=null
x=1
break}a0=b7.x
k=a0!=null&&J.ax(l.a)>a0?J.asG(l.a,a0).de(0):l.a
j=A.b([],y.i)
a0=J.bK(k),a2=b7.r,a3=b7.w,a4=b7.d
case 15:if(!a0.H()){x=16
break}i=a0.gac(a0)
h=i.c
if(h==null||h.length===0){x=15
break}if(s.amK(h.length,b7,b6)){x=15
break}x=a4&&s.bnX(i)?17:19
break
case 17:g=J.ax(j)
x=20
return A.d(s.a6v(b6,i,h,b7,g),$async$Gd)
case 20:f=b9
if(f!=null)J.cl(j,f)
x=18
break
case 19:a8=C.c.gaa(i.b.split(".")).toLowerCase()
if(C.c.p(C.P2,a8)){e=null
a5=C.c.gaa(i.b.split("."))
e=s.a6n(h,B.aCQ(a5))
a5=a3==null?0:a3
a6=J.ax(j)
a9=e
a8=C.c.gaa(i.b.split("."))
b0=A.e("video",null,null,!0)
b1=a8.length!==0
b2=b1?a8:"mp4"
b3=s.Ys(b0,b2,a5+a6)
a5=new Uint8Array(0)
a6=b1?B.aCQ(a8):"video/mp4"
J.cl(j,new D.a8h(a5,b3,a6,0,a9,null))}else{a5=a3==null?0:a3
J.cl(j,s.br4(i,h,a2,a5+J.ax(j)))}case 18:x=15
break
case 16:a0=J.ax(j)===0?null:j
v=a0
x=1
break
u=2
x=6
break
case 4:u=3
b5=t.pop()
d=A.aH(b5)
A.Xw().$1("FileService: Error picking file: "+A.T(d))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Gd,w)},
amK(d,e,f){var x,w,v=e.as
if(v==null||d<=v)return!1
x=C.l.ao(v/1024)
w=A.e("simpleInvoiceFileExceedsMaxSize",null,null,!0)
new A.U(A.a3(w,"MAX_KB",""+x),C.t,C.v,C.A,f).D()
return!0},
bnX(d){var x=C.c.gaa(d.b.split(".")).toLowerCase()
return C.c.p(A.b(["jpg","jpeg","png","gif","webp","heic","heif","bmp"],y.s),x)},
cN9(d){var x=C.c.gaa(d.b.split(".")).toLowerCase()
return C.c.p(C.P2,x)},
a6n(d,e){return this.ctG(d,e)},
ctG(d,e){var x=0,w=A.l(y.R),v,u=this,t
var $async$a6n=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:x=3
return A.d(u.avZ(d),$async$a6n)
case 3:t=g
if(t!=null&&C.m.c7(t.b.toLowerCase(),"video/mp4")){v=t
x=1
break}v=new B.a9Y(d,e)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$a6n,w)},
a6v(d,e,f,g,h){return this.cv7(d,e,f,g,h)},
cv7(d,e,f,g,h){var x=0,w=A.l(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$a6v=A.h(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:m=g.w
l=(m==null?0:m)+h
u=4
m=e.b
C.c.gaa(m.split("."))
o=B.aCQ(C.c.gaa(m.split(".")))
r=A.iiJ(f,o,m)
x=7
return A.d($.a3g().aXn(d,g.e,r),$async$a6v)
case 7:q=j
x=q!=null?8:9
break
case 8:x=10
return A.d(s.atg(q,d,g.r,l,g),$async$a6v)
case 10:m=j
v=m
x=1
break
case 9:u=2
x=6
break
case 4:u=3
k=t.pop()
p=A.aH(k)
A.Xw().$1("FileService: Error cropping on web: "+A.T(p))
x=6
break
case 3:x=2
break
case 6:if(s.amK(f.length,g,d)){v=null
x=1
break}v=s.br4(e,f,g.r,l)
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a6v,w)},
br4(d,e,f,g){var x,w,v,u,t,s=this,r=null,q=d.b,p=C.c.gaa(q.split(".")),o=s.bnX(d),n=s.cN9(d)
if(o){x=A.e("image",r,r,!0)
q=s.Ys(x,p.length!==0?p:"jpg",g)}else if(n){x=A.e("video",r,r,!0)
q=s.Ys(x,p.length!==0?p:"mp4",g)}else{A.dP("name: "+q)
if(q.length===0){w=d.a
w=w!=null&&w.length!==0}else w=!1
if(w){w=d.a
w.toString
v=C.m.mh(w,A.ch("[/\\\\]",!0,!1,!1))
u=v.length!==0?C.c.gaa(v):q
A.dP("name1: "+u)}else u=q
if(u.length===0){t=C.c.gaa(q.split("."))
q="file_"+Date.now()+"."+t
A.dP("name2: "+q)}else q=u}w=p.length!==0?B.aCQ(p):"application/octet-stream"
return new D.a8h(e,q,w,e.length,r,r)},
Ys(d,e,f){var x,w=C.m.b8(d)
if(C.m.p(w,"."))w=C.c.ga7(w.split("."))
x=f!=null?f+1:1
return w+"_"+x+"."+e},
atf(d,e,f,g,h,i,j,k){return this.d8H(d,!0,f,g,h,i,j,k)},
d8H(d,e,f,g,h,i,a0,a1){var x=0,w=A.l(y.r),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$atf=A.h(function(a2,a3){if(a2===1)return A.i(a3,w)
for(;;)switch(x){case 0:x=3
return A.d(d.li(),$async$atf)
case 3:l=a3
k=d.b
j=k.length
if(j===0||j<3||!C.m.p(k,".")){j=d.c
j===$&&A.a()
if(j.length!==0){t=C.m.mh(j,A.ch("[/\\\\]",!0,!1,!1))
if(t.length!==0){s=C.c.gaa(t)
if(C.m.p(s,".")||s.length!==0)k=s}}if(k.length===0||!C.m.p(k,"."))k="image_"+Date.now()+".jpg"}r=C.m.p(k,".")?C.c.gaa(k.split(".")).toLowerCase():"jpg"
q=C.c.p(C.P2,r)
if(r.length!==0)p=r
else p=q?"mp4":"jpg"
if(q){o=u.a6n(l,B.aCQ(p))
n=A.e("video",null,null,!0)
m=u.Ys(n,p,i)
v=new D.a8h(new Uint8Array(0),m,B.aCQ(p),0,o,null)
x=1
break}j=l.length
if(u.amK(j,f,g)){v=null
x=1
break}n=A.e("image",null,null,!0)
v=new D.a8h(l,u.Ys(n,p,i),B.aCQ(p),j,null,null)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$atf,w)},
atg(d,e,f,g,h){return this.d8I(d,e,f,g,h)},
d8I(d,e,f,g,h){var x=0,w=A.l(y.r),v,u=this,t,s,r,q,p,o,n
var $async$atg=A.h(function(i,j){if(i===1)return A.i(j,w)
for(;;)switch(x){case 0:x=3
return A.d(d.li(),$async$atg)
case 3:o=j
n=u.amK(o.length,h,e)
if(n){v=null
x=1
break}t=d.b
n=t.length
if(n===0||n<3||!C.m.p(t,".")){n=d.c
n===$&&A.a()
if(n.length!==0){s=C.m.mh(n,A.ch("[/\\\\]",!0,!1,!1))
if(s.length!==0){r=C.c.gaa(s)
if(C.m.p(r,".")||r.length!==0)t=r}}if(t.length===0||!C.m.p(t,"."))t="image_"+Date.now()+".jpg"}q=C.m.p(t,".")?C.c.gaa(t.split(".")):"jpg"
p=A.e("image",null,null,!0)
v=new D.a8h(o,u.Ys(p,q,g),B.aCQ(q),o.length,null,null)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$atg,w)}}
B.fuZ.prototype={
avZ(d){return this.dj5(d)},
dj5(d){var x=0,w=A.l(y.R),v,u=2,t=[],s,r,q,p,o
var $async$avZ=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}u=4
x=7
return A.d(B.hGa(d),$async$avZ)
case 7:q=f
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aH(o)
r=A.cS(o)
$.b3().bo(0,"[VideoCompression] compressVideoBytes failed: "+A.T(s)+"\n"+A.T(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$avZ,w)}}
B.av2.prototype={
dlB(d,e,f){var x=this
return new B.av2(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,!0,x.z,x.Q,f)},
bBR(d){return this.dlB(null,null,d)}}
B.cyx.prototype={}
var z=a.updateTypes([])
B.hGh.prototype={
$0(){(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
B.hGi.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0){this.b.$0()
x.eg(0,null)}},
$S:71}
B.hGm.prototype={
$0(){var x,w=this.a,v=w.b
if(v!=null){x=window
x.toString
C.oC.bjr(x)
x.cancelAnimationFrame(v)
w.b=null}},
$S:0}
B.hGj.prototype={
$1(d){return this.bXD(d)},
bXD(a3){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$$1=A.h(function(a5,a6){if(a5===1)return A.i(a6,w)
for(;;)switch(x){case 0:a1=u.b
a2=a1.a
if((a2.a&30)!==0){x=1
break}try{j=u.c
i=j.videoWidth
i.toString
t=i
i=j.videoHeight
i.toString
s=i
if(t<=0||s<=0){a1.eg(0,null)
x=1
break}r=t>1280?1280:t
q=C.l.ao(s*r/t)
p=A.dq_(q,r)
i=p.getContext("2d")
i.toString
o=i
i=u.a
n=new B.hGl(i,a1,j,o,r,q)
m=J.iVQ(p,24)
h=y.N
g=y.C
l=A.p(["videoBitsPerSecond",2e6,"mimeType","video/mp4"],h,g)
k=null
try{k=B.iyP(m,l)}catch(a4){k=B.iyP(m,A.p(["videoBitsPerSecond",2e6],h,g))}i.a=k
h=u.d
e=y.z
A.kL(k,"dataavailable",new B.hGd(h),!1,e)
d=u.e
a0=u.f
A.kL(k,"stop",new B.hGe(i,d,a0,h,a1),!1,e)
A.kL(k,"error",new B.hGf(a1,d,a0),!1,e)
J.iWp(k,100)
j=j.play()
j.toString
A.h3(j,g)
n.$0()}catch(a4){A.cS(a4)
u.e.$0()
u.f.$0()
if((a2.a&30)===0)a1.eg(0,null)}case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:2310}
B.hGl.prototype={
$0(){var x,w,v=this
if((v.b.a.a&30)!==0)return
x=v.c.ended
x.toString
if(!x){x=v.c.paused
x.toString}else x=!0
if(x)return
v.d.drawImage(v.c,0,0,v.e,v.f)
x=window
x.toString
w=C.oC.bN3(x,new B.hGg(v))
v.a.b=w},
$S:0}
B.hGg.prototype={
$1(d){return this.a.$0()},
$S:454}
B.hGd.prototype={
$1(d){var x,w=y.Q.a(d)
if(w.data!=null){x=w.data.size
x.toString
x=x>0}else x=!1
if(x){x=w.data
x.toString
this.a.push(x)}},
$S:71}
B.hGe.prototype={
$1(d){var x,w,v,u,t,s,r=this
r.b.$0()
r.c.$0()
u=r.d
if(u.length===0){r.e.eg(0,null)
return}t=r.a.a
s=t==null?null:t.mimeType
x=s==null?"video/mp4":s
w=A.at8(u,null)
u=new FileReader()
u.toString
v=u
u=r.e
t=y.p
A.kL(v,"loadend",new B.hGb(v,u,x),!1,t)
A.kL(v,"error",new B.hGc(u),!1,t)
J.ibH(v,w)},
$S:71}
B.hGb.prototype={
$1(d){var x,w,v,u=this,t=u.a,s=t.readyState
s.toString
if(s===2&&C.BT.gagU(t)!=null)try{t=C.BT.gagU(t)
t.toString
x=t
w=y.D.b(x)?x:A.axd(y.J.a(x),0,null)
u.b.eg(0,new B.a9Y(w,u.c))}catch(v){u.b.eg(0,null)}else u.b.eg(0,null)},
$S:238}
B.hGc.prototype={
$1(d){return this.a.eg(0,null)},
$S:238}
B.hGf.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0){this.b.$0()
this.c.$0()
x.eg(0,null)}},
$S:71}
B.hGk.prototype={
$1(d){var x
this.b.$0()
x=this.a.a
if(x!=null&&x.state==="recording")x.stop()},
$S:71};(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(B.av3,A.jS)
v(A.ao,[B.a9Y,B.cyx,B.fuZ,B.av2])
w(B.dWt,B.cyx)
v(A.aO,[B.hGh,B.hGm,B.hGl])
v(A.aN,[B.hGi,B.hGj,B.hGg,B.hGd,B.hGe,B.hGb,B.hGc,B.hGf,B.hGk])
x(B.cyx,B.fuZ)})()
var y=(function rtii(){var x=A.t
return{Q:x("aEr"),J:x("a7i"),z:x("eB"),w:x("F<a1Y>"),i:x("F<a8h>"),s:x("F<n>"),p:x("a8n"),N:x("n"),D:x("ey"),B:x("cj<a9Y?>"),E:x("aPl<eB>"),A:x("bl<a9Y?>"),C:x("@"),R:x("a9Y?"),b:x("Z<a8h>?"),r:x("a8h?"),H:x("~")}})();(function constants(){E.J2=new B.av3(0,"file")
E.Z_=new B.av3(1,"gallery")
E.Z0=new B.av3(2,"camera")
E.afT=new B.av3(3,"recordAudio")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"k9L","d1L",()=>new B.dWt())})()};
(a=>{a["czl5fUChLQa0xXk05dEqsvfFhQE="]=a.current})($__dart_deferred_initializers__);