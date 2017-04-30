// Compiled by ClojureScript 1.9.229 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__32532_SHARP_){
return (max === p1__32532_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(var_args){
var args32533 = [];
var len__27315__auto___32539 = arguments.length;
var i__27316__auto___32540 = (0);
while(true){
if((i__27316__auto___32540 < len__27315__auto___32539)){
args32533.push((arguments[i__27316__auto___32540]));

var G__32541 = (i__27316__auto___32540 + (1));
i__27316__auto___32540 = G__32541;
continue;
} else {
}
break;
}

var G__32538 = args32533.length;
switch (G__32538) {
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27334__auto__ = (new cljs.core.IndexedSeq(args32533.slice((2)),(0),null));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27334__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.union.cljs$lang$applyTo = (function (seq32534){
var G__32535 = cljs.core.first.call(null,seq32534);
var seq32534__$1 = cljs.core.next.call(null,seq32534);
var G__32536 = cljs.core.first.call(null,seq32534__$1);
var seq32534__$2 = cljs.core.next.call(null,seq32534__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__32535,G__32536,seq32534__$2);
});

clojure.set.union.cljs$lang$maxFixedArity = (2);

/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(var_args){
var args32544 = [];
var len__27315__auto___32550 = arguments.length;
var i__27316__auto___32551 = (0);
while(true){
if((i__27316__auto___32551 < len__27315__auto___32550)){
args32544.push((arguments[i__27316__auto___32551]));

var G__32552 = (i__27316__auto___32551 + (1));
i__27316__auto___32551 = G__32552;
continue;
} else {
}
break;
}

var G__32549 = args32544.length;
switch (G__32549) {
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27334__auto__ = (new cljs.core.IndexedSeq(args32544.slice((2)),(0),null));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27334__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__32554 = s2;
var G__32555 = s1;
s1 = G__32554;
s2 = G__32555;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__32543_SHARP_){
return (- cljs.core.count.call(null,p1__32543_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure.set.intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.intersection.cljs$lang$applyTo = (function (seq32545){
var G__32546 = cljs.core.first.call(null,seq32545);
var seq32545__$1 = cljs.core.next.call(null,seq32545);
var G__32547 = cljs.core.first.call(null,seq32545__$1);
var seq32545__$2 = cljs.core.next.call(null,seq32545__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__32546,G__32547,seq32545__$2);
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);

/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(var_args){
var args32556 = [];
var len__27315__auto___32562 = arguments.length;
var i__27316__auto___32563 = (0);
while(true){
if((i__27316__auto___32563 < len__27315__auto___32562)){
args32556.push((arguments[i__27316__auto___32563]));

var G__32564 = (i__27316__auto___32563 + (1));
i__27316__auto___32563 = G__32564;
continue;
} else {
}
break;
}

var G__32561 = args32556.length;
switch (G__32561) {
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27334__auto__ = (new cljs.core.IndexedSeq(args32556.slice((2)),(0),null));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27334__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure.set.difference,s1,cljs.core.conj.call(null,sets,s2));
});

clojure.set.difference.cljs$lang$applyTo = (function (seq32557){
var G__32558 = cljs.core.first.call(null,seq32557);
var seq32557__$1 = cljs.core.next.call(null,seq32557);
var G__32559 = cljs.core.first.call(null,seq32557__$1);
var seq32557__$2 = cljs.core.next.call(null,seq32557__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__32558,G__32559,seq32557__$2);
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);

/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__32566_SHARP_){
return cljs.core.select_keys.call(null,p1__32566_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__32571){
var vec__32572 = p__32571;
var old = cljs.core.nth.call(null,vec__32572,(0),null);
var new$ = cljs.core.nth.call(null,vec__32572,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__32575_SHARP_){
return clojure.set.rename_keys.call(null,p1__32575_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 *   set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__32580){
var vec__32581 = p__32580;
var k = cljs.core.nth.call(null,vec__32581,(0),null);
var v = cljs.core.nth.call(null,vec__32581,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 *   join. When passed an additional keymap, joins on the corresponding
 *   keys.
 */
clojure.set.join = (function clojure$set$join(var_args){
var args32588 = [];
var len__27315__auto___32597 = arguments.length;
var i__27316__auto___32598 = (0);
while(true){
if((i__27316__auto___32598 < len__27315__auto___32597)){
args32588.push((arguments[i__27316__auto___32598]));

var G__32599 = (i__27316__auto___32598 + (1));
i__27316__auto___32598 = G__32599;
continue;
} else {
}
break;
}

var G__32590 = args32588.length;
switch (G__32590) {
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32588.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__32591 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__32591,(0),null);
var s = cljs.core.nth.call(null,vec__32591,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__32591,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__32591,r,s,idx){
return (function (p1__32584_SHARP_,p2__32585_SHARP_){
return cljs.core.conj.call(null,p1__32584_SHARP_,cljs.core.merge.call(null,p2__32585_SHARP_,x));
});})(found,ks,vec__32591,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__32591,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
var vec__32594 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__32594,(0),null);
var s = cljs.core.nth.call(null,vec__32594,(1),null);
var k = cljs.core.nth.call(null,vec__32594,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__32594,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__32594,r,s,k,idx){
return (function (p1__32586_SHARP_,p2__32587_SHARP_){
return cljs.core.conj.call(null,p1__32586_SHARP_,cljs.core.merge.call(null,p2__32587_SHARP_,x));
});})(found,vec__32594,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__32594,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;

/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__32601_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__32601_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__32602_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__32602_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map?rel=1493511396715