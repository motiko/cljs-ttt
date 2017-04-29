// Compiled by ClojureScript 1.9.229 {}
goog.provide('butler.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
butler.core.webworker_QMARK_ = (function butler$core$webworker_QMARK_(){
return (void 0 === self.document);
});
butler.core.not_webworker_QMARK_ = cljs.core.complement.call(null,butler.core.webworker_QMARK_);
butler.core.event_message = "message";
butler.core.deserialize = (function butler$core$deserialize(data){
var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read.call(null,r,data);
});
butler.core.serialize = (function butler$core$serialize(data){
var w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.write.call(null,w,data);
});
butler.core.map_key = (function butler$core$map_key(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__27020__auto__ = (function butler$core$map_key_$_iter__42703(s__42704){
return (new cljs.core.LazySeq(null,(function (){
var s__42704__$1 = s__42704;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42704__$1);
if(temp__4657__auto__){
var s__42704__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42704__$2)){
var c__27018__auto__ = cljs.core.chunk_first.call(null,s__42704__$2);
var size__27019__auto__ = cljs.core.count.call(null,c__27018__auto__);
var b__42706 = cljs.core.chunk_buffer.call(null,size__27019__auto__);
if((function (){var i__42705 = (0);
while(true){
if((i__42705 < size__27019__auto__)){
var vec__42713 = cljs.core._nth.call(null,c__27018__auto__,i__42705);
var k = cljs.core.nth.call(null,vec__42713,(0),null);
var v = cljs.core.nth.call(null,vec__42713,(1),null);
cljs.core.chunk_append.call(null,b__42706,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null));

var G__42719 = (i__42705 + (1));
i__42705 = G__42719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42706),butler$core$map_key_$_iter__42703.call(null,cljs.core.chunk_rest.call(null,s__42704__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42706),null);
}
} else {
var vec__42716 = cljs.core.first.call(null,s__42704__$2);
var k = cljs.core.nth.call(null,vec__42716,(0),null);
var v = cljs.core.nth.call(null,vec__42716,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null),butler$core$map_key_$_iter__42703.call(null,cljs.core.rest.call(null,s__42704__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27020__auto__.call(null,m);
})());
});
butler.core.message_handler = (function butler$core$message_handler(handlers,e){
var deserialized = butler.core.deserialize.call(null,(e.data["serialized"]));
var name = cljs.core.keyword.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(deserialized));
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(deserialized);
var transferables = butler.core.map_key.call(null,butler.core.deserialize,cljs.core.js__GT_clj.call(null,(e.data["transferables"])));
var copied = cljs.core.reduce.call(null,((function (deserialized,name,data,transferables){
return (function (p1__42720_SHARP_,p2__42721_SHARP_){
return cljs.core.assoc_in.call(null,p1__42720_SHARP_,cljs.core.first.call(null,p2__42721_SHARP_),cljs.core.second.call(null,p2__42721_SHARP_));
});})(deserialized,name,data,transferables))
,data,transferables);
var temp__4657__auto__ = cljs.core.get.call(null,handlers,name);
if(cljs.core.truth_(temp__4657__auto__)){
var handler = temp__4657__auto__;
return handler.call(null,copied);
} else {
return null;
}
});
butler.core.post_message_BANG_ = (function butler$core$post_message_BANG_(worker,name,copying_data,transferable_keys){
var without_transferables = cljs.core.reduce.call(null,(function (p1__42722_SHARP_,p2__42723_SHARP_){
return cljs.core.assoc_in.call(null,p1__42722_SHARP_,p2__42723_SHARP_,null);
}),copying_data,transferable_keys);
var transferables = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (without_transferables){
return (function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [butler.core.serialize.call(null,key),cljs.core.get_in.call(null,copying_data,key)], null);
});})(without_transferables))
,transferable_keys));
var serialized = butler.core.serialize.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"data","data",-232669377),without_transferables], null));
var copying = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["serialized",serialized,"transferables",transferables], null));
return worker.postMessage(copying,cljs.core.clj__GT_js.call(null,(function (){var or__26240__auto__ = cljs.core.vals.call(null,transferables);
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
});
butler.core.butler = (function butler$core$butler(script,handlers){
var w = (new Worker(script));
w.addEventListener(butler.core.event_message,cljs.core.partial.call(null,butler.core.message_handler,handlers));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"worker","worker",938239996),w], null);
});
butler.core.work_BANG_ = (function butler$core$work_BANG_(var_args){
var args42724 = [];
var len__27315__auto___42727 = arguments.length;
var i__27316__auto___42728 = (0);
while(true){
if((i__27316__auto___42728 < len__27315__auto___42727)){
args42724.push((arguments[i__27316__auto___42728]));

var G__42729 = (i__27316__auto___42728 + (1));
i__27316__auto___42728 = G__42729;
continue;
} else {
}
break;
}

var G__42726 = args42724.length;
switch (G__42726) {
case 4:
return butler.core.work_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return butler.core.work_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return butler.core.work_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42724.length)].join('')));

}
});

butler.core.work_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (b,name,copying_data,transferable_keys){
return butler.core.post_message_BANG_.call(null,new cljs.core.Keyword(null,"worker","worker",938239996).cljs$core$IFn$_invoke$arity$1(b),name,copying_data,transferable_keys);
});

butler.core.work_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (b,name,copying_data){
return butler.core.work_BANG_.call(null,b,name,copying_data,cljs.core.PersistentVector.EMPTY);
});

butler.core.work_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (b,name){
return butler.core.work_BANG_.call(null,b,name,null);
});

butler.core.work_BANG_.cljs$lang$maxFixedArity = 4;

butler.core.serve_BANG_ = (function butler$core$serve_BANG_(handlers){
return self.addEventListener(butler.core.event_message,cljs.core.partial.call(null,butler.core.message_handler,handlers));
});
butler.core.bring_BANG_ = (function butler$core$bring_BANG_(var_args){
var args42731 = [];
var len__27315__auto___42734 = arguments.length;
var i__27316__auto___42735 = (0);
while(true){
if((i__27316__auto___42735 < len__27315__auto___42734)){
args42731.push((arguments[i__27316__auto___42735]));

var G__42736 = (i__27316__auto___42735 + (1));
i__27316__auto___42735 = G__42736;
continue;
} else {
}
break;
}

var G__42733 = args42731.length;
switch (G__42733) {
case 3:
return butler.core.bring_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return butler.core.bring_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return butler.core.bring_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42731.length)].join('')));

}
});

butler.core.bring_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (name,copying_data,transferable_keys){
return butler.core.post_message_BANG_.call(null,self,name,copying_data,transferable_keys);
});

butler.core.bring_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (name,copying_data){
return butler.core.bring_BANG_.call(null,name,copying_data,cljs.core.PersistentVector.EMPTY);
});

butler.core.bring_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (name){
return butler.core.bring_BANG_.call(null,name,null);
});

butler.core.bring_BANG_.cljs$lang$maxFixedArity = 3;

