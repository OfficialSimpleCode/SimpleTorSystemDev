((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={auP:function auP(d,e){this.a=d
this.b=e},a9P:function a9P(d,e){this.a=d
this.b=e},dVL:function dVL(){},ftW:function ftW(){},auO:function auO(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.as=p},cxS:function cxS(){},
hEI(d){return B.jqa(d)},
jqa(d){var x=0,w=A.l(y.R),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$hEI=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:k={}
j=d.length
if(j===0){v=null
x=1
break}if(!B.j4L("video/mp4")){$.b2().ez(0,"VideoCompress: browser does not support MP4 output, skipping compression")
v=null
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.asU([d],"video/mp4"))
u.toString
t=document.createElement("video")
t.src=u
t.muted=!0
t.setAttribute("playsinline","true")
s=new A.bm($.bO,y.A)
r=new A.cj(s,y.B)
q=A.b([],y.w)
k.a=null
u=new B.hEP(u)
p=y.E.c
A.kL(t,"error",new B.hEQ(r,u),!1,p)
k.b=null
o=new B.hEU(k)
A.kL(t,"canplay",new B.hER(k,r,t,q,o,u),!1,p)
A.kL(t,"ended",new B.hES(k,o),!1,p)
t.load()
x=3
return A.d(s,$async$hEI)
case 3:n=f
m=j/1024|0
if(n==null)$.b2().fe("VideoCompress: failed | input: "+m+" KB")
else{k=n.a.length
l=j>0?C.l.aB(100*k/j,0):"0"
$.b2().fe("VideoCompress: input "+m+" KB -> output "+(k/1024|0)+" KB ("+l+"%), mimeType: "+n.b)}v=n
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$hEI,w)},
hEP:function hEP(d){this.a=d},
hEQ:function hEQ(d,e){this.a=d
this.b=e},
hEU:function hEU(d){this.a=d},
hER:function hER(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hET:function hET(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hEO:function hEO(d){this.a=d},
hEL:function hEL(d){this.a=d},
hEM:function hEM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hEJ:function hEJ(d,e,f){this.a=d
this.b=e
this.c=f},
hEK:function hEK(d){this.a=d},
hEN:function hEN(d,e,f){this.a=d
this.b=e
this.c=f},
hES:function hES(d,e){this.a=d
this.b=e},
ix9(d,e){var x=new MediaRecorder(d,A.ijB(e))
x.toString
return x},
j4L(d){var x=MediaRecorder.isTypeSupported(d)
x.toString
return x},
aCA(d){switch(d.toLowerCase()){case"jpg":case"jpeg":return"image/jpeg"
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
B=a.updateHolder(c[443],B)
E=c[627]
B.auP.prototype={
N(){return"FilePickerSource."+this.b}}
B.a9P.prototype={
gmm(){return this.a}}
B.dVL.prototype={
Gb(d,e){return this.dRR(d,e)},
dRR(b6,b7){var x=0,w=A.l(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Gb=A.h(function(b8,b9){if(b8===1){t.push(b9)
x=u}for(;;)switch(x){case 0:u=4
a0=b7.a
x=a0===C.bRA?7:8
break
case 7:a1=b7.x
if(a1==null)a1=b7.c?20:1
r=a1
a0=$.a39()
a2=A.e("addImagesAndFiles",null,null,!1)
a3=b7.d?b7.e:null
x=9
return A.d(a0.dRW(!0,b6,r,a3,a2),$async$Gb)
case 9:q=b9
if(J.cd(q)){v=null
x=1
break}p=A.b([],y.i)
o=0,a0=b7.r,a2=b7.z,a3=b7.Q,a4=b7.w
case 10:if(!(o<J.az(q))){x=12
break}a5=J.N(q,o)
a6=a4==null?0:a4
x=13
return A.d(s.asX(a5,!0,b7,b6,a0,a6+o,a3,a2),$async$Gb)
case 13:n=b9
if(n!=null)J.cl(p,n)
case 11:++o
x=10
break
case 12:a0=J.az(p)===0?null:p
v=a0
x=1
break
case 8:if(!b7.c){a2=b7.x
a2=a2!=null&&a2>1
a7=a2}else a7=!0
m=a7
x=14
return A.d($.iul.n().aD5(m,b7.b,a0,!0),$async$Gb)
case 14:l=b9
if(l==null||J.cd(l.a)){v=null
x=1
break}a0=b7.x
k=a0!=null&&J.az(l.a)>a0?J.asr(l.a,a0).d9(0):l.a
j=A.b([],y.i)
a0=J.bH(k),a2=b7.r,a3=b7.w,a4=b7.d
case 15:if(!a0.H()){x=16
break}i=a0.gab(a0)
h=i.c
if(h==null||h.length===0){x=15
break}if(s.amw(h.length,b7,b6)){x=15
break}x=a4&&s.bnD(i)?17:19
break
case 17:g=J.az(j)
x=20
return A.d(s.a6m(b6,i,h,b7,g),$async$Gb)
case 20:f=b9
if(f!=null)J.cl(j,f)
x=18
break
case 19:a8=C.c.ga8(i.b.split(".")).toLowerCase()
if(C.c.p(C.OQ,a8)){e=null
a5=C.c.ga8(i.b.split("."))
e=s.a6e(h,B.aCA(a5))
a5=a3==null?0:a3
a6=J.az(j)
a9=e
a8=C.c.ga8(i.b.split("."))
b0=A.e("video",null,null,!0)
b1=a8.length!==0
b2=b1?a8:"mp4"
b3=s.Yk(b0,b2,a5+a6)
a5=new Uint8Array(0)
a6=b1?B.aCA(a8):"video/mp4"
J.cl(j,new D.a87(a5,b3,a6,0,a9,null))}else{a5=a3==null?0:a3
J.cl(j,s.bqJ(i,h,a2,a5+J.az(j)))}case 18:x=15
break
case 16:a0=J.az(j)===0?null:j
v=a0
x=1
break
u=2
x=6
break
case 4:u=3
b5=t.pop()
d=A.aH(b5)
A.Xu().$1("FileService: Error picking file: "+A.S(d))
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
amw(d,e,f){var x,w,v=e.as
if(v==null||d<=v)return!1
x=C.l.ap(v/1024)
w=A.e("simpleInvoiceFileExceedsMaxSize",null,null,!0)
new A.U(A.a3(w,"MAX_KB",""+x),C.t,C.v,C.A,f).D()
return!0},
bnD(d){var x=C.c.ga8(d.b.split(".")).toLowerCase()
return C.c.p(A.b(["jpg","jpeg","png","gif","webp","heic","heif","bmp"],y.s),x)},
cMp(d){var x=C.c.ga8(d.b.split(".")).toLowerCase()
return C.c.p(C.OQ,x)},
a6e(d,e){return this.ct1(d,e)},
ct1(d,e){var x=0,w=A.l(y.R),v,u=this,t
var $async$a6e=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:x=3
return A.d(u.avF(d),$async$a6e)
case 3:t=g
if(t!=null&&C.m.c9(t.b.toLowerCase(),"video/mp4")){v=t
x=1
break}v=new B.a9P(d,e)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$a6e,w)},
a6m(d,e,f,g,h){return this.cut(d,e,f,g,h)},
cut(d,e,f,g,h){var x=0,w=A.l(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$a6m=A.h(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:m=g.w
l=(m==null?0:m)+h
u=4
m=e.b
C.c.ga8(m.split("."))
o=B.aCA(C.c.ga8(m.split(".")))
r=A.ihe(f,o,m)
x=7
return A.d($.a39().aX5(d,g.e,r),$async$a6m)
case 7:q=j
x=q!=null?8:9
break
case 8:x=10
return A.d(s.asY(q,d,g.r,l,g),$async$a6m)
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
A.Xu().$1("FileService: Error cropping on web: "+A.S(p))
x=6
break
case 3:x=2
break
case 6:if(s.amw(f.length,g,d)){v=null
x=1
break}v=s.bqJ(e,f,g.r,l)
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a6m,w)},
bqJ(d,e,f,g){var x,w,v,u,t,s=this,r=null,q=d.b,p=C.c.ga8(q.split(".")),o=s.bnD(d),n=s.cMp(d)
if(o){x=A.e("image",r,r,!0)
q=s.Yk(x,p.length!==0?p:"jpg",g)}else if(n){x=A.e("video",r,r,!0)
q=s.Yk(x,p.length!==0?p:"mp4",g)}else{A.dS("name: "+q)
if(q.length===0){w=d.a
w=w!=null&&w.length!==0}else w=!1
if(w){w=d.a
w.toString
v=C.m.mi(w,A.ch("[/\\\\]",!0,!1,!1))
u=v.length!==0?C.c.ga8(v):q
A.dS("name1: "+u)}else u=q
if(u.length===0){t=C.c.ga8(q.split("."))
q="file_"+Date.now()+"."+t
A.dS("name2: "+q)}else q=u}w=p.length!==0?B.aCA(p):"application/octet-stream"
return new D.a87(e,q,w,e.length,r,r)},
Yk(d,e,f){var x,w=C.m.b7(d)
if(C.m.p(w,"."))w=C.c.ga5(w.split("."))
x=f!=null?f+1:1
return w+"_"+x+"."+e},
asX(d,e,f,g,h,i,j,k){return this.d7I(d,!0,f,g,h,i,j,k)},
d7I(d,e,f,g,h,i,a0,a1){var x=0,w=A.l(y.r),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$asX=A.h(function(a2,a3){if(a2===1)return A.i(a3,w)
for(;;)switch(x){case 0:x=3
return A.d(d.lV(),$async$asX)
case 3:l=a3
k=d.b
j=k.length
if(j===0||j<3||!C.m.p(k,".")){j=d.c
j===$&&A.a()
if(j.length!==0){t=C.m.mi(j,A.ch("[/\\\\]",!0,!1,!1))
if(t.length!==0){s=C.c.ga8(t)
if(C.m.p(s,".")||s.length!==0)k=s}}if(k.length===0||!C.m.p(k,"."))k="image_"+Date.now()+".jpg"}r=C.m.p(k,".")?C.c.ga8(k.split(".")).toLowerCase():"jpg"
q=C.c.p(C.OQ,r)
if(r.length!==0)p=r
else p=q?"mp4":"jpg"
if(q){o=u.a6e(l,B.aCA(p))
n=A.e("video",null,null,!0)
m=u.Yk(n,p,i)
v=new D.a87(new Uint8Array(0),m,B.aCA(p),0,o,null)
x=1
break}j=l.length
if(u.amw(j,f,g)){v=null
x=1
break}n=A.e("image",null,null,!0)
v=new D.a87(l,u.Yk(n,p,i),B.aCA(p),j,null,null)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$asX,w)},
asY(d,e,f,g,h){return this.d7J(d,e,f,g,h)},
d7J(d,e,f,g,h){var x=0,w=A.l(y.r),v,u=this,t,s,r,q,p,o,n
var $async$asY=A.h(function(i,j){if(i===1)return A.i(j,w)
for(;;)switch(x){case 0:x=3
return A.d(d.lV(),$async$asY)
case 3:o=j
n=u.amw(o.length,h,e)
if(n){v=null
x=1
break}t=d.b
n=t.length
if(n===0||n<3||!C.m.p(t,".")){n=d.c
n===$&&A.a()
if(n.length!==0){s=C.m.mi(n,A.ch("[/\\\\]",!0,!1,!1))
if(s.length!==0){r=C.c.ga8(s)
if(C.m.p(r,".")||r.length!==0)t=r}}if(t.length===0||!C.m.p(t,"."))t="image_"+Date.now()+".jpg"}q=C.m.p(t,".")?C.c.ga8(t.split(".")):"jpg"
p=A.e("image",null,null,!0)
v=new D.a87(o,u.Yk(p,q,g),B.aCA(q),o.length,null,null)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$asY,w)}}
B.ftW.prototype={
avF(d){return this.di4(d)},
di4(d){var x=0,w=A.l(y.R),v,u=2,t=[],s,r,q,p,o
var $async$avF=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}u=4
x=7
return A.d(B.hEI(d),$async$avF)
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
$.b2().bn(0,"[VideoCompression] compressVideoBytes failed: "+A.S(s)+"\n"+A.S(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$avF,w)}}
B.auO.prototype={
dkB(d,e,f){var x=this
return new B.auO(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,!0,x.z,x.Q,f)},
bBn(d){return this.dkB(null,null,d)}}
B.cxS.prototype={}
var z=a.updateTypes([])
B.hEP.prototype={
$0(){(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
B.hEQ.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0){this.b.$0()
x.eg(0,null)}},
$S:71}
B.hEU.prototype={
$0(){var x,w=this.a,v=w.b
if(v!=null){x=window
x.toString
C.oz.bj7(x)
x.cancelAnimationFrame(v)
w.b=null}},
$S:0}
B.hER.prototype={
$1(d){return this.bX9(d)},
bX9(a3){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
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
q=C.l.ap(s*r/t)
p=A.dpi(q,r)
i=p.getContext("2d")
i.toString
o=i
i=u.a
n=new B.hET(i,a1,j,o,r,q)
m=J.iU3(p,24)
h=y.N
g=y.C
l=A.p(["videoBitsPerSecond",2e6,"mimeType","video/mp4"],h,g)
k=null
try{k=B.ix9(m,l)}catch(a4){k=B.ix9(m,A.p(["videoBitsPerSecond",2e6],h,g))}i.a=k
h=u.d
e=y.z
A.kL(k,"dataavailable",new B.hEL(h),!1,e)
d=u.e
a0=u.f
A.kL(k,"stop",new B.hEM(i,d,a0,h,a1),!1,e)
A.kL(k,"error",new B.hEN(a1,d,a0),!1,e)
J.iUD(k,100)
j=j.play()
j.toString
A.h2(j,g)
n.$0()}catch(a4){A.cS(a4)
u.e.$0()
u.f.$0()
if((a2.a&30)===0)a1.eg(0,null)}case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:2304}
B.hET.prototype={
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
w=C.oz.bMz(x,new B.hEO(v))
v.a.b=w},
$S:0}
B.hEO.prototype={
$1(d){return this.a.$0()},
$S:455}
B.hEL.prototype={
$1(d){var x,w=y.Q.a(d)
if(w.data!=null){x=w.data.size
x.toString
x=x>0}else x=!1
if(x){x=w.data
x.toString
this.a.push(x)}},
$S:71}
B.hEM.prototype={
$1(d){var x,w,v,u,t,s,r=this
r.b.$0()
r.c.$0()
u=r.d
if(u.length===0){r.e.eg(0,null)
return}t=r.a.a
s=t==null?null:t.mimeType
x=s==null?"video/mp4":s
w=A.asU(u,null)
u=new FileReader()
u.toString
v=u
u=r.e
t=y.p
A.kL(v,"loadend",new B.hEJ(v,u,x),!1,t)
A.kL(v,"error",new B.hEK(u),!1,t)
J.iaf(v,w)},
$S:71}
B.hEJ.prototype={
$1(d){var x,w,v,u=this,t=u.a,s=t.readyState
s.toString
if(s===2&&C.BO.gagG(t)!=null)try{t=C.BO.gagG(t)
t.toString
x=t
w=y.D.b(x)?x:A.awY(y.J.a(x),0,null)
u.b.eg(0,new B.a9P(w,u.c))}catch(v){u.b.eg(0,null)}else u.b.eg(0,null)},
$S:237}
B.hEK.prototype={
$1(d){return this.a.eg(0,null)},
$S:237}
B.hEN.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0){this.b.$0()
this.c.$0()
x.eg(0,null)}},
$S:71}
B.hES.prototype={
$1(d){var x
this.b.$0()
x=this.a.a
if(x!=null&&x.state==="recording")x.stop()},
$S:71};(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(B.auP,A.jQ)
v(A.ao,[B.a9P,B.cxS,B.ftW,B.auO])
w(B.dVL,B.cxS)
v(A.aN,[B.hEP,B.hEU,B.hET])
v(A.aO,[B.hEQ,B.hER,B.hEO,B.hEL,B.hEM,B.hEJ,B.hEK,B.hEN,B.hES])
x(B.cxS,B.ftW)})()
var y=(function rtii(){var x=A.t
return{Q:x("aEb"),J:x("a76"),z:x("ez"),w:x("F<a1R>"),i:x("F<a87>"),s:x("F<n>"),p:x("a8d"),N:x("n"),D:x("eJ"),B:x("cj<a9P?>"),E:x("aP2<ez>"),A:x("bm<a9P?>"),C:x("@"),R:x("a9P?"),b:x("Z<a87>?"),r:x("a87?"),H:x("~")}})();(function constants(){E.IN=new B.auP(0,"file")
E.YI=new B.auP(1,"gallery")
E.YJ=new B.auP(2,"camera")
E.aft=new B.auP(3,"recordAudio")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"k7Y","d12",()=>new B.dVL())})()};
(a=>{a["LbI0XQIG8goeJqk41b8U8Yf+GFE="]=a.current})($__dart_deferred_initializers__);