// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__27373_27377 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__27374_27378 = null;
var count__27375_27379 = (0);
var i__27376_27380 = (0);
while(true){
if((i__27376_27380 < count__27375_27379)){
var k_27381 = cljs.core._nth.call(null,chunk__27374_27378,i__27376_27380);
var v_27382 = (b[k_27381]);
(a[k_27381] = v_27382);

var G__27383 = seq__27373_27377;
var G__27384 = chunk__27374_27378;
var G__27385 = count__27375_27379;
var G__27386 = (i__27376_27380 + (1));
seq__27373_27377 = G__27383;
chunk__27374_27378 = G__27384;
count__27375_27379 = G__27385;
i__27376_27380 = G__27386;
continue;
} else {
var temp__4657__auto___27387 = cljs.core.seq.call(null,seq__27373_27377);
if(temp__4657__auto___27387){
var seq__27373_27388__$1 = temp__4657__auto___27387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27373_27388__$1)){
var c__27051__auto___27389 = cljs.core.chunk_first.call(null,seq__27373_27388__$1);
var G__27390 = cljs.core.chunk_rest.call(null,seq__27373_27388__$1);
var G__27391 = c__27051__auto___27389;
var G__27392 = cljs.core.count.call(null,c__27051__auto___27389);
var G__27393 = (0);
seq__27373_27377 = G__27390;
chunk__27374_27378 = G__27391;
count__27375_27379 = G__27392;
i__27376_27380 = G__27393;
continue;
} else {
var k_27394 = cljs.core.first.call(null,seq__27373_27388__$1);
var v_27395 = (b[k_27394]);
(a[k_27394] = v_27395);

var G__27396 = cljs.core.next.call(null,seq__27373_27388__$1);
var G__27397 = null;
var G__27398 = (0);
var G__27399 = (0);
seq__27373_27377 = G__27396;
chunk__27374_27378 = G__27397;
count__27375_27379 = G__27398;
i__27376_27380 = G__27399;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__26846__auto__,writer__26847__auto__,opt__26848__auto__){
return cljs.core._write.call(null,writer__26847__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__26846__auto__,writer__26847__auto__,opt__26848__auto__){
return cljs.core._write.call(null,writer__26847__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args27400 = [];
var len__27315__auto___27403 = arguments.length;
var i__27316__auto___27404 = (0);
while(true){
if((i__27316__auto___27404 < len__27315__auto___27403)){
args27400.push((arguments[i__27316__auto___27404]));

var G__27405 = (i__27316__auto___27404 + (1));
i__27316__auto___27404 = G__27405;
continue;
} else {
}
break;
}

var G__27402 = args27400.length;
switch (G__27402) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27400.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__27407 = (i + (2));
var G__27408 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__27407;
ret = G__27408;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__26846__auto__,writer__26847__auto__,opt__26848__auto__){
return cljs.core._write.call(null,writer__26847__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__26846__auto__,writer__26847__auto__,opt__26848__auto__){
return cljs.core._write.call(null,writer__26847__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27409_27413 = cljs.core.seq.call(null,v);
var chunk__27410_27414 = null;
var count__27411_27415 = (0);
var i__27412_27416 = (0);
while(true){
if((i__27412_27416 < count__27411_27415)){
var x_27417 = cljs.core._nth.call(null,chunk__27410_27414,i__27412_27416);
ret.push(x_27417);

var G__27418 = seq__27409_27413;
var G__27419 = chunk__27410_27414;
var G__27420 = count__27411_27415;
var G__27421 = (i__27412_27416 + (1));
seq__27409_27413 = G__27418;
chunk__27410_27414 = G__27419;
count__27411_27415 = G__27420;
i__27412_27416 = G__27421;
continue;
} else {
var temp__4657__auto___27422 = cljs.core.seq.call(null,seq__27409_27413);
if(temp__4657__auto___27422){
var seq__27409_27423__$1 = temp__4657__auto___27422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27409_27423__$1)){
var c__27051__auto___27424 = cljs.core.chunk_first.call(null,seq__27409_27423__$1);
var G__27425 = cljs.core.chunk_rest.call(null,seq__27409_27423__$1);
var G__27426 = c__27051__auto___27424;
var G__27427 = cljs.core.count.call(null,c__27051__auto___27424);
var G__27428 = (0);
seq__27409_27413 = G__27425;
chunk__27410_27414 = G__27426;
count__27411_27415 = G__27427;
i__27412_27416 = G__27428;
continue;
} else {
var x_27429 = cljs.core.first.call(null,seq__27409_27423__$1);
ret.push(x_27429);

var G__27430 = cljs.core.next.call(null,seq__27409_27423__$1);
var G__27431 = null;
var G__27432 = (0);
var G__27433 = (0);
seq__27409_27413 = G__27430;
chunk__27410_27414 = G__27431;
count__27411_27415 = G__27432;
i__27412_27416 = G__27433;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__26846__auto__,writer__26847__auto__,opt__26848__auto__){
return cljs.core._write.call(null,writer__26847__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__26846__auto__,writer__26847__auto__,opt__26848__auto__){
return cljs.core._write.call(null,writer__26847__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27434_27438 = cljs.core.seq.call(null,v);
var chunk__27435_27439 = null;
var count__27436_27440 = (0);
var i__27437_27441 = (0);
while(true){
if((i__27437_27441 < count__27436_27440)){
var x_27442 = cljs.core._nth.call(null,chunk__27435_27439,i__27437_27441);
ret.push(x_27442);

var G__27443 = seq__27434_27438;
var G__27444 = chunk__27435_27439;
var G__27445 = count__27436_27440;
var G__27446 = (i__27437_27441 + (1));
seq__27434_27438 = G__27443;
chunk__27435_27439 = G__27444;
count__27436_27440 = G__27445;
i__27437_27441 = G__27446;
continue;
} else {
var temp__4657__auto___27447 = cljs.core.seq.call(null,seq__27434_27438);
if(temp__4657__auto___27447){
var seq__27434_27448__$1 = temp__4657__auto___27447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27434_27448__$1)){
var c__27051__auto___27449 = cljs.core.chunk_first.call(null,seq__27434_27448__$1);
var G__27450 = cljs.core.chunk_rest.call(null,seq__27434_27448__$1);
var G__27451 = c__27051__auto___27449;
var G__27452 = cljs.core.count.call(null,c__27051__auto___27449);
var G__27453 = (0);
seq__27434_27438 = G__27450;
chunk__27435_27439 = G__27451;
count__27436_27440 = G__27452;
i__27437_27441 = G__27453;
continue;
} else {
var x_27454 = cljs.core.first.call(null,seq__27434_27448__$1);
ret.push(x_27454);

var G__27455 = cljs.core.next.call(null,seq__27434_27448__$1);
var G__27456 = null;
var G__27457 = (0);
var G__27458 = (0);
seq__27434_27438 = G__27455;
chunk__27435_27439 = G__27456;
count__27436_27440 = G__27457;
i__27437_27441 = G__27458;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__26846__auto__,writer__26847__auto__,opt__26848__auto__){
return cljs.core._write.call(null,writer__26847__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27459_27463 = cljs.core.seq.call(null,v);
var chunk__27460_27464 = null;
var count__27461_27465 = (0);
var i__27462_27466 = (0);
while(true){
if((i__27462_27466 < count__27461_27465)){
var x_27467 = cljs.core._nth.call(null,chunk__27460_27464,i__27462_27466);
ret.push(x_27467);

var G__27468 = seq__27459_27463;
var G__27469 = chunk__27460_27464;
var G__27470 = count__27461_27465;
var G__27471 = (i__27462_27466 + (1));
seq__27459_27463 = G__27468;
chunk__27460_27464 = G__27469;
count__27461_27465 = G__27470;
i__27462_27466 = G__27471;
continue;
} else {
var temp__4657__auto___27472 = cljs.core.seq.call(null,seq__27459_27463);
if(temp__4657__auto___27472){
var seq__27459_27473__$1 = temp__4657__auto___27472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27459_27473__$1)){
var c__27051__auto___27474 = cljs.core.chunk_first.call(null,seq__27459_27473__$1);
var G__27475 = cljs.core.chunk_rest.call(null,seq__27459_27473__$1);
var G__27476 = c__27051__auto___27474;
var G__27477 = cljs.core.count.call(null,c__27051__auto___27474);
var G__27478 = (0);
seq__27459_27463 = G__27475;
chunk__27460_27464 = G__27476;
count__27461_27465 = G__27477;
i__27462_27466 = G__27478;
continue;
} else {
var x_27479 = cljs.core.first.call(null,seq__27459_27473__$1);
ret.push(x_27479);

var G__27480 = cljs.core.next.call(null,seq__27459_27473__$1);
var G__27481 = null;
var G__27482 = (0);
var G__27483 = (0);
seq__27459_27463 = G__27480;
chunk__27460_27464 = G__27481;
count__27461_27465 = G__27482;
i__27462_27466 = G__27483;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__26846__auto__,writer__26847__auto__,opt__26848__auto__){
return cljs.core._write.call(null,writer__26847__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__26846__auto__,writer__26847__auto__,opt__26848__auto__){
return cljs.core._write.call(null,writer__26847__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args27484 = [];
var len__27315__auto___27499 = arguments.length;
var i__27316__auto___27500 = (0);
while(true){
if((i__27316__auto___27500 < len__27315__auto___27499)){
args27484.push((arguments[i__27316__auto___27500]));

var G__27501 = (i__27316__auto___27500 + (1));
i__27316__auto___27500 = G__27501;
continue;
} else {
}
break;
}

var G__27486 = args27484.length;
switch (G__27486) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27484.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__27487 = obj;
G__27487.push(kfn.call(null,k),vfn.call(null,v));

return G__27487;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x27488 = cljs.core.clone.call(null,handlers);
x27488.forEach = ((function (x27488,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__27489 = cljs.core.seq.call(null,coll);
var chunk__27490 = null;
var count__27491 = (0);
var i__27492 = (0);
while(true){
if((i__27492 < count__27491)){
var vec__27493 = cljs.core._nth.call(null,chunk__27490,i__27492);
var k = cljs.core.nth.call(null,vec__27493,(0),null);
var v = cljs.core.nth.call(null,vec__27493,(1),null);
f.call(null,v,k);

var G__27503 = seq__27489;
var G__27504 = chunk__27490;
var G__27505 = count__27491;
var G__27506 = (i__27492 + (1));
seq__27489 = G__27503;
chunk__27490 = G__27504;
count__27491 = G__27505;
i__27492 = G__27506;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27489);
if(temp__4657__auto__){
var seq__27489__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27489__$1)){
var c__27051__auto__ = cljs.core.chunk_first.call(null,seq__27489__$1);
var G__27507 = cljs.core.chunk_rest.call(null,seq__27489__$1);
var G__27508 = c__27051__auto__;
var G__27509 = cljs.core.count.call(null,c__27051__auto__);
var G__27510 = (0);
seq__27489 = G__27507;
chunk__27490 = G__27508;
count__27491 = G__27509;
i__27492 = G__27510;
continue;
} else {
var vec__27496 = cljs.core.first.call(null,seq__27489__$1);
var k = cljs.core.nth.call(null,vec__27496,(0),null);
var v = cljs.core.nth.call(null,vec__27496,(1),null);
f.call(null,v,k);

var G__27511 = cljs.core.next.call(null,seq__27489__$1);
var G__27512 = null;
var G__27513 = (0);
var G__27514 = (0);
seq__27489 = G__27511;
chunk__27490 = G__27512;
count__27491 = G__27513;
i__27492 = G__27514;
continue;
}
} else {
return null;
}
}
break;
}
});})(x27488,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x27488;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args27515 = [];
var len__27315__auto___27521 = arguments.length;
var i__27316__auto___27522 = (0);
while(true){
if((i__27316__auto___27522 < len__27315__auto___27521)){
args27515.push((arguments[i__27316__auto___27522]));

var G__27523 = (i__27316__auto___27522 + (1));
i__27316__auto___27522 = G__27523;
continue;
} else {
}
break;
}

var G__27517 = args27515.length;
switch (G__27517) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27515.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit27518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit27518 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta27519){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta27519 = meta27519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit27518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27520,meta27519__$1){
var self__ = this;
var _27520__$1 = this;
return (new cognitect.transit.t_cognitect$transit27518(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta27519__$1));
});

cognitect.transit.t_cognitect$transit27518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27520){
var self__ = this;
var _27520__$1 = this;
return self__.meta27519;
});

cognitect.transit.t_cognitect$transit27518.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27518.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27518.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27518.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta27519","meta27519",-259988865,null)], null);
});

cognitect.transit.t_cognitect$transit27518.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit27518.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit27518";

cognitect.transit.t_cognitect$transit27518.cljs$lang$ctorPrWriter = (function (this__26846__auto__,writer__26847__auto__,opt__26848__auto__){
return cljs.core._write.call(null,writer__26847__auto__,"cognitect.transit/t_cognitect$transit27518");
});

cognitect.transit.__GT_t_cognitect$transit27518 = (function cognitect$transit$__GT_t_cognitect$transit27518(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27519){
return (new cognitect.transit.t_cognitect$transit27518(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27519));
});

}

return (new cognitect.transit.t_cognitect$transit27518(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__26240__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1493511389195