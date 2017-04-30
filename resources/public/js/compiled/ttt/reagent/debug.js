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
var G__27628__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27629__i = 0, G__27629__a = new Array(arguments.length -  0);
while (G__27629__i < G__27629__a.length) {G__27629__a[G__27629__i] = arguments[G__27629__i + 0]; ++G__27629__i;}
  args = new cljs.core.IndexedSeq(G__27629__a,0);
} 
return G__27628__delegate.call(this,args);};
G__27628.cljs$lang$maxFixedArity = 0;
G__27628.cljs$lang$applyTo = (function (arglist__27630){
var args = cljs.core.seq(arglist__27630);
return G__27628__delegate(args);
});
G__27628.cljs$core$IFn$_invoke$arity$variadic = G__27628__delegate;
return G__27628;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__27631__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27631 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27632__i = 0, G__27632__a = new Array(arguments.length -  0);
while (G__27632__i < G__27632__a.length) {G__27632__a[G__27632__i] = arguments[G__27632__i + 0]; ++G__27632__i;}
  args = new cljs.core.IndexedSeq(G__27632__a,0);
} 
return G__27631__delegate.call(this,args);};
G__27631.cljs$lang$maxFixedArity = 0;
G__27631.cljs$lang$applyTo = (function (arglist__27633){
var args = cljs.core.seq(arglist__27633);
return G__27631__delegate(args);
});
G__27631.cljs$core$IFn$_invoke$arity$variadic = G__27631__delegate;
return G__27631;
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

//# sourceMappingURL=debug.js.map?rel=1493511389332