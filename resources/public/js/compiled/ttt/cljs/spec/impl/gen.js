// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__26696__auto__,writer__26697__auto__,opt__26698__auto__){
return cljs.core._write.call(null,writer__26697__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32253 = arguments.length;
var i__27166__auto___32254 = (0);
while(true){
if((i__27166__auto___32254 < len__27165__auto___32253)){
args__27172__auto__.push((arguments[i__27166__auto___32254]));

var G__32255 = (i__27166__auto___32254 + (1));
i__27166__auto___32254 = G__32255;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq32252){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32252));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32257 = arguments.length;
var i__27166__auto___32258 = (0);
while(true){
if((i__27166__auto___32258 < len__27165__auto___32257)){
args__27172__auto__.push((arguments[i__27166__auto___32258]));

var G__32259 = (i__27166__auto___32258 + (1));
i__27166__auto___32258 = G__32259;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq32256){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32256));
});

var g_QMARK__32260 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_32261 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32260){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32260))
,null));
var mkg_32262 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32260,g_32261){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32260,g_32261))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__32260,g_32261,mkg_32262){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__32260).call(null,x);
});})(g_QMARK__32260,g_32261,mkg_32262))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__32260,g_32261,mkg_32262){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_32262).call(null,gfn);
});})(g_QMARK__32260,g_32261,mkg_32262))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__32260,g_32261,mkg_32262){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_32261).call(null,generator);
});})(g_QMARK__32260,g_32261,mkg_32262))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32224__auto___32281 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__32224__auto___32281){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32282 = arguments.length;
var i__27166__auto___32283 = (0);
while(true){
if((i__27166__auto___32283 < len__27165__auto___32282)){
args__27172__auto__.push((arguments[i__27166__auto___32283]));

var G__32284 = (i__27166__auto___32283 + (1));
i__27166__auto___32283 = G__32284;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32281))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32281){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32281),args);
});})(g__32224__auto___32281))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__32224__auto___32281){
return (function (seq32263){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32263));
});})(g__32224__auto___32281))
;


var g__32224__auto___32285 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__32224__auto___32285){
return (function cljs$spec$impl$gen$list(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32286 = arguments.length;
var i__27166__auto___32287 = (0);
while(true){
if((i__27166__auto___32287 < len__27165__auto___32286)){
args__27172__auto__.push((arguments[i__27166__auto___32287]));

var G__32288 = (i__27166__auto___32287 + (1));
i__27166__auto___32287 = G__32288;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32285))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32285){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32285),args);
});})(g__32224__auto___32285))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__32224__auto___32285){
return (function (seq32264){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32264));
});})(g__32224__auto___32285))
;


var g__32224__auto___32289 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__32224__auto___32289){
return (function cljs$spec$impl$gen$map(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32290 = arguments.length;
var i__27166__auto___32291 = (0);
while(true){
if((i__27166__auto___32291 < len__27165__auto___32290)){
args__27172__auto__.push((arguments[i__27166__auto___32291]));

var G__32292 = (i__27166__auto___32291 + (1));
i__27166__auto___32291 = G__32292;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32289))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32289){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32289),args);
});})(g__32224__auto___32289))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__32224__auto___32289){
return (function (seq32265){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32265));
});})(g__32224__auto___32289))
;


var g__32224__auto___32293 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__32224__auto___32293){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32294 = arguments.length;
var i__27166__auto___32295 = (0);
while(true){
if((i__27166__auto___32295 < len__27165__auto___32294)){
args__27172__auto__.push((arguments[i__27166__auto___32295]));

var G__32296 = (i__27166__auto___32295 + (1));
i__27166__auto___32295 = G__32296;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32293))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32293){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32293),args);
});})(g__32224__auto___32293))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__32224__auto___32293){
return (function (seq32266){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32266));
});})(g__32224__auto___32293))
;


