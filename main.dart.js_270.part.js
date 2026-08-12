((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,B={a9T:function a9T(d,e){this.a=d
this.b=e},
iq7(d,e){var w,v,u,t,s,r,q,p,o=null
switch(d.a){case 0:w=new A.ou(45,120,2)
break
case 1:w=new A.ou(10,30,1)
break
case 2:w=new A.ou(15,45,2)
break
case 3:w=D.dVH
break
default:w=o}v=w.a
u=o
t=o
s=w.b
r=w.c
t=r
u=s
q=v
p=q+C.k.cn(e/1048576/t)
if(p>u)return A.a6(0,0,0,0,0,u)
return A.a6(0,0,0,0,0,p)},
bQG:function bQG(d,e){this.a=d
this.b=e},
ZJ:function ZJ(d,e){this.a=d
this.b=e},
dQR:function dQR(d,e){this.a=d
this.b=e},
emj:function emj(){},
emn:function emn(){},
eml:function eml(){},
emm:function emm(){},
dq4:function dq4(){},
etQ:function etQ(){},
h1a:function h1a(){},
aMd:function aMd(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.as=p
_.at=q
_.ax=r},
cO9:function cO9(){},
cOa:function cOa(){},
cOb:function cOb(){},
j9L(d){var w=0,v=A.m(x.I),u
var $async$j9L=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:u=null
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$j9L,v)},
jaZ(d){var w=0,v=A.m(x.K),u
var $async$jaZ=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:u=null
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$jaZ,v)},
jaY(d){var w=0,v=A.m(x.K),u
var $async$jaY=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:u=null
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$jaY,v)},
dco(d,e){var w=0,v=A.m(x.R),u,t,s,r,q,p,o
var $async$dco=A.i(function(f,g){if(f===1)return A.j(g,v)
for(;;)switch(w){case 0:w=3
return A.c(B.dbd(d,null,960,e),$async$dco)
case 3:q=g
p=q.a
o=q.b
if(p==null){u=null
w=1
break}t=p.a.length
if(t<=e){u=p
w=1
break}s=C.h.aX(C.k.ap(o*e/t*0.8),48e3,3e5)
$.aT().cJ("VideoCompress: output "+t+" B over target "+e+" B - final pass at "+s+" bps / 480px")
w=4
return A.c(B.dbd(d,s,480,e),$async$dco)
case 4:r=g.a
if(r!=null&&r.a.length<t){u=r
w=1
break}u=p
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$dco,v)},
dbd(d,e,f,g){return B.kdO(d,e,f,g)},
kdO(d,e,f,g){var w=0,v=A.m(x.s),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$dbd=A.i(function(h,a0){if(h===1)return A.j(a0,v)
for(;;)switch(w){case 0:j={}
i=d.length
if(i===0){u=D.aYg
w=1
break}if(!B.jZB("video/mp4")){$.aT().dX(0,"VideoCompress: browser does not support MP4 output, skipping compression")
u=D.aYg
w=1
break}t=(self.URL||self.webkitURL).createObjectURL(A.apS([d],"video/mp4"))
t.toString
s=document.createElement("video")
s.src=t
s.muted=!0
s.setAttribute("playsinline","true")
r=new A.bq($.bV,x.A)
q=new A.cq(r,x.B)
p=A.b([],x.w)
j.a=j.b=j.c=null
j.d=3e5
t=new B.idP(t)
o=x.E.c
A.kx(s,"error",new B.idQ(q,t),!1,o)
j.b=A.eE(C.T,new B.idR(q,t))
j.e=null
n=new B.idV(j)
j.f=!1
A.kx(s,"canplay",new B.idS(j,q,s,f,e,g,p,n,t),!1,o)
A.kx(s,"ended",new B.idT(j,n),!1,o)
s.load()
w=3
return A.c(r,$async$dbd)
case 3:m=a0
j.b.aS(0)
r=j.a
if(r!=null)r.aS(0)
l=i/1024|0
if(m==null)$.aT().cJ("VideoCompress: failed | input: "+l+" KB")
else{t=m.a.length
k=i>0?C.k.au(100*t/i,0):"0"
$.aT().cJ("VideoCompress: input "+l+" KB -> output "+(t/1024|0)+" KB ("+k+"%), mimeType: "+m.b)}u=new A.b6(m,j.d)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$dbd,v)},
idP:function idP(d){this.a=d},
idQ:function idQ(d,e){this.a=d
this.b=e},
idR:function idR(d,e){this.a=d
this.b=e},
idV:function idV(d){this.a=d},
idS:function idS(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
idU:function idU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
idO:function idO(d){this.a=d},
idK:function idK(d){this.a=d},
idL:function idL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
idI:function idI(d,e,f){this.a=d
this.b=e
this.c=f},
idJ:function idJ(d){this.a=d},
idM:function idM(d,e,f){this.a=d
this.b=e
this.c=f},
idN:function idN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
idT:function idT(d,e){this.a=d
this.b=e},
jnC(d,e){var w=new MediaRecorder(d,A.j98(e))
w.toString
return w},
jZB(d){var w=MediaRecorder.isTypeSupported(d)
w.toString
return w},
ajc(d){switch(d.toLowerCase()){case"jpg":case"jpeg":return"image/jpeg"
case"png":return"image/png"
case"gif":return"image/gif"
case"webp":return"image/webp"
case"heic":return"image/heic"
case"heif":return"image/heif"
case"bmp":return"image/bmp"
case"avif":return"image/avif"
case"tiff":case"tif":return"image/tiff"
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
default:return"application/octet-stream"}}},D,E,G,H
J=c[1]
A=c[0]
C=c[2]
F=c[1006]
B=a.updateHolder(c[607],B)
D=c[784]
E=c[615]
G=c[1110]
H=c[1029]
B.a9T.prototype={
M(){return"FilePickerSource."+this.b},
gamr(){switch(this.a){case 0:return F.a1X
case 1:return H.apC
case 2:return D.c2k
case 3:return G.c2W
case 4:return C.cs}},
gbfB(){switch(this.a){case 0:return C.bn
case 1:return C.mS
case 2:return null
case 3:return C.Y
case 4:return C.aU}}}
B.bQG.prototype={
M(){return"CompressionMediaKind."+this.b}}
B.ZJ.prototype={
glH(){return this.a}}
B.dQR.prototype={
M(){return"CompressedPickKind."+this.b}}
B.emj.prototype={
XB(d,e,f){return this.emC(d,e,f)},
aLu(d,e){return this.XB(d,e,!0)},
emC(b6,b7,b8){var w=0,v=A.m(x.b),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$XB=A.i(function(b9,c0){if(b9===1){s.push(c0)
w=t}for(;;)switch(w){case 0:t=4
a4=$.aT()
a5=b7.a
a6=a5.m(0)
a7=a5===C.c0J
a8=a7?"media/gallery":"file browser"
a9=b7.b
a4.cJ("[ImageCompression] pickFromFilePicker [fileType="+a6+", branch="+a8+", exts="+A.W(a9)+"]")
w=a7?7:8
break
case 7:q=r.cMt(b7)
b0=b7.x
if(b0==null)b0=b7.c?20:1
p=b0
o=!b8&&!q
a4.cJ("[ImageCompression] media pick [allowVideo="+b8+", videosOnly="+A.W(q)+", alreadyResized="+A.W(o)+", compressImages="+b7.z+"]")
a4=$.a_x()
a5=q?A.e("pickVideos",null,null,!0):A.e("addImagesAndFiles",null,null,!1)
a6=b7.d?b7.e:null
w=9
return A.c(a4.emH(b8,b6,p,a6,a5,q),$async$XB)
case 9:n=c0
if(J.c3(n)){u=null
w=1
break}m=A.b([],x.i)
l=0,a4=b7.r,a5=b7.y,a6=b7.as,a7=b7.at,a8=b7.w,a9=a8==null
case 10:if(!(l<J.av(n))){w=12
break}b1=J.O(n,l)
b2=a9?0:a8
w=13
return A.c(r.a1B(b1,a5,b7,b6,a4,b2+l,a7,a6),$async$XB)
case 13:k=c0
if(k!=null)J.ci(m,k)
case 11:++l
w=10
break
case 12:if(q)J.bGZ(m,new B.emn())
a4=J.av(m)===0?null:m
u=a4
w=1
break
case 8:if(!b7.c){a4=b7.x
a4=a4!=null&&a4>1
b3=a4}else b3=!0
j=b3
w=14
return A.c($.jkA.n().aLt(j,a9,a5,!0),$async$XB)
case 14:i=c0
if(i==null||J.c3(i.a)){u=null
w=1
break}a4=b7.x
h=a4!=null&&J.av(i.a)>a4?J.apw(i.a,a4).cZ(0):i.a
g=A.b([],x.i)
a4=J.bx(h),a5=b7.r,a6=b7.w,a7=b7.d,a8=b7.y,a9=a6==null
case 15:if(!a4.G()){w=16
break}f=a4.ga7(a4)
e=f.a
if(r.asu(f.e,b7,b6)){w=15
break}d=f.c
if(d==null||d.length===0){w=15
break}b1=!1
if(a7){b1=C.d.gad(f.b.split("."))
b1=C.d.p(D.aCU,b1.toLowerCase())}w=b1?17:19
break
case 17:a0=J.av(g)
w=20
return A.c(r.aaf(b6,f,d,b7,a0),$async$XB)
case 20:a1=c0
if(a1!=null)J.ci(g,a1)
w=18
break
case 19:b1=C.d.gad(f.b.split("."))
if(C.d.p(C.FS,b1.toLowerCase())&&a8){b1=C.d.gad(f.b.split("."))
a2=r.aa5(d,B.ajc(b1))
b1=a9?0:a6
J.ci(g,r.dka(f,a2,a5,b1+J.av(g)))}else{b1=a9?0:a6
J.ci(g,r.aZw(r.bDO(f,d,a5,b1+J.av(g)),b7))}case 18:w=15
break
case 16:a4=J.av(g)===0?null:g
u=a4
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a3=A.aE(b5)
A.pq().$1("FileService: Error picking file: "+A.W(a3))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$XB,v)},
asu(d,e,f){var w,v,u=e.ax
if(u==null||d<=u)return!1
w=C.k.ap(u/1024)
v=A.e("simpleInvoiceFileExceedsMaxSize",null,null,!0)
new A.S(A.a1(v,"MAX_KB",""+w),C.t,C.u,C.w,f).A()
return!0},
d6T(d){var w=C.d.gad(d.b.split(".")).toLowerCase()
return C.d.p(D.aCU,w)},
d7u(d){var w=C.d.gad(d.b.split(".")).toLowerCase()
return C.d.p(C.FS,w)},
cMt(d){var w,v,u=d.b
if(u==null||u.length===0)return!1
w=A.an(u).j("ad<1,o>")
v=A.U(new A.ad(u,new B.eml(),w),w.j("aD.E"))
return C.d.fz(v,new B.emm())},
aa5(d,e){return this.cMc(d,e)},
cMc(d,e){var w=0,v=A.m(x.R),u,t=2,s=[],r=this,q,p,o,n
var $async$aa5=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=null
t=4
w=7
return A.c(r.aDy(d).o6(0,B.iq7(D.bJi,d.length)),$async$aa5)
case 7:o=g
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.aE(n)
$.aT().bg(0,"[VideoCompression] Web: failed or timed out: "+A.W(q))
o=null
w=6
break
case 3:w=2
break
case 6:if(o!=null&&C.m.bT(o.b.toLowerCase(),"video/mp4")&&o.a.length<d.length){u=o
w=1
break}u=new B.ZJ(d,e)
w=1
break
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$aa5,v)},
aaf(d,e,f,g,h){return this.cNT(d,e,f,g,h)},
cNT(d,e,f,g,h){var w=0,v=A.m(x.r),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aaf=A.i(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:k=g.w
j=(k==null?0:k)+h
t=4
k=e.b
C.d.gad(k.split("."))
m=B.ajc(C.d.gad(k.split(".")))
q=A.hcw(f,m,k)
w=7
return A.c($.a_x().b6k(d,g.e,q),$async$aaf)
case 7:p=a1
w=p!=null?8:9
break
case 8:w=10
return A.c(r.aAM(p,d,g.r,j,g),$async$aaf)
case 10:o=a1
if(o==null){u=null
w=1
break}k=r.aZw(o,g)
u=k
w=1
break
case 9:t=2
w=6
break
case 4:t=3
i=s.pop()
n=A.aE(i)
A.pq().$1("FileService: Error cropping on web: "+A.W(n))
w=6
break
case 3:w=2
break
case 6:if(r.asu(f.length,g,d)){u=null
w=1
break}u=r.aZw(r.bDO(e,f,g.r,j),g)
w=1
break
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$aaf,v)},
dka(d,e,f,g){var w,v,u,t,s
switch(0){case 0:break}w=C.d.gad(d.b.split("."))
v=A.e("video",null,null,!0)
u=this.abv(v,w.length!==0?w:"mp4",g)
t=new Uint8Array(0)
if(w.length!==0)s=B.ajc(w)
else{switch(0){case 0:break}s="video/mp4"}return new E.a2V(t,u,s,0,e,null)},
bDO(d,e,f,g){var w,v,u,t=this,s=null,r=C.d.gad(d.b.split(".")),q=t.d6T(d),p=t.d7u(d)
if(q){w=A.e("image",s,s,!0)
v=t.abv(w,r.length!==0?r:"jpg",g)}else if(p){w=A.e("video",s,s,!0)
v=t.abv(w,r.length!==0?r:"mp4",g)}else v=t.cUj(d)
u=r.length!==0?B.ajc(r):"application/octet-stream"
return new E.a2V(e,v,u,e.length,s,s)},
abv(d,e,f){var w,v=C.m.aA(d)
if(C.m.p(v,"."))v=C.d.ga4(v.split("."))
w=f!=null?f+1:1
return v+"_"+w+"."+e},
cUj(d){var w,v,u,t,s=d.b
if(s.length===0){w=d.a
w=w!=null&&w.length!==0}else w=!1
if(w){w=d.a
w.toString
v=C.m.lD(w,A.b5("[/\\\\]",!0,!1,!1))
u=v.length!==0?C.d.gad(v):s}else u=s
if(u.length===0){t=C.d.gad(s.split("."))
s="file_"+Date.now()+"."+t}else s=u
return s},
drT(d,e,f,g){$.dc()
$.aT().cJ("[ImageCompression] \u2717 SKIP downscale [source="+g+", ext="+e+"] \u2192 web platform (web uses the bytes-based branch)")
return!1},
O4(d,e,f){return this.cMa(d,e,f)},
cMa(a4,a5,a6){var w=0,v=A.m(x.R),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$O4=A.i(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=null
a1=new A.tO()
$.a_A()
a1.lV(0)
q=a1
t=4
i=$.aT()
i.cJ("[ImageCompression] \u25b6 start [path="+a5+", size="+C.k.ap(a6/1024)+"KB, mime="+a4+"]")
w=7
return A.c(B.jaZ(a5),$async$O4)
case 7:a0=a8
if(a0==null||a0.length===0){i.bg(0,"[ImageCompression] \u2717 unreadable file \u2014 the item will be removed [path="+a5+"]")
u=null
w=1
break}p=B.iq7(D.ZA,a6)
h=$.a_x()
g=a0
f=$.dc()
e=f.b.k2
w=8
return A.c(h.a30(g,Math.min(e.a,e.e)).o6(0,p),$async$O4)
case 8:o=a8
if(o!=null){i.cJ("[ImageCompression] \u2713 done in "+q.gl8()+"ms: "+C.k.ap(a0.length/1024)+"KB \u2192 "+C.k.ap(o.length/1024)+"KB")
u=new B.ZJ(o,"image/jpeg")
w=1
break}w=9
return A.c(r.bfZ(a5),$async$O4)
case 9:n=a8
w=n!=null?10:11
break
case 10:w=12
return A.c(B.jaY(n),$async$O4)
case 12:m=a8
w=m!=null&&!C.a_.gak(m)?13:14
break
case 13:l=m
t=16
i=f.b.k2
w=19
return A.c(h.a30(m,Math.min(i.a,i.e)).o6(0,B.iq7(D.ZA,m.length)),$async$O4)
case 19:k=a8
if(k!=null&&k.length<J.av(l))l=k
t=4
w=18
break
case 16:t=15
a2=s.pop()
w=18
break
case 15:w=4
break
case 18:if(J.av(l)<a0.length){$.aT().cJ("[ImageCompression] \u2713 native transcode in "+q.gl8()+"ms: "+C.k.ap(a0.length/1024)+"KB \u2192 "+C.k.ap(J.av(l)/1024)+"KB")
i=l
u=new B.ZJ(i,"image/jpeg")
w=1
break}case 14:case 11:$.aT().xe(0,y.c+q.gl8()+"ms ("+C.k.ap(a0.length/1024)+"KB) \u2014 see the reason logged above")
i=a0
u=new B.ZJ(i,a4)
w=1
break
t=2
w=6
break
case 4:t=3
a3=s.pop()
j=A.aE(a3)
$.aT().bg(0,y.h+q.gl8()+"ms \u2192 "+A.W(j))
if(a0!=null&&!C.a_.gak(a0)){u=new B.ZJ(a0,a4)
w=1
break}u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$O4,v)},
at5(d,e){return this.cM9(d,e)},
cM9(d,e){var w=0,v=A.m(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$at5=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:i=new A.tO()
$.a_A()
i.lV(0)
r=i
t=4
n=$.aT()
m=d.length
l=""+C.k.ap(m/1024)
n.cJ("[ImageCompression] \u25b6 start (bytes) [size="+l+"KB, mime="+e+"]")
q=B.iq7(D.ZA,m)
m=$.a_x()
k=$.dc().b.k2
w=7
return A.c(m.a30(d,Math.min(k.a,k.e)).o6(0,q),$async$at5)
case 7:p=g
if(p!=null){n.cJ("[ImageCompression] \u2713 done in "+r.gl8()+"ms: "+l+"KB \u2192 "+C.k.ap(p.length/1024)+"KB")
u=new B.ZJ(p,"image/jpeg")
w=1
break}n.xe(0,y.c+r.gl8()+"ms ("+l+"KB)")
u=new B.ZJ(d,e)
w=1
break
t=2
w=6
break
case 4:t=3
h=s.pop()
o=A.aE(h)
$.aT().bg(0,y.h+r.gl8()+"ms \u2192 "+A.W(o))
u=new B.ZJ(d,e)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$at5,v)},
aZw(d,e){var w,v,u,t,s
if(!e.z)return d
w=d.c
v=w.toLowerCase()
if(!C.m.bT(v,"image/")||v==="image/gif")return d
u=$.dc().b.k2
u=Math.min(u.a,u.e)
t=d.a
s=t.length
if(s===0||s<=u)return d
u=d.b
$.aT().cJ("[ImageCompression] \u2192 web deferred compression ["+C.k.ap(s/1024)+"KB, "+u+"]")
return new E.a2V(new Uint8Array(0),u,w,0,this.at5(t,w),null)},
a1B(d,e,f,g,h,i,j,k){return this.dAf(d,e,f,g,h,i,j,k)},
dAf(d,e,a0,a1,a2,a3,a4,a5){var w=0,v=A.m(x.r),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a1B=A.i(function(a6,a7){if(a6===1)return A.j(a7,v)
for(;;)switch(w){case 0:g=d.b
f=g.length
if(f===0||f<3||!C.m.p(g,".")){f=d.c
f===$&&A.a()
if(f.length!==0){s=C.m.lD(f,A.b5("[/\\\\]",!0,!1,!1))
if(s.length!==0){r=C.d.gad(s)
if(C.m.p(r,".")||r.length!==0)g=r}}if(g.length===0||!C.m.p(g,"."))g="image_"+Date.now()+".jpg"}q=C.m.p(g,".")?C.d.gad(g.split(".")).toLowerCase():"jpg"
p=C.d.p(C.FS,q)
if(q.length!==0)o=q
else o=p?"mp4":"jpg"
n=p?A.e("video",null,null,!0):A.e("image",null,null,!0)
m=t.abv(n,o,a3)
w=p&&e?3:4
break
case 3:w=5
return A.c(d.lA(),$async$a1B)
case 5:l=t.aa5(a7,B.ajc(o))
u=new E.a2V(new Uint8Array(0),m,B.ajc(o),0,l,null)
w=1
break
case 4:if(!p){f=d.c
f===$&&A.a()
f=f.length!==0}else f=!1
w=f?6:7
break
case 6:f=d.c
f===$&&A.a()
w=8
return A.c(B.j9L(f),$async$a1B)
case 8:k=a7
if(k==null)k=0
if(t.drT(a0,q,k,"gallery")){f=new Uint8Array(0)
j=B.ajc(o)
i=d.c
u=new E.a2V(f,m,j,0,t.O4(B.ajc(o),i,k),null)
w=1
break}case 7:w=9
return A.c(d.lA(),$async$a1B)
case 9:h=a7
if(p){u=new E.a2V(h,m,B.ajc(o),h.length,null,null)
w=1
break}f=h.length
if(t.asu(f,a0,a1)){u=null
w=1
break}u=new E.a2V(h,m,B.ajc(o),f,null,null)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$a1B,v)},
aAM(d,e,f,g,h){return this.dAg(d,e,f,g,h)},
dAg(d,e,f,g,h){var w=0,v=A.m(x.r),u,t=this,s,r,q,p,o,n,m
var $async$aAM=A.i(function(i,j){if(i===1)return A.j(j,v)
for(;;)switch(w){case 0:w=3
return A.c(d.lA(),$async$aAM)
case 3:n=j
m=t.asu(n.length,h,e)
if(m){u=null
w=1
break}s=d.b
m=s.length
if(m===0||m<3||!C.m.p(s,".")){m=d.c
m===$&&A.a()
if(m.length!==0){r=C.m.lD(m,A.b5("[/\\\\]",!0,!1,!1))
if(r.length!==0){q=C.d.gad(r)
if(C.m.p(q,".")||q.length!==0)s=q}}if(s.length===0||!C.m.p(s,"."))s="image_"+Date.now()+".jpg"}p=C.m.p(s,".")?C.d.gad(s.split(".")):"jpg"
o=A.e("image",null,null,!0)
u=new E.a2V(n,t.abv(o,p,g),B.ajc(p),n.length,null,null)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aAM,v)}}
B.dq4.prototype={}
B.etQ.prototype={
bfZ(d){var w=1024
return this.eup(d)},
eup(d){var w=0,v=A.m(x.T),u,t
var $async$bfZ=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:t=1024
u=null
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$bfZ,v)}}
B.h1a.prototype={
aDy(d){return this.dL0(d)},
dL0(d){var w=0,v=A.m(x.R),u,t=2,s=[],r,q,p,o,n
var $async$aDy=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){u=null
w=1
break}t=4
p=$.dc().b.k2
w=7
return A.c(B.dco(d,Math.min(p.c,p.r)),$async$aDy)
case 7:p=f
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
r=A.aE(n)
q=A.d7(n)
$.aT().bg(0,"[VideoCompression] compressVideoBytes failed: "+A.W(r)+"\n"+A.W(q))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$aDy,v)}}
B.aMd.prototype={
dO_(d,e,f){var w=this
return new B.aMd(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,!0,w.as,w.at,f)},
bQ0(d){return this.dO_(null,null,d)}}
B.cO9.prototype={}
B.cOa.prototype={}
B.cOb.prototype={}
var z=a.updateTypes(["E(a2V)"])
B.emn.prototype={
$1(d){return!C.m.bT(d.c,"video/")},
$S:z+0}
B.eml.prototype={
$1(d){return d.toLowerCase()},
$S:39}
B.emm.prototype={
$1(d){return C.d.p(C.FS,d)},
$S:18}
B.idP.prototype={
$0(){(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
B.idQ.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0){this.b.$0()
w.dM(0,null)}},
$S:65}
B.idR.prototype={
$0(){var w=this.a
if((w.a.a&30)!==0)return
$.aT().xe(0,"VideoCompress: metadata never arrived (10s) - keeping original")
this.b.$0()
w.dM(0,null)},
$S:0}
B.idV.prototype={
$0(){var w,v=this.a,u=v.e
if(u!=null){w=window
w.toString
C.og.bv6(w)
w.cancelAnimationFrame(u)
v.e=null}},
$S:0}
B.idS.prototype={
$1(d){return this.caW(d)},
caW(a9){var w=0,v=A.m(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$$1=A.i(function(b1,b2){if(b1===1)return A.j(b2,v)
for(;;)switch(w){case 0:a7=t.b
a8=a7.a
if((a8.a&30)!==0||t.a.f){w=1
break}e=t.a
e.f=!0
d=e.b
if(d!=null)d.aS(0)
try{d=t.c
a0=d.videoWidth
a0.toString
s=a0
a0=d.videoHeight
a0.toString
r=a0
if(s<=0||r<=0){a7.dM(0,null)
w=1
break}a1=t.d
q=s>a1?a1:s
p=C.k.ap(r*q/s)
o=A.bOa(p,q)
a0=o.getContext("2d")
a0.toString
n=a0
m=new B.idU(e,a7,d,n,q,p)
l=J.jMx(o,24)
k=3e5
a0=d.duration
a0.toString
j=a0
a0=t.e
if(a0!=null)k=a0
else if(isFinite(j)&&j>0)k=C.h.aX(C.k.ap(t.f*8*0.85/j),64e3,3e5)
e.d=k
a0=x.N
a2=x.C
i=A.f(["videoBitsPerSecond",k,"mimeType","video/mp4"],a0,a2)
h=null
try{h=B.jnC(l,i)}catch(b0){h=B.jnC(l,A.f(["videoBitsPerSecond",k],a0,a2))}e.c=h
a0=t.r
a4=x.z
A.kx(h,"dataavailable",new B.idK(a0),!1,a4)
a5=t.w
a6=t.x
A.kx(h,"stop",new B.idL(e,a7,a5,a6,a0),!1,a4)
A.kx(h,"error",new B.idM(a7,a5,a6),!1,a4)
J.jN9(h,100)
a4=d.play()
a4.toString
A.fZ(a4,a2)
m.$0()
d=d.duration
d.toString
g=d
f=isFinite(g)&&g>0?C.k.fP(g*1.5+10):90
e.a=A.eE(A.a6(0,0,0,0,0,f),new B.idN(e,a7,f,a5,a6))}catch(b0){A.d7(b0)
t.w.$0()
t.x.$0()
if((a8.a&30)===0)a7.dM(0,null)}case 1:return A.k(u,v)}})
return A.l($async$$1,v)},
$S:2405}
B.idU.prototype={
$0(){var w,v,u=this
if((u.b.a.a&30)!==0)return
w=u.c.ended
w.toString
if(!w){w=u.c.paused
w.toString}else w=!0
if(w)return
u.d.drawImage(u.c,0,0,u.e,u.f)
w=window
w.toString
v=C.og.c0N(w,new B.idO(u))
u.a.e=v},
$S:0}
B.idO.prototype={
$1(d){return this.a.$0()},
$S:496}
B.idK.prototype={
$1(d){var w,v=x.Q.a(d)
if(v.data!=null){w=v.data.size
w.toString
w=w>0}else w=!1
if(w){w=v.data
w.toString
this.a.push(w)}},
$S:65}
B.idL.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.c.$0()
q.d.$0()
t=q.e
if(t.length===0){p.dM(0,null)
return}s=q.a.c
r=s==null?null:s.mimeType
w=r==null?"video/mp4":r
v=A.apS(t,null)
t=new FileReader()
t.toString
u=t
t=x.p
A.kx(u,"loadend",new B.idI(p,u,w),!1,t)
A.kx(u,"error",new B.idJ(p),!1,t)
J.j_b(u,v)},
$S:65}
B.idI.prototype={
$1(d){var w,v,u,t,s,r=this.a
if((r.a.a&30)!==0)return
u=this.b
t=u.readyState
t.toString
if(t===2&&C.zJ.ga5M(u)!=null)try{u=C.zJ.ga5M(u)
u.toString
w=u
v=x.D.b(w)?w:A.aBE(x.J.a(w),0,null)
r.dM(0,new B.ZJ(v,this.c))}catch(s){r.dM(0,null)}else r.dM(0,null)},
$S:199}
B.idJ.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.dM(0,null)},
$S:199}
B.idM.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0){this.b.$0()
this.c.$0()
w.dM(0,null)}},
$S:65}
B.idN.prototype={
$0(){var w,v,u=this,t=u.b
if((t.a.a&30)!==0)return
$.aT().xe(0,"VideoCompress: re-encode exceeded "+u.c+"s - keeping original")
u.d.$0()
try{w=u.a.c
if(w!=null&&w.state==="recording")w.stop()}catch(v){}u.e.$0()
t.dM(0,null)},
$S:0}
B.idT.prototype={
$1(d){var w
this.b.$0()
w=this.a.c
if(w!=null&&w.state==="recording")w.stop()},
$S:65};(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.iE,[B.a9T,B.bQG,B.dQR])
v(A.ap,[B.ZJ,B.cO9,B.dq4,B.etQ,B.h1a,B.aMd])
u(B.cOa,B.cO9)
u(B.cOb,B.cOa)
u(B.emj,B.cOb)
v(A.aJ,[B.emn,B.eml,B.emm,B.idQ,B.idS,B.idO,B.idK,B.idL,B.idI,B.idJ,B.idM,B.idT])
v(A.aK,[B.idP,B.idR,B.idV,B.idU,B.idN])
w(B.cO9,B.h1a)
w(B.cOa,B.dq4)
w(B.cOb,B.etQ)})()
var y={c:"[ImageCompression] \u26a0 kept ORIGINAL after ",h:"[ImageCompression] \u2717 failed/timed out after "}
var x=(function rtii(){var w=A.t
return{Q:w("aJh"),J:w("a9x"),z:w("eR"),w:w("C<a3w>"),i:w("C<a2V>"),p:w("aaG"),s:w("+(ZJ?,A)"),N:w("o"),D:w("eu"),B:w("cq<ZJ?>"),E:w("aV4<eR>"),A:w("bq<ZJ?>"),C:w("@"),R:w("ZJ?"),b:w("Z<a2V>?"),r:w("a2V?"),T:w("o?"),K:w("eu?"),I:w("A?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.eFI=new B.dQR(0,"video")
D.ZA=new B.bQG(1,"image")
D.bJi=new B.bQG(3,"webVideoOuter")
D.Ez=new B.a9T(0,"file")
D.a1r=new B.a9T(1,"gallery")
D.a1s=new B.a9T(2,"camera")
D.aoi=new B.a9T(3,"recordAudio")
D.Ma=new B.a9T(4,"withoutFile")
D.c2k=new A.ah(57648,"MaterialIcons",null,!1)
D.aCU=w(["jpg","jpeg","png","gif","webp","heic","heif","bmp","avif","tiff","tif"],A.t("C<o>"))
D.aYg=new A.b6(null,0)
D.dVH=new A.ou(120,360,0.5)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"l53","dj9",()=>new B.emj())})()};
(a=>{a["twrJqsslqBoiCuHHXYpPeQvwj1c="]=a.current})($__dart_deferred_initializers__);