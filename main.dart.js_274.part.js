((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={auN:function auN(d,e){this.a=d
this.b=e},a9K:function a9K(d,e){this.a=d
this.b=e},dVp:function dVp(){},ftp:function ftp(){},auM:function auM(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.as=p},cxq:function cxq(){},
hD5(d){return B.job(d)},
job(d){var x=0,w=A.l(y.R),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$hD5=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:k={}
j=d.length
if(j===0){v=null
x=1
break}if(!B.j2N("video/mp4")){$.b1().dX(0,"VideoCompress: browser does not support MP4 output, skipping compression")
v=null
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.aE9([d],"video/mp4"))
u.toString
t=document.createElement("video")
t.src=u
t.muted=!0
t.setAttribute("playsinline","true")
s=new A.bq($.bP,y.A)
r=new A.ck(s,y.B)
q=A.b([],y.w)
k.a=null
u=new B.hDc(u)
p=y.E.c
A.lF(t,"error",new B.hDd(r,u),!1,p)
k.b=null
o=new B.hDh(k)
A.lF(t,"canplay",new B.hDe(k,r,t,q,o,u),!1,p)
A.lF(t,"ended",new B.hDf(k,o),!1,p)
t.load()
x=3
return A.d(s,$async$hD5)
case 3:n=f
m=j/1024|0
if(n==null)$.b1().fd("VideoCompress: failed | input: "+m+" KB")
else{k=n.a.length
l=j>0?C.l.aC(100*k/j,0):"0"
$.b1().fd("VideoCompress: input "+m+" KB -> output "+(k/1024|0)+" KB ("+l+"%), mimeType: "+n.b)}v=n
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$hD5,w)},
hDc:function hDc(d){this.a=d},
hDd:function hDd(d,e){this.a=d
this.b=e},
hDh:function hDh(d){this.a=d},
hDe:function hDe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hDg:function hDg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hDb:function hDb(d){this.a=d},
hD8:function hD8(d){this.a=d},
hD9:function hD9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hD6:function hD6(d,e,f){this.a=d
this.b=e
this.c=f},
hD7:function hD7(d){this.a=d},
hDa:function hDa(d,e,f){this.a=d
this.b=e
this.c=f},
hDf:function hDf(d,e){this.a=d
this.b=e},
ivi(d,e){var x=new MediaRecorder(d,A.ihO(e))
x.toString
return x},
j2N(d){var x=MediaRecorder.isTypeSupported(d)
x.toString
return x},
aCz(d){switch(d.toLowerCase()){case"jpg":case"jpeg":return"image/jpeg"
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
E=c[624]
B.auN.prototype={
N(){return"FilePickerSource."+this.b}}
B.a9K.prototype={
gml(){return this.a}}
B.dVp.prototype={
Gb(d,e){return this.dQS(d,e)},
dQS(b6,b7){var x=0,w=A.l(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Gb=A.h(function(b8,b9){if(b8===1){t.push(b9)
x=u}for(;;)switch(x){case 0:u=4
a0=b7.a
x=a0===C.bRt?7:8
break
case 7:a1=b7.x
if(a1==null)a1=b7.c?20:1
r=a1
a0=$.a37()
a2=A.e("addImagesAndFiles",null,null,!1)
a3=b7.d?b7.e:null
x=9
return A.d(a0.dQX(!0,b6,r,a3,a2),$async$Gb)
case 9:q=b9
if(J.ce(q)){v=null
x=1
break}p=A.b([],y.i)
o=0,a0=b7.r,a2=b7.z,a3=b7.Q,a4=b7.w
case 10:if(!(o<J.av(q))){x=12
break}a5=J.N(q,o)
a6=a4==null?0:a4
x=13
return A.d(s.asK(a5,!0,b7,b6,a0,a6+o,a3,a2),$async$Gb)
case 13:n=b9
if(n!=null)J.cp(p,n)
case 11:++o
x=10
break
case 12:a0=J.av(p)===0?null:p
v=a0
x=1
break
case 8:if(!b7.c){a2=b7.x
a2=a2!=null&&a2>1
a7=a2}else a7=!0
m=a7
x=14
return A.d($.iss.n().aCQ(m,b7.b,a0,!0),$async$Gb)
case 14:l=b9
if(l==null||J.ce(l.a)){v=null
x=1
break}a0=b7.x
k=a0!=null&&J.av(l.a)>a0?J.asm(l.a,a0).da(0):l.a
j=A.b([],y.i)
a0=J.bI(k),a2=b7.r,a3=b7.w,a4=b7.d
case 15:if(!a0.H()){x=16
break}i=a0.gaa(a0)
h=i.c
if(h==null||h.length===0){x=15
break}if(s.amm(h.length,b7,b6)){x=15
break}x=a4&&s.bng(i)?17:19
break
case 17:g=J.av(j)
x=20
return A.d(s.a6i(b6,i,h,b7,g),$async$Gb)
case 20:f=b9
if(f!=null)J.cp(j,f)
x=18
break
case 19:a8=C.c.ga7(i.b.split(".")).toLowerCase()
if(C.c.p(C.OJ,a8)){e=null
a5=C.c.ga7(i.b.split("."))
e=s.a6a(h,B.aCz(a5))
a5=a3==null?0:a3
a6=J.av(j)
a9=e
a8=C.c.ga7(i.b.split("."))
b0=A.e("video",null,null,!0)
b1=a8.length!==0
b2=b1?a8:"mp4"
b3=s.Yg(b0,b2,a5+a6)
a5=new Uint8Array(0)
a6=b1?B.aCz(a8):"video/mp4"
J.cp(j,new D.a83(a5,b3,a6,0,a9,null))}else{a5=a3==null?0:a3
J.cp(j,s.bqg(i,h,a2,a5+J.av(j)))}case 18:x=15
break
case 16:a0=J.av(j)===0?null:j
v=a0
x=1
break
u=2
x=6
break
case 4:u=3
b5=t.pop()
d=A.aH(b5)
A.Xs().$1("FileService: Error picking file: "+A.R(d))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Gb,w)},
amm(d,e,f){var x,w,v=e.as
if(v==null||d<=v)return!1
x=C.l.ao(v/1024)
w=A.e("simpleInvoiceFileExceedsMaxSize",null,null,!0)
new A.U(A.a2(w,"MAX_KB",""+x),C.t,C.v,C.A,f).D()
return!0},
bng(d){var x=C.c.ga7(d.b.split(".")).toLowerCase()
return C.c.p(A.b(["jpg","jpeg","png","gif","webp","heic","heif","bmp"],y.s),x)},
cLD(d){var x=C.c.ga7(d.b.split(".")).toLowerCase()
return C.c.p(C.OJ,x)},
a6a(d,e){return this.csm(d,e)},
csm(d,e){var x=0,w=A.l(y.R),v,u=this,t
var $async$a6a=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:x=3
return A.d(u.avr(d),$async$a6a)
case 3:t=g
if(t!=null&&C.m.c6(t.b.toLowerCase(),"video/mp4")){v=t
x=1
break}v=new B.a9K(d,e)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$a6a,w)},
a6i(d,e,f,g,h){return this.ctP(d,e,f,g,h)},
ctP(d,e,f,g,h){var x=0,w=A.l(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$a6i=A.h(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:m=g.w
l=(m==null?0:m)+h
u=4
m=e.b
C.c.ga7(m.split("."))
o=B.aCz(C.c.ga7(m.split(".")))
r=A.ifu(f,o,m)
x=7
return A.d($.a37().aWL(d,g.e,r),$async$a6i)
case 7:q=j
x=q!=null?8:9
break
case 8:x=10
return A.d(s.asL(q,d,g.r,l,g),$async$a6i)
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
A.Xs().$1("FileService: Error cropping on web: "+A.R(p))
x=6
break
case 3:x=2
break
case 6:if(s.amm(f.length,g,d)){v=null
x=1
break}v=s.bqg(e,f,g.r,l)
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a6i,w)},
bqg(d,e,f,g){var x,w,v,u,t,s=this,r=null,q=d.b,p=C.c.ga7(q.split(".")),o=s.bng(d),n=s.cLD(d)
if(o){x=A.e("image",r,r,!0)
q=s.Yg(x,p.length!==0?p:"jpg",g)}else if(n){x=A.e("video",r,r,!0)
q=s.Yg(x,p.length!==0?p:"mp4",g)}else{A.dj("name: "+q)
if(q.length===0){w=d.a
w=w!=null&&w.length!==0}else w=!1
if(w){w=d.a
w.toString
v=C.m.mh(w,A.cg("[/\\\\]",!0,!1,!1))
u=v.length!==0?C.c.ga7(v):q
A.dj("name1: "+u)}else u=q
if(u.length===0){t=C.c.ga7(q.split("."))
q="file_"+Date.now()+"."+t
A.dj("name2: "+q)}else q=u}w=p.length!==0?B.aCz(p):"application/octet-stream"
return new D.a83(e,q,w,e.length,r,r)},
Yg(d,e,f){var x,w=C.m.b8(d)
if(C.m.p(w,"."))w=C.c.ga5(w.split("."))
x=f!=null?f+1:1
return w+"_"+x+"."+e},
asK(d,e,f,g,h,i,j,k){return this.d6Q(d,!0,f,g,h,i,j,k)},
d6Q(d,e,f,g,h,i,a0,a1){var x=0,w=A.l(y.r),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$asK=A.h(function(a2,a3){if(a2===1)return A.i(a3,w)
for(;;)switch(x){case 0:x=3
return A.d(d.lV(),$async$asK)
case 3:l=a3
k=d.b
j=k.length
if(j===0||j<3||!C.m.p(k,".")){j=d.c
j===$&&A.a()
if(j.length!==0){t=C.m.mh(j,A.cg("[/\\\\]",!0,!1,!1))
if(t.length!==0){s=C.c.ga7(t)
if(C.m.p(s,".")||s.length!==0)k=s}}if(k.length===0||!C.m.p(k,"."))k="image_"+Date.now()+".jpg"}r=C.m.p(k,".")?C.c.ga7(k.split(".")).toLowerCase():"jpg"
q=C.c.p(C.OJ,r)
if(r.length!==0)p=r
else p=q?"mp4":"jpg"
if(q){o=u.a6a(l,B.aCz(p))
n=A.e("video",null,null,!0)
m=u.Yg(n,p,i)
v=new D.a83(new Uint8Array(0),m,B.aCz(p),0,o,null)
x=1
break}j=l.length
if(u.amm(j,f,g)){v=null
x=1
break}n=A.e("image",null,null,!0)
v=new D.a83(l,u.Yg(n,p,i),B.aCz(p),j,null,null)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$asK,w)},
asL(d,e,f,g,h){return this.d6R(d,e,f,g,h)},
d6R(d,e,f,g,h){var x=0,w=A.l(y.r),v,u=this,t,s,r,q,p,o,n
var $async$asL=A.h(function(i,j){if(i===1)return A.i(j,w)
for(;;)switch(x){case 0:x=3
return A.d(d.lV(),$async$asL)
case 3:o=j
n=u.amm(o.length,h,e)
if(n){v=null
x=1
break}t=d.b
n=t.length
if(n===0||n<3||!C.m.p(t,".")){n=d.c
n===$&&A.a()
if(n.length!==0){s=C.m.mh(n,A.cg("[/\\\\]",!0,!1,!1))
if(s.length!==0){r=C.c.ga7(s)
if(C.m.p(r,".")||r.length!==0)t=r}}if(t.length===0||!C.m.p(t,"."))t="image_"+Date.now()+".jpg"}q=C.m.p(t,".")?C.c.ga7(t.split(".")):"jpg"
p=A.e("image",null,null,!0)
v=new D.a83(o,u.Yg(p,q,g),B.aCz(q),o.length,null,null)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$asL,w)}}
B.ftp.prototype={
avr(d){return this.dhb(d)},
dhb(d){var x=0,w=A.l(y.R),v,u=2,t=[],s,r,q,p,o
var $async$avr=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}u=4
x=7
return A.d(B.hD5(d),$async$avr)
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
$.b1().bp(0,"[VideoCompression] compressVideoBytes failed: "+A.R(s)+"\n"+A.R(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$avr,w)}}
B.auM.prototype={
djI(d,e,f){var x=this
return new B.auM(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,!0,x.z,x.Q,f)},
bAQ(d){return this.djI(null,null,d)}}
B.cxq.prototype={}
var z=a.updateTypes([])
B.hDc.prototype={
$0(){(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
B.hDd.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0){this.b.$0()
x.eu(0,null)}},
$S:73}
B.hDh.prototype={
$0(){var x,w=this.a,v=w.b
if(v!=null){x=window
x.toString
C.ov.biK(x)
x.cancelAnimationFrame(v)
w.b=null}},
$S:0}
B.hDe.prototype={
$1(d){return this.bWx(d)},
bWx(a3){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
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
if(t<=0||s<=0){a1.eu(0,null)
x=1
break}r=t>1280?1280:t
q=C.l.ao(s*r/t)
p=A.i9r(q,r)
i=p.getContext("2d")
i.toString
o=i
i=u.a
n=new B.hDg(i,a1,j,o,r,q)
m=J.iSa(p,24)
h=y.N
g=y.C
l=A.p(["videoBitsPerSecond",2e6,"mimeType","video/mp4"],h,g)
k=null
try{k=B.ivi(m,l)}catch(a4){k=B.ivi(m,A.p(["videoBitsPerSecond",2e6],h,g))}i.a=k
h=u.d
e=y.z
A.lF(k,"dataavailable",new B.hD8(h),!1,e)
d=u.e
a0=u.f
A.lF(k,"stop",new B.hD9(i,d,a0,h,a1),!1,e)
A.lF(k,"error",new B.hDa(a1,d,a0),!1,e)
J.iSI(k,100)
j=j.play()
j.toString
A.h_(j,g)
n.$0()}catch(a4){A.cS(a4)
u.e.$0()
u.f.$0()
if((a2.a&30)===0)a1.eu(0,null)}case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:2294}
B.hDg.prototype={
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
w=C.ov.bM_(x,new B.hDb(v))
v.a.b=w},
$S:0}
B.hDb.prototype={
$1(d){return this.a.$0()},
$S:364}
B.hD8.prototype={
$1(d){var x,w=y.Q.a(d)
if(w.data!=null){x=w.data.size
x.toString
x=x>0}else x=!1
if(x){x=w.data
x.toString
this.a.push(x)}},
$S:73}
B.hD9.prototype={
$1(d){var x,w,v,u,t,s,r=this
r.b.$0()
r.c.$0()
u=r.d
if(u.length===0){r.e.eu(0,null)
return}t=r.a.a
s=t==null?null:t.mimeType
x=s==null?"video/mp4":s
w=A.aE9(u,null)
u=new FileReader()
u.toString
v=u
u=r.e
t=y.p
A.lF(v,"loadend",new B.hD6(v,u,x),!1,t)
A.lF(v,"error",new B.hD7(u),!1,t)
J.inQ(v,w)},
$S:73}
B.hD6.prototype={
$1(d){var x,w,v,u=this,t=u.a,s=t.readyState
s.toString
if(s===2&&C.II.gaEo(t)!=null)try{t=C.II.gaEo(t)
t.toString
x=t
w=y.D.b(x)?x:A.awW(y.J.a(x),0,null)
u.b.eu(0,new B.a9K(w,u.c))}catch(v){u.b.eu(0,null)}else u.b.eu(0,null)},
$S:353}
B.hD7.prototype={
$1(d){return this.a.eu(0,null)},
$S:353}
B.hDa.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0){this.b.$0()
this.c.$0()
x.eu(0,null)}},
$S:73}
B.hDf.prototype={
$1(d){var x
this.b.$0()
x=this.a.a
if(x!=null&&x.state==="recording")x.stop()},
$S:73};(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(B.auN,A.ki)
v(A.ap,[B.a9K,B.cxq,B.ftp,B.auM])
w(B.dVp,B.cxq)
v(A.aN,[B.hDc,B.hDh,B.hDg])
v(A.aO,[B.hDd,B.hDe,B.hDb,B.hD8,B.hD9,B.hD6,B.hD7,B.hDa,B.hDf])
x(B.cxq,B.ftp)})()
var y=(function rtii(){var x=A.t
return{Q:x("aE8"),J:x("a72"),z:x("ey"),w:x("F<a1R>"),i:x("F<a83>"),s:x("F<n>"),p:x("a89"),N:x("n"),D:x("eJ"),B:x("ck<a9K?>"),E:x("aP_<ey>"),A:x("bq<a9K?>"),C:x("@"),R:x("a9K?"),b:x("Z<a83>?"),r:x("a83?"),H:x("~")}})();(function constants(){E.IH=new B.auN(0,"file")
E.YD=new B.auN(1,"gallery")
E.YE=new B.auN(2,"camera")
E.afs=new B.auN(3,"recordAudio")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"k5V","d0w",()=>new B.dVp())})()};
(a=>{a["3V2tk34lel6kK4LqzL+QrD7w4hc="]=a.current})($__dart_deferred_initializers__);