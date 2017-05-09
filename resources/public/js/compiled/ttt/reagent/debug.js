// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8165__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8166__i = 0, G__8166__a = new Array(arguments.length -  0);
while (G__8166__i < G__8166__a.length) {G__8166__a[G__8166__i] = arguments[G__8166__i + 0]; ++G__8166__i;}
  args = new cljs.core.IndexedSeq(G__8166__a,0);
} 
return G__8165__delegate.call(this,args);};
G__8165.cljs$lang$maxFixedArity = 0;
G__8165.cljs$lang$applyTo = (function (arglist__8167){
var args = cljs.core.seq(arglist__8167);
return G__8165__delegate(args);
});
G__8165.cljs$core$IFn$_invoke$arity$variadic = G__8165__delegate;
return G__8165;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8168__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8169__i = 0, G__8169__a = new Array(arguments.length -  0);
while (G__8169__i < G__8169__a.length) {G__8169__a[G__8169__i] = arguments[G__8169__i + 0]; ++G__8169__i;}
  args = new cljs.core.IndexedSeq(G__8169__a,0);
} 
return G__8168__delegate.call(this,args);};
G__8168.cljs$lang$maxFixedArity = 0;
G__8168.cljs$lang$applyTo = (function (arglist__8170){
var args = cljs.core.seq(arglist__8170);
return G__8168__delegate(args);
});
G__8168.cljs$core$IFn$_invoke$arity$variadic = G__8168__delegate;
return G__8168;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1494351594683