var g__32224__auto___32297 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__32224__auto___32297){
return (function cljs$spec$impl$gen$set(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32298 = arguments.length;
var i__27166__auto___32299 = (0);
while(true){
if((i__27166__auto___32299 < len__27165__auto___32298)){
args__27172__auto__.push((arguments[i__27166__auto___32299]));

var G__32300 = (i__27166__auto___32299 + (1));
i__27166__auto___32299 = G__32300;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32297))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32297){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32297),args);
});})(g__32224__auto___32297))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__32224__auto___32297){
return (function (seq32267){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32267));
});})(g__32224__auto___32297))
;


var g__32224__auto___32301 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__32224__auto___32301){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32302 = arguments.length;
var i__27166__auto___32303 = (0);
while(true){
if((i__27166__auto___32303 < len__27165__auto___32302)){
args__27172__auto__.push((arguments[i__27166__auto___32303]));

var G__32304 = (i__27166__auto___32303 + (1));
i__27166__auto___32303 = G__32304;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32301))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32301){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32301),args);
});})(g__32224__auto___32301))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__32224__auto___32301){
return (function (seq32268){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32268));
});})(g__32224__auto___32301))
;


var g__32224__auto___32305 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__32224__auto___32305){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32306 = arguments.length;
var i__27166__auto___32307 = (0);
while(true){
if((i__27166__auto___32307 < len__27165__auto___32306)){
args__27172__auto__.push((arguments[i__27166__auto___32307]));

var G__32308 = (i__27166__auto___32307 + (1));
i__27166__auto___32307 = G__32308;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32305))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32305){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32305),args);
});})(g__32224__auto___32305))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__32224__auto___32305){
return (function (seq32269){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32269));
});})(g__32224__auto___32305))
;


var g__32224__auto___32309 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__32224__auto___32309){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32310 = arguments.length;
var i__27166__auto___32311 = (0);
while(true){
if((i__27166__auto___32311 < len__27165__auto___32310)){
args__27172__auto__.push((arguments[i__27166__auto___32311]));

var G__32312 = (i__27166__auto___32311 + (1));
i__27166__auto___32311 = G__32312;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32309))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32309){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32309),args);
});})(g__32224__auto___32309))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__32224__auto___32309){
return (function (seq32270){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32270));
});})(g__32224__auto___32309))
;


var g__32224__auto___32313 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__32224__auto___32313){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32314 = arguments.length;
var i__27166__auto___32315 = (0);
while(true){
if((i__27166__auto___32315 < len__27165__auto___32314)){
args__27172__auto__.push((arguments[i__27166__auto___32315]));

var G__32316 = (i__27166__auto___32315 + (1));
i__27166__auto___32315 = G__32316;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32313))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32313){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32313),args);
});})(g__32224__auto___32313))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__32224__auto___32313){
return (function (seq32271){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32271));
});})(g__32224__auto___32313))
;


var g__32224__auto___32317 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__32224__auto___32317){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32318 = arguments.length;
var i__27166__auto___32319 = (0);
while(true){
if((i__27166__auto___32319 < len__27165__auto___32318)){
args__27172__auto__.push((arguments[i__27166__auto___32319]));

var G__32320 = (i__27166__auto___32319 + (1));
i__27166__auto___32319 = G__32320;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32317))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32317){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32317),args);
});})(g__32224__auto___32317))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__32224__auto___32317){
return (function (seq32272){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32272));
});})(g__32224__auto___32317))
;


var g__32224__auto___32321 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__32224__auto___32321){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32322 = arguments.length;
var i__27166__auto___32323 = (0);
while(true){
if((i__27166__auto___32323 < len__27165__auto___32322)){
args__27172__auto__.push((arguments[i__27166__auto___32323]));

var G__32324 = (i__27166__auto___32323 + (1));
i__27166__auto___32323 = G__32324;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32321))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32321){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32321),args);
});})(g__32224__auto___32321))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__32224__auto___32321){
return (function (seq32273){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32273));
});})(g__32224__auto___32321))
;


var g__32224__auto___32325 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__32224__auto___32325){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32326 = arguments.length;
var i__27166__auto___32327 = (0);
while(true){
if((i__27166__auto___32327 < len__27165__auto___32326)){
args__27172__auto__.push((arguments[i__27166__auto___32327]));

var G__32328 = (i__27166__auto___32327 + (1));
i__27166__auto___32327 = G__32328;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32325))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32325){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32325),args);
});})(g__32224__auto___32325))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__32224__auto___32325){
return (function (seq32274){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32274));
});})(g__32224__auto___32325))
;


