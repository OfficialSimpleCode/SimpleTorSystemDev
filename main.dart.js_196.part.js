((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,C={
a0Z(d){var y=d.gPe()/255,x=d.gLh()/255,w=d.gN7()/255,v=Math.max(y,Math.max(x,w)),u=v-Math.min(y,Math.min(x,w)),t=d.gml(d),s=B.iGv(y,x,w,v,u),r=v===0?0:u/v
return new C.adJ(t/255,s,r,v)},
adJ:function adJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}}
B=c[0]
A=c[2]
C=a.updateHolder(c[356],C)
C.adJ.prototype={
wc(){var y=this,x=y.d,w=y.c*x,v=y.b
return B.iFN(y.a,v,w,w*(1-Math.abs(A.l.ar(v/60,2)-1)),x-w)},
q(d,e){var y=this
if(e==null)return!1
if(y===e)return!0
return e instanceof C.adJ&&e.a===y.a&&e.b===y.b&&e.c===y.c&&e.d===y.d},
gJ(d){var y=this
return B.b1(y.a,y.b,y.c,y.d,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b)},
m(d){var y=this
return"HSVColor("+B.S(y.a)+", "+B.S(y.b)+", "+B.S(y.c)+", "+B.S(y.d)+")"}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(C.adJ,B.ao)})()};
(a=>{a["qN1PlBUC21QS8dajRZ45JL0dtkw="]=a.current})($__dart_deferred_initializers__);