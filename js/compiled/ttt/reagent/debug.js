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
var G__32050__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32051__i = 0, G__32051__a = new Array(arguments.length -  0);
while (G__32051__i < G__32051__a.length) {G__32051__a[G__32051__i] = arguments[G__32051__i + 0]; ++G__32051__i;}
  args = new cljs.core.IndexedSeq(G__32051__a,0);
} 
return G__32050__delegate.call(this,args);};
G__32050.cljs$lang$maxFixedArity = 0;
G__32050.cljs$lang$applyTo = (function (arglist__32052){
var args = cljs.core.seq(arglist__32052);
return G__32050__delegate(args);
});
G__32050.cljs$core$IFn$_invoke$arity$variadic = G__32050__delegate;
return G__32050;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32053__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32054__i = 0, G__32054__a = new Array(arguments.length -  0);
while (G__32054__i < G__32054__a.length) {G__32054__a[G__32054__i] = arguments[G__32054__i + 0]; ++G__32054__i;}
  args = new cljs.core.IndexedSeq(G__32054__a,0);
} 
return G__32053__delegate.call(this,args);};
G__32053.cljs$lang$maxFixedArity = 0;
G__32053.cljs$lang$applyTo = (function (arglist__32055){
var args = cljs.core.seq(arglist__32055);
return G__32053__delegate(args);
});
G__32053.cljs$core$IFn$_invoke$arity$variadic = G__32053__delegate;
return G__32053;
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

//# sourceMappingURL=debug.js.map?rel=1493454992655