var g__32224__auto___32329 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__32224__auto___32329){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32330 = arguments.length;
var i__27166__auto___32331 = (0);
while(true){
if((i__27166__auto___32331 < len__27165__auto___32330)){
args__27172__auto__.push((arguments[i__27166__auto___32331]));

var G__32332 = (i__27166__auto___32331 + (1));
i__27166__auto___32331 = G__32332;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32329))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32329){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32329),args);
});})(g__32224__auto___32329))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__32224__auto___32329){
return (function (seq32275){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32275));
});})(g__32224__auto___32329))
;


var g__32224__auto___32333 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__32224__auto___32333){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32334 = arguments.length;
var i__27166__auto___32335 = (0);
while(true){
if((i__27166__auto___32335 < len__27165__auto___32334)){
args__27172__auto__.push((arguments[i__27166__auto___32335]));

var G__32336 = (i__27166__auto___32335 + (1));
i__27166__auto___32335 = G__32336;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32333))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32333){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32333),args);
});})(g__32224__auto___32333))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__32224__auto___32333){
return (function (seq32276){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32276));
});})(g__32224__auto___32333))
;


var g__32224__auto___32337 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__32224__auto___32337){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32338 = arguments.length;
var i__27166__auto___32339 = (0);
while(true){
if((i__27166__auto___32339 < len__27165__auto___32338)){
args__27172__auto__.push((arguments[i__27166__auto___32339]));

var G__32340 = (i__27166__auto___32339 + (1));
i__27166__auto___32339 = G__32340;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32337))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32337){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32337),args);
});})(g__32224__auto___32337))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__32224__auto___32337){
return (function (seq32277){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32277));
});})(g__32224__auto___32337))
;


var g__32224__auto___32341 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__32224__auto___32341){
return (function cljs$spec$impl$gen$return(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32342 = arguments.length;
var i__27166__auto___32343 = (0);
while(true){
if((i__27166__auto___32343 < len__27165__auto___32342)){
args__27172__auto__.push((arguments[i__27166__auto___32343]));

var G__32344 = (i__27166__auto___32343 + (1));
i__27166__auto___32343 = G__32344;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32341))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32341){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32341),args);
});})(g__32224__auto___32341))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__32224__auto___32341){
return (function (seq32278){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32278));
});})(g__32224__auto___32341))
;


var g__32224__auto___32345 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__32224__auto___32345){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32346 = arguments.length;
var i__27166__auto___32347 = (0);
while(true){
if((i__27166__auto___32347 < len__27165__auto___32346)){
args__27172__auto__.push((arguments[i__27166__auto___32347]));

var G__32348 = (i__27166__auto___32347 + (1));
i__27166__auto___32347 = G__32348;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32345))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32345){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32345),args);
});})(g__32224__auto___32345))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32224__auto___32345){
return (function (seq32279){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32279));
});})(g__32224__auto___32345))
;


var g__32224__auto___32349 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__32224__auto___32349){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32350 = arguments.length;
var i__27166__auto___32351 = (0);
while(true){
if((i__27166__auto___32351 < len__27165__auto___32350)){
args__27172__auto__.push((arguments[i__27166__auto___32351]));

var G__32352 = (i__27166__auto___32351 + (1));
i__27166__auto___32351 = G__32352;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32224__auto___32349))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32224__auto___32349){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32224__auto___32349),args);
});})(g__32224__auto___32349))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__32224__auto___32349){
return (function (seq32280){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32280));
});})(g__32224__auto___32349))
;

var g__32237__auto___32374 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__32237__auto___32374){
return (function cljs$spec$impl$gen$any(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32375 = arguments.length;
var i__27166__auto___32376 = (0);
while(true){
if((i__27166__auto___32376 < len__27165__auto___32375)){
args__27172__auto__.push((arguments[i__27166__auto___32376]));

var G__32377 = (i__27166__auto___32376 + (1));
i__27166__auto___32376 = G__32377;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32374))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32374){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32374);
});})(g__32237__auto___32374))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__32237__auto___32374){
return (function (seq32353){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32353));
});})(g__32237__auto___32374))
;


