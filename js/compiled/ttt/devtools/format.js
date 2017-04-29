// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__26903__auto__ = (((value == null))?null:value);
var m__26904__auto__ = (devtools.format._header[goog.typeOf(x__26903__auto__)]);
if(!((m__26904__auto__ == null))){
return m__26904__auto__.call(null,value);
} else {
var m__26904__auto____$1 = (devtools.format._header["_"]);
if(!((m__26904__auto____$1 == null))){
return m__26904__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__26903__auto__ = (((value == null))?null:value);
var m__26904__auto__ = (devtools.format._has_body[goog.typeOf(x__26903__auto__)]);
if(!((m__26904__auto__ == null))){
return m__26904__auto__.call(null,value);
} else {
var m__26904__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__26904__auto____$1 == null))){
return m__26904__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__26903__auto__ = (((value == null))?null:value);
var m__26904__auto__ = (devtools.format._body[goog.typeOf(x__26903__auto__)]);
if(!((m__26904__auto__ == null))){
return m__26904__auto__.call(null,value);
} else {
var m__26904__auto____$1 = (devtools.format._body["_"]);
if(!((m__26904__auto____$1 == null))){
return m__26904__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__34378__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__34378__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__34378__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__34378__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__34377__auto__ = temp__4657__auto____$2;
return goog.object.get(o__34377__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__34378__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__34378__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__34378__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__34378__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__34377__auto__ = temp__4657__auto____$2;
return goog.object.get(o__34377__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__34378__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__34378__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__34378__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__34378__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__34377__auto__ = temp__4657__auto____$2;
return goog.object.get(o__34377__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__34378__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__34378__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__34378__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__34378__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__34377__auto__ = temp__4657__auto____$2;
return goog.object.get(o__34377__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__34378__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__34378__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__34378__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__34378__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__34377__auto__ = temp__4657__auto____$2;
return goog.object.get(o__34377__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__34378__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__34378__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__34378__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__34378__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__34377__auto__ = temp__4657__auto____$2;
return goog.object.get(o__34377__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__34378__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__34378__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__34378__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__34378__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__34377__auto__ = temp__4657__auto____$2;
return goog.object.get(o__34377__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__27322__auto__ = [];
var len__27315__auto___34399 = arguments.length;
var i__27316__auto___34400 = (0);
while(true){
if((i__27316__auto___34400 < len__27315__auto___34399)){
args__27322__auto__.push((arguments[i__27316__auto___34400]));

var G__34401 = (i__27316__auto___34400 + (1));
i__27316__auto___34400 = G__34401;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq34398){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34398));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27322__auto__ = [];
var len__27315__auto___34403 = arguments.length;
var i__27316__auto___34404 = (0);
while(true){
if((i__27316__auto___34404 < len__27315__auto___34403)){
args__27322__auto__.push((arguments[i__27316__auto___34404]));

var G__34405 = (i__27316__auto___34404 + (1));
i__27316__auto___34404 = G__34405;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq34402){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34402));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27322__auto__ = [];
var len__27315__auto___34407 = arguments.length;
var i__27316__auto___34408 = (0);
while(true){
if((i__27316__auto___34408 < len__27315__auto___34407)){
args__27322__auto__.push((arguments[i__27316__auto___34408]));

var G__34409 = (i__27316__auto___34408 + (1));
i__27316__auto___34408 = G__34409;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq34406){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34406));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27322__auto__ = [];
var len__27315__auto___34411 = arguments.length;
var i__27316__auto___34412 = (0);
while(true){
if((i__27316__auto___34412 < len__27315__auto___34411)){
args__27322__auto__.push((arguments[i__27316__auto___34412]));

var G__34413 = (i__27316__auto___34412 + (1));
i__27316__auto___34412 = G__34413;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq34410){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34410));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27322__auto__ = [];
var len__27315__auto___34415 = arguments.length;
var i__27316__auto___34416 = (0);
while(true){
if((i__27316__auto___34416 < len__27315__auto___34415)){
args__27322__auto__.push((arguments[i__27316__auto___34416]));

var G__34417 = (i__27316__auto___34416 + (1));
i__27316__auto___34416 = G__34417;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq34414){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34414));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27322__auto__ = [];
var len__27315__auto___34419 = arguments.length;
var i__27316__auto___34420 = (0);
while(true){
if((i__27316__auto___34420 < len__27315__auto___34419)){
args__27322__auto__.push((arguments[i__27316__auto___34420]));

var G__34421 = (i__27316__auto___34420 + (1));
i__27316__auto___34420 = G__34421;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq34418){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34418));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27322__auto__ = [];
var len__27315__auto___34423 = arguments.length;
var i__27316__auto___34424 = (0);
while(true){
if((i__27316__auto___34424 < len__27315__auto___34423)){
args__27322__auto__.push((arguments[i__27316__auto___34424]));

var G__34425 = (i__27316__auto___34424 + (1));
i__27316__auto___34424 = G__34425;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq34422){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34422));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27322__auto__ = [];
var len__27315__auto___34433 = arguments.length;
var i__27316__auto___34434 = (0);
while(true){
if((i__27316__auto___34434 < len__27315__auto___34433)){
args__27322__auto__.push((arguments[i__27316__auto___34434]));

var G__34435 = (i__27316__auto___34434 + (1));
i__27316__auto___34434 = G__34435;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((1) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27323__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__34429){
var vec__34430 = p__34429;
var state_override = cljs.core.nth.call(null,vec__34430,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__34430,state_override){
return (function (p1__34426_SHARP_){
return cljs.core.merge.call(null,p1__34426_SHARP_,state_override);
});})(vec__34430,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq34427){
var G__34428 = cljs.core.first.call(null,seq34427);
var seq34427__$1 = cljs.core.next.call(null,seq34427);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__34428,seq34427__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27322__auto__ = [];
var len__27315__auto___34437 = arguments.length;
var i__27316__auto___34438 = (0);
while(true){
if((i__27316__auto___34438 < len__27315__auto___34437)){
args__27322__auto__.push((arguments[i__27316__auto___34438]));

var G__34439 = (i__27316__auto___34438 + (1));
i__27316__auto___34438 = G__34439;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq34436){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34436));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27322__auto__ = [];
var len__27315__auto___34442 = arguments.length;
var i__27316__auto___34443 = (0);
while(true){
if((i__27316__auto___34443 < len__27315__auto___34442)){
args__27322__auto__.push((arguments[i__27316__auto___34443]));

var G__34444 = (i__27316__auto___34443 + (1));
i__27316__auto___34443 = G__34444;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((1) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27323__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq34440){
var G__34441 = cljs.core.first.call(null,seq34440);
var seq34440__$1 = cljs.core.next.call(null,seq34440);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__34441,seq34440__$1);
});


//# sourceMappingURL=format.js.map?rel=1493454996904