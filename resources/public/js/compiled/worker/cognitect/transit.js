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
var seq__39506_39510 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__39507_39511 = null;
var count__39508_39512 = (0);
var i__39509_39513 = (0);
while(true){
if((i__39509_39513 < count__39508_39512)){
var k_39514 = cljs.core._nth.call(null,chunk__39507_39511,i__39509_39513);
var v_39515 = (b[k_39514]);
(a[k_39514] = v_39515);

var G__39516 = seq__39506_39510;
var G__39517 = chunk__39507_39511;
var G__39518 = count__39508_39512;
var G__39519 = (i__39509_39513 + (1));
seq__39506_39510 = G__39516;
chunk__39507_39511 = G__39517;
count__39508_39512 = G__39518;
i__39509_39513 = G__39519;
continue;
} else {
var temp__4657__auto___39520 = cljs.core.seq.call(null,seq__39506_39510);
if(temp__4657__auto___39520){
var seq__39506_39521__$1 = temp__4657__auto___39520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39506_39521__$1)){
var c__27051__auto___39522 = cljs.core.chunk_first.call(null,seq__39506_39521__$1);
var G__39523 = cljs.core.chunk_rest.call(null,seq__39506_39521__$1);
var G__39524 = c__27051__auto___39522;
var G__39525 = cljs.core.count.call(null,c__27051__auto___39522);
var G__39526 = (0);
seq__39506_39510 = G__39523;
chunk__39507_39511 = G__39524;
count__39508_39512 = G__39525;
i__39509_39513 = G__39526;
continue;
} else {
var k_39527 = cljs.core.first.call(null,seq__39506_39521__$1);
var v_39528 = (b[k_39527]);
(a[k_39527] = v_39528);

var G__39529 = cljs.core.next.call(null,seq__39506_39521__$1);
var G__39530 = null;
var G__39531 = (0);
var G__39532 = (0);
seq__39506_39510 = G__39529;
chunk__39507_39511 = G__39530;
count__39508_39512 = G__39531;
i__39509_39513 = G__39532;
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
var args39533 = [];
var len__27315__auto___39536 = arguments.length;
var i__27316__auto___39537 = (0);
while(true){
if((i__27316__auto___39537 < len__27315__auto___39536)){
args39533.push((arguments[i__27316__auto___39537]));

var G__39538 = (i__27316__auto___39537 + (1));
i__27316__auto___39537 = G__39538;
continue;
} else {
}
break;
}

var G__39535 = args39533.length;
switch (G__39535) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39533.length)].join('')));

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
var G__39540 = (i + (2));
var G__39541 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__39540;
ret = G__39541;
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
var seq__39542_39546 = cljs.core.seq.call(null,v);
var chunk__39543_39547 = null;
var count__39544_39548 = (0);
var i__39545_39549 = (0);
while(true){
if((i__39545_39549 < count__39544_39548)){
var x_39550 = cljs.core._nth.call(null,chunk__39543_39547,i__39545_39549);
ret.push(x_39550);

var G__39551 = seq__39542_39546;
var G__39552 = chunk__39543_39547;
var G__39553 = count__39544_39548;
var G__39554 = (i__39545_39549 + (1));
seq__39542_39546 = G__39551;
chunk__39543_39547 = G__39552;
count__39544_39548 = G__39553;
i__39545_39549 = G__39554;
continue;
} else {
var temp__4657__auto___39555 = cljs.core.seq.call(null,seq__39542_39546);
if(temp__4657__auto___39555){
var seq__39542_39556__$1 = temp__4657__auto___39555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39542_39556__$1)){
var c__27051__auto___39557 = cljs.core.chunk_first.call(null,seq__39542_39556__$1);
var G__39558 = cljs.core.chunk_rest.call(null,seq__39542_39556__$1);
var G__39559 = c__27051__auto___39557;
var G__39560 = cljs.core.count.call(null,c__27051__auto___39557);
var G__39561 = (0);
seq__39542_39546 = G__39558;
chunk__39543_39547 = G__39559;
count__39544_39548 = G__39560;
i__39545_39549 = G__39561;
continue;
} else {
var x_39562 = cljs.core.first.call(null,seq__39542_39556__$1);
ret.push(x_39562);

var G__39563 = cljs.core.next.call(null,seq__39542_39556__$1);
var G__39564 = null;
var G__39565 = (0);
var G__39566 = (0);
seq__39542_39546 = G__39563;
chunk__39543_39547 = G__39564;
count__39544_39548 = G__39565;
i__39545_39549 = G__39566;
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
var seq__39567_39571 = cljs.core.seq.call(null,v);
var chunk__39568_39572 = null;
var count__39569_39573 = (0);
var i__39570_39574 = (0);
while(true){
if((i__39570_39574 < count__39569_39573)){
var x_39575 = cljs.core._nth.call(null,chunk__39568_39572,i__39570_39574);
ret.push(x_39575);

var G__39576 = seq__39567_39571;
var G__39577 = chunk__39568_39572;
var G__39578 = count__39569_39573;
var G__39579 = (i__39570_39574 + (1));
seq__39567_39571 = G__39576;
chunk__39568_39572 = G__39577;
count__39569_39573 = G__39578;
i__39570_39574 = G__39579;
continue;
} else {
var temp__4657__auto___39580 = cljs.core.seq.call(null,seq__39567_39571);
if(temp__4657__auto___39580){
var seq__39567_39581__$1 = temp__4657__auto___39580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39567_39581__$1)){
var c__27051__auto___39582 = cljs.core.chunk_first.call(null,seq__39567_39581__$1);
var G__39583 = cljs.core.chunk_rest.call(null,seq__39567_39581__$1);
var G__39584 = c__27051__auto___39582;
var G__39585 = cljs.core.count.call(null,c__27051__auto___39582);
var G__39586 = (0);
seq__39567_39571 = G__39583;
chunk__39568_39572 = G__39584;
count__39569_39573 = G__39585;
i__39570_39574 = G__39586;
continue;
} else {
var x_39587 = cljs.core.first.call(null,seq__39567_39581__$1);
ret.push(x_39587);

var G__39588 = cljs.core.next.call(null,seq__39567_39581__$1);
var G__39589 = null;
var G__39590 = (0);
var G__39591 = (0);
seq__39567_39571 = G__39588;
chunk__39568_39572 = G__39589;
count__39569_39573 = G__39590;
i__39570_39574 = G__39591;
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
var seq__39592_39596 = cljs.core.seq.call(null,v);
var chunk__39593_39597 = null;
var count__39594_39598 = (0);
var i__39595_39599 = (0);
while(true){
if((i__39595_39599 < count__39594_39598)){
var x_39600 = cljs.core._nth.call(null,chunk__39593_39597,i__39595_39599);
ret.push(x_39600);

var G__39601 = seq__39592_39596;
var G__39602 = chunk__39593_39597;
var G__39603 = count__39594_39598;
var G__39604 = (i__39595_39599 + (1));
seq__39592_39596 = G__39601;
chunk__39593_39597 = G__39602;
count__39594_39598 = G__39603;
i__39595_39599 = G__39604;
continue;
} else {
var temp__4657__auto___39605 = cljs.core.seq.call(null,seq__39592_39596);
if(temp__4657__auto___39605){
var seq__39592_39606__$1 = temp__4657__auto___39605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39592_39606__$1)){
var c__27051__auto___39607 = cljs.core.chunk_first.call(null,seq__39592_39606__$1);
var G__39608 = cljs.core.chunk_rest.call(null,seq__39592_39606__$1);
var G__39609 = c__27051__auto___39607;
var G__39610 = cljs.core.count.call(null,c__27051__auto___39607);
var G__39611 = (0);
seq__39592_39596 = G__39608;
chunk__39593_39597 = G__39609;
count__39594_39598 = G__39610;
i__39595_39599 = G__39611;
continue;
} else {
var x_39612 = cljs.core.first.call(null,seq__39592_39606__$1);
ret.push(x_39612);

var G__39613 = cljs.core.next.call(null,seq__39592_39606__$1);
var G__39614 = null;
var G__39615 = (0);
var G__39616 = (0);
seq__39592_39596 = G__39613;
chunk__39593_39597 = G__39614;
count__39594_39598 = G__39615;
i__39595_39599 = G__39616;
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
var args39617 = [];
var len__27315__auto___39632 = arguments.length;
var i__27316__auto___39633 = (0);
while(true){
if((i__27316__auto___39633 < len__27315__auto___39632)){
args39617.push((arguments[i__27316__auto___39633]));

var G__39634 = (i__27316__auto___39633 + (1));
i__27316__auto___39633 = G__39634;
continue;
} else {
}
break;
}

var G__39619 = args39617.length;
switch (G__39619) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39617.length)].join('')));

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
var G__39620 = obj;
G__39620.push(kfn.call(null,k),vfn.call(null,v));

return G__39620;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x39621 = cljs.core.clone.call(null,handlers);
x39621.forEach = ((function (x39621,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__39622 = cljs.core.seq.call(null,coll);
var chunk__39623 = null;
var count__39624 = (0);
var i__39625 = (0);
while(true){
if((i__39625 < count__39624)){
var vec__39626 = cljs.core._nth.call(null,chunk__39623,i__39625);
var k = cljs.core.nth.call(null,vec__39626,(0),null);
var v = cljs.core.nth.call(null,vec__39626,(1),null);
f.call(null,v,k);

var G__39636 = seq__39622;
var G__39637 = chunk__39623;
var G__39638 = count__39624;
var G__39639 = (i__39625 + (1));
seq__39622 = G__39636;
chunk__39623 = G__39637;
count__39624 = G__39638;
i__39625 = G__39639;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39622);
if(temp__4657__auto__){
var seq__39622__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39622__$1)){
var c__27051__auto__ = cljs.core.chunk_first.call(null,seq__39622__$1);
var G__39640 = cljs.core.chunk_rest.call(null,seq__39622__$1);
var G__39641 = c__27051__auto__;
var G__39642 = cljs.core.count.call(null,c__27051__auto__);
var G__39643 = (0);
seq__39622 = G__39640;
chunk__39623 = G__39641;
count__39624 = G__39642;
i__39625 = G__39643;
continue;
} else {
var vec__39629 = cljs.core.first.call(null,seq__39622__$1);
var k = cljs.core.nth.call(null,vec__39629,(0),null);
var v = cljs.core.nth.call(null,vec__39629,(1),null);
f.call(null,v,k);

var G__39644 = cljs.core.next.call(null,seq__39622__$1);
var G__39645 = null;
var G__39646 = (0);
var G__39647 = (0);
seq__39622 = G__39644;
chunk__39623 = G__39645;
count__39624 = G__39646;
i__39625 = G__39647;
continue;
}
} else {
return null;
}
}
break;
}
});})(x39621,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x39621;
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
var args39648 = [];
var len__27315__auto___39654 = arguments.length;
var i__27316__auto___39655 = (0);
while(true){
if((i__27316__auto___39655 < len__27315__auto___39654)){
args39648.push((arguments[i__27316__auto___39655]));

var G__39656 = (i__27316__auto___39655 + (1));
i__27316__auto___39655 = G__39656;
continue;
} else {
}
break;
}

var G__39650 = args39648.length;
switch (G__39650) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39648.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit39651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit39651 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta39652){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta39652 = meta39652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit39651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39653,meta39652__$1){
var self__ = this;
var _39653__$1 = this;
return (new cognitect.transit.t_cognitect$transit39651(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta39652__$1));
});

cognitect.transit.t_cognitect$transit39651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39653){
var self__ = this;
var _39653__$1 = this;
return self__.meta39652;
});

cognitect.transit.t_cognitect$transit39651.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit39651.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit39651.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit39651.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit39651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta39652","meta39652",-781326622,null)], null);
});

cognitect.transit.t_cognitect$transit39651.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit39651.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit39651";

cognitect.transit.t_cognitect$transit39651.cljs$lang$ctorPrWriter = (function (this__26846__auto__,writer__26847__auto__,opt__26848__auto__){
return cljs.core._write.call(null,writer__26847__auto__,"cognitect.transit/t_cognitect$transit39651");
});

cognitect.transit.__GT_t_cognitect$transit39651 = (function cognitect$transit$__GT_t_cognitect$transit39651(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta39652){
return (new cognitect.transit.t_cognitect$transit39651(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta39652));
});

}

return (new cognitect.transit.t_cognitect$transit39651(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
