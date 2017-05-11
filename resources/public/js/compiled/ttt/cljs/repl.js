// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33499){
var map__33524 = p__33499;
var map__33524__$1 = ((((!((map__33524 == null)))?((((map__33524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33524):map__33524);
var m = map__33524__$1;
var n = cljs.core.get.call(null,map__33524__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33524__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33526_33548 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33527_33549 = null;
var count__33528_33550 = (0);
var i__33529_33551 = (0);
while(true){
if((i__33529_33551 < count__33528_33550)){
var f_33552 = cljs.core._nth.call(null,chunk__33527_33549,i__33529_33551);
cljs.core.println.call(null,"  ",f_33552);

var G__33553 = seq__33526_33548;
var G__33554 = chunk__33527_33549;
var G__33555 = count__33528_33550;
var G__33556 = (i__33529_33551 + (1));
seq__33526_33548 = G__33553;
chunk__33527_33549 = G__33554;
count__33528_33550 = G__33555;
i__33529_33551 = G__33556;
continue;
} else {
var temp__4657__auto___33557 = cljs.core.seq.call(null,seq__33526_33548);
if(temp__4657__auto___33557){
var seq__33526_33558__$1 = temp__4657__auto___33557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33526_33558__$1)){
var c__26901__auto___33559 = cljs.core.chunk_first.call(null,seq__33526_33558__$1);
var G__33560 = cljs.core.chunk_rest.call(null,seq__33526_33558__$1);
var G__33561 = c__26901__auto___33559;
var G__33562 = cljs.core.count.call(null,c__26901__auto___33559);
var G__33563 = (0);
seq__33526_33548 = G__33560;
chunk__33527_33549 = G__33561;
count__33528_33550 = G__33562;
i__33529_33551 = G__33563;
continue;
} else {
var f_33564 = cljs.core.first.call(null,seq__33526_33558__$1);
cljs.core.println.call(null,"  ",f_33564);

var G__33565 = cljs.core.next.call(null,seq__33526_33558__$1);
var G__33566 = null;
var G__33567 = (0);
var G__33568 = (0);
seq__33526_33548 = G__33565;
chunk__33527_33549 = G__33566;
count__33528_33550 = G__33567;
i__33529_33551 = G__33568;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33569 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26090__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26090__auto__)){
return or__26090__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33569);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33569)))?cljs.core.second.call(null,arglists_33569):arglists_33569));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33530_33570 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33531_33571 = null;
var count__33532_33572 = (0);
var i__33533_33573 = (0);
while(true){
if((i__33533_33573 < count__33532_33572)){
var vec__33534_33574 = cljs.core._nth.call(null,chunk__33531_33571,i__33533_33573);
var name_33575 = cljs.core.nth.call(null,vec__33534_33574,(0),null);
var map__33537_33576 = cljs.core.nth.call(null,vec__33534_33574,(1),null);
var map__33537_33577__$1 = ((((!((map__33537_33576 == null)))?((((map__33537_33576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33537_33576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33537_33576):map__33537_33576);
var doc_33578 = cljs.core.get.call(null,map__33537_33577__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33579 = cljs.core.get.call(null,map__33537_33577__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33575);

cljs.core.println.call(null," ",arglists_33579);

if(cljs.core.truth_(doc_33578)){
cljs.core.println.call(null," ",doc_33578);
} else {
}

var G__33580 = seq__33530_33570;
var G__33581 = chunk__33531_33571;
var G__33582 = count__33532_33572;
var G__33583 = (i__33533_33573 + (1));
seq__33530_33570 = G__33580;
chunk__33531_33571 = G__33581;
count__33532_33572 = G__33582;
i__33533_33573 = G__33583;
continue;
} else {
var temp__4657__auto___33584 = cljs.core.seq.call(null,seq__33530_33570);
if(temp__4657__auto___33584){
var seq__33530_33585__$1 = temp__4657__auto___33584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33530_33585__$1)){
var c__26901__auto___33586 = cljs.core.chunk_first.call(null,seq__33530_33585__$1);
var G__33587 = cljs.core.chunk_rest.call(null,seq__33530_33585__$1);
var G__33588 = c__26901__auto___33586;
var G__33589 = cljs.core.count.call(null,c__26901__auto___33586);
var G__33590 = (0);
seq__33530_33570 = G__33587;
chunk__33531_33571 = G__33588;
count__33532_33572 = G__33589;
i__33533_33573 = G__33590;
continue;
} else {
var vec__33539_33591 = cljs.core.first.call(null,seq__33530_33585__$1);
var name_33592 = cljs.core.nth.call(null,vec__33539_33591,(0),null);
var map__33542_33593 = cljs.core.nth.call(null,vec__33539_33591,(1),null);
var map__33542_33594__$1 = ((((!((map__33542_33593 == null)))?((((map__33542_33593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33542_33593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33542_33593):map__33542_33593);
var doc_33595 = cljs.core.get.call(null,map__33542_33594__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33596 = cljs.core.get.call(null,map__33542_33594__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33592);

cljs.core.println.call(null," ",arglists_33596);

if(cljs.core.truth_(doc_33595)){
cljs.core.println.call(null," ",doc_33595);
} else {
}

var G__33597 = cljs.core.next.call(null,seq__33530_33585__$1);
var G__33598 = null;
var G__33599 = (0);
var G__33600 = (0);
seq__33530_33570 = G__33597;
chunk__33531_33571 = G__33598;
count__33532_33572 = G__33599;
i__33533_33573 = G__33600;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__33544 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33545 = null;
var count__33546 = (0);
var i__33547 = (0);
while(true){
if((i__33547 < count__33546)){
var role = cljs.core._nth.call(null,chunk__33545,i__33547);
var temp__4657__auto___33601__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33601__$1)){
var spec_33602 = temp__4657__auto___33601__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33602));
} else {
}

var G__33603 = seq__33544;
var G__33604 = chunk__33545;
var G__33605 = count__33546;
var G__33606 = (i__33547 + (1));
seq__33544 = G__33603;
chunk__33545 = G__33604;
count__33546 = G__33605;
i__33547 = G__33606;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__33544);
if(temp__4657__auto____$1){
var seq__33544__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33544__$1)){
var c__26901__auto__ = cljs.core.chunk_first.call(null,seq__33544__$1);
var G__33607 = cljs.core.chunk_rest.call(null,seq__33544__$1);
var G__33608 = c__26901__auto__;
var G__33609 = cljs.core.count.call(null,c__26901__auto__);
var G__33610 = (0);
seq__33544 = G__33607;
chunk__33545 = G__33608;
count__33546 = G__33609;
i__33547 = G__33610;
continue;
} else {
var role = cljs.core.first.call(null,seq__33544__$1);
var temp__4657__auto___33611__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33611__$2)){
var spec_33612 = temp__4657__auto___33611__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33612));
} else {
}

var G__33613 = cljs.core.next.call(null,seq__33544__$1);
var G__33614 = null;
var G__33615 = (0);
var G__33616 = (0);
seq__33544 = G__33613;
chunk__33545 = G__33614;
count__33546 = G__33615;
i__33547 = G__33616;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1494497614626