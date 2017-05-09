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
var seq__13129_13133 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__13130_13134 = null;
var count__13131_13135 = (0);
var i__13132_13136 = (0);
while(true){
if((i__13132_13136 < count__13131_13135)){
var k_13137 = cljs.core._nth.call(null,chunk__13130_13134,i__13132_13136);
var v_13138 = (b[k_13137]);
(a[k_13137] = v_13138);

var G__13139 = seq__13129_13133;
var G__13140 = chunk__13130_13134;
var G__13141 = count__13131_13135;
var G__13142 = (i__13132_13136 + (1));
seq__13129_13133 = G__13139;
chunk__13130_13134 = G__13140;
count__13131_13135 = G__13141;
i__13132_13136 = G__13142;
continue;
} else {
var temp__4657__auto___13143 = cljs.core.seq.call(null,seq__13129_13133);
if(temp__4657__auto___13143){
var seq__13129_13144__$1 = temp__4657__auto___13143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13129_13144__$1)){
var c__7588__auto___13145 = cljs.core.chunk_first.call(null,seq__13129_13144__$1);
var G__13146 = cljs.core.chunk_rest.call(null,seq__13129_13144__$1);
var G__13147 = c__7588__auto___13145;
var G__13148 = cljs.core.count.call(null,c__7588__auto___13145);
var G__13149 = (0);
seq__13129_13133 = G__13146;
chunk__13130_13134 = G__13147;
count__13131_13135 = G__13148;
i__13132_13136 = G__13149;
continue;
} else {
var k_13150 = cljs.core.first.call(null,seq__13129_13144__$1);
var v_13151 = (b[k_13150]);
(a[k_13150] = v_13151);

var G__13152 = cljs.core.next.call(null,seq__13129_13144__$1);
var G__13153 = null;
var G__13154 = (0);
var G__13155 = (0);
seq__13129_13133 = G__13152;
chunk__13130_13134 = G__13153;
count__13131_13135 = G__13154;
i__13132_13136 = G__13155;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cognitect.transit/VectorBuilder");
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
var args13156 = [];
var len__7852__auto___13159 = arguments.length;
var i__7853__auto___13160 = (0);
while(true){
if((i__7853__auto___13160 < len__7852__auto___13159)){
args13156.push((arguments[i__7853__auto___13160]));

var G__13161 = (i__7853__auto___13160 + (1));
i__7853__auto___13160 = G__13161;
continue;
} else {
}
break;
}

var G__13158 = args13156.length;
switch (G__13158) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13156.length)].join('')));

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
var G__13163 = (i + (2));
var G__13164 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__13163;
ret = G__13164;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cognitect.transit/SymbolHandler");
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
var seq__13165_13169 = cljs.core.seq.call(null,v);
var chunk__13166_13170 = null;
var count__13167_13171 = (0);
var i__13168_13172 = (0);
while(true){
if((i__13168_13172 < count__13167_13171)){
var x_13173 = cljs.core._nth.call(null,chunk__13166_13170,i__13168_13172);
ret.push(x_13173);

var G__13174 = seq__13165_13169;
var G__13175 = chunk__13166_13170;
var G__13176 = count__13167_13171;
var G__13177 = (i__13168_13172 + (1));
seq__13165_13169 = G__13174;
chunk__13166_13170 = G__13175;
count__13167_13171 = G__13176;
i__13168_13172 = G__13177;
continue;
} else {
var temp__4657__auto___13178 = cljs.core.seq.call(null,seq__13165_13169);
if(temp__4657__auto___13178){
var seq__13165_13179__$1 = temp__4657__auto___13178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13165_13179__$1)){
var c__7588__auto___13180 = cljs.core.chunk_first.call(null,seq__13165_13179__$1);
var G__13181 = cljs.core.chunk_rest.call(null,seq__13165_13179__$1);
var G__13182 = c__7588__auto___13180;
var G__13183 = cljs.core.count.call(null,c__7588__auto___13180);
var G__13184 = (0);
seq__13165_13169 = G__13181;
chunk__13166_13170 = G__13182;
count__13167_13171 = G__13183;
i__13168_13172 = G__13184;
continue;
} else {
var x_13185 = cljs.core.first.call(null,seq__13165_13179__$1);
ret.push(x_13185);

var G__13186 = cljs.core.next.call(null,seq__13165_13179__$1);
var G__13187 = null;
var G__13188 = (0);
var G__13189 = (0);
seq__13165_13169 = G__13186;
chunk__13166_13170 = G__13187;
count__13167_13171 = G__13188;
i__13168_13172 = G__13189;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cognitect.transit/MapHandler");
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
var seq__13190_13194 = cljs.core.seq.call(null,v);
var chunk__13191_13195 = null;
var count__13192_13196 = (0);
var i__13193_13197 = (0);
while(true){
if((i__13193_13197 < count__13192_13196)){
var x_13198 = cljs.core._nth.call(null,chunk__13191_13195,i__13193_13197);
ret.push(x_13198);

var G__13199 = seq__13190_13194;
var G__13200 = chunk__13191_13195;
var G__13201 = count__13192_13196;
var G__13202 = (i__13193_13197 + (1));
seq__13190_13194 = G__13199;
chunk__13191_13195 = G__13200;
count__13192_13196 = G__13201;
i__13193_13197 = G__13202;
continue;
} else {
var temp__4657__auto___13203 = cljs.core.seq.call(null,seq__13190_13194);
if(temp__4657__auto___13203){
var seq__13190_13204__$1 = temp__4657__auto___13203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13190_13204__$1)){
var c__7588__auto___13205 = cljs.core.chunk_first.call(null,seq__13190_13204__$1);
var G__13206 = cljs.core.chunk_rest.call(null,seq__13190_13204__$1);
var G__13207 = c__7588__auto___13205;
var G__13208 = cljs.core.count.call(null,c__7588__auto___13205);
var G__13209 = (0);
seq__13190_13194 = G__13206;
chunk__13191_13195 = G__13207;
count__13192_13196 = G__13208;
i__13193_13197 = G__13209;
continue;
} else {
var x_13210 = cljs.core.first.call(null,seq__13190_13204__$1);
ret.push(x_13210);

var G__13211 = cljs.core.next.call(null,seq__13190_13204__$1);
var G__13212 = null;
var G__13213 = (0);
var G__13214 = (0);
seq__13190_13194 = G__13211;
chunk__13191_13195 = G__13212;
count__13192_13196 = G__13213;
i__13193_13197 = G__13214;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cognitect.transit/SetHandler");
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
var seq__13215_13219 = cljs.core.seq.call(null,v);
var chunk__13216_13220 = null;
var count__13217_13221 = (0);
var i__13218_13222 = (0);
while(true){
if((i__13218_13222 < count__13217_13221)){
var x_13223 = cljs.core._nth.call(null,chunk__13216_13220,i__13218_13222);
ret.push(x_13223);

var G__13224 = seq__13215_13219;
var G__13225 = chunk__13216_13220;
var G__13226 = count__13217_13221;
var G__13227 = (i__13218_13222 + (1));
seq__13215_13219 = G__13224;
chunk__13216_13220 = G__13225;
count__13217_13221 = G__13226;
i__13218_13222 = G__13227;
continue;
} else {
var temp__4657__auto___13228 = cljs.core.seq.call(null,seq__13215_13219);
if(temp__4657__auto___13228){
var seq__13215_13229__$1 = temp__4657__auto___13228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13215_13229__$1)){
var c__7588__auto___13230 = cljs.core.chunk_first.call(null,seq__13215_13229__$1);
var G__13231 = cljs.core.chunk_rest.call(null,seq__13215_13229__$1);
var G__13232 = c__7588__auto___13230;
var G__13233 = cljs.core.count.call(null,c__7588__auto___13230);
var G__13234 = (0);
seq__13215_13219 = G__13231;
chunk__13216_13220 = G__13232;
count__13217_13221 = G__13233;
i__13218_13222 = G__13234;
continue;
} else {
var x_13235 = cljs.core.first.call(null,seq__13215_13229__$1);
ret.push(x_13235);

var G__13236 = cljs.core.next.call(null,seq__13215_13229__$1);
var G__13237 = null;
var G__13238 = (0);
var G__13239 = (0);
seq__13215_13219 = G__13236;
chunk__13216_13220 = G__13237;
count__13217_13221 = G__13238;
i__13218_13222 = G__13239;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cognitect.transit/UUIDHandler");
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
var args13240 = [];
var len__7852__auto___13255 = arguments.length;
var i__7853__auto___13256 = (0);
while(true){
if((i__7853__auto___13256 < len__7852__auto___13255)){
args13240.push((arguments[i__7853__auto___13256]));

var G__13257 = (i__7853__auto___13256 + (1));
i__7853__auto___13256 = G__13257;
continue;
} else {
}
break;
}

var G__13242 = args13240.length;
switch (G__13242) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13240.length)].join('')));

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
var G__13243 = obj;
G__13243.push(kfn.call(null,k),vfn.call(null,v));

return G__13243;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x13244 = cljs.core.clone.call(null,handlers);
x13244.forEach = ((function (x13244,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__13245 = cljs.core.seq.call(null,coll);
var chunk__13246 = null;
var count__13247 = (0);
var i__13248 = (0);
while(true){
if((i__13248 < count__13247)){
var vec__13249 = cljs.core._nth.call(null,chunk__13246,i__13248);
var k = cljs.core.nth.call(null,vec__13249,(0),null);
var v = cljs.core.nth.call(null,vec__13249,(1),null);
f.call(null,v,k);

var G__13259 = seq__13245;
var G__13260 = chunk__13246;
var G__13261 = count__13247;
var G__13262 = (i__13248 + (1));
seq__13245 = G__13259;
chunk__13246 = G__13260;
count__13247 = G__13261;
i__13248 = G__13262;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13245);
if(temp__4657__auto__){
var seq__13245__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13245__$1)){
var c__7588__auto__ = cljs.core.chunk_first.call(null,seq__13245__$1);
var G__13263 = cljs.core.chunk_rest.call(null,seq__13245__$1);
var G__13264 = c__7588__auto__;
var G__13265 = cljs.core.count.call(null,c__7588__auto__);
var G__13266 = (0);
seq__13245 = G__13263;
chunk__13246 = G__13264;
count__13247 = G__13265;
i__13248 = G__13266;
continue;
} else {
var vec__13252 = cljs.core.first.call(null,seq__13245__$1);
var k = cljs.core.nth.call(null,vec__13252,(0),null);
var v = cljs.core.nth.call(null,vec__13252,(1),null);
f.call(null,v,k);

var G__13267 = cljs.core.next.call(null,seq__13245__$1);
var G__13268 = null;
var G__13269 = (0);
var G__13270 = (0);
seq__13245 = G__13267;
chunk__13246 = G__13268;
count__13247 = G__13269;
i__13248 = G__13270;
continue;
}
} else {
return null;
}
}
break;
}
});})(x13244,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x13244;
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
var args13271 = [];
var len__7852__auto___13277 = arguments.length;
var i__7853__auto___13278 = (0);
while(true){
if((i__7853__auto___13278 < len__7852__auto___13277)){
args13271.push((arguments[i__7853__auto___13278]));

var G__13279 = (i__7853__auto___13278 + (1));
i__7853__auto___13278 = G__13279;
continue;
} else {
}
break;
}

var G__13273 = args13271.length;
switch (G__13273) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13271.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit13274 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit13274 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta13275){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta13275 = meta13275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit13274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13276,meta13275__$1){
var self__ = this;
var _13276__$1 = this;
return (new cognitect.transit.t_cognitect$transit13274(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta13275__$1));
});

cognitect.transit.t_cognitect$transit13274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13276){
var self__ = this;
var _13276__$1 = this;
return self__.meta13275;
});

cognitect.transit.t_cognitect$transit13274.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit13274.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit13274.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit13274.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit13274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta13275","meta13275",901657426,null)], null);
});

cognitect.transit.t_cognitect$transit13274.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit13274.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit13274";

cognitect.transit.t_cognitect$transit13274.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cognitect.transit/t_cognitect$transit13274");
});

cognitect.transit.__GT_t_cognitect$transit13274 = (function cognitect$transit$__GT_t_cognitect$transit13274(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta13275){
return (new cognitect.transit.t_cognitect$transit13274(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta13275));
});

}

return (new cognitect.transit.t_cognitect$transit13274(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__6777__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6777__auto__)){
return or__6777__auto__;
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
