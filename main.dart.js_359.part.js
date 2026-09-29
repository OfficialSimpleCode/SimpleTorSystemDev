((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
irW(d,e){var w,v,u,t,s,r,q,p,o=null
switch(d.a){case 0:w=new A.oB(45,120,2)
break
case 1:w=new A.oB(10,30,1)
break
case 2:w=new A.oB(15,45,2)
break
case 3:w=D.dWH
break
default:w=o}v=w.a
u=o
t=o
s=w.b
r=w.c
t=r
u=s
q=v
p=q+C.k.cq(e/1048576/t)
if(p>u)return A.a6(0,0,0,0,0,u)
return A.a6(0,0,0,0,0,p)},
bRx:function bRx(d,e){this.a=d
this.b=e},
a_0:function a_0(d,e){this.a=d
this.b=e},
dRQ:function dRQ(d,e){this.a=d
this.b=e},
enE:function enE(){},
enI:function enI(){},
enG:function enG(){},
enH:function enH(){},
drW:function drW(){},
ewE:function ewE(){},
h3n:function h3n(){},
aMq:function aMq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
cPp:function cPp(){},
cPq:function cPq(){},
cPr:function cPr(){},
jcD(d){var w=0,v=A.l(x.I),u
var $async$jcD=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$jcD,v)},
jdW(d){var w=0,v=A.l(x.K),u
var $async$jdW=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$jdW,v)},
jdV(d){var w=0,v=A.l(x.K),u
var $async$jdV=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$jdV,v)},
ddp(d,e){var w=0,v=A.l(x.R),u,t,s,r,q,p,o
var $async$ddp=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:w=3
return A.c(B.dcb(d,null,960,e),$async$ddp)
case 3:q=g
p=q.a
o=q.b
if(p==null){u=null
w=1
break}t=p.a.length
if(t<=e){u=p
w=1
break}s=C.h.aV(C.k.ap(o*e/t*0.8),48e3,3e5)
$.aM().co("VideoCompress: output "+t+" B over target "+e+" B - final pass at "+s+" bps / 480px")
w=4
return A.c(B.dcb(d,s,480,e),$async$ddp)
case 4:r=g.a
if(r!=null&&r.a.length<t){u=r
w=1
break}u=p
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$ddp,v)},
dcb(d,e,f,g){return B.khE(d,e,f,g)},
khE(d,e,f,g){var w=0,v=A.l(x.s),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$dcb=A.h(function(h,a0){if(h===1)return A.i(a0,v)
for(;;)switch(w){case 0:j={}
i=d.length
if(i===0){u=D.aYt
w=1
break}if(!B.k2j("video/mp4")){$.aM().dP(0,"VideoCompress: browser does not support MP4 output, skipping compression")
u=D.aYt
w=1
break}t=(self.URL||self.webkitURL).createObjectURL(A.aq4([d],"video/mp4"))
t.toString
s=document.createElement("video")
s.src=t
s.muted=!0
s.setAttribute("playsinline","true")
r=new A.bp($.bX,x.A)
q=new A.cq(r,x.B)
p=A.b([],x.w)
j.a=j.b=j.c=null
j.d=3e5
t=new B.ifl(t)
o=x.E.c
A.kD(s,"error",new B.ifm(q,t),!1,o)
j.b=A.et(C.Q,new B.ifn(q,t))
j.e=null
n=new B.ifr(j)
j.f=!1
A.kD(s,"canplay",new B.ifo(j,q,s,f,e,g,p,n,t),!1,o)
A.kD(s,"ended",new B.ifp(j,n),!1,o)
s.load()
w=3
return A.c(r,$async$dcb)
case 3:m=a0
j.b.aO(0)
r=j.a
if(r!=null)r.aO(0)
l=i/1024|0
if(m==null)$.aM().co("VideoCompress: failed | input: "+l+" KB")
else{t=m.a.length
k=i>0?C.k.av(100*t/i,0):"0"
$.aM().co("VideoCompress: input "+l+" KB -> output "+(t/1024|0)+" KB ("+k+"%), mimeType: "+m.b)}u=new A.b4(m,j.d)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$dcb,v)},
ifl:function ifl(d){this.a=d},
ifm:function ifm(d,e){this.a=d
this.b=e},
ifn:function ifn(d,e){this.a=d
this.b=e},
ifr:function ifr(d){this.a=d},
ifo:function ifo(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ifq:function ifq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ifk:function ifk(d){this.a=d},
ifg:function ifg(d){this.a=d},
ifh:function ifh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ife:function ife(d,e,f){this.a=d
this.b=e
this.c=f},
iff:function iff(d){this.a=d},
ifi:function ifi(d,e,f){this.a=d
this.b=e
this.c=f},
ifj:function ifj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ifp:function ifp(d,e){this.a=d
this.b=e},
jqQ(d,e){var w=new MediaRecorder(d,A.jc_(e))
w.toString
return w},
k2j(d){var w=MediaRecorder.isTypeSupported(d)
w.toString
return w},
ajs(d){switch(d.toLowerCase()){case"jpg":case"jpeg":return"image/jpeg"
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
default:return"application/octet-stream"}}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[643],B)
D=c[1155]
E=c[651]
B.bRx.prototype={
L(){return"CompressionMediaKind."+this.b}}
B.a_0.prototype={
gls(){return this.a}}
B.dRQ.prototype={
L(){return"CompressedPickKind."+this.b}}
B.enE.prototype={
XA(d,e,f){return this.eom(d,e,f)},
aLm(d,e){return this.XA(d,e,!0)},
eom(b6,b7,b8){var w=0,v=A.l(x.b),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$XA=A.h(function(b9,c0){if(b9===1){s.push(c0)
w=t}for(;;)switch(w){case 0:t=4
a4=$.aM()
a5=b7.a
a6=a5.m(0)
a7=a5===C.c1o
a8=a7?"media/gallery":"file browser"
a9=b7.b
a4.co("[ImageCompression] pickFromFilePicker [fileType="+a6+", branch="+a8+", exts="+A.U(a9)+"]")
w=a7?7:8
break
case 7:q=r.cNu(b7)
b0=b7.x
if(b0==null)b0=b7.c?20:1
p=b0
o=!b8&&!q
a4.co("[ImageCompression] media pick [allowVideo="+b8+", videosOnly="+A.U(q)+", alreadyResized="+A.U(o)+", compressImages="+b7.z+"]")
a4=$.a_J()
a5=q?A.d("pickVideos",null,null,!0):A.d("addImagesAndFiles",null,null,!1)
a6=b7.d?b7.e:null
w=9
return A.c(a4.eor(b8,b6,p,a6,a5,q),$async$XA)
case 9:n=c0
if(J.c8(n)){u=null
w=1
break}m=A.b([],x.i)
l=0,a4=b7.r,a5=b7.y,a6=b7.as,a7=b7.at,a8=b7.w,a9=a8==null
case 10:if(!(l<J.aw(n))){w=12
break}b1=J.O(n,l)
b2=a9?0:a8
w=13
return A.c(r.a1v(b1,a5,b7,b6,a4,b2+l,a7,a6),$async$XA)
case 13:k=c0
if(k!=null)J.ci(m,k)
case 11:++l
w=10
break
case 12:if(q)J.bHC(m,new B.enI())
a4=J.aw(m)===0?null:m
u=a4
w=1
break
case 8:if(!b7.c){a4=b7.x
a4=a4!=null&&a4>1
b3=a4}else b3=!0
j=b3
w=14
return A.c($.jnI.n().aLl(j,a9,a5,!0),$async$XA)
case 14:i=c0
if(i==null||J.c8(i.a)){u=null
w=1
break}a4=b7.x
h=a4!=null&&J.aw(i.a)>a4?J.apJ(i.a,a4).cU(0):i.a
g=A.b([],x.i)
a4=J.bt(h),a5=b7.r,a6=b7.w,a7=b7.d,a8=b7.y,a9=a6==null
case 15:if(!a4.G()){w=16
break}f=a4.ga8(a4)
e=f.a
if(r.asm(f.e,b7,b6)){w=15
break}d=f.c
if(d==null||d.length===0){w=15
break}b1=!1
if(a7){b1=C.d.gad(f.b.split("."))
b1=C.d.p(D.aDa,b1.toLowerCase())}w=b1?17:19
break
case 17:a0=J.aw(g)
w=20
return A.c(r.aa4(b6,f,d,b7,a0),$async$XA)
case 20:a1=c0
if(a1!=null)J.ci(g,a1)
w=18
break
case 19:b1=C.d.gad(f.b.split("."))
if(C.d.p(C.G7,b1.toLowerCase())&&a8){b1=C.d.gad(f.b.split("."))
a2=r.a9U(d,B.ajs(b1))
b1=a9?0:a6
J.ci(g,r.dkY(f,a2,a5,b1+J.aw(g)))}else{b1=a9?0:a6
J.ci(g,r.aZp(r.bEp(f,d,a5,b1+J.aw(g)),b7))}case 18:w=15
break
case 16:a4=J.aw(g)===0?null:g
u=a4
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a3=A.aD(b5)
A.pv().$1("FileService: Error picking file: "+A.U(a3))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$XA,v)},
asm(d,e,f){var w,v,u=e.ax
if(u==null||d<=u)return!1
w=C.k.ap(u/1024)
v=A.d("simpleInvoiceFileExceedsMaxSize",null,null,!0)
new A.R(A.a1(v,"MAX_KB",""+w),C.r,C.u,C.v,f).A()
return!0},
d7B(d){var w=C.d.gad(d.b.split(".")).toLowerCase()
return C.d.p(D.aDa,w)},
d8a(d){var w=C.d.gad(d.b.split(".")).toLowerCase()
return C.d.p(C.G7,w)},
cNu(d){var w,v,u=d.b
if(u==null||u.length===0)return!1
w=A.al(u).j("ae<1,n>")
v=A.T(new A.ae(u,new B.enG(),w),w.j("aE.E"))
return C.d.f9(v,new B.enH())},
a9U(d,e){return this.cNd(d,e)},
cNd(d,e){var w=0,v=A.l(x.R),u,t=2,s=[],r=this,q,p,o,n
var $async$a9U=A.h(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=null
t=4
w=7
return A.c(r.aDp(d).lD(0,B.irW(D.bJI,d.length)),$async$a9U)
case 7:o=g
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.aD(n)
$.aM().b6(0,"[VideoCompression] Web: failed or timed out: "+A.U(q))
o=null
w=6
break
case 3:w=2
break
case 6:if(o!=null&&C.l.bQ(o.b.toLowerCase(),"video/mp4")&&o.a.length<d.length){u=o
w=1
break}u=new B.a_0(d,e)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$a9U,v)},
aa4(d,e,f,g,h){return this.cOZ(d,e,f,g,h)},
cOZ(d,e,f,g,h){var w=0,v=A.l(x.r),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aa4=A.h(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:k=g.w
j=(k==null?0:k)+h
t=4
k=e.b
C.d.gad(k.split("."))
m=B.ajs(C.d.gad(k.split(".")))
q=A.cE8(f,m,k)
w=7
return A.c($.a_J().b6e(d,g.e,q),$async$aa4)
case 7:p=a1
w=p!=null?8:9
break
case 8:w=10
return A.c(r.aAI(p,d,g.r,j,g),$async$aa4)
case 10:o=a1
if(o==null){u=null
w=1
break}k=r.aZp(o,g)
u=k
w=1
break
case 9:t=2
w=6
break
case 4:t=3
i=s.pop()
n=A.aD(i)
A.pv().$1("FileService: Error cropping on web: "+A.U(n))
w=6
break
case 3:w=2
break
case 6:if(r.asm(f.length,g,d)){u=null
w=1
break}u=r.aZp(r.bEp(e,f,g.r,j),g)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$aa4,v)},
dkY(d,e,f,g){var w,v,u,t,s
switch(0){case 0:break}w=C.d.gad(d.b.split("."))
v=A.d("video",null,null,!0)
u=this.abk(v,w.length!==0?w:"mp4",g)
t=new Uint8Array(0)
if(w.length!==0)s=B.ajs(w)
else{switch(0){case 0:break}s="video/mp4"}return new E.a37(t,u,s,0,e,null)},
bEp(d,e,f,g){var w,v,u,t=this,s=null,r=C.d.gad(d.b.split(".")),q=t.d7B(d),p=t.d8a(d)
if(q){w=A.d("image",s,s,!0)
v=t.abk(w,r.length!==0?r:"jpg",g)}else if(p){w=A.d("video",s,s,!0)
v=t.abk(w,r.length!==0?r:"mp4",g)}else v=t.cVB(d)
u=r.length!==0?B.ajs(r):"application/octet-stream"
return new E.a37(e,v,u,e.length,s,s)},
abk(d,e,f){var w,v=C.l.aq(d)
if(C.l.p(v,"."))v=C.d.ga4(v.split("."))
w=f!=null?f+1:1
return v+"_"+w+"."+e},
cVB(d){var w,v,u,t,s=d.b
if(s.length===0){w=d.a
w=w!=null&&w.length!==0}else w=!1
if(w){w=d.a
w.toString
v=C.l.ln(w,A.b3("[/\\\\]",!0,!1,!1))
u=v.length!==0?C.d.gad(v):s}else u=s
if(u.length===0){t=C.d.gad(s.split("."))
s="file_"+Date.now()+"."+t}else s=u
return s},
dsK(d,e,f,g){$.cV()
$.aM().co("[ImageCompression] \u2717 SKIP downscale [source="+g+", ext="+e+"] \u2192 web platform (web uses the bytes-based branch)")
return!1},
NZ(d,e,f){return this.cNb(d,e,f)},
cNb(a4,a5,a6){var w=0,v=A.l(x.R),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$NZ=A.h(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=null
a1=new A.rD()
$.YI()
a1.l4(0)
q=a1
t=4
i=$.aM()
i.co("[ImageCompression] \u25b6 start [path="+a5+", size="+C.k.ap(a6/1024)+"KB, mime="+a4+"]")
w=7
return A.c(B.jdW(a5),$async$NZ)
case 7:a0=a8
if(a0==null||a0.length===0){i.b6(0,"[ImageCompression] \u2717 unreadable file \u2014 the item will be removed [path="+a5+"]")
u=null
w=1
break}p=B.irW(D.ZZ,a6)
h=$.a_J()
g=a0
f=$.cV()
e=f.b.k3
w=8
return A.c(h.a2S(g,Math.min(e.a,e.e)).lD(0,p),$async$NZ)
case 8:o=a8
if(o!=null){i.co("[ImageCompression] \u2713 done in "+q.gkn()+"ms: "+C.k.ap(a0.length/1024)+"KB \u2192 "+C.k.ap(o.length/1024)+"KB")
u=new B.a_0(o,"image/jpeg")
w=1
break}w=9
return A.c(r.bg4(a5),$async$NZ)
case 9:n=a8
w=n!=null?10:11
break
case 10:w=12
return A.c(B.jdV(n),$async$NZ)
case 12:m=a8
w=m!=null&&!C.a_.gal(m)?13:14
break
case 13:l=m
t=16
i=f.b.k3
w=19
return A.c(h.a2S(m,Math.min(i.a,i.e)).lD(0,B.irW(D.ZZ,m.length)),$async$NZ)
case 19:k=a8
if(k!=null&&k.length<J.aw(l))l=k
t=4
w=18
break
case 16:t=15
a2=s.pop()
w=18
break
case 15:w=4
break
case 18:if(J.aw(l)<a0.length){$.aM().co("[ImageCompression] \u2713 native transcode in "+q.gkn()+"ms: "+C.k.ap(a0.length/1024)+"KB \u2192 "+C.k.ap(J.aw(l)/1024)+"KB")
i=l
u=new B.a_0(i,"image/jpeg")
w=1
break}case 14:case 11:$.aM().qt(0,y.c+q.gkn()+"ms ("+C.k.ap(a0.length/1024)+"KB) \u2014 see the reason logged above")
i=a0
u=new B.a_0(i,a4)
w=1
break
t=2
w=6
break
case 4:t=3
a3=s.pop()
j=A.aD(a3)
$.aM().b6(0,y.h+q.gkn()+"ms \u2192 "+A.U(j))
if(a0!=null&&!C.a_.gal(a0)){u=new B.a_0(a0,a4)
w=1
break}u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$NZ,v)},
asV(d,e){return this.cNa(d,e)},
cNa(d,e){var w=0,v=A.l(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$asV=A.h(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:i=new A.rD()
$.YI()
i.l4(0)
r=i
t=4
n=$.aM()
m=d.length
l=""+C.k.ap(m/1024)
n.co("[ImageCompression] \u25b6 start (bytes) [size="+l+"KB, mime="+e+"]")
q=B.irW(D.ZZ,m)
m=$.a_J()
k=$.cV().b.k3
w=7
return A.c(m.a2S(d,Math.min(k.a,k.e)).lD(0,q),$async$asV)
case 7:p=g
if(p!=null){n.co("[ImageCompression] \u2713 done in "+r.gkn()+"ms: "+l+"KB \u2192 "+C.k.ap(p.length/1024)+"KB")
u=new B.a_0(p,"image/jpeg")
w=1
break}n.qt(0,y.c+r.gkn()+"ms ("+l+"KB)")
u=new B.a_0(d,e)
w=1
break
t=2
w=6
break
case 4:t=3
h=s.pop()
o=A.aD(h)
$.aM().b6(0,y.h+r.gkn()+"ms \u2192 "+A.U(o))
u=new B.a_0(d,e)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$asV,v)},
aZp(d,e){var w,v,u,t,s
if(!e.z)return d
w=d.c
v=w.toLowerCase()
if(!C.l.bQ(v,"image/")||v==="image/gif")return d
u=$.cV().b.k3
u=Math.min(u.a,u.e)
t=d.a
s=t.length
if(s===0||s<=u)return d
u=d.b
$.aM().co("[ImageCompression] \u2192 web deferred compression ["+C.k.ap(s/1024)+"KB, "+u+"]")
return new E.a37(new Uint8Array(0),u,w,0,this.asV(t,w),null)},
a1v(d,e,f,g,h,i,j,k){return this.dB3(d,e,f,g,h,i,j,k)},
dB3(d,e,a0,a1,a2,a3,a4,a5){var w=0,v=A.l(x.r),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a1v=A.h(function(a6,a7){if(a6===1)return A.i(a7,v)
for(;;)switch(w){case 0:g=d.b
f=g.length
if(f===0||f<3||!C.l.p(g,".")){f=d.c
f===$&&A.a()
if(f.length!==0){s=C.l.ln(f,A.b3("[/\\\\]",!0,!1,!1))
if(s.length!==0){r=C.d.gad(s)
if(C.l.p(r,".")||r.length!==0)g=r}}if(g.length===0||!C.l.p(g,"."))g="image_"+Date.now()+".jpg"}q=C.l.p(g,".")?C.d.gad(g.split(".")).toLowerCase():"jpg"
p=C.d.p(C.G7,q)
if(q.length!==0)o=q
else o=p?"mp4":"jpg"
n=p?A.d("video",null,null,!0):A.d("image",null,null,!0)
m=t.abk(n,o,a3)
w=p&&e?3:4
break
case 3:w=5
return A.c(d.l_(),$async$a1v)
case 5:l=t.a9U(a7,B.ajs(o))
u=new E.a37(new Uint8Array(0),m,B.ajs(o),0,l,null)
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
return A.c(B.jcD(f),$async$a1v)
case 8:k=a7
if(k==null)k=0
if(t.dsK(a0,q,k,"gallery")){f=new Uint8Array(0)
j=B.ajs(o)
i=d.c
u=new E.a37(f,m,j,0,t.NZ(B.ajs(o),i,k),null)
w=1
break}case 7:w=9
return A.c(d.l_(),$async$a1v)
case 9:h=a7
if(p){u=new E.a37(h,m,B.ajs(o),h.length,null,null)
w=1
break}f=h.length
if(t.asm(f,a0,a1)){u=null
w=1
break}u=new E.a37(h,m,B.ajs(o),f,null,null)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$a1v,v)},
aAI(d,e,f,g,h){return this.dB4(d,e,f,g,h)},
dB4(d,e,f,g,h){var w=0,v=A.l(x.r),u,t=this,s,r,q,p,o,n,m
var $async$aAI=A.h(function(i,j){if(i===1)return A.i(j,v)
for(;;)switch(w){case 0:w=3
return A.c(d.l_(),$async$aAI)
case 3:n=j
m=t.asm(n.length,h,e)
if(m){u=null
w=1
break}s=d.b
m=s.length
if(m===0||m<3||!C.l.p(s,".")){m=d.c
m===$&&A.a()
if(m.length!==0){r=C.l.ln(m,A.b3("[/\\\\]",!0,!1,!1))
if(r.length!==0){q=C.d.gad(r)
if(C.l.p(q,".")||q.length!==0)s=q}}if(s.length===0||!C.l.p(s,"."))s="image_"+Date.now()+".jpg"}p=C.l.p(s,".")?C.d.gad(s.split(".")):"jpg"
o=A.d("image",null,null,!0)
u=new E.a37(n,t.abk(o,p,g),B.ajs(p),n.length,null,null)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$aAI,v)}}
B.drW.prototype={}
B.ewE.prototype={
bg4(d){var w=1024
return this.eww(d)},
eww(d){var w=0,v=A.l(x.T),u,t
var $async$bg4=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:t=1024
u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$bg4,v)}}
B.h3n.prototype={
aDp(d){return this.dM2(d)},
dM2(d){var w=0,v=A.l(x.R),u,t=2,s=[],r,q,p,o,n
var $async$aDp=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){u=null
w=1
break}t=4
p=$.cV().b.k3
w=7
return A.c(B.ddp(d,Math.min(p.c,p.r)),$async$aDp)
case 7:p=f
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
r=A.aD(n)
q=A.d8(n)
$.aM().b6(0,"[VideoCompression] compressVideoBytes failed: "+A.U(r)+"\n"+A.U(q))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$aDp,v)}}
B.aMq.prototype={
dP4(d,e,f){var w=this
return new B.aMq(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,!0,w.as,w.at,f)},
bQG(d){return this.dP4(null,null,d)}}
B.cPp.prototype={}
B.cPq.prototype={}
B.cPr.prototype={}
var z=a.updateTypes(["E(a37)"])
B.enI.prototype={
$1(d){return!C.l.bQ(d.c,"video/")},
$S:z+0}
B.enG.prototype={
$1(d){return d.toLowerCase()},
$S:38}
B.enH.prototype={
$1(d){return C.d.p(C.G7,d)},
$S:18}
B.ifl.prototype={
$0(){(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
B.ifm.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0){this.b.$0()
w.dz(0,null)}},
$S:64}
B.ifn.prototype={
$0(){var w=this.a
if((w.a.a&30)!==0)return
$.aM().qt(0,"VideoCompress: metadata never arrived (10s) - keeping original")
this.b.$0()
w.dz(0,null)},
$S:0}
B.ifr.prototype={
$0(){var w,v=this.a,u=v.e
if(u!=null){w=window
w.toString
C.oj.bvC(w)
w.cancelAnimationFrame(u)
v.e=null}},
$S:0}
B.ifo.prototype={
$1(d){return this.cbJ(d)},
cbJ(a9){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$$1=A.h(function(b1,b2){if(b1===1)return A.i(b2,v)
for(;;)switch(w){case 0:a7=t.b
a8=a7.a
if((a8.a&30)!==0||t.a.f){w=1
break}e=t.a
e.f=!0
d=e.b
if(d!=null)d.aO(0)
try{d=t.c
a0=d.videoWidth
a0.toString
s=a0
a0=d.videoHeight
a0.toString
r=a0
if(s<=0||r<=0){a7.dz(0,null)
w=1
break}a1=t.d
q=s>a1?a1:s
p=C.k.ap(r*q/s)
o=A.bP0(p,q)
a0=o.getContext("2d")
a0.toString
n=a0
m=new B.ifq(e,a7,d,n,q,p)
l=J.jQ0(o,24)
k=3e5
a0=d.duration
a0.toString
j=a0
a0=t.e
if(a0!=null)k=a0
else if(isFinite(j)&&j>0)k=C.h.aV(C.k.ap(t.f*8*0.85/j),64e3,3e5)
e.d=k
a0=x.N
a2=x.C
i=A.o(["videoBitsPerSecond",k,"mimeType","video/mp4"],a0,a2)
h=null
try{h=B.jqQ(l,i)}catch(b0){h=B.jqQ(l,A.o(["videoBitsPerSecond",k],a0,a2))}e.c=h
a0=t.r
a4=x.z
A.kD(h,"dataavailable",new B.ifg(a0),!1,a4)
a5=t.w
a6=t.x
A.kD(h,"stop",new B.ifh(e,a7,a5,a6,a0),!1,a4)
A.kD(h,"error",new B.ifi(a7,a5,a6),!1,a4)
J.jQD(h,100)
a4=d.play()
a4.toString
A.h_(a4,a2)
m.$0()
d=d.duration
d.toString
g=d
f=isFinite(g)&&g>0?C.k.ft(g*1.5+10):90
e.a=A.et(A.a6(0,0,0,0,0,f),new B.ifj(e,a7,f,a5,a6))}catch(b0){A.d8(b0)
t.w.$0()
t.x.$0()
if((a8.a&30)===0)a7.dz(0,null)}case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:2423}
B.ifq.prototype={
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
v=C.oj.c1B(w,new B.ifk(u))
u.a.e=v},
$S:0}
B.ifk.prototype={
$1(d){return this.a.$0()},
$S:404}
B.ifg.prototype={
$1(d){var w,v=x.Q.a(d)
if(v.data!=null){w=v.data.size
w.toString
w=w>0}else w=!1
if(w){w=v.data
w.toString
this.a.push(w)}},
$S:64}
B.ifh.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.c.$0()
q.d.$0()
t=q.e
if(t.length===0){p.dz(0,null)
return}s=q.a.c
r=s==null?null:s.mimeType
w=r==null?"video/mp4":r
v=A.aq4(t,null)
t=new FileReader()
t.toString
u=t
t=x.p
A.kD(u,"loadend",new B.ife(p,u,w),!1,t)
A.kD(u,"error",new B.iff(p),!1,t)
J.j1Z(u,v)},
$S:64}
B.ife.prototype={
$1(d){var w,v,u,t,s,r=this.a
if((r.a.a&30)!==0)return
u=this.b
t=u.readyState
t.toString
if(t===2&&C.zL.ga5D(u)!=null)try{u=C.zL.ga5D(u)
u.toString
w=u
v=x.D.b(w)?w:A.aBT(x.J.a(w),0,null)
r.dz(0,new B.a_0(v,this.c))}catch(s){r.dz(0,null)}else r.dz(0,null)},
$S:188}
B.iff.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.dz(0,null)},
$S:188}
B.ifi.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0){this.b.$0()
this.c.$0()
w.dz(0,null)}},
$S:64}
B.ifj.prototype={
$0(){var w,v,u=this,t=u.b
if((t.a.a&30)!==0)return
$.aM().qt(0,"VideoCompress: re-encode exceeded "+u.c+"s - keeping original")
u.d.$0()
try{w=u.a.c
if(w!=null&&w.state==="recording")w.stop()}catch(v){}u.e.$0()
t.dz(0,null)},
$S:0}
B.ifp.prototype={
$1(d){var w
this.b.$0()
w=this.a.c
if(w!=null&&w.state==="recording")w.stop()},
$S:64};(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.iJ,[B.bRx,B.dRQ])
v(A.ap,[B.a_0,B.cPp,B.drW,B.ewE,B.h3n,B.aMq])
u(B.cPq,B.cPp)
u(B.cPr,B.cPq)
u(B.enE,B.cPr)
v(A.aF,[B.enI,B.enG,B.enH,B.ifm,B.ifo,B.ifk,B.ifg,B.ifh,B.ife,B.iff,B.ifi,B.ifp])
v(A.aI,[B.ifl,B.ifn,B.ifr,B.ifq,B.ifj])
w(B.cPp,B.h3n)
w(B.cPq,B.drW)
w(B.cPr,B.ewE)})()
var y={c:"[ImageCompression] \u26a0 kept ORIGINAL after ",h:"[ImageCompression] \u2717 failed/timed out after "}
var x=(function rtii(){var w=A.t
return{Q:w("aJv"),J:w("a9R"),z:w("eT"),w:w("C<a3M>"),i:w("C<a37>"),p:w("ab1"),s:w("+(a_0?,A)"),N:w("n"),D:w("ev"),B:w("cq<a_0?>"),E:w("aVe<eT>"),A:w("bp<a_0?>"),C:w("@"),R:w("a_0?"),b:w("Z<a37>?"),r:w("a37?"),T:w("n?"),K:w("ev?"),I:w("A?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.eGD=new B.dRQ(0,"video")
D.ZZ=new B.bRx(1,"image")
D.bJI=new B.bRx(3,"webVideoOuter")
D.aDa=w(["jpg","jpeg","png","gif","webp","heic","heif","bmp","avif","tiff","tif"],A.t("C<n>"))
D.aYt=new A.b4(null,0)
D.dWH=new A.oB(120,360,0.5)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"l9w","dkq",()=>new B.enE())})()};
(a=>{a["4B6/aIUMblfctL1DCgcKqVUX1oE="]=a.current})($__dart_deferred_initializers__);