((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
iQK(d,e){var w,v,u,t,s,r,q,p,o=null
switch(d.a){case 0:w=new A.o5(45,120,2)
break
case 1:w=new A.o5(10,30,1)
break
case 2:w=new A.o5(15,45,2)
break
case 3:w=D.e1s
break
default:w=o}v=w.a
u=o
t=o
s=w.b
r=w.c
t=r
u=s
q=v
p=q+C.m.cq(e/1048576/t)
if(p>u)return A.a6(0,0,0,0,0,u)
return A.a6(0,0,0,0,0,p)},
bXL:function bXL(d,e){this.a=d
this.b=e},
a_P:function a_P(d,e){this.a=d
this.b=e},
e2B:function e2B(d,e){this.a=d
this.b=e},
eAq:function eAq(){},
eAu:function eAu(){},
eAs:function eAs(){},
eAt:function eAt(){},
dDL:function dDL(){},
eK8:function eK8(){},
hoJ:function hoJ(){},
aPt:function aPt(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
cZj:function cZj(){},
cZk:function cZk(){},
cZl:function cZl(){},
jDA(d){var w=0,v=A.l(x.I),u
var $async$jDA=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$jDA,v)},
jF_(d){var w=0,v=A.l(x.K),u
var $async$jF_=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$jF_,v)},
jEZ(d){var w=0,v=A.l(x.K),u
var $async$jEZ=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$jEZ,v)},
dok(d,e){var w=0,v=A.l(x.R),u,t,s,r,q,p,o
var $async$dok=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:w=3
return A.c(B.dmY(d,null,960,e),$async$dok)
case 3:q=g
p=q.a
o=q.b
if(p==null){u=null
w=1
break}t=p.a.length
if(t<=e){u=p
w=1
break}s=C.i.aT(C.m.aF(o*e/t*0.8),48e3,3e5)
$.aK().cr("VideoCompress: output "+t+" B over target "+e+" B - final pass at "+s+" bps / 480px")
w=4
return A.c(B.dmY(d,s,480,e),$async$dok)
case 4:r=g.a
if(r!=null&&r.a.length<t){u=r
w=1
break}u=p
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$dok,v)},
dmY(d,e,f,g){return B.kOf(d,e,f,g)},
kOf(d,e,f,a0){var w=0,v=A.l(x.s),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$dmY=A.h(function(a1,a2){if(a1===1)return A.i(a2,v)
for(;;)switch(w){case 0:h={}
g=d.length
if(g===0){u=D.b14
w=1
break}t=b.G
if(!t.MediaRecorder.isTypeSupported("video/mp4")){$.aK().dD(0,"VideoCompress: browser does not support MP4 output, skipping compression")
u=D.b14
w=1
break}s=new t.Blob(A.b([d],x.f),{type:"video/mp4"})
r=t.URL.createObjectURL(s)
q=A.eHT()
q.src=r
q.muted=!0
q.setAttribute("playsinline","true")
t=new A.bu($.bY,x.z)
p=new A.cw(t,x.B)
o=A.b([],x.O)
h.a=h.b=h.c=null
h.d=3e5
n=new B.iDa(r)
m=x.m
A.ka(q,"error",new B.iDb(p,n),!1,m)
h.b=A.e5(C.Q,new B.iDc(p,n))
h.e=null
l=new B.iDg(h)
h.f=!1
A.ka(q,"canplay",new B.iDd(h,p,q,f,e,a0,o,l,n),!1,m)
A.ka(q,"ended",new B.iDe(h,l),!1,m)
q.load()
w=3
return A.c(t,$async$dmY)
case 3:k=a2
h.b.aN(0)
t=h.a
if(t!=null)t.aN(0)
j=g/1024|0
if(k==null)$.aK().cr("VideoCompress: failed | input: "+j+" KB")
else{t=k.a.length
i=g>0?C.m.av(100*t/g,0):"0"
$.aK().cr("VideoCompress: input "+j+" KB -> output "+(t/1024|0)+" KB ("+i+"%), mimeType: "+k.b)}u=new A.b3(k,h.d)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$dmY,v)},
iDa:function iDa(d){this.a=d},
iDb:function iDb(d,e){this.a=d
this.b=e},
iDc:function iDc(d,e){this.a=d
this.b=e},
iDg:function iDg(d){this.a=d},
iDd:function iDd(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
iDf:function iDf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
iD9:function iD9(d){this.a=d},
iD5:function iD5(d){this.a=d},
iD6:function iD6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
iD3:function iD3(d,e,f){this.a=d
this.b=e
this.c=f},
iD4:function iD4(d){this.a=d},
iD7:function iD7(d,e,f){this.a=d
this.b=e
this.c=f},
iD8:function iD8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
iDe:function iDe(d,e){this.a=d
this.b=e},
alj(d){switch(d.toLowerCase()){case"jpg":case"jpeg":return"image/jpeg"
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
default:return"application/octet-stream"}}},D
J=c[1]
A=c[0]
C=c[2]
E=c[699]
B=a.updateHolder(c[694],B)
D=c[1246]
B.bXL.prototype={
M(){return"CompressionMediaKind."+this.b}}
B.a_P.prototype={
glI(){return this.a}}
B.e2B.prototype={
M(){return"CompressedPickKind."+this.b}}
B.eAq.prototype={
YD(d,e,f){return this.eBx(d,e,f)},
aOJ(d,e){return this.YD(d,e,!0)},
eBx(b6,b7,b8){var w=0,v=A.l(x.b),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$YD=A.h(function(b9,c0){if(b9===1){s.push(c0)
w=t}for(;;)switch(w){case 0:t=4
a4=$.aK()
a5=b7.a
a6=a5.m(0)
a7=a5===C.c5M
a8=a7?"media/gallery":"file browser"
a9=b7.b
a4.cr("[ImageCompression] pickFromFilePicker [fileType="+a6+", branch="+a8+", exts="+A.T(a9)+"]")
w=a7?7:8
break
case 7:q=r.cWe(b7)
b0=b7.x
if(b0==null)b0=b7.c?20:1
p=b0
o=!b8&&!q
a4.cr("[ImageCompression] media pick [allowVideo="+b8+", videosOnly="+A.T(q)+", alreadyResized="+A.T(o)+", compressImages="+b7.z+"]")
a4=$.a0B()
a5=q?A.d("pickVideos",null,null,!0):A.d("addImagesAndFiles",null,null,!1)
a6=b7.d?b7.e:null
w=9
return A.c(a4.eBC(b8,b6,p,a6,a5,q),$async$YD)
case 9:n=c0
if(J.ca(n)){u=null
w=1
break}m=A.b([],x.i)
l=0,a4=b7.r,a5=b7.y,a6=b7.as,a7=b7.at,a8=b7.w,a9=a8==null
case 10:if(!(l<J.aB(n))){w=12
break}b1=J.P(n,l)
b2=a9?0:a8
w=13
return A.c(r.a2N(b1,a5,b7,b6,a4,b2+l,a7,a6),$async$YD)
case 13:k=c0
if(k!=null)J.cn(m,k)
case 11:++l
w=10
break
case 12:if(q)J.bNL(m,new B.eAu())
a4=J.aB(m)===0?null:m
u=a4
w=1
break
case 8:if(!b7.c){a4=b7.x
a4=a4!=null&&a4>1
b3=a4}else b3=!0
j=b3
w=14
return A.c($.jPh.p().aOI(j,a9,a5,!0),$async$YD)
case 14:i=c0
if(i==null||J.ca(i.a)){u=null
w=1
break}a4=b7.x
h=a4!=null&&J.aB(i.a)>a4?J.arG(i.a,a4).cJ(0):i.a
g=A.b([],x.i)
a4=J.bj(h),a5=b7.r,a6=b7.w,a7=b7.d,a8=b7.y,a9=a6==null
case 15:if(!a4.H()){w=16
break}f=a4.ga6(a4)
e=f.a
if(r.auA(f.e,b7,b6)){w=15
break}d=f.c
if(d==null||d.length===0){w=15
break}b1=!1
if(a7){b1=C.d.gae(f.b.split("."))
b1=C.d.n(D.aGH,b1.toLowerCase())}w=b1?17:19
break
case 17:a0=J.aB(g)
w=20
return A.c(r.aby(b6,f,d,b7,a0),$async$YD)
case 20:a1=c0
if(a1!=null)J.cn(g,a1)
w=18
break
case 19:b1=C.d.gae(f.b.split("."))
if(C.d.n(C.HI,b1.toLowerCase())&&a8){b1=C.d.gae(f.b.split("."))
a2=r.abo(d,B.alj(b1))
b1=a9?0:a6
J.cn(g,r.dvc(f,a2,a5,b1+J.aB(g)))}else{b1=a9?0:a6
J.cn(g,r.b2w(r.bKf(f,d,a5,b1+J.aB(g)),b7))}case 18:w=15
break
case 16:a4=J.aB(g)===0?null:g
u=a4
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a3=A.ay(b5)
A.rh().$1("FileService: Error picking file: "+A.T(a3))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$YD,v)},
auA(d,e,f){var w,v,u=e.ax
if(u==null||d<=u)return!1
w=C.m.aF(u/1024)
v=A.d("simpleInvoiceFileExceedsMaxSize",null,null,!0)
new A.S(A.a1(v,"MAX_KB",""+w),C.r,C.u,C.v,f).v()
return!0},
dh5(d){var w=C.d.gae(d.b.split(".")).toLowerCase()
return C.d.n(D.aGH,w)},
dhE(d){var w=C.d.gae(d.b.split(".")).toLowerCase()
return C.d.n(C.HI,w)},
cWe(d){var w,v,u=d.b
if(u==null||u.length===0)return!1
w=A.af(u).j("a5<1,m>")
v=A.Q(new A.a5(u,new B.eAs(),w),w.j("av.E"))
return C.d.ek(v,new B.eAt())},
abo(d,e){return this.cVX(d,e)},
cVX(d,e){var w=0,v=A.l(x.R),u,t=2,s=[],r=this,q,p,o,n
var $async$abo=A.h(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=null
t=4
w=7
return A.c(r.aGs(d).lf(0,B.iQK(D.bNS,d.length)),$async$abo)
case 7:o=g
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.ay(n)
$.aK().b1(0,"[VideoCompression] Web: failed or timed out: "+A.T(q))
o=null
w=6
break
case 3:w=2
break
case 6:if(o!=null&&C.l.bL(o.b.toLowerCase(),"video/mp4")&&o.a.length<d.length){u=o
w=1
break}u=new B.a_P(d,e)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$abo,v)},
aby(d,e,f,g,h){return this.cXG(d,e,f,g,h)},
cXG(d,e,f,g,h){var w=0,v=A.l(x.r),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aby=A.h(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:k=g.w
j=(k==null?0:k)+h
t=4
k=e.b
C.d.gae(k.split("."))
m=B.alj(C.d.gae(k.split(".")))
q=A.cNE(f,m,k)
w=7
return A.c($.a0B().baK(d,g.e,q),$async$aby)
case 7:p=a1
w=p!=null?8:9
break
case 8:w=10
return A.c(r.aDA(p,d,g.r,j,g),$async$aby)
case 10:o=a1
if(o==null){u=null
w=1
break}k=r.b2w(o,g)
u=k
w=1
break
case 9:t=2
w=6
break
case 4:t=3
i=s.pop()
n=A.ay(i)
A.rh().$1("FileService: Error cropping on web: "+A.T(n))
w=6
break
case 3:w=2
break
case 6:if(r.auA(f.length,g,d)){u=null
w=1
break}u=r.b2w(r.bKf(e,f,g.r,j),g)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$aby,v)},
dvc(d,e,f,g){var w,v,u,t,s
switch(0){case 0:break}w=C.d.gae(d.b.split("."))
v=A.d("video",null,null,!0)
u=this.acZ(v,w.length!==0?w:"mp4",g)
t=new Uint8Array(0)
if(w.length!==0)s=B.alj(w)
else{switch(0){case 0:break}s="video/mp4"}return new E.a3R(t,u,s,0,e,null)},
bKf(d,e,f,g){var w,v,u,t=this,s=null,r=C.d.gae(d.b.split(".")),q=t.dh5(d),p=t.dhE(d)
if(q){w=A.d("image",s,s,!0)
v=t.acZ(w,r.length!==0?r:"jpg",g)}else if(p){w=A.d("video",s,s,!0)
v=t.acZ(w,r.length!==0?r:"mp4",g)}else v=t.d3w(d)
u=r.length!==0?B.alj(r):"application/octet-stream"
return new E.a3R(e,v,u,e.length,s,s)},
acZ(d,e,f){var w,v=C.l.ad(d)
if(C.l.n(v,"."))v=C.d.ga2(v.split("."))
w=f!=null?f+1:1
return v+"_"+w+"."+e},
d3w(d){var w,v,u,t,s=d.b
if(s.length===0){w=d.a
w=w!=null&&w.length!==0}else w=!1
if(w){w=d.a
w.toString
v=C.l.l0(w,A.b4("[/\\\\]",!0,!1,!1))
u=v.length!==0?C.d.gae(v):s}else u=s
if(u.length===0){t=C.d.gae(s.split("."))
s="file_"+Date.now()+"."+t}else s=u
return s},
dDQ(d,e,f,g){$.d8()
$.aK().cr("[ImageCompression] \u2717 SKIP downscale [source="+g+", ext="+e+"] \u2192 web platform (web uses the bytes-based branch)")
return!1},
OX(d,e,f){return this.cVV(d,e,f)},
cVV(a4,a5,a6){var w=0,v=A.l(x.R),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$OX=A.h(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=null
a1=new A.tW()
$.a_y()
a1.lD(0)
q=a1
t=4
i=$.aK()
i.cr("[ImageCompression] \u25b6 start [path="+a5+", size="+C.m.aF(a6/1024)+"KB, mime="+a4+"]")
w=7
return A.c(B.jF_(a5),$async$OX)
case 7:a0=a8
if(a0==null||a0.length===0){i.b1(0,"[ImageCompression] \u2717 unreadable file \u2014 the item will be removed [path="+a5+"]")
u=null
w=1
break}p=B.iQK(D.a10,a6)
h=$.a0B()
g=a0
f=$.d8()
e=f.b.ok
w=8
return A.c(h.a44(g,Math.min(e.a,e.e)).lf(0,p),$async$OX)
case 8:o=a8
if(o!=null){i.cr("[ImageCompression] \u2713 done in "+q.gkA()+"ms: "+C.m.aF(a0.length/1024)+"KB \u2192 "+C.m.aF(o.length/1024)+"KB")
u=new B.a_P(o,"image/jpeg")
w=1
break}w=9
return A.c(r.bkI(a5),$async$OX)
case 9:n=a8
w=n!=null?10:11
break
case 10:w=12
return A.c(B.jEZ(n),$async$OX)
case 12:m=a8
w=m!=null&&!C.a1.gai(m)?13:14
break
case 13:l=m
t=16
i=f.b.ok
w=19
return A.c(h.a44(m,Math.min(i.a,i.e)).lf(0,B.iQK(D.a10,m.length)),$async$OX)
case 19:k=a8
if(k!=null&&k.length<J.aB(l))l=k
t=4
w=18
break
case 16:t=15
a2=s.pop()
w=18
break
case 15:w=4
break
case 18:if(J.aB(l)<a0.length){$.aK().cr("[ImageCompression] \u2713 native transcode in "+q.gkA()+"ms: "+C.m.aF(a0.length/1024)+"KB \u2192 "+C.m.aF(J.aB(l)/1024)+"KB")
i=l
u=new B.a_P(i,"image/jpeg")
w=1
break}case 14:case 11:$.aK().nN(0,y.c+q.gkA()+"ms ("+C.m.aF(a0.length/1024)+"KB) \u2014 see the reason logged above")
i=a0
u=new B.a_P(i,a4)
w=1
break
t=2
w=6
break
case 4:t=3
a3=s.pop()
j=A.ay(a3)
$.aK().b1(0,y.h+q.gkA()+"ms \u2192 "+A.T(j))
if(a0!=null&&!C.a1.gai(a0)){u=new B.a_P(a0,a4)
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
return A.k($async$OX,v)},
avf(d,e){return this.cVU(d,e)},
cVU(d,e){var w=0,v=A.l(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$avf=A.h(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:i=new A.tW()
$.a_y()
i.lD(0)
r=i
t=4
n=$.aK()
m=d.length
l=""+C.m.aF(m/1024)
n.cr("[ImageCompression] \u25b6 start (bytes) [size="+l+"KB, mime="+e+"]")
q=B.iQK(D.a10,m)
m=$.a0B()
k=$.d8().b.ok
w=7
return A.c(m.a44(d,Math.min(k.a,k.e)).lf(0,q),$async$avf)
case 7:p=g
if(p!=null){n.cr("[ImageCompression] \u2713 done in "+r.gkA()+"ms: "+l+"KB \u2192 "+C.m.aF(p.length/1024)+"KB")
u=new B.a_P(p,"image/jpeg")
w=1
break}n.nN(0,y.c+r.gkA()+"ms ("+l+"KB)")
u=new B.a_P(d,e)
w=1
break
t=2
w=6
break
case 4:t=3
h=s.pop()
o=A.ay(h)
$.aK().b1(0,y.h+r.gkA()+"ms \u2192 "+A.T(o))
u=new B.a_P(d,e)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$avf,v)},
b2w(d,e){var w,v,u,t,s
if(!e.z)return d
w=d.c
v=w.toLowerCase()
if(!C.l.bL(v,"image/")||v==="image/gif")return d
u=$.d8().b.ok
u=Math.min(u.a,u.e)
t=d.a
s=t.length
if(s===0||s<=u)return d
u=d.b
$.aK().cr("[ImageCompression] \u2192 web deferred compression ["+C.m.aF(s/1024)+"KB, "+u+"]")
return new E.a3R(new Uint8Array(0),u,w,0,this.avf(t,w),null)},
a2N(d,e,f,g,h,i,j,k){return this.dML(d,e,f,g,h,i,j,k)},
dML(d,e,a0,a1,a2,a3,a4,a5){var w=0,v=A.l(x.r),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a2N=A.h(function(a6,a7){if(a6===1)return A.i(a7,v)
for(;;)switch(w){case 0:g=d.b
f=g.length
if(f===0||f<3||!C.l.n(g,".")){f=d.c
f===$&&A.a()
if(f.length!==0){s=C.l.l0(f,A.b4("[/\\\\]",!0,!1,!1))
if(s.length!==0){r=C.d.gae(s)
if(C.l.n(r,".")||r.length!==0)g=r}}if(g.length===0||!C.l.n(g,"."))g="image_"+Date.now()+".jpg"}q=C.l.n(g,".")?C.d.gae(g.split(".")).toLowerCase():"jpg"
p=C.d.n(C.HI,q)
if(q.length!==0)o=q
else o=p?"mp4":"jpg"
n=p?A.d("video",null,null,!0):A.d("image",null,null,!0)
m=t.acZ(n,o,a3)
w=p&&e?3:4
break
case 3:w=5
return A.c(d.lP(),$async$a2N)
case 5:l=t.abo(a7,B.alj(o))
u=new E.a3R(new Uint8Array(0),m,B.alj(o),0,l,null)
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
return A.c(B.jDA(f),$async$a2N)
case 8:k=a7
if(k==null)k=0
if(t.dDQ(a0,q,k,"gallery")){f=new Uint8Array(0)
j=B.alj(o)
i=d.c
u=new E.a3R(f,m,j,0,t.OX(B.alj(o),i,k),null)
w=1
break}case 7:w=9
return A.c(d.lP(),$async$a2N)
case 9:h=a7
if(p){u=new E.a3R(h,m,B.alj(o),h.length,null,null)
w=1
break}f=h.length
if(t.auA(f,a0,a1)){u=null
w=1
break}u=new E.a3R(h,m,B.alj(o),f,null,null)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$a2N,v)},
aDA(d,e,f,g,h){return this.dMM(d,e,f,g,h)},
dMM(d,e,f,g,h){var w=0,v=A.l(x.r),u,t=this,s,r,q,p,o,n,m
var $async$aDA=A.h(function(i,j){if(i===1)return A.i(j,v)
for(;;)switch(w){case 0:w=3
return A.c(d.lP(),$async$aDA)
case 3:n=j
m=t.auA(n.length,h,e)
if(m){u=null
w=1
break}s=d.b
m=s.length
if(m===0||m<3||!C.l.n(s,".")){m=d.c
m===$&&A.a()
if(m.length!==0){r=C.l.l0(m,A.b4("[/\\\\]",!0,!1,!1))
if(r.length!==0){q=C.d.gae(r)
if(C.l.n(q,".")||q.length!==0)s=q}}if(s.length===0||!C.l.n(s,"."))s="image_"+Date.now()+".jpg"}p=C.l.n(s,".")?C.d.gae(s.split(".")):"jpg"
o=A.d("image",null,null,!0)
u=new E.a3R(n,t.acZ(o,p,g),B.alj(p),n.length,null,null)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$aDA,v)}}
B.dDL.prototype={}
B.eK8.prototype={
bkI(d){var w=1024
return this.eK9(d)},
eK9(d){var w=0,v=A.l(x.T),u,t
var $async$bkI=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:t=1024
u=null
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$bkI,v)}}
B.hoJ.prototype={
aGs(d){return this.dYd(d)},
dYd(d){var w=0,v=A.l(x.R),u,t=2,s=[],r,q,p,o,n
var $async$aGs=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){u=null
w=1
break}t=4
p=$.d8().b.ok
w=7
return A.c(B.dok(d,Math.min(p.c,p.r)),$async$aGs)
case 7:p=f
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
r=A.ay(n)
q=A.cT(n)
$.aK().b1(0,"[VideoCompression] compressVideoBytes failed: "+A.T(r)+"\n"+A.T(q))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$aGs,v)}}
B.aPt.prototype={
e0k(d,e,f){var w=this
return new B.aPt(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,!0,w.as,w.at,f)},
bXL(d){return this.e0k(null,null,d)}}
B.cZj.prototype={}
B.cZk.prototype={}
B.cZl.prototype={}
var z=a.updateTypes(["D(a3R)"])
B.eAu.prototype={
$1(d){return!C.l.bL(d.c,"video/")},
$S:z+0}
B.eAs.prototype={
$1(d){return d.toLowerCase()},
$S:34}
B.eAt.prototype={
$1(d){return C.d.n(C.HI,d)},
$S:15}
B.iDa.prototype={
$0(){b.G.URL.revokeObjectURL(this.a)},
$S:0}
B.iDb.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0){this.b.$0()
w.e1(0,null)}},
$S:18}
B.iDc.prototype={
$0(){var w=this.a
if((w.a.a&30)!==0)return
$.aK().nN(0,"VideoCompress: metadata never arrived (10s) - keeping original")
this.b.$0()
w.e1(0,null)},
$S:0}
B.iDg.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){b.G.window.cancelAnimationFrame(v)
w.e=null}},
$S:0}
B.iDd.prototype={
$1(d){return this.cjD(d)},
cjD(a9){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$$1=A.h(function(b1,b2){if(b1===1)return A.i(b2,v)
for(;;)switch(w){case 0:a7=t.b
a8=a7.a
if((a8.a&30)!==0||t.a.f){w=1
break}e=t.a
e.f=!0
d=e.b
if(d!=null)d.aN(0)
try{d=t.c
s=d.videoWidth
r=d.videoHeight
if(s<=0||r<=0){a7.e1(0,null)
w=1
break}a0=t.d
q=s>a0?a0:s
p=C.m.aF(r*q/s)
a1=A.aCz()
a1.width=q
a1.height=p
o=a1
a2=o.getContext("2d")
n=a2==null?A.kb(a2):a2
m=new B.iDf(e,a7,d,n,q,p)
l=o.captureStream(24)
k=3e5
j=d.duration
a2=t.e
if(a2!=null)k=a2
else if(isFinite(j)&&j>0)k=C.i.aT(C.m.aF(t.f*8*0.85/j),64e3,3e5)
e.d=k
i={mimeType:"video/mp4",videoBitsPerSecond:k}
h=null
try{h=new b.G.MediaRecorder(l,i)}catch(b0){a2=b.G.MediaRecorder
a4={videoBitsPerSecond:k}
h=new a2(l,a4)}e.c=h
a2=t.r
a4=x.m
A.ka(h,"dataavailable",new B.iD5(a2),!1,a4)
a5=t.w
a6=t.x
A.ka(h,"stop",new B.iD6(e,a7,a5,a6,a2),!1,a4)
A.ka(h,"error",new B.iD7(a7,a5,a6),!1,a4)
h.start(100)
A.h2(d.play(),x.X)
m.$0()
g=d.duration
f=isFinite(g)&&g>0?C.m.f5(g*1.5+10):90
e.a=A.e5(A.a6(0,0,0,0,0,f),new B.iD8(e,a7,f,a5,a6))}catch(b0){t.w.$0()
t.x.$0()
if((a8.a&30)===0)a7.e1(0,null)}case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:1038}
B.iDf.prototype={
$0(){var w,v=this
if((v.b.a.a&30)!==0)return
if(v.c.ended||v.c.paused)return
A.os(v.d,"drawImage",[v.c,0,0,v.e,v.f])
w=b.G.window.requestAnimationFrame(A.kL(new B.iD9(v)))
v.a.e=w},
$S:0}
B.iD9.prototype={
$1(d){return this.a.$0()},
$S:53}
B.iD5.prototype={
$1(d){var w=d.data
if(w!=null&&w.size>0)this.a.push(w)},
$S:18}
B.iD6.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.c.$0()
q.d.$0()
t=q.e
if(t.length===0){p.e1(0,null)
return}s=q.a.c
r=s==null?null:s.mimeType
w=r==null?"video/mp4":r
s=b.G
v=new s.Blob(t)
u=new s.FileReader()
s=x.m
A.ka(u,"loadend",new B.iD3(p,u,w),!1,s)
A.ka(u,"error",new B.iD4(p),!1,s)
u.readAsArrayBuffer(v)},
$S:18}
B.iD3.prototype={
$1(d){var w,v,u,t,s=this.a
if((s.a.a&30)!==0)return
u=this.b
if(J.I(u.readyState,2)&&u.result!=null)try{u=u.result
u.toString
w=u
if(!A.t4(w,"ArrayBuffer")){u=A.bi("FileReader result is not an ArrayBuffer")
throw A.L(u)}v=A.aRT(x.a.a(w),0,null)
s.e1(0,new B.a_P(v,this.c))}catch(t){s.e1(0,null)}else s.e1(0,null)},
$S:18}
B.iD4.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.e1(0,null)},
$S:18}
B.iD7.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0){this.b.$0()
this.c.$0()
w.e1(0,null)}},
$S:18}
B.iD8.prototype={
$0(){var w,v,u,t=this,s=t.b
if((s.a.a&30)!==0)return
$.aK().nN(0,"VideoCompress: re-encode exceeded "+t.c+"s - keeping original")
t.d.$0()
try{w=t.a
v=w.c
if(v!=null&&J.I(v.state,"recording"))w.c.stop()}catch(u){}t.e.$0()
s.e1(0,null)},
$S:0}
B.iDe.prototype={
$1(d){var w,v
this.b.$0()
w=this.a
v=w.c
if(v!=null&&J.I(v.state,"recording"))w.c.stop()},
$S:18};(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.ia,[B.bXL,B.e2B])
v(A.ap,[B.a_P,B.cZj,B.dDL,B.eK8,B.hoJ,B.aPt])
u(B.cZk,B.cZj)
u(B.cZl,B.cZk)
u(B.eAq,B.cZl)
v(A.aG,[B.eAu,B.eAs,B.eAt,B.iDb,B.iDd,B.iD9,B.iD5,B.iD6,B.iD3,B.iD4,B.iD7,B.iDe])
v(A.aH,[B.iDa,B.iDc,B.iDg,B.iDf,B.iD8])
w(B.cZj,B.hoJ)
w(B.cZk,B.dDL)
w(B.cZl,B.eK8)})()
var y={c:"[ImageCompression] \u26a0 kept ORIGINAL after ",h:"[ImageCompression] \u2717 failed/timed out after "}
var x=(function rtii(){var w=A.t
return{O:w("B<cq>"),f:w("B<ap>"),i:w("B<a3R>"),m:w("cq"),a:w("anV"),s:w("+(a_P?,z)"),B:w("cw<a_P?>"),z:w("bu<a_P?>"),R:w("a_P?"),b:w("Z<a3R>?"),X:w("ap?"),r:w("a3R?"),T:w("m?"),K:w("fl?"),I:w("z?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.eNM=new B.e2B(0,"video")
D.a10=new B.bXL(1,"image")
D.bNS=new B.bXL(3,"webVideoOuter")
D.aGH=w(["jpg","jpeg","png","gif","webp","heic","heif","bmp","avif","tiff","tif"],A.t("B<m>"))
D.b14=new A.b3(null,0)
D.e1s=new A.o5(120,360,0.5)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"lI8","dvV",()=>new B.eAq())})()};
(a=>{a["3tAlJyAg/CtKMqvrtH0zH7v/2wk="]=a.current})($__dart_deferred_initializers__);