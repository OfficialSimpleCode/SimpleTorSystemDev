((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,C={
a14(d){var y=d.gPk()/255,x=d.gLn()/255,w=d.gNd()/255,v=Math.max(y,Math.max(x,w)),u=v-Math.min(y,Math.min(x,w)),t=d.gmk(d),s=B.iHV(y,x,w,v,u),r=v===0?0:u/v
return new C.adR(t/255,s,r,v)},
adR:function adR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}}
B=c[0]
A=c[2]
C=a.updateHolder(c[356],C)
C.adR.prototype={
wf(){var y=this,x=y.d,w=y.c*x,v=y.b
return B.iHc(y.a,v,w,w*(1-Math.abs(A.l.ar(v/60,2)-1)),x-w)},
q(d,e){var y=this
if(e==null)return!1
if(y===e)return!0
return e instanceof C.adR&&e.a===y.a&&e.b===y.b&&e.c===y.c&&e.d===y.d},
gK(d){var y=this
return B.b1(y.a,y.b,y.c,y.d,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b)},
m(d){var y=this
return"HSVColor("+B.T(y.a)+", "+B.T(y.b)+", "+B.T(y.c)+", "+B.T(y.d)+")"}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(C.adR,B.ao)})()};
(a=>{a["zkjJcQxipvnB2q6g2amUNVW29O8="]=a.current})($__dart_deferred_initializers__);