var g__32237__auto___32378 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__32237__auto___32378){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32379 = arguments.length;
var i__27166__auto___32380 = (0);
while(true){
if((i__27166__auto___32380 < len__27165__auto___32379)){
args__27172__auto__.push((arguments[i__27166__auto___32380]));

var G__32381 = (i__27166__auto___32380 + (1));
i__27166__auto___32380 = G__32381;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32378))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32378){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32378);
});})(g__32237__auto___32378))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__32237__auto___32378){
return (function (seq32354){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32354));
});})(g__32237__auto___32378))
;


var g__32237__auto___32382 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__32237__auto___32382){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32383 = arguments.length;
var i__27166__auto___32384 = (0);
while(true){
if((i__27166__auto___32384 < len__27165__auto___32383)){
args__27172__auto__.push((arguments[i__27166__auto___32384]));

var G__32385 = (i__27166__auto___32384 + (1));
i__27166__auto___32384 = G__32385;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32382))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32382){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32382);
});})(g__32237__auto___32382))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__32237__auto___32382){
return (function (seq32355){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32355));
});})(g__32237__auto___32382))
;


var g__32237__auto___32386 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__32237__auto___32386){
return (function cljs$spec$impl$gen$char(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32387 = arguments.length;
var i__27166__auto___32388 = (0);
while(true){
if((i__27166__auto___32388 < len__27165__auto___32387)){
args__27172__auto__.push((arguments[i__27166__auto___32388]));

var G__32389 = (i__27166__auto___32388 + (1));
i__27166__auto___32388 = G__32389;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32386))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32386){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32386);
});})(g__32237__auto___32386))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__32237__auto___32386){
return (function (seq32356){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32356));
});})(g__32237__auto___32386))
;


var g__32237__auto___32390 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__32237__auto___32390){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32391 = arguments.length;
var i__27166__auto___32392 = (0);
while(true){
if((i__27166__auto___32392 < len__27165__auto___32391)){
args__27172__auto__.push((arguments[i__27166__auto___32392]));

var G__32393 = (i__27166__auto___32392 + (1));
i__27166__auto___32392 = G__32393;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32390))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32390){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32390);
});})(g__32237__auto___32390))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__32237__auto___32390){
return (function (seq32357){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32357));
});})(g__32237__auto___32390))
;


var g__32237__auto___32394 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__32237__auto___32394){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32395 = arguments.length;
var i__27166__auto___32396 = (0);
while(true){
if((i__27166__auto___32396 < len__27165__auto___32395)){
args__27172__auto__.push((arguments[i__27166__auto___32396]));

var G__32397 = (i__27166__auto___32396 + (1));
i__27166__auto___32396 = G__32397;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32394))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32394){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32394);
});})(g__32237__auto___32394))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__32237__auto___32394){
return (function (seq32358){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32358));
});})(g__32237__auto___32394))
;


var g__32237__auto___32398 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__32237__auto___32398){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32399 = arguments.length;
var i__27166__auto___32400 = (0);
while(true){
if((i__27166__auto___32400 < len__27165__auto___32399)){
args__27172__auto__.push((arguments[i__27166__auto___32400]));

var G__32401 = (i__27166__auto___32400 + (1));
i__27166__auto___32400 = G__32401;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32398))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32398){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32398);
});})(g__32237__auto___32398))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__32237__auto___32398){
return (function (seq32359){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32359));
});})(g__32237__auto___32398))
;


var g__32237__auto___32402 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__32237__auto___32402){
return (function cljs$spec$impl$gen$double(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32403 = arguments.length;
var i__27166__auto___32404 = (0);
while(true){
if((i__27166__auto___32404 < len__27165__auto___32403)){
args__27172__auto__.push((arguments[i__27166__auto___32404]));

var G__32405 = (i__27166__auto___32404 + (1));
i__27166__auto___32404 = G__32405;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32402))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32402){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32402);
});})(g__32237__auto___32402))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__32237__auto___32402){
return (function (seq32360){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32360));
});})(g__32237__auto___32402))
;


