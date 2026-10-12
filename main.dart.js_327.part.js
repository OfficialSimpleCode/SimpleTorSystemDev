((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,C={
a2I(d){var y=d.gRl()/255,x=d.gN2()/255,w=d.gPa()/255,v=Math.max(y,Math.max(x,w)),u=v-Math.min(y,Math.min(x,w)),t=d.gmP(d),s=B.jAr(y,x,w,v,u),r=v===0?0:u/v
return new C.agQ(t/255,s,r,v)},
agQ:function agQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}}
B=c[0]
A=c[2]
C=a.updateHolder(c[425],C)
C.agQ.prototype={
wQ(){var y=this,x=y.d,w=y.c*x,v=y.b
return B.jzI(y.a,v,w,w*(1-Math.abs(A.k.ao(v/60,2)-1)),x-w)},
q(d,e){var y=this
if(e==null)return!1
if(y===e)return!0
return e instanceof C.agQ&&e.a===y.a&&e.b===y.b&&e.c===y.c&&e.d===y.d},
gR(d){var y=this
return B.bd(y.a,y.b,y.c,y.d,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b)},
m(d){var y=this
return"HSVColor("+B.U(y.a)+", "+B.U(y.b)+", "+B.U(y.c)+", "+B.U(y.d)+")"}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(C.agQ,B.ap)})()};
(a=>{a["N41Ju//i8484tZuceTcWPlKHZeQ="]=a.current})($__dart_deferred_initializers__);