var g__32237__auto___32406 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__32237__auto___32406){
return (function cljs$spec$impl$gen$int(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32407 = arguments.length;
var i__27166__auto___32408 = (0);
while(true){
if((i__27166__auto___32408 < len__27165__auto___32407)){
args__27172__auto__.push((arguments[i__27166__auto___32408]));

var G__32409 = (i__27166__auto___32408 + (1));
i__27166__auto___32408 = G__32409;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32406))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32406){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32406);
});})(g__32237__auto___32406))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__32237__auto___32406){
return (function (seq32361){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32361));
});})(g__32237__auto___32406))
;


var g__32237__auto___32410 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__32237__auto___32410){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32411 = arguments.length;
var i__27166__auto___32412 = (0);
while(true){
if((i__27166__auto___32412 < len__27165__auto___32411)){
args__27172__auto__.push((arguments[i__27166__auto___32412]));

var G__32413 = (i__27166__auto___32412 + (1));
i__27166__auto___32412 = G__32413;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32410))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32410){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32410);
});})(g__32237__auto___32410))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__32237__auto___32410){
return (function (seq32362){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32362));
});})(g__32237__auto___32410))
;


var g__32237__auto___32414 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__32237__auto___32414){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32415 = arguments.length;
var i__27166__auto___32416 = (0);
while(true){
if((i__27166__auto___32416 < len__27165__auto___32415)){
args__27172__auto__.push((arguments[i__27166__auto___32416]));

var G__32417 = (i__27166__auto___32416 + (1));
i__27166__auto___32416 = G__32417;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32414))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32414){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32414);
});})(g__32237__auto___32414))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__32237__auto___32414){
return (function (seq32363){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32363));
});})(g__32237__auto___32414))
;


var g__32237__auto___32418 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__32237__auto___32418){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32419 = arguments.length;
var i__27166__auto___32420 = (0);
while(true){
if((i__27166__auto___32420 < len__27165__auto___32419)){
args__27172__auto__.push((arguments[i__27166__auto___32420]));

var G__32421 = (i__27166__auto___32420 + (1));
i__27166__auto___32420 = G__32421;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32418))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32418){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32418);
});})(g__32237__auto___32418))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__32237__auto___32418){
return (function (seq32364){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32364));
});})(g__32237__auto___32418))
;


var g__32237__auto___32422 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__32237__auto___32422){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32423 = arguments.length;
var i__27166__auto___32424 = (0);
while(true){
if((i__27166__auto___32424 < len__27165__auto___32423)){
args__27172__auto__.push((arguments[i__27166__auto___32424]));

var G__32425 = (i__27166__auto___32424 + (1));
i__27166__auto___32424 = G__32425;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32422))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32422){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32422);
});})(g__32237__auto___32422))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__32237__auto___32422){
return (function (seq32365){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32365));
});})(g__32237__auto___32422))
;


var g__32237__auto___32426 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__32237__auto___32426){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32427 = arguments.length;
var i__27166__auto___32428 = (0);
while(true){
if((i__27166__auto___32428 < len__27165__auto___32427)){
args__27172__auto__.push((arguments[i__27166__auto___32428]));

var G__32429 = (i__27166__auto___32428 + (1));
i__27166__auto___32428 = G__32429;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32426))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32426){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32426);
});})(g__32237__auto___32426))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__32237__auto___32426){
return (function (seq32366){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32366));
});})(g__32237__auto___32426))
;


var g__32237__auto___32430 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__32237__auto___32430){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32431 = arguments.length;
var i__27166__auto___32432 = (0);
while(true){
if((i__27166__auto___32432 < len__27165__auto___32431)){
args__27172__auto__.push((arguments[i__27166__auto___32432]));

var G__32433 = (i__27166__auto___32432 + (1));
i__27166__auto___32432 = G__32433;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32430))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32430){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32430);
});})(g__32237__auto___32430))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__32237__auto___32430){
return (function (seq32367){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32367));
});})(g__32237__auto___32430))
;


var g__32237__auto___32434 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__32237__auto___32434){
return (function cljs$spec$impl$gen$string(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32435 = arguments.length;
var i__27166__auto___32436 = (0);
while(true){
if((i__27166__auto___32436 < len__27165__auto___32435)){
args__27172__auto__.push((arguments[i__27166__auto___32436]));

var G__32437 = (i__27166__auto___32436 + (1));
i__27166__auto___32436 = G__32437;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32434))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32434){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32434);
});})(g__32237__auto___32434))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__32237__auto___32434){
return (function (seq32368){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32368));
});})(g__32237__auto___32434))
;


var g__32237__auto___32438 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__32237__auto___32438){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32439 = arguments.length;
var i__27166__auto___32440 = (0);
while(true){
if((i__27166__auto___32440 < len__27165__auto___32439)){
args__27172__auto__.push((arguments[i__27166__auto___32440]));

var G__32441 = (i__27166__auto___32440 + (1));
i__27166__auto___32440 = G__32441;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32438))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32438){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32438);
});})(g__32237__auto___32438))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__32237__auto___32438){
return (function (seq32369){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32369));
});})(g__32237__auto___32438))
;


var g__32237__auto___32442 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__32237__auto___32442){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32443 = arguments.length;
var i__27166__auto___32444 = (0);
while(true){
if((i__27166__auto___32444 < len__27165__auto___32443)){
args__27172__auto__.push((arguments[i__27166__auto___32444]));

var G__32445 = (i__27166__auto___32444 + (1));
i__27166__auto___32444 = G__32445;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32442))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32442){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32442);
});})(g__32237__auto___32442))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__32237__auto___32442){
return (function (seq32370){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32370));
});})(g__32237__auto___32442))
;


var g__32237__auto___32446 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__32237__auto___32446){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32447 = arguments.length;
var i__27166__auto___32448 = (0);
while(true){
if((i__27166__auto___32448 < len__27165__auto___32447)){
args__27172__auto__.push((arguments[i__27166__auto___32448]));

var G__32449 = (i__27166__auto___32448 + (1));
i__27166__auto___32448 = G__32449;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32446))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32446){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32446);
});})(g__32237__auto___32446))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__32237__auto___32446){
return (function (seq32371){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32371));
});})(g__32237__auto___32446))
;


var g__32237__auto___32450 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__32237__auto___32450){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32451 = arguments.length;
var i__27166__auto___32452 = (0);
while(true){
if((i__27166__auto___32452 < len__27165__auto___32451)){
args__27172__auto__.push((arguments[i__27166__auto___32452]));

var G__32453 = (i__27166__auto___32452 + (1));
i__27166__auto___32452 = G__32453;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32450))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32450){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32450);
});})(g__32237__auto___32450))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__32237__auto___32450){
return (function (seq32372){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32372));
});})(g__32237__auto___32450))
;


var g__32237__auto___32454 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__32237__auto___32454){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32455 = arguments.length;
var i__27166__auto___32456 = (0);
while(true){
if((i__27166__auto___32456 < len__27165__auto___32455)){
args__27172__auto__.push((arguments[i__27166__auto___32456]));

var G__32457 = (i__27166__auto___32456 + (1));
i__27166__auto___32456 = G__32457;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});})(g__32237__auto___32454))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32237__auto___32454){
return (function (args){
return cljs.core.deref.call(null,g__32237__auto___32454);
});})(g__32237__auto___32454))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__32237__auto___32454){
return (function (seq32373){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32373));
});})(g__32237__auto___32454))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27172__auto__ = [];
var len__27165__auto___32460 = arguments.length;
var i__27166__auto___32461 = (0);
while(true){
if((i__27166__auto___32461 < len__27165__auto___32460)){
args__27172__auto__.push((arguments[i__27166__auto___32461]));

var G__32462 = (i__27166__auto___32461 + (1));
i__27166__auto___32461 = G__32462;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__32458_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__32458_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq32459){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32459));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__32463_SHARP_){
return (new Date(p1__32463_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1494497613168